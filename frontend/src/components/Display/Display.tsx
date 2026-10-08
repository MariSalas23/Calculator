import "./Display.css";

// Define the display component props
interface DisplayProps {
  expression: string;
  value: string;
  error?: string;
}

// Render the calculator display
export default function Display({
  expression,
  value,
  error
}: DisplayProps) {
  return (
    <section
      className="display"
      aria-live="polite"
      aria-label="Calculator display"
    >
      <div className="expression">
        {expression}
      </div>

      <div
        className={`result ${error ? "result-error" : ""}`}
      >
        {error || value}
      </div>
    </section>
  );
}