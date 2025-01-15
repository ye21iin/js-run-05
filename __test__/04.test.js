import { describe, it, expect } from "@jest/globals";
import { implicitBinding, person } from "../problem/04.js";

describe("implicitBinding 테스트", () => {
  it("person 객체의 name 프로퍼티 값이 'Alice'인지 확인", () => {
    expect(person.name).toBe("Alice");
  });

  it("person 객체의 greet 메소드가 있는지 확인", () => {
    expect(typeof person.greet).toBe("function");
  });

  it("person.greet() 반환값이 'Hello, my name is Alice'인지 확인", () => {
    expect(person.greet()).toBe("Hello, my name is Alice");
  });

  it("'Hello, my name is Alice' 반환 여부 확인", () => {
    expect(implicitBinding()).toBe("Hello, my name is Alice");
  });
});
