const o = {
    a: 1,
    b: 2,
    // __proto__ sets the [[Prototype]]. It's specified here
    // as another object literal.
    __proto__: {
      b: 3,
      c: 4,
    },
  };
  
  // o.[[Prototype]] has properties b and c.
  // o.[[Prototype]].[[Prototype]] is Object.prototype (we will explain
  // what that means later).
  // Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null.
  // This is the end of the prototype chain, as null,
  // by definition, has no [[Prototype]].
  // Thus, the full prototype chain looks like:
  // { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> Object.prototype ---> null
  
  console.log(o.a); // 1
  // Is there an 'a' own property on o? Yes, and its value is 1.
  
  console.log(o.b); // 2
  // Is there a 'b' own property on o? Yes, and its value is 2.
  // The prototype also has a 'b' property, but it's not visited.
  // This is called Property Shadowing
  
  console.log(o.c); // 4
  // Is there a 'c' own property on o? No, check its prototype.
  // Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.
  
  console.log(o.d); // undefined
  // Is there a 'd' own property on o? No, check its prototype.
  // Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
  // o.[[Prototype]].[[Prototype]] is Object.prototype and
  // there is no 'd' property by default, check its prototype.
  // o.[[Prototype]].[[Prototype]].[[Prototype]] is null, stop searching,
  // no property found, return undefined.
  const o = {
    a: 1,
    b: 2,
    // __proto__ sets the [[Prototype]]. It's specified here
    // as another object literal.
    __proto__: {
      b: 3,
      c: 4,
      __proto__: {
        d: 5,
      },
    },
  };
  
  // { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> { d: 5 } ---> Object.prototype ---> null
  
  console.log(o.d); // 5
  