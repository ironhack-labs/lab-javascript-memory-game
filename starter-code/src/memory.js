var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  for(var i = 0; i < this.cards.length -1; i++) {
  var index = Math.floor(Math.random()* this.cards.length)
  var element = this.cards[i] ;
  this.cards[i] = this.cards[index];
  this.cards[index] = element;
  }
}




MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
 this.pairsClicked += 1;
 if (firstCard == secondCard) {
   this.pairsGuessed += 1;
   return true;
 } else {
   return false;
 }
}

MemoryGame.prototype.isFinished = function () {
 if (this.pairsGuessed == this.cards.length/2) {
   return true;
 } else {
   return false;
 }
};

// $(".front").click(function() {
//   (this).toggleClass(".back");
// })




// $(document).ready(function(){
// });

// $('.back').click(function(){
// });

// $(".class")click(function ()) {
//  firstCard = $(".data-card-name")
