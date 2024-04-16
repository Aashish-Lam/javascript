class User{
    constructor(username)
    {
        this.username = username
    }
    logme(){
        console.log( `${this.username}`)
    }
   static createId(){
        return `123`
    }
}
const ash = new User('ashish')
console.log(ash.createId());
class Teacher extends User{
    constructor(username,email, password){
     super(username)
     this.email= email
     this.password = password
    }

 }
const t1= new Teacher('ram','ram@email',`123`)
console.log(t1.createId());