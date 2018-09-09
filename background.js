'use strict';

chrome.runtime.onInstalled.addListener(function() {
	console.log(' background.js loaded');
});


// Listen for data request from detect.js

chrome.extension.onConnect.addListener(function(port) {
	
	console.log("Connected... ")

	port.onMessage.addListener(function(msg) {
		console.log("message received " + msg);
		
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
		
	});
});

