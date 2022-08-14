const getNextFibonacci = () => {
  const nums = [0, 1];
  return () => {
    const newNum = nums[0] + nums[1];
    console.log(newNum);
    nums[0] = nums[1];
    nums[1] = newNum;
  };
};

const but1 = document.getElementById('but1');
const but2 = document.getElementById('but2');

but1.addEventListener('click', getNextFibonacci());
but2.addEventListener('click', getNextFibonacci());
