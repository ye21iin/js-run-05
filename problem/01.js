/**
 * [01.js]
 *
 * 1) 전역 변수 global = "Global"을 선언하세요.
 * 2) scopeChainOne 함수 내 지역 변수 b = "Local"을 선언하세요.
 * 3) scopeChainOne 함수 안의 내부 함수 inner()에서 전역 변수 a와 지역 변수 b를 합쳐서 "Global - Local" 을 return하세요.
 * 4) 최종적으로 scopeChainOne 함수에서 inner() 호출 결과를 return하세요.
 *
 * @returns {string} - 예: "Global - Local"
 */

// TODO: 전역 변수 선언
const global = "Global";

function scopeChainOne() {
  const b = "Local";
  function inner() {
    return `${global} - ${b}`;
  }
  return inner();
}
// console.log(scopeChainOne());

export { global, scopeChainOne };
