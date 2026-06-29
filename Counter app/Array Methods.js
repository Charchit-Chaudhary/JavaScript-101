//slice and Splice
let W2026=["Argentina","Brazil","Colombia","Denmark","Egypt","France"];
let slice= W2026.slice(-4,-2);
console.log(slice);//Slice is an array method which is used to extract the copy of an original array and return the new array of selected elements that have sliced out of an array  without modifying 
// here is the syntax:arrayname.slice(StartIndex,EndIndex) remember start index

//Splice

let fruits=["apple","strawberry","mango","litchi","peach"];// REMOVING ITEMS
// let newFruits=fruits.splice(1,3);
let newFruits=fruits.splice(1,3,"Banana","Watermelon","Dragon Fruit")//splice is an array method which is used to add,remove or insert elements in an array and returns an array of elements of what was removed
console.log(newFruits);
console.log(fruits);

let movies=["fight club","whiplash","drive","taxi driver","venom"];
console.log(movies[0]);
console.log(movies[movies.length-1]);
movies.push("magnolia");
movies.shift();//shift() is an  array method which is used to remove an element which lies at the the start index.
for(let i=0; i<movies.length; i++){
    console.log(`${i+1}. ${movies[i]}`);
}



//Map()
let prices=[100,250,399,50,799];
let newPrice=prices.map(function(price)
{
    return Math.round(price*1.13);
    

});
 console.log(newPrice);

let marks=[85,45,92,38,67];
let passing=[];
marks.forEach(mark=>{
if(mark>=50){
    passing.push(mark);
}
})
console.log(passing);
//filter ()
let ages=[12,25,17,30,15,22,16,28];
let newages=ages.filter(age=>age>=18);
console.log(newages);

let studentsmarks=[85,45,92,38,67,55,72,29];
// let passedstudents= studentsmarks.filter(mark=>mark>=50);
// console.log(passedstudents);
// let bonusmarks=passedstudents.map(mark=>mark+5);
// console.log(bonusmarks);
let result=studentsmarks.filter(mark=>mark>=50).map(mark=>mark+5);
console.log(result);

let products = [
    {name: "Laptop", price: 999},
    {name: "Mouse", price: 25},
    {name: "Monitor", price: 399},
    {name: "Keyboard", price: 49},
    {name: "Headphones", price: 149}
];

// Task 1: Filter products under $100
let affordableProducts = products.filter(product => product.price < 100);

// Task 2: Add " - Affordable!" to each filtered product name
let updatedProducts = affordableProducts.map(product => {
    return {
        name: product.name + " - Affordable!",
        price: product.price
    };
});

// Task 3: Print final result
console.log(updatedProducts);



let numbers=[1,2,3,4,5];

console.log(numbers.includes(3));

numbers.indexOf(10);
console.log(numbers.indexOf(10));

let Movies=["The Batman","Interstellar", "Arrival","Venom"];
if(Movies.indexOf("Arrival")!==-1){
    console.log("Movie found");
}else{
    console.log("Movie not found");
}


//Reduce
let scores=[7,1,2,1];
let total=scores.reduce((sum,score)=> sum+score,0);
console.log(total);