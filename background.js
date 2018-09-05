chrome.runtime.onInstalled.addListener(function() {
	console.log(' background.js loaded');
	/*
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		console.log('apis supported')
	} else {
		console.log('it no work')
	}


});
