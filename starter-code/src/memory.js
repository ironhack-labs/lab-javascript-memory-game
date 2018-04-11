var MemoryGame = function (cards) {
  this.cards = cards;
  this.currentPair = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};


// Shuffle the cards
MemoryGame.prototype.shuffleCard = function(cardsArr) {
  // Using Lodash
  this.cards = _.shuffle(cardsArr);
};

// HAS A BUG WHICH ONLY SHUFFLES HALF THE CARDS
// MemoryGame.prototype.shuffleCard = function(cardsArr) {
//   var shuffledArray = [];
//   cardsArr.forEach(function(theCard, theIndex) {
//     // Generate a random number from 0-the number of cards in the array
//     var randomCardIndex = Math.floor(Math.random() * cardsArr.length);
//     // Push the card at that randomly generated index to a new shuffled array
//     shuffledArray.push(cardsArr[randomCardIndex]);
//     // Remove the card at that randomly generated index from the old array so it does not get pushed again
//     cardsArr.splice(randomCardIndex, 1);
//   });
//   // Override old array with the new shuffled array
//   this.cards = shuffledArray;
// };



// Check if cards are a pair
MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

  this.pairsClicked++;
  $('#pairs_clicked').text(this.pairsClicked);

  if(firstCard === secondCard) {
    $('.back').addClass('blocked');
    // Same as this.pairsGuessed += 1 and this.pairsGuessed = this.pairsGuessed + 1
    this.pairsGuessed++;
    $('#pairs_guessed').text(this.pairsGuessed);
  }
  else {
    $('.back').addClass('blocked');
    $('.just-clicked').css("background", "#456783");
  }
  this.currentPair = [];
  // Remove the just-clicked class from anything that has it
  $('.just-clicked').removeClass('just-clicked');
  $('.back').removeClass('blocked');
};

// MemoryGame.prototype.finished = function () {

// };
