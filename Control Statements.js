// // Control statements are used to control the flow of execution in a program based on certain conditions.

// let hungry= true;
// let hasfood = false;// && operator is used to check if both conditions are true

// if(hungry && hasfood){
//     console.log("Eat food");
// }
// else {
//      console.log("Order food")
// }
// // || operator is used to check if at least one condition is true
// let issunday =false;
// let isholiday= true;
//  if (issunday || isholiday){
//     console.log("Day OFF")

// }
// else{
//     console.log("Go to work")
// }

// // if-else if-else statement is used to check multiple conditions
// let score = 88
// if(score>=50){
//     console.log("pass");
// }
// else if(score>=80){
    
//     console.log("merit ");

// }
// else if(score>=90){
    
// }
// // Ternary operator is a shorthand for if-else statement. Use Ternary operator when there is one simple condition with multiple outcomes. It is written as condition ? expressionIfTrue : expressionIfFalse
// let isLoggedIn= true
// let message = isLoggedIn ? " welcomeBack" : "Please log in";
// console.log(message)

// //Switch
// let day= "sunday";
//  switch(day){
//     case "monday": 
//     console.log("MOMO");
//     break;
//     case "Tuesday":
//     console.log("Sekuwa");
//     break;
//     case "wednesday":
//     console.log("Chowmein");
//      break;
//     case "Thursday":
//         console.log("Kebabs");
//         break;
//     case "Friday":
//       console.log("Burger");
//       break;
//     case "Saturday":
//         console.log("Mattar Paneer");
//         break;
//     case "sunday":
//         console.log("Choila");
//         break;
        
//         default:
//             console.log(`${day} is not valid`);
        
        
//  }

//  //Traffic light color
//  let light = "red";

//  switch(light){
//     case "red":
//         console.log("stop");
//         break;
//     case 'yellow':
//         console.log("get ready");
//         break;
//     case 'green':
//         console.log("go");
//         break;
//     default:
//         console.log(`${light} is not a valid traffic light color`);
//      }

// // Movie ticket pricing
// let age =16;
// if(age<5){
//     console.log("free");

// }
// else if(age>=5 && age<=12){
//     consolelog("Rs 150");
// }
// else if(age>=13 && age<=17){
//     console.log("Rs 300");
// }
// else if(age>=18 && age<=59){
//     console.log("Rs 500");

// }
// else if(age>=60){
//     console.log("Rs 200");
// }

// Login Checker
const correctUsername = "charchit";
const correctPassword = "js2024";

const username = "charchit";
const password = "wrongpass";

if (username === correctUsername && password === correctPassword) {
    console.log("Login successful. Welcome Charchit!");
} else if (username === correctUsername && password !== correctPassword) {
    console.log("Wrong password. Please try again.");
} else if (username !== correctUsername && password === correctPassword) {
    console.log("Wrong username. Please try again.");
} else {
    console.log("Invalid credentials.");
}