let a= [22,4,5,6,7,11,55,3,33]
function compare(c,b){
    return c-b
}
console.log(a.sort(function compare(c,b){
    return c-b
}));
console.log(a)
// function sorted(c,b);=> c-b