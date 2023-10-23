const arr = [[1, 2, 3], [4, 5], [6]];

const arraySum = (arr) => {
  let result = 0;
  arr.forEach((el) => {
    el.forEach((elem) => {
      result += elem;
    });
  });
  return result;
};
console.log(">>>>", arraySum(arr));
