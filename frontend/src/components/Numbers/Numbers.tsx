// Define the input handler prop
interface NumbersProps {
  onInput: (value: string) => void;
}

// Define the calculator number buttons
const numbers = [
  "7",
  "8",
  "9",
  "4",
  "5",
  "6",
  "1",
  "2",
  "3",
  ".",
  "0",
  "backspace"
];

// Render the number buttons
function Numbers({ onInput }: NumbersProps) {
  return (
    <>
      {numbers.map((number) => (
        <button
          key={number}
          type="button"
          className={`calculator-button number-button ${
            number === "backspace" ? "backspace-button" : ""
          }`}
          onClick={() => onInput(number)}
        >
          {number === "backspace" ? "⌫" : number}
        </button>
      ))}
    </>
  );
}

export default Numbers;