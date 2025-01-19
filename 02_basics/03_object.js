//const tonderuser=new Object()
const tinderUser={}
tinderUser.id='123ab'
tinderUser.name="sammu"
tinderUser.isLoggedIn=false
console.log(tinderUser);


const regularUser={
    email:"rupalee123.com",
     fullname: {
        userfullname:{
            firstname:"rupalee",
            lastname:"kumari"

        }
    }
}
console.log(regularUser.email);
console.log(regularUser.fullname);//{ userfullname: { firstname: 'rupalee', lastname: 'kumari' } }

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3={obj1 , obj2}
// const obj3=Object.assign(obj1, obj2)//for combiniding the object
// const obj3=Object.assign({},obj1, obj2)
// const obj3={...obj1,...obj2}//this is very easy and useful to combined object and array
// console.log(obj3)
//users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));





