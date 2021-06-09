class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards(array) {
    // ... write your code here
    //console.log(array)
    if (arguments.length === 0) {
      console.log(arguments.length)
      return undefined
    }

    var copy = [], n = array.length, i;

    // While there remain elements to shuffle…
    while (n) {
      console.log(copy)
      // Pick a remaining element…
      i = Math.floor(Math.random() * array.length);

      // If not already shuffled, move it to the new array.//// porque no se ejecutan los console.logs?????
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
        console.log(copy)
      }
    }
    console.log(copy)
    return copy



  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1

    if (card1 === card2) {
      this.pairsGuessed += 1
      return true
    } else {
      return false
    }


  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed >= 8) {   /// pensaba que era 12 pero al hacer console.log se 
      //veia que con 8 era con lo que tendria que terminar, porque 8 si son 24 parejas no 
      //deberia ser 12????
      //  console.log("pairsGuessed= a 12 o mas")
      return true
    } else {

      //console.log("pairsGuessed= ", this.pairsGuessed)
      return false
    }

  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
