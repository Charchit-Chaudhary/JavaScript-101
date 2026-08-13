// What a class is?
class person{
    constructor(Name, Age){// Here constructor is a special method that autotmatically runs and intializes new instances(Object created using class called instances)
        this.name=Name;
        this.age=Age;
    }
}
let person1 = new person("satrou", 26);
let person2 = new person("Luffy", 20);
console.log(person1);
console.log(person2);// As we can see we build objects(instances)using class blueprint.So, A class is an blueprint or template for creating objects.




let Jutsu ={
    Shadowclone(){
        console.log("Shadow clone justsu has unleashed");
    }
}
let Naruto ={
    name:"Uzumaki Naruto",
    

}
Naruto.__proto__ = Jutsu;
Naruto.Shadowclone();





function createuser(username, score)
{
this.username=username;
this.score=score;

}
createuser.prototype.increment =function(){
    this.score++;
// here it means go inside createuser function prototype and inject increment method on it
}
createuser.prototype.printme = function(){
    console.log(`score is ${this.score}`);
}
const chai =new createuser("chai",35);
const tea =new createuser("tea",345);
chai.printme();


function dog(name){
    this.name=name;

}
dog.prototype.bark= function(){// here lt say dog.prototyp is a  object and inside that property we are inserting a method bark()
    console.log(`${this.name} is a good dog`);
}

const dog1 = new dog("tommy");
dog1.bark();




class Cinephile{
   constructor(name, age, movies){// here Constructor is method which is used to intialize the properties and methods in object.Here class Constructor automatically invokes.
    this.name=name;// this refers to the newly object created using new keyword
    this.age=age;
    this.movies=movies;
   }

   shoot(){
    console.log(`${this.name} is a ${this.age} cinephile and his favourite moive is ${this.movies}.`);
   }
}

const Cinephile1=new Cinephile("Charchit", 22, "Fight Club");
const Cinephile2=new Cinephile("Nolan", 54, "2001 Space Odyssey");
const Cinephile3=new Cinephile("Scorsese", 80, "Seven Samurai");

Cinephile1.shoot();
Cinephile2.shoot();
Cinephile3.shoot();


let Hokage={
    name:"Naruto",
    age:76,
    jutsu:"shadow clone",
    ShadowClone(){
        console.log(`${this.name} has unleashed ${this.jutsu}` );
    }
}
Hokage.ShadowClone();
let {name,age}=Hokage;
console.log(name);
console.log(age);