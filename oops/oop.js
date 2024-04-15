// const user={
//     username: "hitesh",
//     loginCount:8,
//     signedIn: true,
//     getUserDetails: function(){
//         console.log("Got user details from database")
//         console.log(`${this.username}`)
//     }
// }
// console.log(user.username)
// console.log(user.getUserDetails(this))
//this helps differentiate between local variables 
// and member variables within constructors, and clarifies which object a method call refers to when working with multiple methods inside a class
function User(username,loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
}
let user1= new User('hitesh', 12, true)
const user2= new User('ash',14,16)
console.log(user1)
console.log(user2)