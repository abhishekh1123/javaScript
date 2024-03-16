// 1 First code
console.log("Abhi");

// 2 Variables 
const accountId = 90756;
let accountName = "Abhi";
var accountPrice = 122;
accountCity = "Delhi";

console.table([accountId, accountName, accountPrice, accountCity]);

// Prefer not to use var because of issue in block scope and functional scope

accountName = "Abhi11";
accountPrice = 12232;
accountCity = "Assam";
let account;

console.table([accountId, accountName, accountPrice, accountCity, account]);




