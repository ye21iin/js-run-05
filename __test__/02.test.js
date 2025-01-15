import { describe, it, expect } from "@jest/globals";
import { closureOne } from "../problem/02.js";

describe("closureOne 테스트", () => {
  it("count 변수를 사용하는지 확인", () => {
    expect(closureOne.toString().includes("count")).toBe(true);
  });

  it("increment 함수를 호출할 때마다 값이 1씩 증가하는지 확인", () => {
    const inc = closureOne();
    expect(inc()).toBe(1);
    expect(inc()).toBe(2);
    expect(inc()).toBe(3);
  });
});
