var ccv = 0;
var msrv = 0;
var mvv = 0;
var lv = 0;
var plv = 0;
var bcbv = 0;
var yiv = 0;

function showDemBlocs() {
	document.getElementById("dem").classList.remove("hide");
	document.getElementById("rep").classList.add("hide");
	document.getElementById("info").classList.add("hide");
}

function showRepBlocs() {
	document.getElementById("rep").classList.remove("hide");
	document.getElementById("dem").classList.add("hide");
	document.getElementById("info").classList.add("hide");
}
//i have to add to the string (myboi) early on
function hp1() {
	if (document.getElementById("uh").checked == true) {
		var p = "%";
		plv = plv + 10;
		var plvscoreString = plv.toString();
		var plvscore = plvscoreString.concat(p);
		mvv = mvv - 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv - 10;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv + 5;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv - 5;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv - 5;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv - 5;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
	}
	else if (document.getElementById("uh").checked == false) {
		var p = "%";
		plv = plv - 10;
		var scoreString = plv.toString();
		var plvscore = scoreString.concat(p);
		mvv = mvv + 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv + 10;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv - 5;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv + 5;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv + 5;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv + 5;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
		console.log("it works");
	}
	else {
		console.log(myboi);
	}
}

function hp2() {
	if (document.getElementById("comp").checked == true) {
		var p = "%";
		plv = plv - 10;
		var plvscoreString = plv.toString();
		var plvscore = plvscoreString.concat(p);
		mvv = mvv + 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv + 10;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv - 5;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv + 10;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv + 5;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv + 5;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
	}
	else if (document.getElementById("comp").checked == false) {
		var p = "%";
		plv = plv + 10;
		var scoreString = plv.toString();
		var plvscore = scoreString.concat(p);
		mvv = mvv - 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv - 10;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv + 5;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv - 10;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv - 5;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv - 5;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
		console.log("it works");
	}
	else {
		console.log(myboi);
	}
}

function hp3() {
	if (document.getElementById("medic").checked == true) {
		var p = "%";
		plv = plv - 5;
		var plvscoreString = plv.toString();
		var plvscore = plvscoreString.concat(p);
		mvv = mvv + 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv + 10;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv ;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv + 10;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv + 5;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv + 5;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
	}
	else if (document.getElementById("medic").checked == false) {
		var p = "%";
		plv = plv + 5;
		var scoreString = plv.toString();
		var plvscore = scoreString.concat(p);
		mvv = mvv - 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv - 10;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv ;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv - 10;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv - 5;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv - 5;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
		console.log("it works");
	}
	else {
		console.log(myboi);
	}
}

function hp4() {
	if (document.getElementById("pp").checked == true) {
		var p = "%";
		plv = plv - 10;
		var plvscoreString = plv.toString();
		var plvscore = plvscoreString.concat(p);
		mvv = mvv + 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv - 10;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv ;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv + 10;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv - 10;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv + 10;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
	}
	else if (document.getElementById("pp").checked == false) {
		var p = "%";
		plv = plv + 10;
		var scoreString = plv.toString();
		var plvscore = scoreString.concat(p);
		mvv = mvv - 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv + 10;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv ;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv - 10;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv + 10;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv - 10;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
		console.log("it works");
	}
	else {
		console.log(myboi);
	}
}

function ip1() {
	if (document.getElementById("bs").checked == true) {
		var p = "%";
		plv = plv - 10;
		var plvscoreString = plv.toString();
		var plvscore = plvscoreString.concat(p);
		mvv = mvv + 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv - 5;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv + 5;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv + 5;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv - 10;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv ;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
	}
	else if (document.getElementById("bs").checked == false) {
		var p = "%";
		plv = plv + 10;
		var scoreString = plv.toString();
		var plvscore = scoreString.concat(p);
		mvv = mvv - 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv + 5;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv - 5;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv - 5;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv + 10;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv ;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
		console.log("it works");
	}
	else {
		console.log(myboi);
	}
}

function ip2() {
	if (document.getElementById("ra").checked == true) {
		var p = "%";
		plv = plv - 10;
		var plvscoreString = plv.toString();
		var plvscore = plvscoreString.concat(p);
		mvv = mvv + 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv - 5;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv + 10;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv + 5;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv - 10;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv + 5;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
	}
	else if (document.getElementById("ra").checked == false) {
		var p = "%";
		plv = plv + 10;
		var scoreString = plv.toString();
		var plvscore = scoreString.concat(p);
		mvv = mvv - 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv + 5;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv - 10;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv - 5;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv + 10;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv - 5;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
		console.log("it works");
	}
	else {
		console.log(myboi);
	}
}

