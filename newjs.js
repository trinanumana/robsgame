var timer = setInterval(checkAvione, 1000);
var a = document.getElementById("one");
var h = document.getElementsByClassName("hide");
var b = document.getElementById("pl");
var c = document.getElementById("cc");
var d = document.getElementById("mv");
var i = document.getElementById("lb");
var e = document.getElementById("lose");


function rightClick(){
  	if (a.src.match("images/rita.png")){
		a.src = "images/toon5.png";
	} else if (a.src.match("images/toon5.png")){
		a.src = "images/toon2.png";
	} 
	else if(a.src.match("images/toon2.png")){
		a.src = "images/toon6.png";
	}
}

function leftClick(){
  	if (a.src.match("images/toon6.png")){
		a.src = "images/toon2.png";
	} else if (a.src.match("images/toon2.png")){
		a.src = "images/toon5.png";
	} 
	else if (a.src.match("images/toon5.png")){
		a.src = "images/rita.png";
}
}


function checkAvione(){
		if (a.src.match("images/rita.png")){
		b.classList.remove("hide");
		c.classList.add("hide");
		d.classList.add("hide");
		i.classList.add("hide");
	}
		else if(a.src.match("images/toon5.png")){
		b.classList.add("hide");
		d.classList.add("hide");
		i.classList.add("hide");
		c.classList.remove("hide");
	}
		else if(a.src.match("images/toon2.png")){
		c.classList.add("hide");
		b.classList.add("hide");
		i.classList.add("hide");
		d.classList.remove("hide");
	}
		else if(a.src.match("images/toon6.png")){
		c.classList.add("hide");
		b.classList.add("hide");
		i.classList.remove("hide");
		d.classList.add("hide");
	}
}
