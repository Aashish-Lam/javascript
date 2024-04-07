const myNums= [1,2,3,4,5,6,7,8,9,20]
// myNums.forEach((item)=>{
//     if(item%2==0){
//         console.log(item)
//     }

// })
//for each can't return value
//numsfilter use garda return garcha value which can be stored in new matrix
//iftrue type ko
let nums =myNums.filter((num)=> num%2==0)
// console.log(nums)
//{}use gare arrow functions ma return lekhnu parcha

let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7,
      "price":600
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 6,
      "price":600
    },
    {
        "color": "green",
        "type": "station wagon 2",
        "registration": new Date('2018-04-03'),
        "capacity": 5,
        "price":600
      }
    // ... (more car objects)
  ];
  const result= cars.filter((need)=> need.capacity>5)
//   console.log(result)
  const result2= cars.filter((need)=>{return need.registration<'2018-01-01'})
//   console.log(result2)

//map fucntions
//The map() method in JavaScript is used to create a new array by applying a given function to each element of the original array.
let numbers=[2,3,4,5,7,8,1,2]
const newnumb= numbers.map((id)=>id*3)
// console.log(newnumb);
//chaining
const newnumb2= numbers.map((id)=>id*3).map((id2)=>id2*3)
// console.log(newnumb2); 
const newnumb3= numbers.map((id)=>id*3).filter((id2)=>id2%2===0)
// console.log(newnumb3); 
const reducedTotal= myNums.reduce((acc,cv)=> {
  
console.log(`acc: ${acc} and currval: ${cv}`);
    return  acc+cv
}    ,0)
console.log(reducedTotal);
const total=cars.reduce((acc,cv)=>{
    return acc+cv.price
},0)
console.log(total)