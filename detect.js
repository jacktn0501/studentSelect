// Detects which period is selected.

window.onload = function() {
	document.getElementById("btn").addEventListener("click", selectedPeriod)
}


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
		
		let students = msg;
		
		//create the display
		document.getElementById('display').textContent = students;
		
		
	});

}