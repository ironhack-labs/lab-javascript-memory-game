class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    let provisionalArray = []
 
    for (let i=this.cards.length-1;i>=0; i--){

    let index = Math.floor(Math.random()*this.cards.length)
    console.log(index)
    console.log(this.cards[index])
    let prov= this.cards[index]
    provisionalArray[i]=prov
    console.log(provisionalArray)
    console.log(this.cards)

    this.cards.splice(index,1)}

    return provisionalArray
  }
  checkIfPair(card1, card2) {
    this.pairsClicked+=1
    if (card1===card2){
      this.pairsGuessed+=1
      return true
    }else {return false}
  }
  isFinished() {
    console.log('executing isfinished')
    if (this.pairsGuessed<12){return false}
    else {return true};
  }
}