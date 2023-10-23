const arr = [
  { name: "test", price: 100 },
  { name: "test1", price: 100 },
  { name: "test", price: 200 },
  { name: "test", price: 600 },
];

const getArr = () => {
  const map = new Map();
  const newArr = [];

  arr.forEach((el) => {
    if (map.has(el.name)) {
      const result = map.get(el.name) + el.price;

      map.set(el.name, result);
    } else {
      map.set(el.name, el.price);
    }
  });

  arr.forEach((i) => {
    const obj = {};

    const check = newArr.find((el) => el.name === i.name);

    if (!check) {
      obj.name = i.name;
      obj.price = map.get(i.name);

      newArr.push(obj);
    }
  });

  return newArr;
};

console.log(getArr(arr));
