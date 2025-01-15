import { describe, it, expect, beforeAll } from "@jest/globals";

describe("scopeChainOne 테스트", () => {
  let global;
  let scopeChainOne;

  beforeAll(async () => {
    const module = await import("../problem/01.js");
    global = module.global;
    scopeChainOne = module.scopeChainOne;
  });

  it("전역 변수 global 값이 올바른지 확인", () => {
    expect(global).toBe("Global");
  });

  it("scopeChainOne 함수의 반환값 확인", () => {
    expect(scopeChainOne()).toBe("Global - Local");
  });
});
