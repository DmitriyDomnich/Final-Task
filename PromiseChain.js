const squareNumWithDelay = (num) => {
  console.log(num);
  return new Promise((res, rej) => setTimeout(() => res(num ** 2), 1000));
};

Promise.resolve(42)
  .then(squareNumWithDelay)
  .then(squareNumWithDelay)
  .then(squareNumWithDelay)
  // .then((num) => {
  //   throw 'Err';
  // })
  .then(alert)
  .catch(alert);
