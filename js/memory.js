class MemoryGame {


  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }


  shuffleCards(cards) {





    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = this.cards[i]
      this.cards[i] = this.cards[j]
      this.cards[j] = temp
    }


    //this.cards.sort(() => Math.random() - 0.5)


    // No sé muy bien por qué me falla este, 
    //no sé si es cosa de paréntesis

    // let m = this.cards.length,
    //   temp, i;

    // // Si aún hay cartas sin mezclar
    // while (m) {

    //   // Coge una que quede aún
    //   i = Math.floor(Math.random() * m--);

    //   // La intercambia
    //   temp = this.cards[m];
    //   this.cards[m] = cards[i];
    //   this.cards[i] = temp;
    // 



  }


  checkIfPair(card1, card2) {

    if (card1 === card2) {
      this.pairsClicked++
      this.pairsGuessed++

      return true
    } else {

      this.pairsClicked++
      return false
    }


  }

  isFinished() {
    if (this.cards.length / 2 > this.pairsGuessed) {
      return false
    } else {
      return true
    }
  }


}