class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}
class Teacher extends User{
   constructor(username,email, password){
    super(username)
    this.email= email
    this.password = password
   }
   addCourse(){
    console.log(`A new course was adde by ${this.username}`)
   }
}
const ash= new Teacher('ram','ram@email.com', '123')
ash.addCourse()
console.log( ash instanceof Teacher)
console.log( ash instanceof User)