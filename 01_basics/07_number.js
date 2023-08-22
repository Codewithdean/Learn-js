const score =400
console.log(score);              // 400

const balance = new Number(100)
console.log(balance);             //[Number:100]
 
console.log(balance.toString());  // 100
console.log(typeof balance);      // wrong answer  expected output -- string  come-- object
console.log(balance.toFixed(2));  // 100.00

const otherNumber= 23.234
console.log(otherNumber.toPrecision(2));    // 23

const oneNumber = 123.743
console.log(oneNumber.toPrecision(3));      // 124

const twoNumber = 1000000
console.log(twoNumber.toLocaleString());
console.log(twoNumber.toLocaleString('en-IN'));

 // pls read mdn docs to read and practice all method
