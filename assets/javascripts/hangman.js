
let word = "  industrialist ";
let trimmed = word.trim();
//console.log(trimmed);
let wordArray = trimmed.split("");
//console.log(wordArray)

let letter = "i";
let letterCount = 0;

for (let i=0; i<wordArray.length; i++){
  //console.log("Word : " + wordArray[i] + " , " + "letter : " + letter);
  if (wordArray[i] == letter) {
    //console.log(letterCount);
    let newletterCount = letterCount + 1;
    //console.log("newletterCount = " + newletterCount);
    letterCount = newletterCount;
  }
}
console.log("The letter " + letter + " appears " + letterCount + " times in this word.");
