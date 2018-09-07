chrome.runtime.onInstalled.addListener(function() {
	console.log(' background.js loaded');
	let txt = '';
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if (xmlhttp.status == 200 && xmlhttp.readyState == 4){
				txt = xmlhttp.responseText;
				console.log(txt)
			}
	};
	xmlhttp.open("GET", "period1.txt", true);
	xmlhttp.send();
});
