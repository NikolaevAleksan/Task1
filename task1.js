const arr = [1, 2, 3, 5, 6];

const arr2 = [5, 6, 7, 8, 9, 1];

const mergeArray = (arr1, arr2) => {
  const newArray = [...arr1];

  arr2.forEach((el) => {
    const element = arr1.find((i) => i == el);

    if (!element) {
      newArray.push(el);
    }
  });
  return newArray;
};

const mergeArr = mergeArray(arr, arr2);

console.log("mergeArr :>> ", mergeArr);
