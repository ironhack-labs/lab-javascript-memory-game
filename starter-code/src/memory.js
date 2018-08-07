//post attempt lecture

var MemoryGame = function (deckOfCards) {
    this.cards = deckOfCards;
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.currentPair = []; //this one is the cards in your hand.


};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var shuffledArray = [];

    while(shuffledArray.length<24){
//this will loop until the condition above is false.
var randomNumber = Math.floor(Math.random()*this.cards.length); //dont need to use -1 here
//because we're using.floor
var randomElement = this.cards[randomNumber];
shuffledArray.push(randomElement);
this.cards.splice(randomNumber, 1);//this will delete the random card from the old array after it's pushed into the new array

    }
    this.cards = shuffledArray;//now the array is shuffled.    
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked++; //because if you clicked two, a pair was clicked
    if(firstCard.attr('name') === secondCard.attr('name')){//can never really compare divs.
        //  so now attr name to see if div names line up.
        this.pairsGuessed++; //this adds to pairs guessed only if you successfully clicked cards with the same value.
        return true;
    }
    return false;
}


MemoryGame.prototype.finished = function() {
    return this.pairsGuessed >= 12;     //can use this instead of if statement because > always results in boolean
};

















//Original attempt;
// var MemoryGame = function (cards) {
//   this.cards = cards;
//   this.pickedCards = [];
//   this.pairsClicked = []; //!!!!!!!!!
// };




// MemoryGame.prototype.shuffleCard = function (cardsArr) {
//     var leftInDeck = cardsArr;
//     var shuffledCards = [];
//  while (shuffledCards.length!=24){
//     var randomNumber = Math.floor(Math.random()*leftInDeck.length);
//     shuffledCards.push(leftInDeck[randomNumber]);
//     leftInDeck.splice(randomNumber,1);
//     this.cards=shuffledCards;
//  }
// }


// // MemoryGame.prototype.shuffleCard = function (cardsArray) {
// //     let currentIndex = cardsArray.length, temporaryValue, randomIndex;

// //     while(0!== currentIndex) {
// //         randomIndex = Math.floor(Math.random() * currentIndex);
// //         currentIndex -= 1;
    

// //     temporaryValue = cardsArray[currentIndex];
// //     cardsArray[currentIndex] = cardsArray[randomIndex];
// //     cardsArray[randomIndex] = temporaryValue;
// // }
// // return cardsArray;

// // }

// MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

// }

// // MemoryGame.prototype.finished = function () {

// // };


//     //I should do a click function that either hides the div or takes away the back and shows the from.
//     //We will go over this in great detail.
//     //Friday we start the game.