
//Closures
function MakeCounter(){
    let count=0;
    {
        return function(){
            count=count+1;
            console.log(count);
        };
    }
}
counter=MakeCounter();
console.log(counter)


function greatLater(name){
    return function(){
        console.log(`hello, ${name}!`);
    };
}
let greetCharchit =greatLater("Charchit");
greetCharchit();


//closures is the function which remembers the variable from where they are created even when they outer function finsishes.
function Outer(){
    let name="Rick Sanchez";

   return function(){
           console.log(`Hi my name is ${name}.`);
    };
}
let Morty=Outer();
console.log(Morty);// here we see when we call the outer function it returns inner function
Morty()// here it executes that inner function+outer enviornment hidden link(name) which called closures
