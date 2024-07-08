const PI = 3.14159;
let area;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    area = radius * radius * PI;
    circumference = 2 * PI * radius;
    document.getElementById("myArea").textContent = `Area: ${area}`
    document.getElementById("myCircumferance").textContent = `Circumferance: ${circumference}`
}