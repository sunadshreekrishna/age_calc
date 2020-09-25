

function age_calc(){
	var birthyear=prompt("Please enter your name.");
	var result=(2020-birthyear)*365;
	var h1=document.createElement('h1');
	var textanswer=document.createTextNode("you are"+result+"days old");
	console.log(textanswer);
    h1.setAttribute("id","hid");
    h1.appendChild(textanswer);
    document.getElementById("flexbox-result").appendChild(h1);
}

function reset(){
	document.getElementById("flexbox-result").remove();
}