class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    const shuffleCards = (cards) => {
      for (let i = this.cards.length - 1; i >= 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1))
        this.cards.push(this.cards[randomIndex])
        this.cards.splice(randomIndex, 1)
      }
      return cards
    }

    // const shuffle = (array) => {
    //   for (let i = array.length - 1; i >= 0; i--) {
    //     const randomIndex = Math.floor(Math.random() * (i + 1));
    //     array.push(array[randomIndex]);
    //     array.splice(randomIndex, 1);
    //   }
    //   return array;
    // }    
    // const newArray = this.cards.slice()
    // for (let i = newArray.length - 1; i > 0; i--) {
    //   const shuffleCards = Math.floor(Math.random() * (i + 1))
    //   [newArray[i], newArray[shuffleCards]] = [newArray[shuffleCards], newArray[i]]
    // }
    // return newArray


    // Array.prototype.shuffle = function () {
    //   for (let i in this) {
    //     if (this.hasOwnProperty(i)) {
    //       let index = Math.floor(Math.random() * i);
    //       [
    //         this[i],
    //         this[index]
    //       ] = [
    //           this[index],
    //           this[i]
    // const newArr = arr.slice()
    // for (let i = newArr.length - 1; i > 0; i--) {
    //   const rand = Math.floor(Math.random() * (i + 1));
    //   [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    // }
    // return newArr
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsClicked += 1
      this.pairsGuessed += 1
      return true
    } if (card1 != card2) {
      this.pairsClicked += 1
      return false
    }
  }


  checkIfFinished() {
    if (this.pairsGuessed <= 0) {
      return false
    } if (this.pairsGuessed < 11) {
      return false
    } if (this.pairsGuessed = 12) {
      return true
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
