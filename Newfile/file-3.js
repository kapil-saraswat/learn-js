const accountId = 122344
let accountEmail = "kapil@google.com"
var accountPassword = "12345"
accountCity ="Jaipur"
let accountState;

// accountId = 2 // not allowed 

// accountEmail ="hc@hc.com"
// accountPassword ="212112"
// accountCity ="Bengaluru"

// console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope 
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
