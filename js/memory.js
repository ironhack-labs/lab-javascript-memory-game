class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

    }


    shuffleCards(array) 
      { if(!array)
      { return undefined }
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let random = array[i];
        array[i] = array[j];
        array[j] = random;
      } 
      console.log(array);
      }
    


    checkIfPair(card1, card2) {
      this.pairsClicked ++ ;
      if(card1 === card2){
        this.pairsGuessed ++;
        return true;
   
      } else if(card1 !== card2){
        return false;
      }
    }



    isFinished() {
      if(this.pairsGuessed===0){
        return false;
      }
      if(this.pairsGuessed <= 6){
        return false;
      }
      if(this.pairsGuessed = 12){
        return true;
      }
      
    }
  
  }
