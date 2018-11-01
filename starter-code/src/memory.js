





class MemoryGame{
  constructor(cards){
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

shuffle(){

let i = this.cards.length, j, temp;
  while(--i > 0){
    j = Math.floor(Math.random() * (i + 1))
    temp = this.cards[j]
    this.cards[j] = this.cards[i]
    this.cards[i] = temp;
  }

}
  
 checkIfPair(){

   let card1 = this.pickedCards[0]
   let card2 = this.pickedCards[1]

   

   if(card1 === card2){
     this.pairsGuessed++

    card1.toggleClass('front').toggleClass('back')
    card2.toggleClass('front').toggleClass('back')
    console.log("HEROS MATCHED!!!")
    return true;
    
   } else {
      card1.toggleClass('back')
      card2.toggleClass('back')
      this.pairsClicked = 0
      return false
   }
  
 }
 }