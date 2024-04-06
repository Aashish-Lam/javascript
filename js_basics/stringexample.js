const String2= "This is an array.This problem shall be solved only by the best.Sentences are okay"
let you= String2.split(".")
console.log(you)
let b=0
for(let i=0; i<you.length;i++){
    let a= you[i].split(" ")
    console.log(a)
    let c= a.length
    if(c>b){
        b=c
    }
}
console.log(b)