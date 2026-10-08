// Validate whether a value is a finite number
export function isValidNumber(
  value: string
): boolean {
  if (value.trim() === "") {
    return false;
  }

  const number = Number(value);

  return Number.isFinite(number);
}

// Format the calculation result for display
export function formatResult(
  value: number
): string {
  if (!Number.isFinite(value)) {
    return "Error";
  }

  const rounded = Number(
    value.toFixed(10)
  );

  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 10,
    useGrouping: true
  }).format(rounded);
}