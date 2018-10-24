var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  this.totalPairs = this.cards.length/2;
};

MemoryGame.prototype.shuffleCards = function() {
  let shuffledCards = [];
  let randomNum;
  randomNum = Math.floor(Math.random() * cards.length);
  
  let randomIndexArray = function(num) {
    if (shuffledCards.indexOf(cards[num]) !== -1) {
    } else {
      shuffledCards.push(cards[num]);
      return shuffledCards;
    }
  };

  while (shuffledCards.length < cards.length) {
    randomNum = Math.floor(Math.random() * cards.length);
    randomIndexArray(randomNum);
  }
  this.cards = shuffledCards;
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked += 1;
  console.log("checking")
  if (firstCard !== secondCard) {
    return false;
  } else if (firstCard === secondCard) {
    this.pairsGuessed += 1;
    return true;
  }
};

MemoryGame.prototype.isFinished = function() {
  if (this.pairsGuessed < this.totalPairs) {
    return false;
  } else {
    return true;
  }
};/* 

let randomNum;
let arrayInOrder = [1, 2, 3, 4, 5, 6];
let ranArray = [];
randomNum = Math.floor(Math.random() * arrayInOrder.length);

let randomIndex = function(n) {
  randomNum = Math.floor(Math.random() * arrayInOrder.length);
  randomIndexArray(randomNum);
};

//num is numbers in order like foreach
let randomIndexArray = function(num) {
  if (ranArray.indexOf(num) !== -1) {

  } else {
    ranArray.push(num);
    return ranArray;
  }
};

while (ranArray.length < arrayInOrder.length) {
  randomNum = Math.floor(Math.random() * arrayInOrder.length) + 1;
  randomIndexArray(randomNum);
}
 */