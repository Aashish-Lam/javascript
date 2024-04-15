function multiply(num){
    return num*5
}
multiply.power=2
console.log(multiply(2));
console.log(multiply.power)
console.log(multiply.prototype)
//in js function is also an object
function createuser(username, score){
    this.username=username;
    this.score=score
}
createuser.prototype.increment= ()=>{
   this.score++ 
}
createuser.prototype.printname=()=>{
    console.log(`age${this.score} name:${this.username}`)
}
//new not write gare undefined bhancha

const ash= new createuser('ash',25)
const rojesh= new createuser('ash',22)
console.log(ash)
console.log(rojesh)