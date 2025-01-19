// function addtwonum(a,b){ //a,b parameter
//     console.log(a+b)

// }
// addtwonum(3,4)//3,4 argments

function loginUserMessage(username){//we can also pass default value as a username="sam" so if condition never execute
    if(username===undefined){
        console.log("plz enter a username")
        return
    }
   
   
    return `${username} justlogin`

}
console.log(loginUserMessage("rupalee"))



console.log("second part")

// function calculatornumber(num1){
//     return num1
// }
// console.log(calculatornumber(200,300,400,500))   output only 200 now in nex we use spread method triple dot ...

function calculatornumber(...num1){//spread method
    return num1
}
console.log(calculatornumber(200,300,400,500))

const user={
    username:"rupalee",
    age:23

}

const employee={
    username:"shive",
    age:"18"
}

//passing object under function

function handleObject(anyObject){
   console.log(`username is ${anyObject.username} and age is ${anyObject.age}`)
}
  handleObject(employee);
  handleObject(user);
//passing array

const mynewarray=[12,13,14,15]
const arr=[1,2,2,3,4]
function returnsecondvalue(getArray){
    return getArray[1]
}
console.log(returnsecondvalue(mynewarray))
console.log(returnsecondvalue(arr))