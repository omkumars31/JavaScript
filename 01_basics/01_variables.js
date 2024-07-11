const accountId = 14453
let accountEmail = "omkumar3105@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"

// accountId = 2  not allowed
accountEmail = "om31.com"
accountPassword = "310503"
accountCity = "Delhi"
console.log(accountId);

// Prefer not to use var because of issue in block scope and functional scope

console.table([accountId , accountEmail , accountPassword, accountCity])