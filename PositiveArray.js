export function squarePositiveValues(vals) {
  return vals.filter((val) => val > 0).map((val) => Math.sqrt(val));
}
