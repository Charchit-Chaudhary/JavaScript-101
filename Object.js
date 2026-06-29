//Object is box shaped container which can hold multiple values in terms of key and value pair.Objects are used to group related data together.
let student ={
    name:"charchit",
    age:22,
    City:"Tulsipur"
};
console.log(student.name);


let movie={
    title:"fight club",
    director: "David Fincher",
    year:1995,
    rating: 9

};
console.log(movie.title);
console.log(movie["year"]);

console.log(movie.rating=9.5);
console.log(movie.genre="Drama");
console.log(movie);


//methods
let students={
    name:'charchit',
    age:20,
    rollno:47,
    greet(){
        console.log("Hello I am Charchit!");
    }
};
students.greet();


//This keyword 
let Hokage={
    name:"naruto",
    age:22,
    Village:"hidden leaf",
    jutsu() 
      {
        console.log(this.name);
    }
};
 let Hokage1={
    name:"Gaara",
    age:23,
    Village:"Sand Village",
    jutsu(){
console.log(this.name);
    }
};
// Hokage.jutsu();// so here this is making refrence towards the whole object.
Hokage1.jutsu();


let User1={
    name:"Bruce wayne",
    age:24,
    city:"Arkham"
}
console.log(User1.name);