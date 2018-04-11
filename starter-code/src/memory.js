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
      this.pairsGuessed++;
        $('.back').addClass('blocked');
        $('#pairs_guessed').text(this.pairsGuessed);
      } else {
        $('.back').addClass('blocked');
        $('just-clicked').css("background","#456783");
      }
    this.pickedCards = [];
    $('.just-clicked').removeClass('just-clicked');
    $('.back').removeClass('blocked');
}

MemoryGame.prototype.finished = function () {
  window.alert("You Win!!!");
}
