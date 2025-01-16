"user strict";//treat all js code as newer version
//alert(3+3)// we are using node js, not browser
console.log(3+3);

let name="Rupalee"
let age=23
let islogin=true
//primitive data type
//number=2 to power 53
//bigint
//string=""
//boolean=true/false
//null=standalone value
//undefined=
//symbol=unique

//object

console.log(typeof age);
console.log(typeof undefined);//undefined
console.log(typeof null)//object
// run command node 01_basics/02_dataTypes.js



//primitive 
//7 types: String,Number, Boolean, null, undefined,Symbol,BigInt



//reference Type (Nonprimitive)
//Array, Objects, Functions

//Array
const Animal=["dog","cat", "elephant"];

//object
let myobj={ 
name:"rupalee",
age: 23,}

//function
const myfun=function(){
    console.log("Rupam")
}
//return type of this object ..function object


//memory
//stack(primitive) copy variable declare
//heap(Non-primitive) reference value

let myname="rupalee"
let yourname=myname
yourname="shiva"
console.log(myname);//rupalee
console.log(yourname);//shiva

let userone={
    email:"rupalee.com",
    upi:"1233ybl"
}
let userTwo=userone
userTwo.email="user.com"
console.log(userone) //user.com
console.log(userTwo);//user.com
