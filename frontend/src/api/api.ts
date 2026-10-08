// Define the backend API URL
const API_URL =
  import.meta.env.VITE_API_URL ??
  "http://localhost:8080/api";

// Define the supported operations
export type Operation =
  | "add"
  | "subtract"
  | "multiply"
  | "divide"
  | "power"
  | "sqrt"
  | "percentage";

// Define the calculation request
  export interface CalculationRequest {
  operation: Operation;
  a: number;
  b?: number;
}

// Define the calculation response
interface CalculationResponse {
  result: number;
}

// Define the error response
interface ErrorResponse {
  error?: string;
}

// Define the calculate function
export async function calculate(
  request: CalculationRequest
): Promise<number> {
  const response = await fetch(
    `${API_URL}/calculate`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(request)
    }
  );

  const data = (await response.json()) as
    | CalculationResponse
    | ErrorResponse;

  if (!response.ok) {
    throw new Error(
      "error" in data && data.error
        ? data.error
        : "Calculation failed"
    );
  }

  if (!("result" in data)) {
    throw new Error("Invalid server response");
  }

  return data.result;
}