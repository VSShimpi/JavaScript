const accountId = "1234";
let accoundEmail = "vishal@test.com";
var accoundPassword = "123123";
accoundCity = "Nashik";
let accountState;

/*
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// accountId = "2222";
accoundEmail = "v@t.com";
accoundPassword = "3333";
accoundCity = "Mumbai";

console.log(accountId);

console.table([accountId, accoundEmail, accoundPassword, accoundCity, accountState]);