chrome.runtime.onInstalled.addListener(function() {
	console.log(' background.js loaded');
	let txt = '';
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if (xmlhttp.status == 200 && xmlhttp.readyState == 4){
				txt = xmlhttp.responseText;
				let stripped = txt.split('\n')
				let studentNames = stripped.filter(slimDown);
				function slimDown(value){
					return value != "" && value != undefined
				}
				
				console.log(studentNames);
				console.log(studentNames[2] === "");
				console.log(studentNames[2])
			}
	};
	xmlhttp.open("GET", "period1.txt", true);
	xmlhttp.send();
});
