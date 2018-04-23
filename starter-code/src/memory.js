var MemoryGame = function (cards) {
  // all the cards (24)
   this.cards = cards;
   // the length of this arry is 2, and it contains cards we are comparing
   this.pickedCards = [];
   // the goal is to get to 12 guessed pairs
   this.pairsGuessed = 0;
   // this number updates every 2 cards clicked
   this.pairsClicked = 0;
 };

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  // calling lodash method for shuffle and passing parameter cardsArr
  this.cards = _.shuffle(cardsArr);
  console.log("shuffled array: ", this.cards);
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  // counts every 2 clicks
  this.pairsClicked ++;
  // update span with id "pairs_check" with current numbers
  $("#pairs_clicked").text(this.pairsClicked);
  // check if two cards match
  if(firstCard === secondCard){
    $(".back").addClass("blocked");
    $(".just-clicked").addClass("blocked-for-real");
    //console.log("match!");
    // counts the pairs
    this.pairsGuessed ++;
    //  update span with id "pairs_guessed" with current numbers 
    $("#pairs_guessed").text(this.pairsGuessed);
    $(".just-clicked").removeClass("just-clicked");
    $(".back").removeClass("blocked");
  } else{
    $(".back").addClass("blocked");
    setTimeout(function(){
      $(".just-clicked").css("background", "#456783");
      $(".back").removeClass("blocked");
      $(".just-clicked").removeClass("just-clicked");
    }, 1000);
  }
  // every 2 cards resets the length of the array to 0
  // (empties the array because we need only two cards in it)
  this.pickedCards =[];
  this.finished();
}

MemoryGame.prototype.finished = function () {
  if(this.pairsGuessed > 1){
    // alert("Winner!");
    // just playing with some jQuery methods to practice 
    $(".card").toggle();
    $("#memory_board").append("<p class=\"yey\">You won</p>");
    $(".yey").fadeOut(3000);
    $("#memory_board").append("<p class=\"yey2\">Play again?</p>");
    $(".yey2").toggle();
    $(".yey2").fadeIn(3000);
    $("#memory_board").append("<a class=\"yey3\" href=\"memory.html\">Click here</a>");
    $(".yey3").toggle();
    $(".yey3").fadeIn(2000);
  }
};