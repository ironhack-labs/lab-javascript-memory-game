class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = [pickedCards];
    this.pairsClicked = 1;
    this.pairsGuessed = 1;
  }
  shuffleCards(cards) {
 /*  let currentIndex = cards.length, temporaryValue, randomIndex;
  
   while (0 !== currentIndex) {

   randomIndex = Math.floor(Math.random() * currentIndex);
   currentIndex -= 1;
 
   temporaryValue = cards[currentIndex];
   cards[currentIndex] = cards[randomIndex]
   cards[randomIndex] = temporaryValue;     
      
   }
   return currentIndex;
   */
  for (let i = cards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
  return cards;
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {}
}
