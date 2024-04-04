//singleton
//objectliterals
const symb="we2we2"
const JsUser={
    name: "Hitesh",
    [symb]:"symbol1",
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    usloggedin:false,
    lastloginDays:["Mondays", "Saturdays"]
}
console.log(JsUser)
// console.log(JsUser["usloggedin"])
// console.log(JsUser["full"])
// console.log(JsUser[symb])
JsUser.email ="changed@email.com"
// Object.freeze(JsUser)
JsUser.email="2nd change"
// console.log(JsUser)
JsUser.greeting=function(){
    console.log("hellojs")
}
JsUser.greetingTWo =function(){
    console.log(`Hello ${this.location}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTWo())