var olympians = "Zeus,Hera,Poseidon,Demeter,Athena,Apollo,Artemis,Ares,Aphrodite,Hephaestus,Hermes,Hestia"
console.log(olympians)

var exampleArray = [1, 2, 3, 5, "hi", null, true]

console.log(exampleArray)
console.log(exampleArray.toString() )

var nameArray = olympians.split(",")
console.log(nameArray)


var container = document.querySelector(".output ul")

nameArray.forEach(function(theElement, itsIndex, theOriginalArray) {
	console.log(theElement + " is in position " + itsIndex)
})


nameArray.forEach(make_a_list);
function make_a_list(el, ix) {
	var listItem = document.createElement("li")

	listItem.textContent = el

	container.appendChild(listItem)
}

var names = document.querySelectorAll(".output ul li")
console.log(names)


names.forEach(changeColor)

function changeColor(el) {
	el.style.backgroundColor = "rgba(107,142,35," + Math.random() + ")";
}













