// async function random(){
//    let raw= await fetch('https://randomuser.me/api/')
//    let ans =await raw.json()
//    console.log(ans)
// }
// random()
async function myFunction() {
   return "Hello";
 }
 myFunction().then(
   function(value) {myDisplayer(value);},
   function(error) {myDisplayer(error);}
 );