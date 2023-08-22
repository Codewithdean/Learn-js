const name="Aman Verma"
const repoCount=40;

//console.log(name + repoCount + "value");   // this string declaration is old type

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);       //this is the best method
 
const gameName = new String("amanna")
console.log(gameName[0]);
console.log(gameName.__proto__);    // {} means empty
  
console.log(gameName.length);            // 6
console.log(gameName.toUpperCase());     // AMANNA
console.log(gameName.toLowerCase());    // amanna
console.log(gameName.charAt('2'));      // a      // charAt not supported negative value. 
console.log(gameName.indexOf('n'));     // 3
//console.log(gameName.bold());        //not understand

const newString= gameName.substring(0,5)    // amann
console.log(newString);

const anotherString= gameName.slice(-5,2)   // m
console.log(anotherString);

const newoneString = "   Aman  "
console.log(newoneString);          //   Aman  (get the answer with space)
console.log(newoneString.trim());   // Aman (no space find  because use in trim method)

const url="http://aman.com/aman%20verma"   // if inside the site use in spcae then automaticaly browser convert precent value
console.log(url.replace('%20', '-'));    // http://aman.com/aman-verma 

console.log(url.includes('aman'));      // true
console.log(url.includes('sahil'));     // false

// and the next menthod we can change string to array to  bases of dash

const newtwoString = String('Sahil- shambhu - love')
console.log(newtwoString.split('-'));                  // ['sahil', 'shambhu', 'love']


// please read to all type of string method using mdn doc and inspect to google site.

