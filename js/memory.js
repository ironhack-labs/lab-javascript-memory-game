class MemoryGame {
  constructor(cards){
    this.cards = cards;//= cardsArrys[
    //   { name: 'aquaman', img: 'aquaman.jpg' },
    //   { name: 'batman', img: 'batman.jpg' },
    //   { name: 'captain america', img: 'captain-america.jpg' },
    //   { name: 'fantastic four', img: 'fantastic-four.jpg' },
    //   { name: 'flash', img: 'flash.jpg' },
    //   { name: 'green arrow', img: 'green-arrow.jpg' },
    //   { name: 'green lantern', img: 'green-lantern.jpg' },
    //   { name: 'ironman', img: 'ironman.jpg' },
    //   { name: 'spiderman', img: 'spiderman.jpg' },
    //   { name: 'superman', img: 'superman.jpg' },
    //   { name: 'the avengers', img: 'the-avengers.jpg' },
    //   { name: 'thor', img: 'thor.jpg' },
    //   { name: 'aquaman', img: 'aquaman.jpg' },
    //   { name: 'batman', img: 'batman.jpg' },
    //   { name: 'captain america', img: 'captain-america.jpg' },
    //   { name: 'fantastic four', img: 'fantastic-four.jpg' },
    //   { name: 'flash', img: 'flash.jpg' },
    //   { name: 'green arrow', img: 'green-arrow.jpg' },
    //   { name: 'green lantern', img: 'green-lantern.jpg' },
    //   { name: 'ironman', img: 'ironman.jpg' },
    //   { name: 'spiderman', img: 'spiderman.jpg' },
    //   { name: 'superman', img: 'superman.jpg' },
    //   { name: 'the avengers', img: 'the-avengers.jpg' },
    //   { name: 'thor', img: 'thor.jpg' }
    // ];
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

    }


    shuffleCards(array) 
      { if(!array)
      { return undefined }
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (1+i));
        let random = array[i];
        array[i] = array[j];
        array[j] = random;
      } 
      console.log(array);
      }
    


    checkIfPair(card1, card2) {
      this.pairsClicked ++ 
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
      if(this.pairsGuessed < 12){
        return true;
      }
      
    }
  
  }
