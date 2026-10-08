import "./Operations.css";

interface OperationsProps {
  advancedMode: "sqrt" | "power";
  advancedOpen: boolean;
  onAdvancedModeChange: (
    mode: "sqrt" | "power"
  ) => void;
  onAdvancedToggle: () => void;
  onOperation: (
    operation:
      | "add"
      | "subtract"
      | "multiply"
      | "divide"
      | "percentage"
      | "equals"
      | "clear"
      | "advanced"
  ) => void;
}

function Operations({
  advancedMode,
  advancedOpen,
  onAdvancedModeChange,
  onAdvancedToggle,
  onOperation
}: OperationsProps) {
  const selectAdvancedMode = (
    mode: "sqrt" | "power"
  ) => {
    onAdvancedModeChange(mode);
  };

  return (
    <>
      <button
        type="button"
        className="calculator-button operation-button clear-button"
        onClick={() => onOperation("clear")}
      >
        C
      </button>

      <div className="advanced-button-wrapper">
        {advancedOpen && (
          <div
            className="advanced-popover"
            role="menu"
            aria-label="Advanced operations"
          >
            <button
              type="button"
              className={`advanced-option ${
                advancedMode === "sqrt" ? "selected" : ""
              }`}
              onClick={() => selectAdvancedMode("sqrt")}
              aria-label="Square root"
            >
              √
            </button>

            <button
              type="button"
              className={`advanced-option ${
                advancedMode === "power" ? "selected" : ""
              }`}
              onClick={() => selectAdvancedMode("power")}
              aria-label="Power"
            >
              ^
            </button>
          </div>
        )}

        <button
          type="button"
          className="calculator-button operation-button advanced-button"
          onClick={onAdvancedToggle}
          aria-label="Advanced operations"
          aria-expanded={advancedOpen}
        >
          √/^
        </button>
      </div>

      <button
        type="button"
        className="calculator-button operation-button percent-button"
        onClick={() => onOperation("percentage")}
      >
        %
      </button>

      <button
        type="button"
        className="calculator-button operation-button divide-button"
        onClick={() => onOperation("divide")}
      >
        ÷
      </button>

      <button
        type="button"
        className="calculator-button operation-button multiply-button"
        onClick={() => onOperation("multiply")}
      >
        ×
      </button>

      <button
        type="button"
        className="calculator-button operation-button subtract-button"
        onClick={() => onOperation("subtract")}
      >
        −
      </button>

      <button
        type="button"
        className="calculator-button operation-button add-button"
        onClick={() => onOperation("add")}
      >
        +
      </button>

      <button
        type="button"
        className="calculator-button operation-button equals-button"
        onClick={() => onOperation("equals")}
      >
        =
      </button>
    </>
  );
}

export default Operations;