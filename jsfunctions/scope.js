//{} this is scope
// if(true){
//     let a=10
//     const b=20
//     var c=30
// }


// console.log(c)
// console.log(a)
// console.log(b)
//var is global scope which may cause error when importing as it might change the var varriable
// function one(){
//     const username= "hitesh"
//     function two(){
//         const website="youtube"
//         console.log(username);
//     }
//     console.log(website);
//     two()
// }
// one()
//in above example we can learn that the nested fucntions or loops the 
// parents class can't use the childrens cvarriables
//but the children can run it'
if (true){
    const fn="ram"
    if(fn==="ram"){
        const web ="youtube"
        console.log(web);
    }
    console.log(web);
}
console.log(username);