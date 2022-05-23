class MemoryGame {
  constructor(cards, pickedCards, pairsGuessed, pairsClicked) {
    this.cards = cards;
    this.pickedCards = pickedCards;
    this.pairsClicked  = pairsClicked;
    this.pairsGuessed = pairsGuessed;
    // add the rest of the class properties here
  }

  shuffleCards(array) {

    if(array.length === 0){
      return undefined
    } else {
      var m = array.length, t, i;

      // While there remain elements to shuffle…
      while (m) {
  
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
  
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
  
      return array;
    }
  }

  checkIfPair(card1, card2, pairPickedCards) {


    if (card1.attributes[1].value === card2.attributes[1].value){
      pairPickedCards.pop()
      pairPickedCards.pop()
      return true
    } else {
        setTimeout(() => {
          card1.classList.remove('turned')  
          card2.classList.remove('turned')
          pairPickedCards.pop()
          pairPickedCards.pop()
        }, 500); 
        return false
    }

  }

  checkIfFinished(totalGuessed) {
    if(totalGuessed === 12) {
      setTimeout(() => {
        alert("Juego Culminado")

      }, 500);
      return true
    } else {
      return false
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
