const arr = ([-4, 6, 7, 2, -5, 8], 3, null);
const notNullish = (el) => {
  return !(el === null || el === undefined);
};

const filterArr = (arr, min, max) => {
  const result = [];
  const isMinMax = notNullish(min) && notNullish(max);
  arr.forEach((el) => {
    if (isMinMax && el >= min && el <= max) {
      console.log("here");
      result.push(el);
    }
    if (!isMinMax && notNullish(min) && el >= min) result.push(el);
    if (!isMinMax && notNullish(max) && el <= max) result.push(el);
  });
  return result;
};
console.log(filterArr([-4, 6, 7, 2, -5, 8], 3, null));
