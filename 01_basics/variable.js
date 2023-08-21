const accountId=12345
let  accountEmail="aman.shwe@gmail.com"
var accountPassword="12345567"
accountCity="Sulatanpur"   // this declarition way is not good but remember this way are use in another code
let accountState;

/* prefer not to use var
because of issue in block scope and functional scope


*/

//  accountId=34562   // because const vairable value doesn't change. then this accountId value are not changed
accountEmail="belware.12@gmail.com"
accountPassword="19992345"
accountCity="Ambedkarnagar"


console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);