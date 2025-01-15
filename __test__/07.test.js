import { describe, it, expect } from "@jest/globals";
import { Animal } from "../problem/07.js";

describe("Animal 클래스 테스트", () => {
  it("Animal 인스턴스 생성 시 name 프로퍼티 확인", () => {
    const leo = new Animal("Leo");
    expect(leo.name).toBe("Leo");
  });

  it("getName 메서드 반환값 확인", () => {
    const bmo = new Animal("BMO");
    expect(bmo.getName()).toBe("My name is BMO");
  });

  it("클래스 내에서 this.name 사용 여부 확인", () => {
    expect(Animal.prototype.getName.toString().includes("this.name")).toBe(
      true
    );
  });
});
