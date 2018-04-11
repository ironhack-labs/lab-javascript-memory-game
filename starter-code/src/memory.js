var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  this.currentPair = [];
};



MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var m = cardsArr.length, t, i;
    
  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    
    // And swap it with the current element.
    t = cardsArr[m];
    cardsArr[m] = cardsArr[i];
    cardsArr[i] = t;
    //console.log(m,i,t);
  }

  return cardsArr;

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    var paired = false;
    this.pairsClicked += 1;
    $('#pairs_clicked').text(this.pairsClicked);
    if(firstCard === secondCard){
        $('.back').addClass('blocked');
        this.pairsGuessed += 1;
        this.currentPair = [];
        paired = true;
        $('#pairs_guessed').text(this.pairsGuessed);
    }else{
        $('.back').addClass('blocked');
        $('.just-clicked').css("background", "#456783")
        

    }
    this.currentPair = [];
    $('.back').removeClass('blocked');
    $('.just-clicked').removeClass('just-clicked');
    return paired;
    console.log("check pair");
}

MemoryGame.prototype.finished = function () {

};
