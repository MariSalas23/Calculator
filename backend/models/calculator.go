package models

// Define the calculator request
type CalculatorRequest struct {
	Operation string  `json:"operation"`
	A         float64 `json:"a"`
	B         float64 `json:"b"`
}

// Define the calculator response
type CalculatorResponse struct {
	Result float64 `json:"result"`
}

// Define the error response
type ErrorResponse struct {
	Error string `json:"error"`
}