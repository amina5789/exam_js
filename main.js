// 1 задача
let arry = ["hello", "world"];
function strings(arry) {
 return  num2 = arry.map(
    (str) => str.charAt(0).toUpperCase()+str.slice(1));
}
console.log(strings(arry))
// 2 задача
// ------------------------------------------------
const obj = {
    name: "John",
    age: 25,
    city: "New-yourk",
  };
function keyss(keyObject) {
  return Object.keys(keyObject);
}
console.log(keyss(obj));
// -----------------------------------------------------
// 3 задача
let nummber = [1, 2, 3];

function asyncOperation(arr) {
    return new Promise((resolve, reject) => {
      if (arr.some((item) => typeof item !== 'number')) {
        reject('Ошибка');
      }
      setTimeout(() => {
        const squares = arr.map((num) => num ** 2);
        resolve(squares);
      }, 2000);
    });
  }
  asyncOperation(nummber)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
