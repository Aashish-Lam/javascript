// let hero= "spiderman"
// let villain= "bat-man"
// console.log(`hero is ${hero} and villain is ${villain} `)
// let n= villain.length;
// console.log(`The length is  ${n}`);
// console.log(`The uppercase in villain is ${villain.toUpperCase()}`)
// console.log(`The 3rd char in villain is ${villain.charAt(0)}`)
// let new_String= hero.substring(0,6);
// console.log(new_String)
// const url ="kaggle.com.com.com"
// console.log(url.replace(".com","-"))
// console.log(url.includes("ash"))
let paragraph="This is a new paragraph.i am not happy"
const sentences= paragraph.split('.');
console.log(sentences);
let maxwordcount=0
sentences.forEach(sentence =>{
    const words =sentence.split(' ');
    console.log(words);
    let b=[]
    b.push(words.length)
    a= words.length;
    if(a> maxwordcount){
        maxwordcount=a;
    }
})
console.log(maxwordcount);
