/**
 * [03.js]
 *
 * - closureWithParams 함수 내에 let base = 10이 존재합니다. -clr
 * - closureWithParams 함수는 calc(op, num)를 반환합니다. -clr
 *   1) op === '+'인 경우 base + num
 *   2) op === '-'인 경우 base - num
 *   3) 그 외에는 "invalid"를 반환합니다. - clr
 *   4) base는 오직 calc 내부에서만 접근 가능합니다. -clr
 *
 * @returns {Function} - calc(op, num)
 */

function closureWithParams(op, num) {
  
    function calc(op, num) {
    let base = 10;

    switch (op) {
      case "+":
        base += num;
        break;
      case "-":
        base -= num;
        break;
      default:
        return "invalid";
        break;
    }
    return base;
  }
  return calc; 
}

export { closureWithParams };
