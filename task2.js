const a = 31;

function number(a) {
  let result = false;
  for (let i = 0; a > i; i++) {
    if (i && i !== 1 && i !== a && !(a % i) && !result) {
      result = true;
    }
  }
  return result;
}
console.log(number(a));
