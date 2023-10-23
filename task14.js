const arr2 =
  ([4, 8, 1, 9, -3, 7, 2, 8, 4, -6, 3, 8, 4, 6, 1, 9, -4], [3, 7, -6]);
const arr =
  ([4, 8, 1, 9, -3, 7, 2, 8, 4, -6, 3, 8, 4, 6, 1, 9, -4], [9, 7, -8]);
const isConsistInArr = (arr1, arr2) => {
  const duplicateArr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[i] === arr2[j]) {
        duplicateArr.push(arr1[i]);
      }
    }
  }
  return duplicateArr.toString() === arr2.toString();
};
console.log(isConsistInArr(arr, arr2));
