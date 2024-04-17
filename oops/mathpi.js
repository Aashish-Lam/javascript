const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
// Math.PI=5
// console.log(Math.Pi);
console.log(descripter);
const drink={
    name:'comffe',
    price:250,
    drink: function(){
        console.log('cjai fat gaya')

}
}
Object.defineProperty(drink,'name',{
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(drink,'name'))
for(let[key,value] of Object.entries(drink)){
    if(typeof value!=='function'){
        console.log(`${key}: ${value}`);
    }

}
//Mth pi readable writeable or iteratable
//  hudaina afani bject pani testo banauna milcha
