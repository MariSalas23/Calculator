package utils

import (
	"encoding/json"
	"net/http"

	"calculator-backend/models"
)

// Send a JSON response
func JSONResponse(
	w http.ResponseWriter,
	statusCode int,
	data interface{},
) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)
	json.NewEncoder(w).Encode(data)
}

// Send a successful response
func SuccessResponse(
	w http.ResponseWriter,
	result float64,
) {
	JSONResponse(
		w,
		http.StatusOK,
		models.CalculatorResponse{
			Result: result,
		},
	)
}

// Send an error response
func ErrorResponse(
	w http.ResponseWriter,
	statusCode int,
	message string,
) {
	JSONResponse(
		w,
		statusCode,
		models.ErrorResponse{
			Error: message,
		},
	)
}