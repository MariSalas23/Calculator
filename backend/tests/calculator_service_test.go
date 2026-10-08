package tests

import (
	"errors"
	"testing"

	"calculator-backend/services"
)

// Test addition
func TestAdd(t *testing.T) {
	result := services.Add(5, 3)

	if result != 8 {
		t.Errorf("expected 8, got %v", result)
	}
}

// Test subtraction
func TestSubtract(t *testing.T) {
	result := services.Subtract(5, 3)

	if result != 2 {
		t.Errorf("expected 2, got %v", result)
	}
}

// Test multiplication
func TestMultiply(t *testing.T) {
	result := services.Multiply(5, 3)

	if result != 15 {
		t.Errorf("expected 15, got %v", result)
	}
}

// Test division
func TestDivide(t *testing.T) {
	result, err := services.Divide(10, 2)

	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if result != 5 {
		t.Errorf("expected 5, got %v", result)
	}
}

// Test division by zero
func TestDivideByZero(t *testing.T) {
	_, err := services.Divide(10, 0)

	if !errors.Is(err, services.ErrDivisionByZero) {
		t.Errorf(
			"expected division by zero error, got %v",
			err,
		)
	}
}

// Test power calculation
func TestPower(t *testing.T) {
	result := services.Power(2, 3)

	if result != 8 {
		t.Errorf("expected 8, got %v", result)
	}
}

// Test square root
func TestSquareRoot(t *testing.T) {
	result, err := services.SquareRoot(9)

	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if result != 3 {
		t.Errorf("expected 3, got %v", result)
	}
}

// Test negative square root
func TestSquareRootNegative(t *testing.T) {
	_, err := services.SquareRoot(-9)

	if !errors.Is(
		err,
		services.ErrNegativeSquareRoot,
	) {
		t.Errorf(
			"expected negative square root error, got %v",
			err,
		)
	}
}

// Test percentage calculation
func TestPercentage(t *testing.T) {
	result := services.Percentage(25)

	if result != 0.25 {
		t.Errorf("expected 0.25, got %v", result)
	}
}