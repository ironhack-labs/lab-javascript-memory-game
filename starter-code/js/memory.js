class MemoryGame {

  constructor(cards){
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0 
    this.pairsGuessed = 0 
  }

  shuffleCards(){
      
       var m = this.cards.length, t, i;

       // While there remain elements to shuffle…
       while (m) {
     
         // Pick a remaining element…
         i = Math.floor(Math.random() * m--);
     
         // And swap it with the current element.
         t = this.cards[m];
         this.cards[m] = this.cards[i];
         this.cards[i] = t;
       }

       // prguntar esto 
      return 
      if (!this.cards){
        return this.cards
      }
  
  }

  checkIfPair(card1, card2){
    
    this.pairsClicked++ 

    if (card1 === card2){

      this.pairsGuessed++

      return true

    }
    return false
  }

  isFinished(){ 

    if (this.pairsGuessed === this.cards.length / 2){
      return true
    }
    return false
  }
}