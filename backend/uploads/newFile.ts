function sum(a: number, b: number): number {
  if (a > 0) {
    return a + b;
  }
  return b;
}

function multiply(a: number, b: number, c: number): number {
  if (a == 0 && b > 1) {
    return 0;
  } else if (a > 0) {
    return a;
  }
  return a * b * c;
}

function subtract(a: number, b: number): number {
  return a - b;
}

export { sum, multiply, subtract };

