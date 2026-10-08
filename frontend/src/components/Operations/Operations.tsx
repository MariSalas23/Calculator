import "./Operations.css";

interface OperationsProps {
  advancedMode: "sqrt" | "power";
  onAdvancedModeChange: (
    mode: "sqrt" | "power"
  ) => void;
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
  onAdvancedModeChange,
  onOperation
}: OperationsProps) {
  const toggleAdvancedMode = () => {
    onAdvancedModeChange(
      advancedMode === "sqrt" ? "power" : "sqrt"
    );
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

      <button
        type="button"
        className="calculator-button operation-button advanced-button"
        onClick={toggleAdvancedMode}
      >
        {advancedMode === "sqrt" ? "√" : "^"}
      </button>

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