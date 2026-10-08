package services

import (
	"errors"
	"math"
)

// Define errors for invalid operations
var ErrDivisionByZero = errors.New("Cannot divide by zero")
var ErrNegativeSquareRoot = errors.New("Cannot calculate square root of a negative number")

// Add two numbers
func Add(a, b float64) float64 {
	return a + b
}

// Subtract two numbers
func Subtract(a, b float64) float64 {
	return a - b
}

// Multiply two numbers
func Multiply(a, b float64) float64 {
	return a * b
}

// Divide two numbers
func Divide(a, b float64) (float64, error) {
	if b == 0 {
		return 0, ErrDivisionByZero
	}

	return a / b, nil
}

// Calculate a power
func Power(base, exponent float64) float64 {
	return math.Pow(base, exponent)
}

// Calculate a square root
func SquareRoot(value float64) (float64, error) {
	if value < 0 {
		return 0, ErrNegativeSquareRoot
	}

	return math.Sqrt(value), nil
}

// Convert a value to a percentage
func Percentage(value float64) float64 {
	return value / 100
}