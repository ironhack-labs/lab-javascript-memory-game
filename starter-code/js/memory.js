class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.shuffleCards() ;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    if(this.cards.length > 0){
      let randomCards = [];
      for(let i = 0; i<this.cards.length; i++){
        let randomNumber = Math.floor( Math.random() * this.cards.length );
        while(randomCards.indexOf( randomNumber )!==-1){
          randomNumber = Math.floor( Math.random() * this.cards.length )
        }
        randomCards.push( this.cards [ randomNumber ] ) 
      }
      this.cards = randomCards
    }
  }
  checkIfPair(card1,card2) {
    this.pairsClicked++;
    if(card1 === card2) {
      this.pairsGuessed++;
      this.blocked();
      this.pickedCards = [];
      return true
    }
    else{
        this.disturned();
        this.pickedCards = [];
      return false
    }
    
  }
  
  isFinished() {
    if(this.pairsGuessed === this.cards.length/2){
      return true;
    }
    else return false
  }
  blocked(){
    for(let i;i<2;i++){
      this.pickedCards[i].className += ' blocked';
    }
  }
  turned(card){
    card.className +=' turned';
  }
  disturned(){
    let pickedCardsTemp = this.pickedCards;
    let temp;
    setTimeout(() => {
      for(let i=0;i<2;i++){
        temp = pickedCardsTemp[i].className.split(' turned')[0]
        pickedCardsTemp[i].className = temp;
      }
    }, 2000);
  }
}