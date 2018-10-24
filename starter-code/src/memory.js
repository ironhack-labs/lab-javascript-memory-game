var MemoryGame = function(cards) {
  this.cards = cards;
  this.shuffled = false;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  this.totalPairs = this.cards.length / 2;
};

MemoryGame.prototype.shuffleCards = function() {
  console.log("shuffling cards")
  this.shuffled = true;
  //ARRAY TO STORE CARDS IN RANDOMLY SELECTED CARDS
  let shuffledCards = [];
  let randomNum;
  randomNum = Math.floor(Math.random() * cards.length);

  //USE NUM AS THE INDEX TO SELECT RANDOM CARD IN THE ARRAY
  let randomIndexArray = function(num) {
    //CHECK IF RANDOM CARD IS IN THE SUFFLEDCARDS ARRAY
    if (shuffledCards.indexOf(cards[num]) !== -1) {
    } else {
      //IF NOT IN THE ARRAY PUSH IT
      shuffledCards.push(cards[num]);
      return shuffledCards;
    }
  };

  while (shuffledCards.length < cards.length) {
    //CREATE A RANDOM NUMBER BETWEEN 0 AND THE MAX INDEX OF THE ARRAY
    randomNum = Math.floor(Math.random() * cards.length);
    //SEND THIS NUMBER AS AN ARGUMENT TO RANDOMINDEXARRAY
    randomIndexArray(randomNum);
  }
  //ASSIGN SHUFFLEDCARDS ARRAY TO ORIGINAL CARDS ARRAY
  this.cards = shuffledCards;
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked += 1;
  console.log("checking");
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
}; /* 

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
