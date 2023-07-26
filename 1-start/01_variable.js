const accountId = 144533
let accountEmail = "akdev123@gmail.com"
var accountPassword = "12345"
accountCity = "Gujarat"

// accountId = 2
accountEmail = "hash#@gmail.com"
accountPassword = "1111"
accountCity = "Maharastra"
let accountState

console.log(accountId);

/* 
    prefer not to use var 
    because of issue in block scope and function scope
*/

console.table([accountEmail, accountId, accountPassword, accountCity]);
console.log(accountState);