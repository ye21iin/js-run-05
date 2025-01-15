import { describe, it, expect } from "@jest/globals";
import { Person, Employee } from "../problem/09.js";

describe("Person, Employee 클래스 테스트", () => {
  it("Person 인스턴스 생성 후 sayHello 테스트", () => {
    const alice = new Person("Alice");
    expect(alice.sayHello()).toBe("Hello, I'm Alice");
  });

  it("Employee 인스턴스 생성 후 sayHello 테스트", () => {
    const bob = new Employee("Bob", "Apple");
    expect(bob.sayHello()).toBe("Hello, I'm Bob, I work at Apple");
  });

  it("상속을 사용했는지 확인", () => {
    expect(Employee.toString().includes("extends Person")).toBe(true);
  });

  it("super 키워드를 사용했는지 확인", () => {
    expect(Employee.prototype.constructor.toString().includes("super")).toBe(
      true
    );
  });
});
