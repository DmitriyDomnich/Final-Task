export const randomHundred = () => {
  const nums = new Set();
  return () => {
    while (true) {
      const num = Math.round(Math.random() * (100 - 1) + 1);
      nums.add(num);
      if (nums.size === 100) {
        return [...nums];
      }
    }
  };
};
