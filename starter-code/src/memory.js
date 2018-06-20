
// Create a method to shuffle the cards, so every time you create a new game, the order
// or the card changes. Hint: It would be a good idea to implement 
//something like a Fisher-Yates Shuffle.

var MemoryGame = function (cards) {
    this.cards = cards;
    this.pickedCards = []; /*storage cards user has storaged to compare them*/
    this.pairsClicked = [];
    this.pairsGuessed = []; // add chosen pairs when guessed

};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var copy = [], n = cardsArr.length, i;
    
    // While there remain elements to shuffle…
    while (n) {
    
        // Pick a remaining element…
        i = Math.floor(Math.random() * cardsArr.length);
    
        // If not already shuffled, move it to the new array.
        if (i in cardsArr) {
        copy.push(cardsArr[i]);
        delete cardsArr[i];
        n--;
        }
    }
    return copy;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    // When a user pick 2 cards, we will need to check if they are the same. Let's 
    //create a method checkIfPair, that will receive two parameters (both cards selected by the user).
    this.pickedCards = 0; 
    //The method will add 1 to our pairsClicked property, and if the cards are the same 
    //also add 1 to pairsGuessed.
    // Finally it will return true or false depending on the result of comparing both cards.

}

MemoryGame.prototype.finished = function () {

};
