class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = []; // the cards the user have clicked
    this.pairsClicked = 0; 
    this.pairsGuessed = 0; 
  }
  shuffleCards() {}
  checkIfPair(card1, card2) {}
  isFinished() {}
}

MemoryGame.prototype.shuffleCards = function() {
  this.cards.sort(() => Math.random() - 0.5);
  //console.log(this.cards);
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked++;
  console.log("FirstCardName", firstCard);
  console.log("SecondCardName", secondCard);
  console.log("PairsClicked",this.pairsClicked);
  $("#pairs_clicked").text(this.pairsClicked);
  if (firstCard === secondCard){
    this.pairsGuessed++;
    $("#pairs_guessed").text(this.pairsGuessed);
    console.log("PairsGuessed",this.pairsGuessed);
    return true;
  }else{
    return false;
  }
};

MemoryGame.prototype.isFinished = function() {
  if (this.pairsGuessed >= this.cards.length/2){
    alert("finished");
    return true;
  }else{
    return false;
  }
};
