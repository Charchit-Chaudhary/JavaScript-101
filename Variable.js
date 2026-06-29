// Variable is labled container which is used to store data values.
//to declare a variable, we use keyword var, let and const followed by the name of the variable and assign a value to it.
let name="Charchit";
{
let name="Bruce wayne";
console.log(name);

}
let a='5';
let b=5;
console.log(a==b)// true because it only checks the value and not the data type
let c='5';
let d=5;
console.log(c===d)// false because it checks both value and data type
// this is due to loose equality and strict equality in JavaScript. Loose equality (==) allows for type coercion, meaning it converts the operands to the same type before making the comparison. Strict equality (===) does not allow for type coercion and requires both the value and the type to be the same for the comparison to return true.

const pi=3.14;
console.log(pi);

