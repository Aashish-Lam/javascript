class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptPassword(){
        return`${this.password}abc`
    }
    changeUsername(){
        return`${this.username.toUpperCase()}`
    }
}
const chai = new User('ash',"ash@email.com","pass")
console.log(chai.encryptPassword())
console.log(chai.changeUsername())
//behidnthescene or without classes
function User2(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;

}
User2.prototype.encryptPassword= function (){
    return`${this.password}abc`
}
User2.prototype.changeUsername= function (){
    return`${this.username.toUpperCase()}`
}
const Sandy = new User2('sandy',"sandy@email.com","hero")
console.log(Sandy.encryptPassword())
console.log(Sandy.changeUsername())