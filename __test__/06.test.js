import { describe, it, expect } from "@jest/globals";
import { sum, callResult, applyResult } from "../problem/06.js";

import fs from "fs";
import path from "path";

describe("sum, callResult, applyResult 테스트", () => {
  let __dirname = path.resolve();
  let fileContent = fs.readFileSync(
    path.resolve(__dirname, "./problem/06.js"),
    "utf-8"
  );

  it("sum(1,2,3) 결과가 올바른지 확인", () => {
    expect(sum(1, 2, 3)).toBe(6);
  });

  it("callResult가 6인지 확인", () => {
    expect(callResult).toBe(6);
  });

  it("applyResult가 6인지 확인", () => {
    expect(applyResult).toBe(6);
  });

  it("call 메서드를 사용했는지 확인", () => {
    expect(fileContent.includes(".call(")).toBe(true);
  });

  it("apply 메서드를 사용했는지 확인", () => {
    expect(fileContent.includes(".apply(")).toBe(true);
  });
});