function ip3() {
	if (document.getElementById("ob").checked == true) {
		var p = "%";
		plv = plv + 10;
		var plvscoreString = plv.toString();
		var plvscore = plvscoreString.concat(p);
		mvv = mvv - 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv + 5;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv - 10;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv - 5;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv + 5;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv - 5;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
	}
	else if (document.getElementById("ob").checked == false) {
		var p = "%";
		plv = plv - 10;
		var scoreString = plv.toString();
		var plvscore = scoreString.concat(p);
		mvv = mvv + 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv - 5;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv + 10;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv + 5;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv - 5;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv + 5;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
		console.log("it works");
	}
	else {
		console.log(myboi);
	}
}

function ep1() {
	if (document.getElementById("cse").checked == true) {
		var p = "%";
		plv = plv + 10;
		var plvscoreString = plv.toString();
		var plvscore = plvscoreString.concat(p);
		mvv = mvv - 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv + 5;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv ;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv - 5;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv + 5;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv - 10;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
	}
	else if (document.getElementById("cse").checked == false) {
		var p = "%";
		plv = plv - 10;
		var scoreString = plv.toString();
		var plvscore = scoreString.concat(p);
		mvv = mvv + 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv - 5;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv ;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv + 5;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv - 5;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv + 10;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
		console.log("it works");
	}
	else {
		console.log(myboi);
	}
}

function ep2() {
	if (document.getElementById("aoe").checked == true) {
		var p = "%";
		plv = plv - 10;
		var plvscoreString = plv.toString();
		var plvscore = plvscoreString.concat(p);
		mvv = mvv + 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv - 5;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv ;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv + 5;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv - 5;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv + 10;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
	}
	else if (document.getElementById("aoe").checked == false) {
		var p = "%";
		plv = plv + 10;
		var scoreString = plv.toString();
		var plvscore = scoreString.concat(p);
		mvv = mvv - 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv + 5;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv ;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv - 5;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv + 5;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv - 10;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
		console.log("it works");
	}
	else {
		console.log(myboi);
	}
}

function ep3() {
	if (document.getElementById("ct").checked == true) {
		var p = "%";
		plv = plv - 10;
		var plvscoreString = plv.toString();
		var plvscore = plvscoreString.concat(p);
		mvv = mvv ;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv - 10;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv - 5;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv ;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv - 10;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv + 10;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
	}
	else if (document.getElementById("ct").checked == false) {
		var p = "%";
		plv = plv + 10;
		var scoreString = plv.toString();
		var plvscore = scoreString.concat(p);
		mvv = mvv ;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv + 10;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv + 5;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv ;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv + 10;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv - 10;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
		console.log("it works");
	}
	else {
		console.log(myboi);
	}
}

function ep4() {
	if (document.getElementById("fc").checked == true) {
		var p = "%";
		plv = plv + 10;
		var plvscoreString = plv.toString();
		var plvscore = plvscoreString.concat(p);
		mvv = mvv - 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv - 10;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv + 5;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv - 10;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv - 5;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv - 5;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
	}
	else if (document.getElementById("fc").checked == false) {
		var p = "%";
		plv = plv - 10;
		var scoreString = plv.toString();
		var plvscore = scoreString.concat(p);
		mvv = mvv + 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv + 10;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv - 5;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv + 10;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv + 5;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv - 5;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
		console.log("it works");
	}
	else {
		console.log(myboi);
	}
}

function pp1() {
	if (document.getElementById("gc").checked == true) {
		var p = "%";
		plv = plv + 10;
		var plvscoreString = plv.toString();
		var plvscore = plvscoreString.concat(p);
		mvv = mvv - 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv - 10;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv + 5;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv - 10;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv + 10;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv - 10;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
	}
	else if (document.getElementById("gc").checked == false) {
		var p = "%";
		plv = plv - 10;
		var scoreString = plv.toString();
		var plvscore = scoreString.concat(p);
		mvv = mvv + 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv + 10;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv - 5;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv + 10;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv - 10;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv + 10;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
		console.log("it works");
	}
	else {
		console.log(myboi);
	}
}

function pp2() {
	if (document.getElementById("tb").checked == true) {
		var p = "%";
		plv = plv + 10;
		var plvscoreString = plv.toString();
		var plvscore = plvscoreString.concat(p);
		mvv = mvv - 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv - 10;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv + 5;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv - 10;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv + 5;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv - 10;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
	}
	else if (document.getElementById("tb").checked == false) {
		var p = "%";
		plv = plv - 10;
		var scoreString = plv.toString();
		var plvscore = scoreString.concat(p);
		mvv = mvv + 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv + 10;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv - 5;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv + 10;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv - 10;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv + 5;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
		console.log("it works");
	}
	else {
		console.log(myboi);
	}
}

function pp3() {
	if (document.getElementById("is").checked == true) {
		var p = "%";
		plv = plv + 10;
		var plvscoreString = plv.toString();
		var plvscore = plvscoreString.concat(p);
		mvv = mvv - 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv - 10;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv - 5;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv + 5;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv + 10;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv - 10;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
	}
	else if (document.getElementById("is").checked == false) {
		var p = "%";
		plv = plv - 10;
		var scoreString = plv.toString();
		var plvscore = scoreString.concat(p);
		mvv = mvv + 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv + 10;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv + 5;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv - 5;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv - 10;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv + 10;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
		console.log("it works");
	}
	else {
		console.log(myboi);
	}
}

