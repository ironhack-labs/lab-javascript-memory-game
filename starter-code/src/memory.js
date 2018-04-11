var MemoryGame = function (cards) {
  this.cards = cards;
  this.currentPair=[];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

///This is what object will look like if we pass an 
/// var whatever = new MemoryGame()
///
///


MemoryGame.prototype.shuffleCard = function (cardsArr) {
  // var shuffleArray= [];
  // cardsArr.forEach(function(theCard, theIndex){
  //   var randomCardIndex = Math.floor(Math.random()* cardsArr.length);
  //   shuffleArray.push(cardsArr[randomCardIndex]);
  //   cardsArr.splice(randomCardIndex,  0);

  // });

  this.cards = _.shuffle(cardsArr);

  // return shuffleArray;
  // this.cards = shuffleArray;
}


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++
  $('#pairs_clicked').text(this.pairsClicked);

  if(firstCard === secondCard){
    $('.back').addClass('blocked');
    this.pairsGuessed++;

    $('#pairs_guessed').text(this.pairsGuessed);
    
  }
  else{
    $('.back').addClass('blocked');
    
    $('.just-clicked').css("background", "#456783");
    
  }
  this.currentPair =[];
  $('.just-clicked').removeClass('.just-clicked');
  $('.back').removeClass('blocked');
}

// MemoryGame.prototype.finished = function () {

// };
