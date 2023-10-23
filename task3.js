const arr = [1, 2, 3, 5, 6, 3, 5];

const uniqArray = (arr) => {
  const uniqArray = [];

  arr.forEach((el) => {
    const myarr = arr.filter((i) => el === i);
    if (myarr.length < 2) {
      uniqArray.push(el);
    }
  });
  return uniqArray;
};

console.log(">>>>", uniqArray(arr));
