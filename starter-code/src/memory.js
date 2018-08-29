var MemoryGame = function (cards) {
  this.cards = cards;
};

MemoryGame.prototype.pickedCards = [];
MemoryGame.prototype.pairsClicked = 0;
MemoryGame.prototype.pairsGuessed = 0;

MemoryGame.prototype.shuffleCards = function () {
  var deck = this.cards.length;
  console.log(this.cards.length)
  while (deck !== 0) {
    randomCard = Math.floor(Math.random() * deck); // randomCard = deck index
    console.log(randomCard);
    deck -= 1;

    topCard = this.cards[deck];
    this.cards[deck] = this.cards[randomCard];
    this.cards[randomCard] = topCard;
    
  }
};

//TESTING SHUFFLECARD
// MemoryGame.prototype.shuffleCard = function(cardsArr) {
//   var shuffling = [],
//     n = cardsArr.length,
//     i;

//   while (n) {
//     i = Math.floor(Math.random() * cardsArr.length);
//     if (i in cardsArr) {
//       shuffling.push(cardsArr[i]);
//       delete cardsArr[i];
//       n--;
//     }
//   }
//   return shuffling;
// };

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1;
  if (this.cards[firstCard] == this.cards[secondCard]){
    this.pairsGuessed += 1;
    return true;
  } else {
    return false;
  } 
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed == this.cards.length/2){
    return true;
  } else {
    return false;
  }
};


