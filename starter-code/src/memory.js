var MemoryGame = function (cards) {

  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function (cards) {
  
  
  var remElem = cards.length
  let t; 
  let i; 

  // if there are remaining elements to shuffle in words
  while(remElem){ 

    // picks a remaining element
    i = Mathfloor(Math.random()* remElem--)

    // switch them
    t = cards[remElem];
    cards[remElem] = cards[i];
    cards[i] = t;
  }
return cards;
};


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

  

if (firstCard.data-card-name == secondCard.data-card-name){
  // is a pair
  firstCard.removeEventListener('click');
  secondCard.removeEventListener('click');
 
  // not a pair
} else {
  firstCard.classList.remove('back');
  secondCard.classList.remove('back');
}
};

MemoryGame.prototype.isFinished = function () {

};







