console.log(Math);
console.log(Math.abs(-5));     // 4    this abs function only convert negative value to positive value not convert positive to negative
console.log(Math.round(4.6));  // 5
console.log(Math.ceil(3.1));   // 4    always provide top value
console.log(Math.floor(3.9));  // 3    always provide lower value
console.log(Math.PI);          // 3.1415
console.log(Math.sqrt(81));    // 9
console.log(Math.min(2, 3, 1, 6));   // 1

console.log(Math.random());  // always print value == 0 to 1 range
 
// if print 1 to 10 range

console.log(Math.floor(Math.random()*10)+1); // print  1 to 10

// Create Formula
  
const min=10
const max=20

console.log(Math.floor((Math.random()*(max-min)+1))+min)    // Use this formula to print in range value