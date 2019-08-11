var saloon = {
    blank: ["_","_","_","_","_","_"],
    spelledOut: ["s","a","l","o","o","n"],

}

var saddle = {
    blank: ["_","_","_","_","_","_"],
    spelledOut: ["s","a","d","d","l","e"],
}

var yeehaw = {
    blank: ["_","_","_","_","_","_"],
    spelledOut: ["y","e","e","h","a","w"],
}

var shootout = {
    blank: ["_","_","_","_","_","_","_","_"],
    spelledOut: ["s","h","o","o","t","o","u","t"],
}

var wordBank = ["saloon", "saddle", "yeehaw", "shootout"];

var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var userGuess;
var blankFiller;
var isWrong = false;
var strikes = 0;


// adding the blanks and letters to the game
function getBlanks(array) {
    for ( i = 0; i < array.length; i++ ) {
      blankFiller = $("<div>");
      blankFiller.addClass("blankclass");
      blankFiller.attr("data-letter", array[i]);
      blankFiller.text(array[i]);
      $("#blanks").append(blankFiller);
    }
};

console.log(randomWord);


 // for loop with if charAt(i) to check letters guessed against word
 function checkGuess(array) {
    for (i = 0; i < array.length; i++) {
        if (userGuess == array[i]) {
            console.log("right guess");
        } else {
            isWrong = true;
            console.log("wrong guess");
        }
    };
 };
 
 function pushWrong() {
    if (isWrong === true) {
        wrongFiller = $("<div>");
        wrongFiller.addClass("blankclass");
        wrongFiller.attr("data-letter", userGuess);
        wrongFiller.text(userGuess);
        $("#wrong").append(wrongFiller);
        strikes++;
        console.log(strikes);
    };
};

// grabbing key pressed by user and adding it to var userGuess. everytime pressed, check guess against word
document.onkeyup = function(event) {
    userGuess = event.key;
    console.log(userGuess);
    checkGuess(randomWord);
    pushWrong();

};

// fill in the divs with the blanks/letters
if (randomWord == "saloon") {
    getBlanks(saloon.blank);
} 

if (randomWord == "saddle") {
    getBlanks(saddle.blank);
} 

if (randomWord == "yeehaw") {
    getBlanks(yeehaw.blank);
} 

if (randomWord == "shootout") {
    getBlanks(shootout.blank); 
};


// for loop with if charAt(i) to check letters guessed against word

