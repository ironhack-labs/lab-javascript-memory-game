var MemoryGame = function (cards) {
//all the cards (24)
  this.cards = cards;
//The length of this array is 2, and contains 2 cards that we're comparing
  this.pickedCards = [];
  //the goal is to get to 12 guessed pairs
  this.pairsGuessed = 0;
  //this number updates every 2 cards clicked
  this.pairsClicked = 0
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    // Calling lodash method for shuffle and passing cardsArr paramater
    this.cards = _.shuffle(cardsArr);
    console.log("Shuffled array: ", this.cards)
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    // counts every 2 clicks
    this.pairsClicked ++;
    // updates span with id "pairs_clicked" with current numbers
    $('#pairs_clicked').text(this.pairsClicked);
    
    // checks if two cards match
    if(firstCard === secondCard){
        $('.back').addClass('blocked');
        $('.just-clicked').addClass('blocked-for-real');

        console.log('you found a match! Looks like Tinder really worked out didn\'t it?')
        // counts the pairs
        this.pairsGuessed ++;
        // updates the span with id "pairs_guessed" with current numbers
        $('#pairs_guessed').text(this.pairsGuessed);
        $('.just-clicked').removeClass('just-clicked');
        $('.back').removeClass('blocked');

    } else {
        $('.back').addClass('blocked');
        setTimeout(function(){
            $('.just-clicked').css('background', '#456783')
            $('.just-clicked').removeClass('just-clicked')
            $('.back').removeClass('blocked');
        }, 1000);

        console.log('Sorry! Try again')
    }
    
    // every 2 cards resets the length of the array to 0
    // (empties the array because we only need two cards in it)
    this.pickedCards = [];
    this.finished();

}

MemoryGame.prototype.finished = function () {
    if (this.pairsGuessed>1){
        alert('Winner Winner Chicken Dinner!')
    }
};
