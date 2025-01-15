import { describe, it, expect } from "@jest/globals";
import { closureWithParams } from "../problem/03.js";

describe("closureWithParams 테스트", () => {
  it("base 변수를 사용하는지 확인", () => {
    expect(closureWithParams.toString().includes("base")).toBe(true);
  });

  it("op가 '+'일 때 base + num 결과가 나오는지 확인", () => {
    const calc = closureWithParams();
    expect(calc("+", 5)).toBe(15);
  });

  it("op가 '-'일 때 base - num 결과가 나오는지 확인", () => {
    const calc = closureWithParams();
    expect(calc("-", 3)).toBe(7);
  });

  it("op가 '+'나 '-' 외의 값이면 'invalid' 반환", () => {
    const calc = closureWithParams();
    expect(calc("*", 10)).toBe("invalid");
  });
});
