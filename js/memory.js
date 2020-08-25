class MemoryGame {
  constructor(cards){
    this.cards = cards;
    
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
   shuffleCards(car) {
    if (!car) return undefined

    let shufCards = new Array(car.length)

    function random(){
      return  Math.floor(Math.random()*car.length)
    }

    function shuffling(arr, card){
      let randomPosition = random()
      if(!arr[randomPosition]){
        arr[randomPosition] = card
      }
      else {
        shuffling(arr , card)
      }    
    }


      for(let i = 0; i < car.length; i++){
      shuffling(shufCards, car[i])
      }
      let cards = shufCards
  return cards
  }


    

  
  checkIfPair(card1, card2) {
    this.pairsClicked++

    if(card1 === card2){
      this.pairsGuessed++
      return true
    } else{
      return false
    }
  }
  
  isFinished() {
    if(this.pairsGuessed === 12){
      return true
    }else {
      return false
    }
  }
}
