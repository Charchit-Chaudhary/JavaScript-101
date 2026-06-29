 //print all numbers from 1 to 10 using a for loop
 for(let i=1; i<=10; i++){
    console.log(i);
 }
 // then print all numbers in reverse order from 10 to 1 using a for loop
 for(let i=10; i>=1; i--){
    console.log(i);
 }

    //print all even numbers from 1 to 20 using a for loop
    for(let i=1; i<=20; i++){
        if(i%2===0){
            console.log(i);
        }
    }
for(let i=1; i<=5; i++)
{
    let output="";
    for(let j=1; j<=i; j++){
        output=output+i;
    }
    console.log(output);
}
let num1=10, num2=45, num3=23, num4=67, num5=89;
let largest = num1; // assume num1 is biggest first

if(num2 > largest) { largest = num2; } // swap if bigger
if(num3 > largest) { largest = num3; } // swap if bigger
if(num4 > largest) { largest = num4; } // swap if bigger
if(num5 > largest) { largest = num5; } // swap if bigger

console.log(`Largest number is ${largest}`);


for(let i = 1; i <= 4; i++) {
    for(let j = 1; j <= 4; j++) {
        if(i === j) {
            console.log(`${i} x ${j} = ${i*j}`);
        }
    }
}



for(let i = 1; i <= 4; i++) {
    for(let j = 1; j <= 4; j++) {
        if(i === j) {
            console.log(`${i} x ${j} = ${i*j}`);
        }
    }
}
for(let i=1; i<=30; i++){
    
    if(i%3===0 && i%5===0){
        console.log("Fizzbuzz")
    }
    else if(i%3===0){
        console.log("Fizz");
    }
    else if(i%5===0){
        console.log("buzz")
    }
    else{
        
    console.log(i); // print number when none of the above match
}
    
}
