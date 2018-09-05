// Randomizes student or whatever death 2 amerikka ya yeet

let txt = '';
let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
	if (xmlhttp.status == 200 && xmlhttp.readyState == 4){
        	txt = xmlhttp.responseText;
        	//let txtreal = txt.strip(‘\n’)
        	console.log(txt)
      	}
 };
 xmlhttp.open("GET", "period1.txt", true);
 xmlhttp.send();


