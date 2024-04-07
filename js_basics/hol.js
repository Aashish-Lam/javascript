//for in  it returns key better for objects
//for of returns value better for arrays
//map is not iterable
const arr =['a','b','c'] 
for (const value of arr) {
    // console.log(value );
    
}
//strigns for of
const string="Hello Sir"
for (const value of string) {
    // console.log(value)
}
const map= new Map()
map.set('IN', "india")
map.set('USA', "America")
// console.log(map);

for (const key of map) {
    // console.log(key)
}
for (const [key,value] of map) {
    // console.log(key,':-', value)
}
const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
    // console.log(key, object[key]);
} 
const games={
    game1:'nfs',
    game2:'gta'
}
for (const key in games) {
    // console.log(`${key} :- ${value}`)
    if (Object.hasOwnProperty.call(games, key)) {
        const element = games[key];
        // console.log(key,element)
        
    }
}

for (const key in arr) {

    // if (Object.hasOwnProperty.call(arr, key)) {
    //     const element = arr[key];
    //     console.log(element)
    // }
}
