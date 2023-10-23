const arr = ["test", "education", "part", "2", "exceed.team"];
const sortArrByStrLen = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i]?.length < arr[j]?.length) {
        const min = arr[i];
        arr[i] = arr[j];
        arr[j] = min;
      }
    }
  }
  return arr;
};
console.log(sortArrByStrLen(arr));
