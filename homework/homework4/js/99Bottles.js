// helpermethod to capitalize first letter of any string obj
String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

// receive unordered listed
var lyrics = document.querySelector(".lyrics");



for(var i = 99; i >= 0; i--) {
	// create first line
	var firstLine = getBottleString(i).capitalizeFirstLetter() + " of beer on the wall, " +  getBottleString(i) + " of beer.<br/>";
	// create secod line
	var secondLine = "";
	if (i!==0) {
		secondLine = "Take one down and pass it around, " + getBottleString(i - 1) + " of beer on the wall.";
	} else {
		secondLine = "Go to the store and buy some more, 99 bottles of beer on the wall."
	}
	// concatenate both lines to paragraoh
	var paragraph = firstLine + secondLine;
	
	// create li element
	var li = document.createElement("li");

	// update value
	li.innerHTML = paragraph;

	// add li to lyrics list
	lyrics.appendChild(li);
}

// gets the right string that is composed of number of bottles and bottles or 
// an alternative string 
function getBottleString(bottles) {
	if (bottles===0) {
		return "no more bottles ";
	}
	if (bottles===1) {
		return "1 bottle ";
	}
	return String(bottles) + " bottles ";
}


