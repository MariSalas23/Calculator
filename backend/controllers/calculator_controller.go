package controllers

import (
	"encoding/json"
	"net/http"

	"calculator-backend/models"
	"calculator-backend/services"
	"calculator-backend/utils"
)

func Calculate(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		utils.ErrorResponse(
			w,
			http.StatusMethodNotAllowed,
			"method not allowed",
		)
		return
	}

	var request models.CalculatorRequest

	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		utils.ErrorResponse(
			w,
			http.StatusBadRequest,
			"invalid request body",
		)
		return
	}

	var (
		result float64
		calcErr error
	)

	switch request.Operation {
	case "add":
		result = services.Add(request.A, request.B)

	case "subtract":
		result = services.Subtract(request.A, request.B)

	case "multiply":
		result = services.Multiply(request.A, request.B)

	case "divide":
		result, calcErr = services.Divide(
			request.A,
			request.B,
		)

	case "power":
		result = services.Power(
			request.A,
			request.B,
		)

	case "sqrt":
		result, calcErr = services.SquareRoot(
			request.A,
		)

	case "percentage":
		result = services.Percentage(request.A)

	default:
		utils.ErrorResponse(
			w,
			http.StatusBadRequest,
			"invalid operation",
		)
		return
	}

	if calcErr != nil {
		utils.ErrorResponse(
			w,
			http.StatusBadRequest,
			calcErr.Error(),
		)
		return
	}

	utils.SuccessResponse(w, result)
}