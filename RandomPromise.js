new Promise((res, rej) => {
  setTimeout(() => {
    Math.round(Math.random()) ? res('Resolve') : rej('Reject');
  }, 1000);
})
  .then(alert)
  .catch(alert);
