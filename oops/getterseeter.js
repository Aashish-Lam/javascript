class User{
    constructor(email,password){
        this.email=email,
        this.password=password 
    }
    //new_password varriable banaye pachi overwrite bhayo mathi ko 
    //password ko lagi uselles jastai bhayo
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
        return `${this._password}realm`
    }
    set password(value){
        this._password=value.toUpperCase()
    }
}
const aashish = new User('ash@gmail.com', 'Abc123')
console.log(aashish.password)
console.log(aashish.email)
//get set ra constructor duita le value
//rakhna khojda error aaucha