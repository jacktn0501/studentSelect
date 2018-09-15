'use strict';

// This variable is for setting which file to write to (post request).
var periodChange = 0;

window.onload = function() {
	document.getElementById("save").addEventListener("click", save);
	document.getElementById("btn").addEventListener("click", selectedPeriod);
}

let save =() => {
	
	if (periodChange == 0) {
			periodChange = document.getElementById("periodSelect").value;
	}
	
	let textdata = document.getElementById('display').value;
	
	let stripped = textdata.split('\n');
	
	let studentNames = stripped.filter(slimDown);
	
	function slimDown(value){
					return value != "" && value != undefined
	}
	
	//console.log(studentNames.unshift(periodChange));
	
	studentNames.unshift(periodChange);
	
	let port = chrome.extension.connect({
		name: "Save Student Names"
	});
	port.postMessage(studentNames);
	
}

let selectedPeriod = () => {
	
	let period = document.getElementById("periodSelect").value;
	
	// Store in variable so we can post to file later
	periodChange = period;
	
	let port = chrome.extension.connect({
		name: "Load Student Names"
	});

	port.postMessage(period);
	port.onMessage.addListener(function(msg) {
		console.log("message received");
		
		console.log(msg);
		
		let students = msg;
		//console.log(msg);
		
		
		document.getElementById('display').value += students.join('\n');;
		//add text to text-area
		
		//for(let i=0;i<students.length;i++){
		//	document.getElementById('display').value += students[i];
		//}
		
	});
}
