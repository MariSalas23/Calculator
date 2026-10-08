const API_URL =
  import.meta.env.VITE_API_URL ??
  "http://localhost:8080/api";

export type Operation =
  | "add"
  | "subtract"
  | "multiply"
  | "divide"
  | "power"
  | "sqrt"
  | "percentage";

export interface CalculationRequest {
  operation: Operation;
  a: number;
  b?: number;
}

interface CalculationResponse {
  result: number;
}

interface ErrorResponse {
  error?: string;
}

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