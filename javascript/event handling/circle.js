const text = document.getElementById("heading");

const bulb1 = document.getElementById("bulb1");
const bulb2 = document.getElementById("bulb2");
const bulb3 = document.getElementById("bulb3");
const bulb4 = document.getElementById("bulb4");

bulb1.addEventListener("mouseover", () => changeColor(bulb1.innerText));
 bulb1.addEventListener("mouseout", () => changeColor("white"));

bulb2.addEventListener("mouseover", () => changeColor(bulb2.innerText));
bulb2.addEventListener("mouseout", () => changeColor("white"));


bulb3.addEventListener("mouseover", () => changeColor(bulb3.innerText));
bulb3.addEventListener("mouseout", () => changeColor("white"));


bulb4.addEventListener("mouseover", () => changeColor(bulb4.innerText));
bulb4.addEventListener("mouseout", () => changeColor("white"));


const btn = document.getElementById("btn");
btn.addEventListener("click", () => changeColor(btn.innerText));


function changeColor(color){
    text.style.color = color;
}

