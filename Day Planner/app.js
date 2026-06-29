let current_Day = "Friday";

let score = 8;


function showPlan(){
    switch(current_Day){
    case "Monday":
        document.getElementById("dayOutput").textContent = "Plan the week";
        break;
    case "Wednesday":
        document.getElementById("dayOutput").textContent = "Build the project";
        break;
     case "Friday":
        document.getElementById("dayOutput").textContent = "Review the Week";
        break;
    default:
        document.getElementById("dayOutput").textContent = "Rest Day";
        break;
}

document.getElementById("motivationOutput").textContent =  score> 7 ? "Let's get it!" :"Slow start, but keep going";


}


