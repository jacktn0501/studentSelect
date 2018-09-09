'use strict';

// This variable is for setting which file to write to (post request).
var periodChange = 0;

window.onload = function() {
	document.getElementById("save").addEventListener("click", save);
	document.getElementById("periodSelect").addEventListener("click", selectedPeriod);
}

let save =() => {
	
	if (periodChange == 0) {
			periodChange = document.getElementById("periodSelect").value;
	}
	
	let textdata = document.getElementById('display').value;
	console.log(textdata);
		
	// to-do make post request to .txt files.
	// Still trying to figure this one out...
		
		
	/*
	let postRequest = new XMLHttpRequest();
		
	postRequest.onreadystatechange = function(){
		if (postRequest.readyState == 4 && postRequest.status == 200){
			console.log('success!')
		} else {
			console.log('error has happened')
		}
	};
		
		
	postRequest.open("PUT", periodChange + ".txt", true);
	postRequest.setRequestHeader("X-Custom-Header", "value");
	postRequest.send(textdata);
	*/
	
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
		
		//add text to text-area
		
		for(let i=0;i<students.length;i++){
			document.getElementById('display').value += students[i];
		}
		
	});
}