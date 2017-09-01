// 1) Фабрика функций.
// Реализовать функцию, которая основываясь на единственном аргументе
// (который может бьть равен: ‘sum’, ‘mult’, ‘div’) возвращает одну из функций,
// каждая из которых принимает 2 числа и выполняет соответственно их сложение, умножение, или деление.



/**
 * Return math function
 *
 * @param {number} a
 * @param {number} b
 * @param {string} arg - name of the wanted fucn
 * @return {number}
 */
function doSmth(arg, a, b){
  if (typeof arg === 'string' && typeof(a) === 'number' && typeof(b) === 'number') {
      switch (arg) {
          case 'getSum':
              return getSum(a, b);
          case 'getMult':
              return getMult(a, b);
          case 'getDiv':
              return getDiv(a, b);
          default:
              console.log('arg is not a function');
              break;
    }
  }
}

/**
 * Return sum
 *
 * @param a {number}
 * @param b {number}
 * @return {number}
 */
function getSum(a, b) {
  if (typeof(a) === "number" && typeof(b) === "number"){
    return (a + b);
  }
  return('a or b is not a number');
}


/**
 * Return mult
 *
 * @param a {number}
 * @param b {number}
 * @return {number}
 */
function getMult(a, b) {
  if (typeof(a) === "number" && typeof(b) === "number") {
     return (a * b);
  }
  return('a or b is not a number');
}

/**
 * Return div
 *
 * @param a {number}
 * @param b {number}
 * @return {number}
 */
function getDiv(a, b) {
  if (typeof(a) === "number" && typeof(b) === "number") {
    return (a / b);
  }
  return('a or b is not a number');
}
