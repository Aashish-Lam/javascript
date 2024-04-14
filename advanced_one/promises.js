
// fullfiled
// Key Concepts:

// Promise Object: A Promise represents the eventual completion (or failure) of an asynchronous operation. It's initially in a pending state, transitioning to either fulfilled (successful) or rejected (failed) upon completion.
// States:
// Pending: The initial state, signifying that the operation is ongoing.
// Fulfilled: The operation completed successfully.
// Rejected: The operation encountered an error.
// Methods: Promises provide methods to handle these states and chain asynchronous operations:
// .then(onFulfilled, onRejected):
// onFulfilled: A function executed when the Promise is fulfilled, receiving the fulfilled value as an argument.
// onRejected: A function (optional) executed when the Promise is rejected, receiving the rejection reason (error object) as an argument.
// .catch(onRejected): A shorthand for .then(undefined, onRejected), specifically handling rejections. 
const PromiseOne= new Promise((resolve,reject)=>{
//do async
//Db calls 
setTimeout(function(){
    console.log('Asymc task is complete')
    // console.log(resolve)
    // console.log(reject)
    resolve()
},1000)
})
PromiseOne.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Async task 2")
        resolve()
},2000)
}).then(function(){
    console.log("promise 2 consumed")
})
// const promise3= new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve({username:"Chai",email:"cahi@examle"})
//     },3000)
// })
// promise3.then((user)=>{
// console.log(user.username)
// }

// )
const promise4 = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        let error= true
        if(!error){
            resolve({username:"ashe", email:"ache@email"})
        }
        else{
            reject("error: was something went wrong")
        }
    },4000)

    
})
promise4
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
})
const promisefive= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error= true
        if(!error){
            resolve({username:"ashe", email:"ache@email"})
        }
        else{
            reject("error: was something went wrong")
        }
    },4000)

})
async function consumepromiseFive(){
  const response = await promisefive
    console.log (response)
}
consumepromiseFive()
  
