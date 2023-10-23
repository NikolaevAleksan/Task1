const arr = [6, 3, 8, 2, 6, 8, 2, 5, 7, 2, 6, 8, 6, 2, 6];
const getMostFrequentEl = (arr) => {
  let result;
  let max = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) ++count;
    }
    if (count > max) {
      max = count;
      result = arr[i];
    }
  }
  return result;
};
console.log(getMostFrequentEl(arr));
