function getGrade(mark) {
  if (mark >= 90) return "A+";
  else if (mark >= 80) return "A";
  else if (mark >= 70) return "B+";
  else if (mark >= 60) return "B";
  else if (mark >= 50) return "C";
  else return "Fail";
}

function calculate() {
  let marks = [
    Number(document.getElementById("sub1").value),
    Number(document.getElementById("sub2").value),
    Number(document.getElementById("sub3").value),
    Number(document.getElementById("sub4").value),
    Number(document.getElementById("sub5").value)
  ];

  let total = 0;
  let output = "";

  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
    let grade = getGrade(marks[i]);
    output += `<p>Subject ${i + 1}: ${marks[i]} → ${grade}</p>`;
  }

  let average = Math.round(total / marks.length);
  let result = average >= 50 ? "Passed" : "Failed";

  output += `<h3>Total: ${total}/500</h3>`;
  output += `<h3>Average: ${average}</h3>`;
  output += `<h2>${result}</h2>`;

  document.getElementById("result").innerHTML = output;
}