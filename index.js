/**
 * Function for up number in pow
 * @param {Number} a Accept input Number or string 'Number'
 * @param {Number} b Accept input Number or string 'Number'
 * @returns Result up number in pow
 */
function calcPow(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return false;
  }

  if (
    typeof a !== "number" &&
    typeof b !== "number" &&
    typeof a !== "string" &&
    typeof b !== "string"
  ) {
    return false;
  }

  return Math.pow(a, b);
}
const result_pow = calcPow("2", "3");
console.log(result_pow);







/**
 * Calc area circle
 * @param {Number} r Accept input Number or string 'Number'
 * @returns Number area circle
 */
function calcArea(r) {
  if (isNaN(r)) {
    return false;
  }

  if (typeof r !== "number" && typeof r !== "string") {
    return false;
  }

  return Math.PI * Math.pow(r, 2);
}

const area_circle = calcArea(3);
console.log(area_circle);









/**
 * Calc area triangle
 * @param {Number} a Accept input Number or string 'Number'
 * @param {Number} b Accept input Number or string 'Number'
 * @param {Number} c Accept input Number or string 'Number'
 * @returns Number area triangle
 */
function calcAreaTriangle(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return false;
  }

  if (
    typeof a !== "number" &&
    typeof b !== "number" &&
    typeof c !== "number" &&
    typeof a !== "string" &&
    typeof b !== "string" &&
    typeof c !== "string"
  ) {
    return false;
  }

  if (a > b + c || b > a + c || c > a + b) {
    return "Такого треугольника не существует";
  }

  const p = (Number(a) + Number(b) + Number(c)) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

const area_triangle = calcAreaTriangle(4, 5, 7);
console.log(area_triangle);
