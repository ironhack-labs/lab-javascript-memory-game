// constuctor function ( builds an object)
var MemoryGame = function (cards) {
  this.cards = cards;
  this.currentPair = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};
//------------------------------------------------------------------/
// this is what it will look like if we pass it in aarbitrary array//
// var whatever = new MemoryGame([1,2,3,4,5])
// whatever 
//{cards: [1,2,3,4,5]}
//------------------------------------------------------------------/

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  // var shuffledArray = [];
  // cardsArr.forEach(function(theCard, theIndex){
  //   var randomCardIndex = Math.floor(Math.random() * cardsArr.length);
  //   shuffledArray.push(cardsArr[randomCardIndex]);
  //   cardsArr.splice(randomCardIndex, 1);
  //   });
  //   this.cards = shuffledArray; 

  //--------a convient way to shuffle method ----------//
 this.cards = _.shuffle(cardsArr);
  };
  

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  $("#pairs_clicked").text(this.pairsClicked);

  if(firstCard === secondCard){
   $(".back").addClass("blocked");
   this.pairsGuessed++;
  $("#pairs_guessed").text(this.pairsGuessed); 
   $(".back").addClass("blocked")

 } else {
  $(".back").addClass("blocked")
  $(".just-clicked").css("background", "#456783");

  
 }
 this.currentPair = [];
 $(".just-clicked").removeClass("just-clicked");
 $(".back").removeClass("blocked")
}

MemoryGame.prototype.finished = function () {

};
