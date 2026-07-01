let anime={
    title:"One Piece",
    genre:"Adventure-Comedy",
    episodes:1200,
    rating:9

};
let{title, rating}=anime;
console.log(title);
console.log(rating);

let Naruto=["Naruto","sasuke","Jiraya","Madara","Kakashi"];
let[first, ,third]=Naruto;
console.log(first);
console.log(third);

function describeanime({title,episodes}){
console.log(`${title} has ${episodes} episodes`);
}
describeanime(anime);


//spread operator is used to expands or unpacks the iterables into individual values.
let array=[1,2,3,4,5];
let newarr=Math.max(...array);
console.log(newarr);


let Worldcup=["Argentina","France","Brazil","Spain"];
let NewList=[...Worldcup,"Portugal"];//spread operator helps to copying the entire array and helps to add new elements without using push() and create a complete new array
console.log(NewList);

let Avengers=["Ironman","Spiderman","Daredevil","Thor","DR.DOOM"];
let DC=["Batman","Superman","Flash","DeathStroke"];
let Hereos=[...Avengers,...DC];//Spread operators helps to merge two arrays and produce an output by combining them as single one.
console.log(Hereos);

//Rest Operator
