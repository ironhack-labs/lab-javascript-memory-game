var MemoryGame = function (cards) {
  // all the cards  (24)
  this.cards = cards;
  // the length of this array is 2 and it contains 2 cards that we are comparing
  this.pickedCards = [];
  // the goals is to get 12 guessed pairs
  this.pairsGuessed = 0;
  // this number updates every 2 cards clicked
  this.pairsPicked = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  this.cards = _.shuffle(cardsArr);
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    // count every 2 clicks
    this.pairsPicked ++;
    // updates span with id "pairs_clicked" with current numbers
    $("#pairs_clicked").text(this.pairsPicked);

  if (firstCard === secondCard){
    $(".back").addClass("blocked");  
    $(".just-clicked").addClass("blocked-for-real");
    // counts the pairs
   this.pairsGuessed ++;
   $("#pairs_guessed").text(this.pairsGuessed);
   $(".just-clicked").removeClass("just-clicked");
   $(".back").removeClass("blocked");
  }
  else {
    $(".back").addClass("blocked");
    setTimeout(function(){
      $(".just-clicked").css("background", "#456783");
      $(".just-clicked").removeClass("just-clicked");
      $(".back").removeClass("blocked");
    }, 500);
   
  }
  this.pickedCards = [];
  this.finished();
    
};

MemoryGame.prototype.finished = function () {
  if (this.pairsGuessed === 12){
    setTimeout(function(){
      alert("YOU WIN");
    },500);}
};