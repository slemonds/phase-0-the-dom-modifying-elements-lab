// Write your code here!
const main = document.getElementById("main");
console.log(main);
main.remove();

const newHeader = document.createElement("h1");

newHeader.id = "victory";

newHeader.innerHTML = "Soyoung is the champion";