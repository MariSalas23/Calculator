import { useState } from "react";
import { calculate } from "../../api/api";
import {
  formatResult,
  isValidNumber
} from "../../utils/validation";
import Display from "../Display/Display";
import Numbers from "../Numbers/Numbers";
import Operations from "../Operations/Operations";
import "./Calculator.css";

type Operation =
  | "add"
  | "subtract"
  | "multiply"
  | "divide"
  | "power"
  | "sqrt"
  | "percentage";

interface CalculatorProps {
  advancedMode: "sqrt" | "power";
  onAdvancedModeChange: (
    mode: "sqrt" | "power"
  ) => void;
}

function Calculator({
  advancedMode,
  onAdvancedModeChange
}: CalculatorProps) {
  const [display, setDisplay] = useState("0");
  const [expression, setExpression] = useState("");
  const [storedValue, setStoredValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<Operation | null>(null);
  const [error, setError] = useState("");

  const clear = () => {
    setDisplay("0");
    setExpression("");
    setStoredValue(null);
    setOperation(null);
    setError("");
  };

  const inputNumber = (value: string) => {
    setError("");

    if (value === "backspace") {
      setDisplay((current) =>
        current.length <= 1 ? "0" : current.slice(0, -1)
      );
      return;
    }

    if (value === ".") {
      setDisplay((current) =>
        current.includes(".") ? current : `${current}.`
      );
      return;
    }

    setDisplay((current) =>
      current === "0" ? value : `${current}${value}`
    );
  };

  const selectOperation = (nextOperation: Operation) => {
    if (!isValidNumber(display)) {
      setError("Invalid input");
      return;
    }

    const currentValue = Number(display);

    if (
      nextOperation === "sqrt" ||
      nextOperation === "percentage"
    ) {
      setStoredValue(currentValue);
      setOperation(nextOperation);
      setExpression(
        `${nextOperation === "sqrt" ? "√" : "%"}${formatResult(currentValue)}`
      );
      return;
    }

    setStoredValue(currentValue);
    setOperation(nextOperation);
    setExpression(
      `${formatResult(currentValue)} ${
        nextOperation === "add"
          ? "+"
          : nextOperation === "subtract"
            ? "−"
            : nextOperation === "multiply"
              ? "×"
              : "÷"
      }`
    );
    setDisplay("0");
  };

  const performCalculation = async () => {
    if (
      storedValue === null ||
      operation === null
    ) {
      return;
    }

    const secondValue = Number(display);

    try {
      const result = await calculate({
        operation,
        a: storedValue,
        b:
          operation === "sqrt" ||
          operation === "percentage"
            ? undefined
            : secondValue
      });

      setDisplay(formatResult(result));
      setStoredValue(null);
      setOperation(null);
      setError("");
    } catch (calculationError) {
      setError(
        calculationError instanceof Error
          ? calculationError.message
          : "Calculation failed"
      );
    }
  };

  const handleOperation = (
    value:
      | "add"
      | "subtract"
      | "multiply"
      | "divide"
      | "percentage"
      | "equals"
      | "clear"
      | "advanced"
  ) => {
    if (value === "clear") {
      clear();
      return;
    }

    if (value === "equals") {
      void performCalculation();
      return;
    }

    if (value === "advanced") {
      selectOperation(advancedMode);
      return;
    }

    selectOperation(value);
  };

  return (
  <section className="calculator" aria-label="Calculator">
    <Display
      expression={expression}
      value={display}
      error={error}
    />

    <div className="keypad">
      <Numbers onInput={inputNumber} />

      <Operations
        advancedMode={advancedMode}
        onAdvancedModeChange={onAdvancedModeChange}
        onOperation={handleOperation}
      />
    </div>
  </section>
);
}

export default Calculator;