var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsGuessed = 0;
  this.pairsClicked = 0;
 
 
  };

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  this.cards =_.shuffle(cardsArr);
  console.log("Shuffled array: ", this.cards)

 };

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  //coumts every two clicks
  // updates span with pairs_clicked with current nu  //check if two cards match
  this.pairsClicked ++; 
  $("#pairs_clicked").text(this.pairsClicked);
  if (firstCard === secondCard) {
    $(".back").addClass("blocked");
    $(".just-clicked").addClass("blocked-for-real");
    this.pairsGuessed ++;
    $("#pairs_guessed").text(this.pairsGuessed);
    $(".just-clicked").removeClass("just-clicked");
    $(".back").removeClass("blocked");
    
  } else {
    $(".back").addClass("blocked");
    
    setTimeout(function(){
      $(".just-clicked").css("background", "#456783");
      $(".just-clicked").removeClass("just-clicked");
      $(".back").removeClass("blocked");  
    }, 1000)
  }
  //every 2 cards reset the length of the array to 0 
  //empties the array
  this.pickedCards = [];
  this.finished();
};

MemoryGame.prototype.finished = function () {
  if (this.pairsGuessed > 11) {
    alert("Winner!")
  }
 };
