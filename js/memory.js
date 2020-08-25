class MemoryGame {
  constructor(cards){
    this.cards=cards;
    this.pickedCards= []
    this.pairsClicked = 1;
    this.pairsGuessed = 0;
  }

  shuffleCards=(cards)=>{

    for(let i = this.cards.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = this.cards[i]
      this.cards[i] = this.cards[j]
      this.cards[j] = temp
    }
  return cards;
  }
  
  
  checkIfPair(card1, card2) {
    
    this.pairsClicked++
    
    
    if(card1==card2){
      this.pairsGuessed++
      return true
    }
    else return false
      
    
  }
  isFinished() {

if (this.pairsGuessed=== (this.cards.length/2)) return true
else return false;

  }
}














