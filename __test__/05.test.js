import fs from "fs";
import path from "path";
import { describe, it, expect } from "@jest/globals";
import { car, bound } from "../problem/05.js";

describe("car 테스트", () => {
  it("car.getBrand() 결과가 'Toyota'인지 확인", () => {
    expect(car.getBrand()).toBe("Toyota");
  });

  it("bound() 호출 시 'Toyota' 반환 여부 확인", () => {
    expect(bound()).toBe("Toyota");
  });

  it("bind 메서드를 사용했는지 확인", () => {
    const __dirname = path.resolve();
    console.log(__dirname);
    const fileContent = fs.readFileSync(
      path.resolve(__dirname, "./problem/05.js"),
      "utf-8"
    );
    expect(fileContent.includes(".bind(")).toBe(true);
  });
});
