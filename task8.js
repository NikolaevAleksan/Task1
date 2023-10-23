const addQuery = (url, query) => {
  if (!query) return;
  //добавляем к сылке ?
  url + "?";
  Object.entries(query).forEach((el, i, arr) => {
    //если элемент посл
    const isAmpersand = i === arr.length - 1 ? "" : "&";
    const [key, value] = el;
    url = `${url}${key}=${value}${isAmpersand}`;
  });
  return url;
};
const url = "https://underscore.js";

const queryParams = { a: 4, b: 5, id: 124124 };

console.log(addQuery(url, queryParams));
