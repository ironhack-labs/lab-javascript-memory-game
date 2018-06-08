// Creating the MemoryGame Constructor :

function MemoryGame(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
};


// Creating the shuffleCard Method :

    // Option 1 : This technique uses lodash :

MemoryGame.prototype.shuffleCard = function(cardsArr) {
    this.cards= _.shuffle(cardsArr);
    return this.cards;
};

    // Option 2 : This technique is "the usual" one :

// MemoryGame.prototype.shuffleCard = function (cardsArr) {
//     var newArrCards = [];
//     var c = cardsArr.length;
//     var i;
//     while (c) {
//       i = Math.floor(Math.random() * cardsArr.length);
//       if (i in cardsArr) {
//         newArrCards.push(cardsArr[i]);
//         delete cardsArr[i];
//         c--;
//       }
//     }
//     return newArrCards;
// };

// Creating the checkIfPair Method:

    // Part 1 : If the cards picked are the same the pair is added to the pairsCLicked and the pairsGuessed
    // Part 2 : If the cards picked are not the same the pair is ONLY added to the pairsCLicked

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard){
    this.pairsClicked +=1;
    this.pickedCards = [];
    if (firstCard == secondCard){
        this.pairsGuessed += 1;
        return true;
    }
    return false;
}

// Creating the finished Method

MemoryGame.prototype.finished = function () {
    return(this.pairsGuessed < 12 ? false : true)
};