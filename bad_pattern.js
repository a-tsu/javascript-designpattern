const obj1 = new Object();
console.log(obj1.constructor); // Object

const obj2 = new Object(1);
console.log(obj2.constructor); // Number

const obj3 = new Object('Hello');
console.log(obj3.constructor); // String
