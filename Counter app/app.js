const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const resetbtn = document.getElementById('resetBtn');
const countlabel = document.getElementById('countlabel');

let count = 0;

decreaseBtn.onclick = function() {
    count--;
    countlabel.textContent = count;
}
increaseBtn.onclick = function() {
    count++;
    countlabel.textContent = count;
}
resetbtn.onclick = function() {
    count = 0;
    countlabel.textContent = count;
}
