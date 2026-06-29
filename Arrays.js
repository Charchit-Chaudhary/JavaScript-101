// // Array is container shaped box which is usded to store elements and can be used to access them and used them.
// let Shinobi = ["Naruto", "Kakashi Hatake","Madara Uchiha", "Rock lee"]

// let Hokage=Shinobi[Shinobi.length-1]

// console.log(Hokage);

// //Array methods
// // Adding and Removing 
// let Hidden_leaf=["Might Guy","Kakasahi Hatake","Itachi Uchiha",]
// // Hidden_leaf.push("Orochimaru");//Push method add new element at the end of the array
// // Hidden_leaf.pop()//Whereas pop method remove the element or an item from the end
// Hidden_leaf.unshift("Jiraya Sensei");// Unshift add the new element at the start
// Hidden_leaf.shift();// whereas shift the first element of an array
// console.log(Hidden_leaf);


// //looping over arrays
// //using for loop
// let Price=[85,56,67,74,64];
// for(let i=0; i<Price.length; i++){
//     console.log(Price[i]);
// }
// //using for of loop
// let animes=["naruto","black clover","one piece","hajime no ippo"];
// for(let anime of animes){
//     console.log(anime);
// }

// //for each loop
// let movies=["fight club","taxi driver","whiplash"];
// // movies.forEach(function(movie){// for each loop, it simply tells javascript go through each item in the list one by one and do something
// //     console.log(movie);
// // });

//  //using for loop
// for(i=0; i<movies.length; i++){
//     console.log(movies[i]);
// }

// //using for of loop
// for(let movie of movies){
//     console.log(movie);
// }

// // using for each loop
// const Superhereos = ["Deadpool","Thor","Venom","Wolverine"];
// Superhereos.forEach((Avengers)=>{
//     console.log(Avengers);
// });


// function printhero(Hero)
// {
//     console.log(Hero);
// }
// printhero("Antman");


// //callback
// function greet(callback){
//     console.log("Hola");
//     callback();

// }
// function name(){
//     console.log("Charchit");

// }
// function name1(){
//     console.log("Arjeet");
// }
// greet(name);
// greet(name1);


// for(let i=1; i<=5; i++){
//     let row = "";
//     for(let j=1; j<=i; j++){
//        let row = row+i;
        
//     }
//     console.log(row);
// }


// forEach
let avengers=["Deadpool","Thor","Spiderman","Hulk"];

avengers.forEach(function(hereos)
{
    console.log(hereos);
})

//callback
function greet(callback){
    console.log("Hola");
    callback();
}
function name1(){
    console.log("Charchit")
}

greet(name1)