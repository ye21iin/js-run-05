import { describe, it, expect } from "@jest/globals";
import { MathHelper } from "../problem/08.js";

describe("MathHelper 테스트", () => {
  it("add 메서드 테스트", () => {
    expect(MathHelper.add(2, 3)).toBe(5);
  });

  it("subtract 메서드 테스트", () => {
    expect(MathHelper.subtract(5, 2)).toBe(3);
  });

  it("multiply 메서드 테스트", () => {
    expect(MathHelper.multiply(4, 3)).toBe(12);
  });

  it("divide 메서드 테스트", () => {
    expect(MathHelper.divide(10, 2)).toBe(5);
  });

  it("remainder 메서드 테스트", () => {
    expect(MathHelper.remainder(10, 3)).toBe(1);
  });
});
