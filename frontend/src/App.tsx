import { useState } from "react";
import Calculator from "./components/Calculator/Calculator";
import "./App.css";

// Define the available advanced operation modes
export type AdvancedMode = "sqrt" | "power";

// Render the main application
export default function App() {
  const [advancedMode, setAdvancedMode] = useState<AdvancedMode>("sqrt");

  return (
    <main className="app-shell">
      <div className="app-content">
        <Calculator
          advancedMode={advancedMode}
          onAdvancedModeChange={setAdvancedMode}
        />
      </div>
    </main>
  );
}