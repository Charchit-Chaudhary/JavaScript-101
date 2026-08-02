
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




function spain(){
    let defeat="france"
    function fifa(){
        console.log(`Spain knocked out ${defeat}.`);

    }
    return fifa;
}
let final=spain();
 final();


 //Hoisting

console.log(num);
// console.log(age);
Hello();
// Hoisting is Js behaviour that hoist varaible and function declarations on top of their scope but we actually think js moves the varaible or function declarations up above but what js does before that we know that everytime js enters scope and it run two phases: 
// 1] Creation Phase: In this first phase before executing any line of code JS scans the file and allocates the memory space for variables and functions(Only decealrations not assignment)
// 2] Execution Phase: In this JS starts executing the code line by line from top to bottom.

var num=10;// In var, hoisting also works means that it can hoist var decelaration only, not assignment.

let age=22;// But in let/const we can see that it throws refrence error, because we cannot access age before initialization, this happens because unlike var let/const respect their scope and they cannot be initalized until their decleration line execute and they locked in TDZ.

function Hello(){
    console.log("Merci");// Here we can see that the function declaration is hoisted along with its body because, during the creation phase, JavaScript creates the function object and stores it in memory.
}