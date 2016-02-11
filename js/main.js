// Detects IE versions 9 and 10. Does not require external libraries such as jQuery.

/*
Detection can be changed by simply changing the "v == 9" or "v == 10" 
values to the respective version(s) of IE you wish to detect.
Note: classList is not supported in IE 8 or older.
*/

document.addEventListener("DOMContentLoaded", function(event) {
	var x = document.getElementsByTagName("html");
	var v = document.documentMode;
	v == 9 ? x[0].classList.add("ie9") : (v == 10 ? x[0].classList.add("ie10") : console.log("Not IE"));
});