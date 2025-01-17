// 1 задача
function numm() {
  let num = ["hello", "world"];
  let num2 = num.map(
    (a) =>
      `${a.charAt(0).toUpperCase()}${a.charAt(1)}${a.charAt(2)}${a.charAt(
        3
      )}${a.charAt(4)}  `
  );
  console.log(num2);
}
numm();
// 2 задача
// ------------------------------------------------
function keyss() {
  const obj = {
    name: "John",
    age: 25,
    city: "New-yourk",
  };
  let key = Object.keys(obj);
  return key;
}
console.log(keyss());
// -----------------------------------------------------
// 3 задача

let nummber = [1, 2, 3];

function asyncOperation(nummber) {
  return new Promise((resolve, reject) => {
      let square = nummber.map((a) => a ** 2);
      console.log(square);
    
      if(nummber.forEach((a)=> {
        if(isNaN(a)) {
            console.log('ошибка')
        }
      })) 
        setTimeout(() => {
            if (square.includes('NaN')) {
                console.log('lol');
                
            }
            resolve(square);
          }, 2000);
    
    
   
  });
}

asyncOperation(nummber)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
