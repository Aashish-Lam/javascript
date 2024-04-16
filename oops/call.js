function Setusername(username){
    //complex DB class
    this.username= username
    console.log('called')
}
function createUser(username, email , password){
    Setusername.call(this,username)
    this.email=email
    this,password=password
}
const sandy = new createUser('sandy','email@email.com',"2")
console.log(sandy)