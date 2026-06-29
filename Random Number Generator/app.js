let mybutton=document.getElementById("mybutton");
let label1=document.querySelector(".label1");
let label2=document.querySelector(".label2");
let label3=document.querySelector(".label3");
let randomnumber1;
let randomnumber2;
let randomnumber3;


const max=10;
const min=1;


mybutton.onclick=function(){
    randomnumber1=Math.floor(Math.random()*max-min)+min;
    randomnumber2=Math.floor(Math.random()*max-min)+min;
    randomnumber3=Math.floor(Math.random()*max-min)+min;
    label1.textContent=randomnumber1;
    label2.textContent=randomnumber2;
    label3.textContent=randomnumber3;
}
