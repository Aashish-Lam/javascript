let myheros=['ash', 'spiderman']
let heroPower ={
    ash:"magic",
    spiderman: "sling",
    getSpiderpower: function(){
        console.log(`Spider power  is ${this.spiderman}`)
    }
}
Object.prototype.video = ()=>{
    console.log('video is present in all objects')
}
Array.prototype.video2 = ()=>{
    console.log('video2 is present in all arrays')
}
heroPower.video()
myheros.video2()
// heroPower.video2()
//class level prototype inheritance
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User
//
let anotherUser = "ash   ";
String.prototype.truelength= function(){
    console.log(`${this}`);
    console.log(`Truw lwgth is: ${this.trim().length}`)
}
anotherUser.truelength()
'ramesh'.truelength()