function pp4() {
	if (document.getElementById("ss").checked == true) {
		var p = "%";
		plv = plv - 10;
		var plvscoreString = plv.toString();
		var plvscore = plvscoreString.concat(p);
		mvv = mvv + 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv + 10;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv - 10;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv + 5;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv + 5;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv ;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
	}
	else if (document.getElementById("ss").checked == false) {
		var p = "%";
		plv = plv + 10;
		var scoreString = plv.toString();
		var plvscore = scoreString.concat(p);
		mvv = mvv - 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv - 10;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv + 10;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv - 5;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv - 5;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv ;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
		console.log("it works");
	}
	else {
		console.log(myboi);
	}
}


function mp1() {
	if (document.getElementById("ds").checked == true) {
		var p = "%";
		plv = plv + 10;
		var plvscoreString = plv.toString();
		var plvscore = plvscoreString.concat(p);
		mvv = mvv - 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv ;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv + 10;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv - 5;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv + 10;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv - 5;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
	}
	else if (document.getElementById("ds").checked == false) {
		var p = "%";
		plv = plv - 10;
		var scoreString = plv.toString();
		var plvscore = scoreString.concat(p);
		mvv = mvv + 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv ;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv - 10;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv + 5;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv - 10;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv + 5;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
		console.log("it works");
	}
	else {
		console.log(myboi);
	}
}


function mp2() {
	if (document.getElementById("ims").checked == true) {
		var p = "%";
		plv = plv + 10;
		var plvscoreString = plv.toString();
		var plvscore = plvscoreString.concat(p);
		mvv = mvv - 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv - 10;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv - 5;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv + 5;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv + 10;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv - 10;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
	}
	else if (document.getElementById("ims").checked == false) {
		var p = "%";
		plv = plv - 10;
		var scoreString = plv.toString();
		var plvscore = scoreString.concat(p);
		mvv = mvv + 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv + 10;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv + 5;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv - 5;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv - 10;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv + 10;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
		console.log("it works");
	}
	else {
		console.log(myboi);
	}
}

function ecp1() {
	if (document.getElementById("tw").checked == true) {
		var p = "%";
		plv = plv + 10;
		var plvscoreString = plv.toString();
		var plvscore = plvscoreString.concat(p);
		mvv = mvv - 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv - 10;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv + 10;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv + 5;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv + 10;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv - 10;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
	}
	else if (document.getElementById("tw").checked == false) {
		var p = "%";
		plv = plv - 10;
		var scoreString = plv.toString();
		var plvscore = scoreString.concat(p);
		mvv = mvv + 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv + 10;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv - 10;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv - 5;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv - 10;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv + 10;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
		console.log("it works");
	}
	else {
		console.log(myboi);
	}
}

function ecp2() {
	if (document.getElementById("tcb").checked == true) {
		var p = "%";
		plv = plv + 10;
		var plvscoreString = plv.toString();
		var plvscore = plvscoreString.concat(p);
		mvv = mvv - 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv ;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv - 5;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv + 5;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv + 10;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv - 10;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
	}
	else if (document.getElementById("tcb").checked == false) {
		var p = "%";
		plv = plv - 10;
		var scoreString = plv.toString();
		var plvscore = scoreString.concat(p);
		mvv = mvv + 10;
		var mvscoreString = mvv.toString();
		var mvvscore = mvscoreString.concat(p);
		lv = lv ;
		var lvscoreString = lv.toString();
		var lvscore = lvscoreString.concat(p);
		bcbv = bcbv + 5;
		var bcbvscoreString = bcbv.toString();
		var bcbvscore = bcbvscoreString.concat(p);
		msrv = msrv - 5;
		var msrvscoreString = msrv.toString();
		var msrvscore = msrvscoreString.concat(p);
		yiv = yiv - 10;
		var yivscoreString = yiv.toString();
		var yivscore = yivscoreString.concat(p);
		ccv = ccv + 10;
		var ccvscoreString = ccv.toString();
		var ccvscore = ccvscoreString.concat(p);
		document.getElementById("pl").style.width = plvscore;
		document.getElementById("mv").style.width = mvvscore;
		document.getElementById("l").style.width = lvscore;
		document.getElementById("bcb").style.width = bcbvscore;
		document.getElementById("msr").style.width = msrvscore;
		document.getElementById("yi").style.width = yivscore;
		document.getElementById("cc").style.width = ccvscore;
		console.log("it works");
	}
	else {
		console.log(myboi);
	}
}

function showScore() {
	var p = "%";
	var finalScore = plv + mvv + lv + bcbv + msrv + yiv + ccv;
	var finalScoreString = finalScore.toString();
	var finale = finalScoreString.concat(p);
	document.getElementById("finalscore").innerHTML = finale;
}