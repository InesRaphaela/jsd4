// Setup / Data
// ------------------------------------------
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var startupIdea;
var favorites = [];


// Elements
// ------------------------------------------
var startup  = document.querySelector('.startup');
var generate = document.querySelector('.generate');
var save     = document.querySelector('.save');
var print    = document.querySelector('.print');
var list     = document.querySelector('.list');


// Events
// ------------------------------------------
generate.addEventListener('click', generateStartup);
save.addEventListener('click', saveFavorite);
print.addEventListener('click', printFavorites);


// Init
// ------------------------------------------
generateStartup();


// Event Listeners
// ------------------------------------------

// the generateStartup function is called when
// the 'Generate New Startup' button is clicked
function generateStartup() {

	// generate two random index numbers, one for each array
	var xIndex = createNum(0, startupX.length);
	var yIndex = createNum(0, startupY.length);
	console.log(xIndex, yIndex)

	// concatenate the fixed text with the two random values
	// to create a new startup idea like:
	// 'A startup that is Apple, but for Trello'
	var x = startupX[xIndex];
	var y = startupY[yIndex];
	startupIdea = 'A startup that is ' + x + ', but for '+ y;

	// DONE: Update page with new startup idea
	startup.innerHTML = startupIdea;
}

// the saveFavorite function is called when
// the 'Save Favorite' button is clicked
function saveFavorite() {
	// add the new idea to the array if item not in array
	if (contains(favorites, startupIdea) === false) {
		favorites.push(startupIdea);
	}
}

// the Print Favorites function is called when
// the 'Print Favorites' button is clicked
function printFavorites() {
	// clear out favorites section each time
	// before displaying new list of favorites
	list.innerHTML = '';

	// concatenate all the favorites into one string
	var favoritesText = '';
	favorites.forEach(function(favorite) {
		favoritesText += favorite + '<br />';
	});

	// update the list element with the
	// new list of favorites
	list.innerHTML = favoritesText;
}

// creates a random number between [min, max[
function createNum(min,max) {
	return Math.floor(Math.random() * max + min);
}

// checks if item already exists in array
function contains(arr, item) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}
