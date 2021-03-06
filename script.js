// function expression: longhand version
var pickWord = function(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
};


// function declaration: shorthand version
function setupAnsArr(len) {
	var arr = [];
	for (let i = 0; i < len; i++)
		arr[i] = '__';
	return arr;
}


function showPlayerProgress(arr) {
	return arr.join(' ');
}


function updateGameState(guess, word, ansArr) {
  	for (let i = 0; i < word.length; i++) {
    	if (word[i] === guess) {
      		ansArr[i] = guess;
      		remainingLetters--;
    	}
  	}
}


function showAnswer(word, ansArr) {
  	var stat = "The answer was " + word + ".";
  	if (ansArr.join('') === word)
    	return "Good job! You guessed it right! " + stat;
  	else
    	return "You ran out of total guesses allowed!\n" + stat;
}


var planets = [
	"neptune",
  	"saturn",
  	"mars",
  	"earth",
  	"mercury",
  	"uranus",
  	"jupiter",
  	"venus"
];


var misc = [
  	"sun",
  	"moon",
  	"star",
  	"nebula",
  	"centaur",
  	"blackhole",
  	"plutoid",
  	"galaxy",
  	"comet",
  	"asteroid",
  	"meteoroid",
  	"constellation",
];


astroObj = misc.concat(planets);


var word = pickWord(astroObj);
var remainingLetters = word.length;
var totalGuesses = word.length + 7;
var ansArr = setupAnsArr(word.length);
var hint = "\nHint: It's an astronomical object!\n\n";


while (remainingLetters > 0 && totalGuesses > 0) {
  	var triesMsg = "\n\nYou have " + totalGuesses + " tries remaining.";
  	var guess = prompt(hint + showPlayerProgress(ansArr) + "\n\nGuess a letter, or click Cancel to quit playing." + triesMsg);

  	if (guess == null)
    	break;
  	else if (guess.length != 1)
    	alert("Please enter a single letter.");
  	else {
    	totalGuesses--;
    	if (ansArr.indexOf(guess) > -1)
      		alert("'" + guess + "' is already present.");
    	else {
      		if (word.includes(guess))
        		updateGameState(guess, word, ansArr);
      		else
        		alert("Wrong guess!");
    	}
  	}
}


if (guess == null)
	alert("Goodbye!");
else
  	alert(showAnswer(word, ansArr));

