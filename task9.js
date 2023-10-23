const arr1 = ([5, 7, 2, -1, 7, 8, 3, 6, 2, 9, 4, -7], [2, -1, 9]);
const removeDuplicates = (arr1, arrToRemove) => {
  for (let i = arr1.length - 1; i >= 0; i--) {
    for (let j = 0; j < arrToRemove.length; j++) {
      if (arr1[i] === arrToRemove[j]) {
        arr1.splice(i, 1);
      }
    }
  }
  return arr1;
};
console.log(
  removeDuplicates([5, 7, 2, -1, 7, 8, 3, 6, 2, 9, 4, -7], [2, -1, 9])
);
