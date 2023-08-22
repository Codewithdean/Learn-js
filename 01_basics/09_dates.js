let myDate= new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);   // object  interview question

let myCreatedDate = new Date (2023, 0, 24)
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

let myOtherDate = new Date(2023, 0, 24, 6, 24)
console.log(myOtherDate.toLocaleString());

let myOneDate = new Date('2023-09-17')
console.log(myOneDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));    // convert in second  interview

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getDate());


newDate.toLocaleString('default',{ 
    weekday:"long"

})

