const sumButton = document.getElementById('sumButton');

sumButton.addEventListener('click', (_) => {
  alert(
    [...document.forms].reduce((resultSum, form) => {
      return (
        resultSum +
        [...form.elements].reduce((formSum, input) => formSum + +input.value, 0)
      );
    }, 0)
  );
});
