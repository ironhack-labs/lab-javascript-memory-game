var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
    var copy = [], n = this.cards.length, i;
  
    // While there remain elements to shuffle…
    while (n) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * n--);

      // And move it to the new array.
      copy.push(this.cards.splice(i, 1)[0]);
    }
    return copy;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard === secondCard){
    this.pairsGuessed++;
    
    $('#pairs_guessed').html(this.pairsGuessed);
    this.pickedCards = [];
  }
  else { 
  
    setTimeout(this.flipCardsBack.bind(this), 1000);
  }
 
  $('#pairs_clicked').html(this.pairsClicked);
};

MemoryGame.prototype.isFinished = function () {
  
  if (this.pairsGuessed === 12) {
    setTimeout(function(){alert('WIN!!!!!!')},1000); 
  } 
  else {
  }
};

MemoryGame.prototype.flipCardsBack = function () {  
  this.pickedCards[0].children().toggleClass('front back');
  this.pickedCards[1].children().toggleClass('front back');
  this.pickedCards = [];
}