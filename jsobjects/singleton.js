const tinderUSer= new Object()
tinderUSer.id="a23"
tinderUSer.name="bikash"
tinderUSer.loggedin=false
// console.log(tinderUSer)
const regular={
    email:"some@email.com",
    fn:{
        firstname:"rojesh",
        secondname:"bhattrai"
    }
}
// console.log(regular.fn?.firstname)
let object1={name:"rita", Num:123}
let object2={

    read:false,
    greed:true
}
// const oj3= Object.assign({},object1,object2)
const oj3={...object1,...object2}
// console.log(oj3);
const array=[{
    id:1,
    email:"we1@email.com"
},
{
    id:2,
    email:"we2@email.com"
},
{
    id:3,
    email:"we3@email.com"
},
]
let log=array[1].email;
// // console.log(log)
// console.log(tinderUSer.hasOwnProperty('loggedin'))
// console.log(Object.values((tinderUSer)));
const courses={
    price:999,
    name:'DSA',
    courseInstructor:"ashish"
}
const {courseInstructor:instructor}=courses
console.log(instructor);