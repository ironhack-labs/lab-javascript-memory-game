
class MemoryGame{
  constructor(cards){
    this.cards = cards
    this.pickedCards = {}
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards(){
    let self = this.cards
    for(let i=0;i<self.length-1;i++){
      let j= Math.floor(Math.random()*self.length)
      let aux =[]
      aux=self[i]
      self[i]=self[j]
      self[j] = aux
    }
  }

  checkIfPair(card1,card2){
    this.pairsClicked++
    if (card1 == card2) {
      this.pairsGuessed++
      return true
    }
    else{      
      return false
    }
  }

  isFinished(){
    let self = this.pairsGuessed
    if(self==12){
      return true
    }else{
    return false
    }
  }
}

