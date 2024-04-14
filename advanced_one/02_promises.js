let p= new Promise((resolve, reject) => {
    let a= 1+3
    if (a==2){
        resolve("resolved")
    }
    else{
        reject("rejected")
    }
})
p.then((message)=>{
    console.log('This is a in then '+ message);
}).catch((message)=>{
    console.log('This is  in catch '+ message);
})
// callbackHell
const userLeft = false
const userWatchingCatMEme = false
function watch(cb, ecb){
    if(userLeft){
        ecb({
            name: 'UserLEft',
            message:':('
        })
    }
    else if (userWatchingCatMEme){ecb({
        name: 'userWatchingCatMEme',
        message: "Webdev"
    })
                                }
    else{
        cb('Tband subscribe')
    }

        
}
watch((message)=>{
    console.log('sucess'+ message)
}), (error)=>{
    console.log(error.name+''+error.message)
}
//promise example 2
const rv = new Promise((resolve,reject)=>{
    let message="Video 1 rejected "
    setTimeout(()=>{
        resolve(message)
    },5000)
    
})
const rv2 = new Promise((resolve,reject)=>{
    resolve('Video 2 rejected')
})
const rv3 = new Promise((resolve,reject)=>{
    resolve('Video 3 rejected')
})
Promise.all([
    rv,
    rv2,
    rv3
]).then((message)=>{
    console.log(message)
})
//waits for rv 1