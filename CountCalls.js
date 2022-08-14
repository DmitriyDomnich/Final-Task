export function countCalls() {
  let count = 0;
  return function () {
    return ++count;
  };
}
