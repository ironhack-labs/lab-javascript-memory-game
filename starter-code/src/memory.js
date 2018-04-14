var MemoryGame = function(cards) {
  this.cards = cards; //   ^^
  //            ^^ passsing into
  this.currentPair = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};
// this is what an object will look like if we pass an abituary array
// var whatever = new MemoryGame([1,2,3,4,5])
// whatever =
// {cards: [1,2,3,4,5]}
// ------------------
MemoryGame.prototype.shuffleCard = function(cardsArr) {
            // ^^ passes function into var
  // var shuffledArray = [];
  // cardsArr.forEach(function(theCard, theIndex){
  //   var randomCardIndex = Math.floor(Math.random() * cardsArr.length);
  //   shuffledArray.push(cardsArr[randomCardIndex]);
  //   cardsArr.splice(randomCardIndex, 1)
  //                 //^^take out this  ^^ count take out 1 time
  //   // shuffedArray.push(cardsArr[5])
  // });
 // this.cards = shuffledArray;
 // using lowdash shuffle method vvvv
  this.cards = _.shuffle(cardsArr);
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  $('#pairs_clicked').text(this.pairsClicked);
  if(firstCard === secondCard){
    $('.back').addClass('blocked');
    $('.just-clicked').addClass('permaBlocked');
    this.pairsGuessed++;
    // this.pairsGuessed+=1;
    // this.pairsGuessed = this.pairsGuessed + 1
    $('#pairs_guessed').text(this.pairsGuessed);
    $('.just-clicked').removeClass('just-clicked');
    $('.back').removeClass('blocked');
  }else{
    
    $('.back').addClass('blocked');
    
    setTimeout(function(){
      $('.just-clicked').css("background","#456783");
      $('.just-clicked').removeClass('just-clicked');
      $('.back').removeClass('blocked');
    },1000);
  }
  this.currentPair = [];
  this.finished();
}
MemoryGame.prototype.finished = function () {
  if(this.pairsGuessed > 11){
  alert("Yay, you won!")
  }
};
