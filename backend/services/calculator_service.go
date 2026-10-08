package services

import (
	"errors"
	"math"
)

var ErrDivisionByZero = errors.New("division by zero is not allowed")
var ErrNegativeSquareRoot = errors.New("square root of a negative number is not allowed")

func Add(a, b float64) float64 {
	return a + b
}

func Subtract(a, b float64) float64 {
	return a - b
}

func Multiply(a, b float64) float64 {
	return a * b
}

func Divide(a, b float64) (float64, error) {
	if b == 0 {
		return 0, ErrDivisionByZero
	}

	return a / b, nil
}

func Power(base, exponent float64) float64 {
	return math.Pow(base, exponent)
}

func SquareRoot(value float64) (float64, error) {
	if value < 0 {
		return 0, ErrNegativeSquareRoot
	}

	return math.Sqrt(value), nil
}

func Percentage(value float64) float64 {
	return value / 100
}