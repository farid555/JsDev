const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2);
view1.style.display = "flex";
view2.style.display = "none";

const views = document.getElementsByClassName("view");
console.log(views);

const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

const divs = view1.querySelectorAll("div");
console.log(divs);

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n");
console.log(evenDivs);

for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "blue";
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello there!";
const navBar = document.querySelector("nav");
console.log(navBar);
navBar.innerHTML = `<h1>Hello there...I am doing something...</h1>`;
navBar.style.justifyContent = "space-between";

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].previousElementSibling);
console.log(evenDivs[0].previousSibling);

//**WEB Stroage API/ Local sessionStorage */

const myArrayOfPc = ["Mac", "Windows", "Resberry-Pi"];

const myObjects = {
  name: "Mohammad",
  hobbies: ["Code", "Sleep", "Eat"],
  logName: function () {
    console.log(this.name);
  },
};

//***Object */

sessionStorage.setItem("UserInfo", JSON.stringify(myObjects));
var sessionData = JSON.parse(sessionStorage.getItem("UserInfo"));
console.log(sessionData);

//***Array */

sessionStorage.setItem("UserInfo", JSON.stringify(myArrayOfPc));
var sessionDataArray = JSON.parse(sessionStorage.getItem("UserInfo"));
console.log(sessionDataArray);

//**localStorage */

localStorage.setItem("UserInfo", JSON.stringify(myArrayOfPc));
//**localStroage.clear() */
const key = localStorage.key(0);
const len = localStorage.length;
var localDataArray = JSON.parse(localStorage.getItem("UserInfo"));

console.log(key);
console.log(len);
