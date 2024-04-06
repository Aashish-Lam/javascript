// let myDate =new Date()
// console.log(myDate.toISOString());
// console.log(myDate.toString());
// console.log(myDate.getFullYear());
// console.log(myDate.getUTCHours())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.getTime())
// console.log(myDate.toLocaleString())
// let createdDate= new Date(2023,1,32)
// console.log(createdDate.toUTCString())
// let date2= new Date("02-25-2026")
// console.log(date2.getTime())
let newDate = new Date()
console.log(newDate.toLocaleString('default',{
    weekday: "short",
    era:"long"
}))