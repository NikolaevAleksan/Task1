const arr = [1, 2, 2, 3, 5, 6, 6, 3, 5];

const uniqArray = (arr) => {
  let result = 0;

  arr.forEach((el) => {
    const myarr = arr.filter((i) => el === i);
    if (myarr.length % 2 !== 0) {
      result = el;
    }
  });
  return result;
};

console.log(">>>>", uniqArray(arr));
