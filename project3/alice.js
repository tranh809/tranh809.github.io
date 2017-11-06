var box0 = document.querySelector("#box0")
var box1 = document.querySelector("#box1")
var box2 = document.querySelector("#box2")
var box3 = document.querySelector("#box3")
var box4 = document.querySelector("#box4")
var box5 = document.querySelector("#box5")
var box6 = document.querySelector("#box6")
var box7 = document.querySelector("#box7")
var h1 = document.querySelector("#h1")
var img = document.querySelector("#img")

box0.addEventListener("click", showpopup)
box0.addEventListener("click", printToConsole)
function printToConsole() {
	console.log ("you clicked that one div")
	console.log (box0.style)
	box0.style.backgroundColor = "green"
}
box0.addEventListener("click", showpopup)
function showpopup() {
	alert("Find Alice by clicking on the boxes!")
}


box1.addEventListener("click", showpopup1)
box1.addEventListener("click", printToConsole1)
function printToConsole1() {
	console.log ("you clicked that one div")
	console.log (box1.style)
	box1.style.backgroundColor = "green"
}
box1.addEventListener("click", showpopup1)
function showpopup1() {
	var question = prompt("What's your favorite color?")
	console.log ("here's what you entered:" + question)
h1.style.backgroundColor = question

	// var answer = document.getElementById("h1").style.backgroundColor = "pink";
	// console.log("element you changed")
}

box2.addEventListener("click", showpopup2)
box2.addEventListener("click", printToConsole2)
function printToConsole2() {
	console.log ("you clicked that one div")
	console.log (box2.style)
	box2.style.backgroundColor = "green"
}
box2.addEventListener("click", showpopup2)
function showpopup2() {
	var question = prompt("What day is it?")
	console.log ("here's what you entered:" + question)

	var answer = document.getElementById("img").src = "images/alice2.jpg";
	console.log("element you changed")
}

box3.addEventListener("click", showpopup3)
box3.addEventListener("click", printToConsole3)
function printToConsole3() {
	console.log ("you clicked that one div")
	console.log (box3.style)
	box3.style.backgroundColor = "green"
}
box3.addEventListener("click", showpopup3)
function showpopup3() {
	alert("Not here! Keep Looking!")
}

box4.addEventListener("click", showpopup4)
box4.addEventListener("click", printToConsole4)
function printToConsole4() {
	console.log ("you clicked that one div")
	console.log (box4.style)
	box4.style.backgroundColor = "green"
}
box4.addEventListener("click", showpopup4)
function showpopup4() {
	var question = prompt("What time is it?")
	console.log ("here's what you entered:" + question)

	var answer = document.getElementById("h1").style.backgroundColor = "red";
	console.log("element you changed")
}

box5.addEventListener("click", showpopup5)
box5.addEventListener("click", printToConsole5)
function printToConsole5() {
	console.log ("you clicked that one div")
	console.log (box5.style)
	box5.style.backgroundColor = "green"
}
box5.addEventListener("click", showpopup5)
function showpopup5() {
	var question = prompt("Tea?")
	console.log ("here's what you entered:" + question)

	var answer = document.getElementById("img").src = "images/alice3.jpg";
	console.log("element you changed")
}

box6.addEventListener("click", showpopup6)
box6.addEventListener("click", printToConsole6)
function printToConsole6() {
	console.log ("you clicked that one div")
	console.log (box6.style)
	box6.style.backgroundColor = "green"
}
box6.addEventListener("click", showpopup6)
function showpopup6() {
	var question = prompt("Who are you?")
	console.log ("here's what you entered:" + question)

	var answer = document.getElementById("h1").style.backgroundColor = "orange";
	console.log("element you changed")
}

box7.addEventListener("click", showpopup7)
box7.addEventListener("click", printToConsole7)
function printToConsole7() {
	console.log ("you clicked that one div")
	console.log (box7.style)
	box7.style.backgroundColor = "green"
}
box7.addEventListener("click", showpopup7)
function showpopup7() {
	var question = prompt("Where's Alice?")
	console.log ("here's what you entered:" + question)

	var answer = document.getElementById("img").src = "images/alice4.png";
	console.log("element you changed")

	var answer = document.getElementById("h1").innerHTML = "Found Her!";
	console.log("element you changed")
}
















