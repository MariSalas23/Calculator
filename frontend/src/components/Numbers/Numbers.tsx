interface NumbersProps {
  onInput: (value: string) => void;
}

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