'use strict';

// Detects which period is selected.

var attached = false;
var students = [];

window.onload = function() {
	document.getElementById("btn").addEventListener("click", selectedPeriod)
	document.getElementById("RANDOMIZE").addEventListener("click", randomPick);
	document.getElementById("edit").addEventListener("click", editNames);
}

function editNames(){
	// to do: add ability to edit name list
};

let selectedPeriod = () => {
	
	// get period value
	let period = document.getElementById("periodSelect").value;
	
	let port = chrome.extension.connect({
		name: "Load Student Names"
	});

	port.postMessage(period);
	port.onMessage.addListener(function(msg) {
		console.log("message received");
		
		console.log(msg);
		
		students = msg;
		
		//create the display
		
		document.getElementById('display').textContent = "Students: " + students;
		
	});

}

function randomPick(){
	
	if (students != []) {
		let selected = students[Math.floor(Math.random() * students.length)];
		console.log(selected);
		
	}
}
