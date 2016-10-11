// Elements
// ------------------------------------------

var lyrics = document.querySelector(".lyrics");

// var paragraph = "<span>48</span> <span class='bottle'>bottles</span>  of beer on the wall,<span>48</span> <span class='bottle'>bottles</span> of beer. <br/> Take one down and pass it around, <span>48</span> <span class='bottle'>bottles</span>  of beer on the wall.";
// var p = "33 bottles of beer on the wall, 33 bottles of beer.<br/> Take one down and pass it around, 32 bottles of beer on the wall."
// console.log(paragraph)


// Update page
// ------------------------------------------

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

console.log("99 bottles of beer on the wall!");

var paragraph = "";

for(var i = 99; i >= 0; i--) {

	// create string
	if (i===0) {
		second = "Go to the store and buy some more, 99 bottles of beer on the wall."
	} else {
		second = "Take one down and pass it around, " + getString(i - 1) + " of beer on the wall.";
	}
	paragraph = getString(i).capitalizeFirstLetter() + " of beer on the wall, " +  getString(i) + " of beer.<br/>" + second;
	
	// add to page
	var li = document.createElement("li");

	li.innerHTML = paragraph;
	lyrics.appendChild(li);

}


function getString(bottles) {
	if (bottles===0) {
		return "no more bottles ";
	}
	if (bottles===1) {
		return "1 bottle ";
	}
	if (bottles)
	return String(bottles) + " bottles ";
}


