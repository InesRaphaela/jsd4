
// Instructions for your homework
// //////////////////////////////////////////////////////////////////
// 1.   Here is where your functions should be defined
// 2.	What should you name your functions?  Hint:  check the console to see which functions are already being called.  Are they all "defined?"  If not yet defined... then define them here!
// 3.	Be sure to link up this file in your HTML doc
/////////////////////////////////////////////////////////////////////

//		Questions: In Assignment Math.random is listed, 
//		but doesnt seem to be required in the solution unless
//		a default value is required

//		Research for me: JS function description best practice

function calcFahrenheitToCelcius(fTemp){}
	// Converts Fahrenheit into Celcius
	// params: fTemp | number
	// return: cTemp | number
	var cTemp = Math.round((fTemp - 32) * 5 / 9);
	return cTemp;
}

function calcCelciusToFarenheit(cTemp){
	//Converts Celcius into Fahrenheit
	// params: cTemp | number
	// return: fTemp | number
	var fTemp = Math.round(cTemp * 9 / 5 + 32); 
	return fTemp
}

function calcCircumference(radius){
	// Converts radius in circumference
	// params: radius | number
	// return: circ | number
	var circ = Math.PI * 2 * radius;
	return circ;
}

function calcLongestSide(a, b){
	// Calculates the length of the hypothenusis of a triange
	// params: length a, length b | number
	// return: length c | number
	var c = Math.sqrt((a * a) + (b * b));
	return c;
}
