'use strict';

chrome.runtime.onInstalled.addListener(function() {
	console.log(' background.js loaded');
	
	// set example class
	
	let periodExample = "period1";
	let studentsExample = ["John", "Dave", "Anderson", "Rye", "Jane", "Elizabeth", "Mr. Darcy"];
	chrome.storage.local.set({"period1": studentsExample}, function(){
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
		console.log("message received " + Array.isArray(msg));
		
		
		if (Array.isArray(msg)){
			
			let test = msg[0];
			
			switch(test){
				
				case "period1":
					msg.shift();
					console.log(msg);
					chrome.storage.local.set({"period1": msg}, function(){
						console.log(msg);
					});
					chrome.storage.local.get({"period1": []}, function(data){
						console.log(data.period1)
					});
					break;
				
			}
			
		} else {
		
			switch (msg){
		
				case "period1":
					chrome.storage.local.get({"period1": []}, function(data){
						console.log(data.period1)
						port.postMessage(data.period1)
					});
					break;
			
			
			}
		}
		
		
	});
});

