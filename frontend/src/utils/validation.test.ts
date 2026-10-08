import { describe, expect, it } from "vitest";
import {
  formatResult,
  isValidNumber
} from "./validation";

// Test number validation
describe("isValidNumber", () => {
  it("returns true for a valid integer", () => {
    expect(isValidNumber("25")).toBe(true);
  });

  it("returns true for a valid decimal", () => {
    expect(isValidNumber("25.5")).toBe(true);
  });

  it("returns true for a negative number", () => {
    expect(isValidNumber("-10")).toBe(true);
  });

  it("returns false for an empty value", () => {
    expect(isValidNumber("")).toBe(false);
  });

  it("returns false for whitespace", () => {
    expect(isValidNumber("   ")).toBe(false);
  });

  it("returns false for non-numeric text", () => {
    expect(isValidNumber("hello")).toBe(false);
  });

  it("returns false for Infinity", () => {
    expect(isValidNumber("Infinity")).toBe(false);
  });
});

// Test result formatting
describe("formatResult", () => {
  it("formats an integer", () => {
    expect(formatResult(8)).toBe("8");
  });

  it("formats a decimal number", () => {
    expect(formatResult(8.5)).toBe("8.5");
  });

  it("rounds numbers to ten decimal places", () => {
    expect(formatResult(1.123456789123)).toBe(
      "1.1234567891"
    );
  });

  it("uses thousands separators", () => {
    expect(formatResult(1000000)).toBe("1,000,000");
  });

  it("returns Error for Infinity", () => {
    expect(formatResult(Infinity)).toBe("Error");
  });

  it("returns Error for NaN", () => {
    expect(formatResult(NaN)).toBe("Error");
  });
});