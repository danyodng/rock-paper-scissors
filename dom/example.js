// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

// a <p> with red text that says “Hey I’m red!”
const redPara = document.createElement("p");
redPara.textContent = "Hey, I'm red!";
redPara.style.color = "red";

// an <h3> with blue text that says “I’m a blue h3!”
const blueHeading = document.createElement("h3");
blueHeading.textContent = "I'm a blue h3!";
blueHeading.style.color = "blue";

// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const blackPink = document.createElement("div");
const blackPinkHeading = document.createElement("h1");
const blackPinkPara = document.createElement("p");
blackPinkHeading.textContent = "I'm in a div";
blackPinkPara.textContent = "ME TOO!";
blackPink.setAttribute("style", "background:pink; border:1px solid black;");


blackPink.appendChild(blackPinkHeading);
blackPink.appendChild(blackPinkPara);


container.appendChild(content);
container.appendChild(redPara);
container.appendChild(blueHeading);
container.appendChild(blackPink);

// Event Listeners Examples 

// method 2
// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");

// method 3
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   alert("Hello World");
// });

// NAMED FUNCTIONS
// METHOD 1
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

// METHODS 2 & 3
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
const btn = document.querySelector("#btn");
  
// METHOD 2
btn.onclick = alertFunction;
  
// METHOD 3
btn.addEventListener("click", alertFunction);

// accept user input 

// easy way = window prompt 
// let username; 
// username = window.prompt("what your username")
// console.log(username)

// pro way = html textbox 
let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}

// TYPE CONVERSIONS 
// change the datatype of a value to another (strings, numbers, booleans)
// 


let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); // NaN
console.log(y, typeof y);
console.log(z, typeof z); // always true if there is a value even if it is 0

let x = "0";
let y = "0";
let z = "0";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); // 0 number
console.log(y, typeof y); // 0 String
console.log(z, typeof z); // True boolean

let x = ""; //empty string 
let y = "";
let z = "";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); // 0  number
console.log(y, typeof y); //  String
console.log(z, typeof z); // False boolean