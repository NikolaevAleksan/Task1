const num = 888;
const sumFunc = (num) => {
  const arr = num.toString();
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + Number(arr[i]);
  }
  if (sum <= 9) return sum;
  else return sumFunc(sum);
};
console.log(sumFunc(num));
