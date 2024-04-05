//= assignment operator
//== equal or not eqauls !=
// const isuserLofggedin= true
// if (3!=2){
//     console.log("executed")
// } 
// const SCORE = 200
// if(SCORE>20){
//     let power= "fly" 
//     console.log(`This is ${power}`)
// }
// console.log(`${power}`);
//implicit scope
// const valance =20000
// if (valance <500){
//     console.log("5")
// }
// else if(valance<1000){
//     console.log("10")
// }
// else{
//     console.log("200000")
// }
const useloggedin=true
const debitCard = true
const Email = true
const google= true
if(useloggedin && debitCard){
    console.log("allow to buy")
}
if(Email||google){
    console.log("welcom")
}