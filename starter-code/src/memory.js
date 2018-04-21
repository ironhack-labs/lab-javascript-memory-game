var MemoryGame = function (cards) {
//all cards[24]  
  this.cards = cards;
  // the length of this array is always 2 and it contains 2 cards that we compare
  this.pickedCards = [];
  //The goal is to get to 12 guessed pairs
  this.pairsGuessed = 0;
  //This number updates ecery 2 cards picked
  this.pairsClicked = 0;
};

 MemoryGame.prototype.shuffleCard = function (cardsArr) {
   this.cards = _.shuffle(cardsArr);
   // calling lodash method for shuffle and passing parmeter cards array
   console.log("shuffled Array: ", this.cards);
 };

  MemoryGame.prototype.checkIfPair = function(firstCard, secondCard){
  //cont every 2 clicks
    this.pairsClicked ++;
  //update multi
  $("#pairs_clicked").text(this.pairsClicked);
  //do the  2 cardlick with current numberss match?
    
if(firstCard === secondCard){
      $(".back").addClass("blocked");
      $(".just-clicked").addClass("blocked-for-real");
  // console.log("Match");
   //count the pairs
      this.pairsGuessed ++;
      $("#pairs_guessed").text(this.pairsGuessed);
      $(".just-clicked").removeClass("just-clicked");
      $(".back").removeClass("blocked");

    }else{
      $(".back").addClass("blocked");
      setTimeout(function(){  
      $(".just-clicked").css("background", "#456783");
      $(".just-clicked").removeClass("just-clicked");
      $(".back").removeClass("blocked");

    }, 1000);
   

  }
  this.pickedCards = [];
  this.finished();
  } 

// MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

// }

MemoryGame.prototype.finished = function () {
if(this.pairsGuessed >11 ){
  alert("Winner") 
}
}