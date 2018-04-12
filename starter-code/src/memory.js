

// MemoryGame constructor - function that builds an object

var MemoryGame = function (cards) {
  this.cards = cards;
  this.currentPair = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

// MemoryGame shuffle method
MemoryGame.prototype.shuffleCard = function (cardsArr) {
//   var shuffledArray = [];
//   cardsArr.forEach(function(theCard,theIndex){
//     var randomCardIndex = Math.floor(Math.random()  * cardsArr.length);
//     shuffledArray.push(cardsArr[randomCardIndex]);
//     cardsArr.splice(randomCardIndex,1)
//   })
//   function shuffleArray(cardsArr) {
//     for (var i = cardsArr.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = cardsArr[i];
//     };
//     this.cards = shuffledArray;

    this.cards = _.shuffle(cardsArr);
  };


// When a user pick 2 cards, we will need to check if they are the same. Let's create a method checkIfPair, that will receive two parameters (both cards selected by the user). The method will add 1 to our pairsClicked property, and if the cards are the same also add 1 to pairsGuessed.
MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  $('#pairs_clicked').text(this.pairsClicked);

  if (firstCard === secondCard){
    $('.back').addClass('blocked');
    $('.just-clicked').addClass('permaBlocked');
    this.pairsGuessed++;
    $('#pairs_guessed').text(this.pairsGuessed);
    $('.just-clicked').removeClass('just-clicked');
    $('.back').removeClass('blocked');
    // if(this.finished()){
    //   alert("CONGRATULATIONS!!! Refresh the game to start over.");
    // }
} else {

    $('.back').addClass('blocked');


    setTimeout(function(){
    $('.just-clicked').css('background',"#456783");
    $('.just-clicked').removeClass('just-clicked');
    $('.back').removeClass('blocked');

    },1000);
  }

    this.currentPair = [];
    this.finished();
}

MemoryGame.prototype.finished = function () {
  // totalPairs = this.cards.length / 2;
  // if(this.pairsGuessed < totalPairs){
  //   return false;
  // }
  // else{
  //   return true;
  // }
  if(this.pairsGuessed > 11){
  alert("Yay, you won!");
}
};



// MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
//   $('.back').addClass('blocked');
//   this.pairsClicked++;
//   $('#pairs_clicked').text(this.pairsClicked);
//   if(firstCard === secondCard){
//     this.pairsGuessed++;
//     $('#pairs_guessed').text(this.pairsGuessed);
//     $('.just-clicked').removeClass('just-clicked');
//     $('.back').removeClass('blocked');
//     if(this.finished()){
//       alert("CONGRATULATIONS!!! Refresh the game to start over.")
//     }
//   }
//   else{
//     var explode = function(){
//       $('.just-clicked').parent().children().toggleClass("front back");
//       $('.just-clicked').removeClass('just-clicked');
//       $('.back').removeClass('blocked');
//     };
//     setTimeout(explode, 2000);
//   }
//   this.currentPair = [];
// }

// MemoryGame.prototype.finished = function () {
//   totalPairs = this.cards.length / 2;
//   if(this.pairsGuessed < totalPairs){
//     return false;
//   }
//   else{
//     return true;
//   }
// };

