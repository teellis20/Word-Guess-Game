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

function getBlanks(array) {
    for ( i = 0; i < array.length; i++ ) {
      var blankFiller = $("<div>");
      blankFiller.addClass("blanks");
      blankFiller.attr("data-letter", array[i]);
      blankFiller.text(array[i]);
      $("#blanks").append(blankFiller);
    }
};

console.log(saloon.spelledOut);
console.log(randomWord);

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
} 
