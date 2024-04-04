// const user={
//     username:"hitesh",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username}, welcome to website`);
//         // console.log(this);  
//     }
    
// }
// user.welcomeMessage()
// user.username="aashish"
// user.welcomeMessage()
// console.log(this);

// function pizza(){
//     let username="ritesh"
//     console.log(this)
// }
let pizza = () => {
    let username="ritesh"
    console.log(this)
}


//pizza();
//1 kind of arrow functions
let sum_two=(num1, num2)=>{
    return num1+num2
}
// console.log(sum_two(2,4));
//2 , arrow  functions implicit return means no need to give scope and write return statement
//also wecan give small braces() and no need to write return type
const sum_three =(num1,num2,num3)=> num1+num2+num3;
// console.log(sum_three(2,4,5));
const sum_four=(num1,num2,num3,num4)=> (num1+num2+num3+num4)
console.log(sum_four(2,4,5,6));
//but while returning the object braces are required
const object=()=> ({
    username:"aashish"
})
console.log(object().username)