var MemoryGame = function (thingsIPassIn) {
  this.cards = thingsIPassIn;
  // When cards are clicked, check the length to see how many cards have been clicked.
  this.currentPair = []; 
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

// Takes in an array and then shuffles it. 
MemoryGame.prototype.shuffleCard = function (cardsArr) {

// Currently buggy. Not showing all the boxes.

  // var shuffledArray = [];

  // // Grab a random card and push it into the shuffleArray.  
  // cardsArr.forEach(function(theCard, theIndex)
  //   var randomCardIndex = Math.floor(Math.random() * cardsArr.length); // Returns a number.

  //   // Pushes the card into our new array.
  //   shuffledArray.push(cardsArr[randomCardIndex]);
    
  //   // Which card do I want to delete? cardsArr.splice(index,count) 
  //   // Removes the selected number from the array so it can't come up again.
  //   cardsArr.splice(randomCardIndex,1);
  // ;
  // this.cards = shuffledArray; // Gives us the newly created array.

  // Using Lodash's shuffle method. 
  this.cards = _.shuffle(cardsArr);
};

MemoryGame.prototype.selectCard = function(){

};

// If you click a second card, it will run this function.
MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

  this.pairsClicked++; // Adds one to the pairs clicked counter.
  $('#pairs_clicked').text(this.pairsClicked); // Updates the pairs clicked in HTML.

    if(firstCard === secondCard){ // If the first card is equal to the second card...

      $('.back').addClass('blocked'); // Can't click anything while DOM is updated.
      $('.just-clicked').addClass('permaBlocked'); // Permablocks the pair

      this.pairsGuessed ++; // Adds one to the pairs guessed counter.
      $('#pairs_guessed').text(this.pairsGuessed); // Updates the pairs guessed in HTML.

      $('just-clicked').removeClass('just-clicked');
      $('.back').removeClass('blocked'); // Can't click anything while DOM is updated.
      
    }
    else{
      $('.back').addClass('blocked'); 

      setTimeout(function(){
        $('.just-clicked').css("background","#5685c2"); // This needs to wait a second.
        $('just-clicked').removeClass('just-clicked');
        $('.back').removeClass('blocked'); // Can't click anything while DOM is updated.
      },1000); // Color changes back to blue after a certain duration..      
    }
  this.currentPair = []; // Empties the current pairs.     
  this.finished();
};

MemoryGame.prototype.finished = function () {
  if(this.pairsGuessed > 11){
    alert("You win!");
  }
};
