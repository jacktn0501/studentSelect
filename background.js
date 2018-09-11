'use strict';

chrome.runtime.onInstalled.addListener(function() {
	console.log(' background.js loaded');
	
	// set example class
	
	let periodExample = "period1";
	let studentsExample = ["John", "Dave", "Anderson", "Rye", "Jane", "Elizabeth", "Mr. Darcy"];
	chrome.storage.local.set({periodExample: studentsExample}, function(){
		console.log('Students saved as ' + studentsExample)
	});
	chrome.storage.local.get({"period1": []}, function(data){
		console.log(data.period1)
	});
});


// Listen for data request from detect.js

chrome.extension.onConnect.addListener(function(port) {
	
	console.log("Connected... ")

	port.onMessage.addListener(function(msg) {
		console.log("message received " + msg);
		
		if (msg[0])
		
		let key = msg + ""
		switch (msg){
		
			case "period1":
				chrome.storage.local.get({"period1": []}, function(data){
					console.log(data.period1)
					port.postMessage(data.period1)
				});
				break;
			
			
		}
		
		//port.postMessage(studentNames);
		
		/*
		let txt = ''
		let xmlhttp = new XMLHttpRequest();
		
		xmlhttp.onreadystatechange = function(){
			if (xmlhttp.status == 200 && xmlhttp.readyState == 4){
			
				// Get text from file
				txt = xmlhttp.responseText;
				
				// Get each line of file into an array
				let stripped = txt.split('\n')
				
				// Remove empty lines and undefined lines
				let studentNames = stripped.filter(slimDown);
				
				function slimDown(value){
					return value != "" && value != undefined
				}
				
				port.postMessage(studentNames);
			}
		};
		
		xmlhttp.open("GET", msg + ".txt", true);
		xmlhttp.send();
		*/
		
	});
});

