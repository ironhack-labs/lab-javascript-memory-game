var MemoryGame = function (cards) {
  this.cards = cards;
  // this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  this.currentPair = [];
};


MemoryGame.prototype.shuffleCard = function (cardsArr) {
  //my original loop //t is my temp
  // var m, t;

  // for (var i = cardsArr.length - 1; i > 0; i--){
  //     m = Math.floor(Math.random() * (i + 1));
  //     t = cardsArr[i];
  //     cardsArr[i] = cardsArr[m];
  //     cardsArr[m] = t;
  //   }

  // return cardsArr;
//------------------end of my og loop
//   var shuffledArray = [];
// //   cardsArr.forEach(function(theCard, theIndex){
// //       var randomCardIndex = Math.floor(Math.random() * cardsArr.length);//returns a number
// //       shuffledArray.push(cardsArr[randomCardIndex]);//puts number into index of array
// //       cardsArr.splice(randomCardIndex, 0); //will splce the item at the randomcardindex position, for a count of  .splice(index,count)
// // });
//   this.cards = shuffledArray; //same as return shuffledArray; but just creating it ..
this.cards = _.shuffle(cardsArr)

};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  // console.log("check pair");
  $(this).addClass("just-clicked");
  this.pairsClicked++;
  $('#pairs_clicked').text(this.pairsClicked);
  
  

console.log("first card test: ", firstCard)  



  if (firstCard === secondCard && $('.back')) {
    $(".back").addClass("blocked");
    $(".just-clicked").addClass("permaBlocked");
    //adds to pairs guessed
    this.pairsGuessed++;
    $('.just-clicked').removeClass('just-clicked')
    $(".back").removeClass("blocked");
    // $(".back").addClass("permaBlocked");


    
//changes the actual pairs guessed
    $('#pairs_guessed').text(this.pairsGuessed);

    
  } else{


   $('.back').addClass('blocked');
   setTimeout(function(){ 
    
    $('.just-clicked').css('background',"#456783");
    $('.just-clicked').removeClass('just-clicked')
    $(".back").removeClass("blocked");
  }, 500);
  //  $('.just-clicked').css('background',"#456783");

  }

  
  this.currentPair = [];
  this.finished();

};



MemoryGame.prototype.finished = function () {
if(this.pairsGuessed > 11){
alert("Youve Won in this many tries: " + $('#pairs_clicked').text() + " Restart Game");
location.reload();
}
};
