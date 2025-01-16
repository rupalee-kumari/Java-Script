 const accountId=14553
let accountEmail="rupalee@152"
var accountPassword="2345"
accountCity="kanpur"
let accountState;// it will gives value undefined

// accountId=2  //not allowed
console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail="rupam@123"
accountPassword="123455"
accountCity="Etawah"
console.table([accountId, accountEmail, accountPassword,accountCity,accountState])

