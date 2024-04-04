function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter a username")
        return
    }
    return `${username} logged in just`
}
// let result= loginUserMessage('ashish');
// console.log(result);
// console.log(loginUserMessage())
//rest operator 
function restop(val1, val2, ...num1){
    return num1
}
console.log(restop(222,444,300,500))
//object example
const user={
    username:"ganesh",
    prices:99
}
function objectexample(anyobject){
    console.log( `username is ${anyobject.username} price is ${anyobject.prices}`)
}
objectexample(user)