class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    let shuffledCards = [];
    let shuffleCounter = this.cards.length;    
    while(shuffleCounter > 0){
      let random = Math.floor(Math.random() * shuffleCounter);
      shuffledCards.push(this.cards.splice(random,1)[0]);
      shuffleCounter = this.cards.length; 
    }    
   
    this.cards = shuffledCards; 

   
  }
  checkIfPair(card1, card2) {
    let sameCard = false;
    this.pairsClicked++;
    if (card1 === card2){
      this.pairsGuessed++;
      sameCard = true;
    }
    let showClicked = $("#pairs_clicked");
    let showGuessed = $("#pairs_guessed");    
    showClicked.html(this.pairsClicked);
    showGuessed.html(this.pairsGuessed);
    return sameCard;
  }
  isFinished() {
    let numberOfPairs = this.cards.length/2;
    let win = false;
    if (this.pairsGuessed === numberOfPairs){
      let youWon = $("#win");
      youWon.html(`You won!`);
      win = true;
    }
    return win; 

  }
}