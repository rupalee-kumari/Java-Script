// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

//iife for immidiate run remove the global scope pollution 

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

//arrow function
( (name)=>{
    console.log(`DB two  CONNECTED ${name}`);
} ) ('rupalee')