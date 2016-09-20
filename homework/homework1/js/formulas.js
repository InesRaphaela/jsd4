/*
* Homework solution
*/

function calcFahrenheitToCelcius (fTemp){
	// Converts Fahrenheit into Celcius
	// @param num - fTemp
	// @return num - cTemp 
	var cTemp = (fTemp - 32) * 5 / 9;
	cTemp = Math.round(cTemp);
	return cTemp;
}

function calcCelciusToFarenheit (cTemp){
	// Converts Celcius into Fahrenheit
	// @param num - cTemp
	// @return num - fTemp 
	var fTemp = cTemp * 9 / 5 + 32;
	fTemp = Math.round(fTemp);
	return fTemp;
}

function calcCircumference (radius){
	// Converts radius in circumference with 1 decimal precision
	// @param num - radius
	// @return num - circ
	var circ = Math.PI * 2 * radius;
	circ = roundWithDec(circ, 1);
	return circ;
}

function calcLongestSide (a, b){
	// Calculates the length of the hypotenuse of a triange
	// @param num - a
	// @param num - b
	// @return num - c
	var c = Math.sqrt((a * a) + (b * b));
	c = roundWithDec(c, 1);
	return c;
}

function roundWithDec (number, dec){
	// Rounds number and fixes to decimal
	// @param num - number
	// @param num - dec
	// @return num - rounded and fixed number
	var decFactor = Math.pow (10, dec);
	return Math.round(number*decFactor)/decFactor;
}
