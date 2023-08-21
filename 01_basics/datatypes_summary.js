//  How many ways to store the data in memory and how many ways to access tha data through memory.this type of proces to catagrize in two parts. 
  // these type of catageritaion in devided by the two parts 1-- premitive datatype 2-- non-premitive datatype


  // Premitive datatype -- call by value

  // 7 types -- String , Number , Boolean ,, Null ( null means empty) , undefined , symbol ( to make the value of unique) , BigInt

  const score=100;
  const scoreValue=100.3
  const isloggedIn = false
  const outsideTemp = null
  let userEmail;
  const id=Symbol("1234")
  const anotherId= Symbol("1234")
  
  console.log(id == anotherId);

  const bigNumber = 134233254n;


  //2 Non Premitive datatype -- (Refrence)

      // type -- Array , Object , function

const heros = ["ironman" , "captionamercia" , "thor"]
let myObj={
  name:"Aman",
  age:22,
}

const myFunction = function(){
  console.log("hello world");
}

console.log(typeof outsideTemp);  // object
console.log(typeof myFunction);    // object function
console.log(typeof myObj);         // object
console.log(typeof userEmail);    // undefined
console.log(typeof anotherId);    // symbol
console.log(typeof heros);        // object
console.log(typeof isloggedIn);   // boolean
console.log(typeof scoreValue);   //number