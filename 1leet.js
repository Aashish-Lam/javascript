let Arr=[3,4,6,7,9,22,24]
let n;
function findelement(n){
for (i=0;i<Arr.length;i++){
    if (n===Arr[i]){
        console.log("inside if")
        console.log(i);
    }
}
     for (i=0;i<Arr.length;i++){
      if (n<Arr[i]){
          console.log(i);
      } 
      else{
        console.log("greater than array so at lat")
      }

}
}
findelement(4)