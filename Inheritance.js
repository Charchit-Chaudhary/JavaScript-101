// class Naruto{
//     constructor(name){
//         this.name=name;
//     }
//     ShadowClone(){
//         console.log("Shadow clone Jutsu has unleashed!");

//     }


// }

// class Kakashi extends Naruto{// Here extends means This new thing gets the abilities of that existing thing or Make kakashi.Prototype inherits from Naruto.Prototype.

//     Chidori(){
//         console.log(`${this.name } has released Chidori `);
//     }
// }
// const Sasuke= new Kakashi("Senpai");
// Sasuke.ShadowClone();
// Sasuke.Chidori()



// class Food {
//     constructor(name){
//         this.name=name;
//     }
//     Pasta(){
//         console.log(`${this.name} is served.`)
//     }
// }

// class Person{
//     eat(){
//         console.log(`${this.name} is eaten.`)
//     }
// }
// const Ram= new Person("RAM");
// // console.log(Ram.name)
// console.log(Ram.name);



// //Inheritance is a mechanism in js in which a objec/ type of object can inherit behaviour and charcteristics from an another object
// class Technique{
//     constructor(name){
//         this.name=name;
//     }
//     Water(){
//         console.log(`${this.name} has released Water breathing 4th form`);
//     }
// }
// class Jutsu extends Technique{
//     jutsu(){
//         console.log("Domain Expansion");
//     }
        
// }
// let Gojo= new Jutsu("Satrou Gojo");
// Gojo.Water();




class Jujutsu_High{
    constructor(name){
        this.name=name;
    }

    jutsu(){
        console.log(`${this.name} used cursed exploitation technique`)
    }
}

class Geto extends Jujutsu_High{
    constructor(name,job){
        super(name);
        this.job=job;
    }
    jutsu(){
        // super.jutsu()
        console.log(`${this.name} used curse manipulation technique`);
    }
}
 
const geto= new Geto("Suguru","Sorcerer");
geto.jutsu();


