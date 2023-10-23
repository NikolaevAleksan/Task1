const arr = [0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1];
const getObj = (arr) => {
  const obj = { 0: 0, 1: 0 };
  arr.forEach((el) => {
    if (el === 0) obj["0"] += 1;
    else obj["1"] += el;
  });
  return obj;
};
console.log(getObj(arr));
