# Sezzle Calculator

A full-stack calculator application built with React, TypeScript, and Go. The frontend provides a responsive calculator interface and communicates with a Go REST API for calculation processing.

## 1. Features

- Addition
- Subtraction
- Multiplication
- Division
- Exponentiation
- Square root
- Percentage
- Input validation
- Error handling
- Responsive design
- REST API
- Frontend unit tests
- Backend unit tests
- Docker

## 2. Tech Stack

### 2.1. Frontend

- React
- TypeScript
- Vite
- Vitest
- React Testing Library
- CSS

### 2.2. Backend

- Go
- Standard Go HTTP library
- REST API

### 2.3. Infrastructure

- Docker
- Docker Compose
- Nginx

## 2.4. Project Structure

```text
Calculator/
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── utils/
│   │   ├── test/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── Dockerfile
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── cmd/
│   │   └── server/
│   │       └── main.go
│   ├── config/
│   │   └── config.go
│   ├── controllers/
│   │   └── calculator_controller.go
│   ├── models/
│   │   └── calculator.go
│   ├── routes/
│   │   └── routes.go
│   ├── services/
│   │   └── calculator_service.go
│   ├── tests/
│   │   └── calculator_service_test.go
│   ├── utils/
│   │   └── response.go
│   ├── Dockerfile
│   ├── .dockerignore
│   └── go.mod
│
└── docker-compose.yml
```

## 3. Prerequisites

- Node.js
- npm
- Go 1.27 or later
- Docker Desktop (optional)

## 4. Running Locally

## 4.1. Running with Docker

Docker Compose runs the frontend and backend together.

From the project root:

```bash
docker compose up --build
```

The application will be available at:

```text
http://localhost:3000
```

To stop the containers:

```bash
docker compose down
```

### 4.2. Backend

Navigate to the backend directory:

```bash
cd backend
go run ./cmd/server
```

The API will be available at:

```text
http://localhost:8080
```

### 4.3. Frontend

Open a second terminal and navigate to the frontend directory:

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

## 5. API

### 5.1. POST /api/calculate

The calculator API accepts an operation and one or two numeric values depending on the operation.

### 5.2. Addition

```json
{
  "operation": "add",
  "a": 5,
  "b": 3
}
```

Response:

```json
{
  "result": 8
}
```

### 5.3. Subtraction

```json
{
  "operation": "subtract",
  "a": 10,
  "b": 4
}
```

Response:

```json
{
  "result": 6
}
```

### 5.4. Multiplication

```json
{
  "operation": "multiply",
  "a": 6,
  "b": 7
}
```

Response:

```json
{
  "result": 42
}
```

### 5.5. Division

```json
{
  "operation": "divide",
  "a": 20,
  "b": 4
}
```

Response:

```json
{
  "result": 5
}
```

### 5.6. Power

```json
{
  "operation": "power",
  "a": 2,
  "b": 3
}
```

Response:

```json
{
  "result": 8
}
```

### 5.7. Square Root

Square root only requires the `a` value.

```json
{
  "operation": "sqrt",
  "a": 9
}
```

Response:

```json
{
  "result": 3
}
```

### 5.8. Percentage

```json
{
  "operation": "percentage",
  "a": 25
}
```

Response:

```json
{
  "result": 0.25
}
```

### 5.9. API Summary

| Operation | Example |
|---|---|
| Addition | `5 + 3 = 8` |
| Subtraction | `10 - 4 = 6` |
| Multiplication | `6 × 7 = 42` |
| Division | `20 ÷ 4 = 5` |
| Power | `2 ^ 3 = 8` |
| Square Root | `√9 = 3` |
| Percentage | `25% = 0.25` |

## 6. Error Handling

The API returns an error response when an operation cannot be completed.

### 6.1. Division by Zero

Request:

```json
{
  "operation": "divide",
  "a": 10,
  "b": 0
}
```

Response:

```json
{
  "error": "Cannot divide by zero"
}
```

### 6.2. Negative Square Root

Request:

```json
{
  "operation": "sqrt",
  "a": -9
}
```

Response:

```json
{
  "error": "Cannot calculate square root of a negative number"
}
```

### 6.3. Invalid Operation

Request:

```json
{
  "operation": "invalid",
  "a": 5,
  "b": 2
}
```

Response:

```json
{
  "error": "invalid operation"
}
```

## 7. Testing

The project includes unit tests for both the frontend and backend.

### 7.1. Frontend

From the `frontend` directory:

```bash
npm run test:run
```

Tests cover:

- Number validation
- Decimal values
- Negative numbers
- Empty input
- Invalid input
- Infinity
- Result formatting
- Decimal rounding
- Thousands separators
- Invalid numerical results

To run tests in watch mode:

```bash
npm test
```

### 7.2. Backend

From the `backend` directory:

```bash
go test ./...
```

Tests cover:

- Addition
- Subtraction
- Multiplication
- Division
- Division by zero
- Exponentiation
- Square root
- Negative square root
- Percentage

### 7.3. Coverage

Backend coverage:

```bash
go test ./... -cover
```

Frontend coverage:

```bash
npm run test:run -- --coverage
```

## 8. Design Decisions

### 8.1. Separation of Responsibilities

The frontend is responsible for:

- User interaction
- Input handling
- Input validation
- Result formatting
- API communication

The backend is responsible for:

- Calculation logic
- Operation validation
- Error handling
- JSON responses

### 8.2. Backend Architecture

The backend separates HTTP handling from calculation logic:

```text
HTTP Request
     ↓
Controller
     ↓
Service
     ↓
Calculation
     ↓
JSON Response
```

This structure keeps the calculation logic independent and makes it easier to test.

### 8.3. REST API

A single endpoint is used for calculator operations:

```text
POST /api/calculate
```

The requested operation is provided in the JSON request body. This keeps the API simple while supporting multiple operations.

### 8.4. Error Handling

Invalid calculations are handled explicitly.

The API returns errors for cases such as:

- Division by zero
- Square root of a negative number
- Invalid operations
- Invalid request bodies

### 8.5. Responsive Design

The frontend follows a mobile-first approach and adapts to different screen sizes.

The calculator supports:

- Mobile
- Tablet
- Desktop

### 8.6. Docker

Docker Compose is included to run the frontend and backend together.

The frontend is served using Nginx and the backend runs as a separate Go container.

## 9. Assumptions

- Percentage converts a value to its decimal representation by dividing it by 100
- Square root is a unary operation
- Power requires a base and an exponent
- Division by zero is considered an invalid calculation
- Square roots of negative numbers are rejected
- The backend is responsible for performing the calculations
- The frontend communicates with the backend through the REST API

## 10. Prompts

...