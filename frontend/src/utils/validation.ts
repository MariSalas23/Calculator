export function isValidNumber(
  value: string
): boolean {
  if (value.trim() === "") {
    return false;
  }

  const number = Number(value);

  return Number.isFinite(number);
}

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