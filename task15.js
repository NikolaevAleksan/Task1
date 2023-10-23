const arr = [
  { name: "test", age: 45, country: "RF", tel: "+79846466744" },
  { name: "test1", age: 23, country: "RF", tel: "+79464747484" },
  { name: "test2", age: 18, country: "RF", tel: "+376483876346" },
];
const filtrArr = (arr) => {
  const filteredArr = [];

  arr.forEach((value) => {
    if (value.age === 23) {
      filteredArr.push(value);
    }
  });
  return filteredArr;
};
console.log(filtrArr(arr));
