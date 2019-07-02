class MemoryGame {
  constructor(card){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards();
  }

  shuffleCards() { 
    
    for(let i = 0; i< this.cards.length ; i++){
      let randomCard = Math.floor( (Math.random() * this.cards.length));
        let temp = this.cards[i];
        this.cards[i] = this.cards[randomCard];
        this.cards[randomCard] = temp;
      } 
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if(card1 === card2){   
      this.pairsGuessed += 1;
      this.isFinished()
      return true;
    }else{
      return false;
    }  
  }
  isFinished() {
    if(this.pairsGuessed == 1){
      $("#memory_board").append("<div class='pink'>YOU WON!!!</div>")
      $(".pink").css({"color":"pink","font-size":"4em","width":"50%","margin":"0 auto"});
    }
  }
}