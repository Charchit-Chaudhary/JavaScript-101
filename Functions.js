// function makeTea(){
//     console.log("boil water");
//     console.log("add tea bag")
//     console.log("add sugar")
//     console.log("serve")
// }

// //Make Tea anytime
// makeTea();
makeTea();
makeTea();
// Parameters
function Hello(name){// name is the paramter, a placeholder waiting for real data 
 console.log(`Hello ${name}`)
}
Hello('charchit');//charchit is the arguement-the real data you pass in.
Hello('shoyo hinata');
Hello('Grimjow Jaqquerjack')

// Calculator using Function
function calculate(num1,num2,operator){
switch(operator){
    case "+":
    return(`Sum:${num1+num2}`);
    
    case "-":
    return(`Diffrence:${num1-num2}`);
    
    case "*":
    return(`Product:${num1*num2}`);
    
    case "/":
    return num1/num2;
    
    default:return "invalid operator";
}
}
console.log(calculate(10,5, "+"));
console.log(calculate(5,2,"-"));
console.log(calculate(5,5,"*"));
console.log(Math.floor(calculate(5,2,"/")));

// Grade Calculator Using Functions

function getGrade(mark){
    if(mark>=90){
        return "A+";
    }
    else if(mark>=80){
        return "A";
    }
    else if(mark>=70){
        return "B+"
    }
    else if(mark>=60){
        return "B";
    }
    else if(mark>=50){
        return "C"
    }
    
    else{
        return "Fail"
    }
}
let sub1=90;
console.log(`subject 1:${sub1}-> ${getGrade(sub1)}`)
let sub2=80;
console.log(`subject 2:${sub2}-> ${getGrade(sub2)}`)
let sub3=70;
console.log(`subject 3:${sub3}-> ${getGrade(sub3)}`)
let sub4=60;
console.log(`subject 4:${sub4}-> ${getGrade(sub4)}`)
let sub5=50;
console.log(`subject 5:${sub5}-> ${getGrade(sub5)}`)

let total=sub1+sub2+sub3+sub4+sub5;
let average=Math.round(total/5);
console.log(`Total:${total}/500`);
console.log(`Average:${average}`);
console.log(`Final Grade:${getGrade(average)}`);
console.log(average>=50 ? "Passed" : "Failed");

const greet =(Name="stranger")=>{
    return `Hello ${Name}!`;
}
console.log(greet());//Functions don't change after creation->const

//
function checkage(age){
    if(age<18) 
        return "kid";
    console.log("adult checked passed");
    return "adult";
}
let ageis=checkage(20);
console.log(ageis);

const Greet =(Name)=>{
    return `hello ${Name}`;

}
let val=console.log(Greet("charchit"));

//Arrow Functions
const square = (num) => num*num;
let sum =(square(2));
console.log(sum);

const multiply =(a,b=2) => a*b;
console.log(multiply(5)); //10;
console.log(multiply(5,3)); //15 because default only be used if there is no arguement has passed.

const calculate=(num1,num2,operator)=>{
    switch(operator) {
        case "+": return `Sum: ${num1+num2}`;
        case "-": return `Difference: ${num1-num2}`;
        case "*": return `Product: ${num1*num2}`;
        case "/": return `Division: ${num1/num2}`;
        default:  return "Invalid operator";
    }
}
let store=console.log(calculate(5,3,"-"));

const greet=()=>{
    let student="charchit";
    console.log(`hello, ${student}`);
}

let animal ="lion";
 function jungle(){
    let tree ="oak";
    console.log(animal);
 }
 
 jungle();

 