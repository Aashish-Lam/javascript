let user=new Object();
let anotheruser ={};//object literal syntax
let user2 ={
    name:"john",//the properties has a key before the : and value after it
    age:30
}
//get property values of object:
console.log(user2.name);
user.isAdmin= true;//  add the object
console.log(user.isAdmin) 
//better not to use multiple words to give key names
//we have to give["like birds"] to acess this
//last property can end with trailing comma makes  it easier to 
//to add new objects
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"

// these properties are all right
let obj = {
    for: 1,
    let: 2,
    return: 3
  };
  
  alert( obj.for + obj.let + obj.return );  // 6
  