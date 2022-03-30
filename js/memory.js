class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    // ... write your code here
  }

  checkIfPair(card1, card2) {
    
 
    this.pairsClicked++

    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else {
      return false
     }

  }

  checkIfFinished() {
    if (this.pairsGuessed === 12) {
      return true
    } else
    {
      return false
    }
  }

  shuffleCards(newCards) { 


    if (newCards === undefined) { return undefined } else { 
    
    
        const temp = []
      
      
      const origin = newCards.map(eachNumer => eachNumer)

      newCards = []
      
        while(temp.length < origin.length){
        let random = Math.floor(Math.random()* origin.length+1)
        if(!temp.includes(random)){
        temp.push(random)
        }
        }

        for(let i=0; i< origin.length; i++){
        newCards[temp[i]] = origin[i]
        }

    newCards.shift()

    
    
      console.log(newCards)
      this.cards = []
      
      for (let i = 0; i < newCards.length; i++) { 
        this.cards[i] = newCards[i]

      }

    return newCards

  }
  }
  

  
}







// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
