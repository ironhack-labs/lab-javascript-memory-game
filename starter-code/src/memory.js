function MemoryGame(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  var copyArr = cardsArr, randomPlaceholder, j;
  for (var i = copyArr.length - 1; i > 0; i--){
    j = Math.floor(Math.random() * (i + 1));
    randomPlaceholder = copyArr[i];
    copyArr[i] = copyArr[j];
    copyArr[j] = randomPlaceholder;
  }
  // return copyArr;
  this.cards = copyArr;
}

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked++;
    $('#pairs_clicked').text(this.pairsClicked);
    if (firstCard === secondCard){
      $('.just-clicked').addClass('blocked');
        this.pairsGuessed++;
        $('#pairs_guessed').text(this.pairsGuessed);
        $('.just-clicked').removeClass('just-clicked');
      } else {
        $('.back').addClass('blocked');
        setTimeout(function(){
          $('.just-clicked').css("background","#456783")
          $('.just-clicked').removeClass('just-clicked')
          $('.back').removeClass('blocked')}
          , 1000);      
        }
    this.pickedCards = [];
}

MemoryGame.prototype.finished = function () {
  if (this.pairsGuessed > 11){  
    return alert("You Win!!!");
  }
}
