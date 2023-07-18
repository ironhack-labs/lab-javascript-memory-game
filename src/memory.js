class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

    // add the rest of the class properties here

    console.log(this.cards)
  }

  

  shuffleCards() {

    if (!this.cards){
      return undefined
    }
    

    // ... write your code here

    //const cardsCopy = JSON.parse(JSON.stringify(this.cards)) 

    
    this.cards.sort(() => Math.random() - 0.5);
    

    return this.cards

  }

  checkIfPair(card1, card2) {
    // ... write your code here
        this.pairsClicked++
     
     
     if (card1 === card2){
        
        this.pairsGuessed++

        return true
      }

      return false


    // console.log(card1, card2)
  }

  checkIfFinished() {
    // ... write your code here

    if (this.pairsGuessed === 12){
      return true
    }else{
      return false
    }
  }
}



