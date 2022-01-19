class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0




  }

  shuffleCards(arr) { // scalpeado de internet ¯\_(ツ)_/¯
    // por alguna razon el test no pasa.
    // he probado a devolverlo en otro array, pero tampoco


    if (arr) {


      let m = arr.length
      let t
      let i

      // While there remain elements to shuffle…
      while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
      }

      return arr;
    }


    else { return undefined }
  }


  checkIfPair(card1, card2) {

    if (card1 === card2) {
      this.pairsClicked++
      this.pairsGuessed++

      return true
    }
    else {
      this.pairsClicked++
      console.log('no es pareja')
      return false
    }

  }

  checkIfFinished() {
    if (this.pairsGuessed < this.cards.length / 2) {

      return false
    }
    alert("YOU'VE BEATEN THE GAME")
    return true
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
