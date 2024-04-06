// for(let i= 0;i <=10; i++){
//     const element = i;
//     console.log(element);
// }
// for(let j=0; j<=5; j++){
//     const element = j
//     if (element==5){
//         console.log(`${element} is best`)

//     }
//     console.log(element)
// }
for(i=0; i < 10;i++){
    console.log(`outer loop :${i}`);
    for(let j=0; j<=10; j++){
       // console.log(`inner lopp ${j} and inner loop ${i}`)
       console.log(i+'*'+j +'='+ i*j)
    }
}