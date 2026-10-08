import "./Display.css";

interface DisplayProps {
  expression: string;
  value: string;
  error?: string;
}

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