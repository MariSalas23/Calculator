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
Frontend: http://localhost:3000
Backend: http://localhost:8080
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

Act as a full-stack software engineer specialized in React, TypeScript and Go. Your goal is to help me develop a full-stack calculator application for a Sezzle technical assessment. You must maintain a professional, clear, direct, and solution-oriented tone.

Here is the project requirements document that you must consult when responding:

<document>
Objective:
Build a full-stack calculator application with a React frontend and a backend microservice. The frontend should consume the backend API to perform basic and advanced arithmetic operations. Focus on clean design, maintainable code, and testable architecture.

Functional Operations:
- Addition
- Subtraction
- Multiplication
- Division
- Optional: Exponentiation, Square Root, Percentage

Frontend:
- React
- Intuitive UI for entering input and displaying results
- Input validation and error handling
- Responsive design with basic mobile support

Backend:
- REST API
- Validate input
- Handle edge cases such as division by zero and invalid data
- Return results in JSON format

Non-Functional:
- Clean, readable, idiomatic code
- Unit tests covering key functionality for both layers
- Documentation with setup instructions, API usage, and design rationale

Constraints:
- Frontend: React, TypeScript preferred
- Backend: Go preferred

Deliverables:
1. Git repository with frontend and backend code
2. README with setup instructions, API examples, and design decisions
3. Unit tests and coverage report
4. Optional Dockerfile for full-stack deployment

Additional instructions:
- AI tooling is allowed
- Prioritize correctness, clarity, and maintainability over extra features
- Document relevant AI prompts used during development
</document>

The calculator UI is an original design created specifically for this project in Figma. The application must follow a mobile-first approach. The implementation must follow the attached design images as the main visual reference, which show the original calculator design created in Figma. Use the attached images as the source for the overall layout, calculator proportions, button placement and shapes, spacing, colors and responsive behaviour.

![Mobile design](/images/figma1.png)
![Desktop design](/images/figma2.png)

Also, use the following project color variables exactly (these should be CSS variables and reused throughout the application):

--color-primary: #4256EB;

--color-black: #000000;

--color-purple: #A134EA;

--color-purple-light: #F6ECFF;

--color-blue-light: #E9ECFF;

--color-gray-light: #F4F4F4;

--color-white: #FFFFFF;

--color-gray-purple: #C9D0FF;

The frontend must be implemented using React, TypeScript, Vite and CSS. Use standard CSS with CSS variables and media queries. Also, use rem units for sizing, spacing, typography, padding, margins, gaps, and other scalable measurements whenever appropriate. It will follow a mobile-first approach and use CSS media queries to make the design responsive for desktop and tablet devices in portrait orientation.

Regarding the structure, use folders such as api, components, utils, and test. The components will be Calculator, Display, Numbers (number buttons), and Operations (operation buttons). The color variables will be defined in the styles folder. 

Follow these responsibilities:

* App.tsx: Render the Calculator component.
* Calculator.tsx: Manage calculator state and handle user interactions.
* Display.tsx: Display the current value.
* Numbers.tsx: Render numeric buttons.
* Operations.tsx: Render operation buttons, the clear functionality, the equals functionality and manage the advanced operation selection UI.
* api.ts: Handle communication with the backend REST API.
* validation.ts: Validate numeric input and format calculator results.

The advanced operations should use the following interaction:

- A visible √/^ button is always present
- Clicking it opens a small floating menu
- The menu contains √ and ^ options
- The options are displayed side by side
- Selecting √ activates square root
- Selecting ^ activates exponentiation
- The selected advanced operation should be visually indicated
- The menu closes after selecting an operation

The frontend must include unit tests for key functionality and it will communicate with the Go backend through:

POST /api/calculate

The request format is:

{
  "operation": "add",
  "a": 1,
  "b": 2
}

The API supports:

- add
- subtract
- multiply
- divide
- power
- sqrt
- percentage

The frontend must handle successful responses in the format:

{
  "result": 8
}

and error responses in the format:

{
  "error": "error message"
}

The backend must be implemented using Go and must expose a REST API for all calculator operations. Use a structure with separate folders like configuration, controllers, models, routes, services, tests, and utilities. The backend must expose the calculator through the POST /api/calculate endpoint. The controller must validate the incoming request, determine the requested operation, call the corresponding service function, and return the result as JSON. The service layer must implement addition, subtraction, multiplication, division, exponentiation, square root, and percentage operations. The backend must handle errors such as division by zero, square root of negative numbers, invalid operations, and invalid request data, returning appropriate HTTP status codes and JSON error messages.

The backend API must follow the request and response formats defined above and maintain a consistent contract with the React frontend. The frontend must communicate with the backend only through the API layer, while the backend must keep the calculation logic independent from the HTTP layer. Also, the backend must include unit tests covering the main calculator operations and relevant edge cases.

The application will be deployed using Docker. The frontend and backend must each have their own Dockerfile, and Docker Compose must be used to orchestrate both services.

The project must also include a professional and complete README.md. Use the following structure:

1. Features
   
2. Tech Stack

  2.1. Frontend
  
  2.2. Backend
  
  2.3. Infrastructure
  
  2.4. Project Structure

3. Prerequisites
   
4. Running Locally
   
  4.1. Running with Docker
  
  4.2. Backend
  
  4.3. Frontend

5. API
   
  5.1. POST /api/calculate
  
  5.2. Addition
  
  5.3. Subtraction
  
  5.4. Multiplication
  
  5.5. Division
  
  5.6. Power
  
  5.7. Square Root
  
  5.8. Percentage
  
  5.9. API Summary

6. Error Handling
   
7. Testing
   
8. Design Decisions
   
9. Assumptions
    
10. Prompts
