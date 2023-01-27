
//---------------------------------------------------------------------------

class MemoryGame {
  constructor(cards) {
    if(cards){
    this.cards = cards;
    this.cardsClone = cards.map(card=>card)

    // add the rest of the class properties here
    this.pickedCards=[];
    this.pairsClicked=0;
    this.pairsGuessed=0;
    }
  }
//----------------------------------------------------------------------------  

  shuffleCards() {
    // ... write your code here
    
    if(!this.cardsClone){
      return undefined;
    }
    else{
      let arrayShuffled = [];
      while (this.cardsClone.length>0){
          let index = Math.floor(Math.random() * this.cardsClone.length);
          let randomLetter = this.cardsClone[index];
          arrayShuffled.push(randomLetter);
          this.cardsClone.splice(index, 1);       
      }
      this.cards = arrayShuffled
      return this.cards;
    }    
  }

//----------------------------------------------------------------------------  

  checkIfPair(card1, card2) {
    // ... write your code here
    
      this.pairsClicked+=1
    if (card1===card2){
      this.pairsGuessed+=1;
      return true;
    }
    return false;
  }

//----------------------------------------------------------------------------  

  checkIfFinished() {
      // ... write your code here
      if(this.cards === undefined) {
        return false;

      } else if (this.pairsGuessed >= 0 && this.pairsGuessed < this.cards.length/2){
        return false
      
      } else if (this.pairsGuessed===(this.cards.length/2)){
        return true;
      }
    }
  }



//Testing----------------------------------------------------------------------  

/*let myCards = ['A','B','A','C','C','B'] 

let myGame = new MemoryGame(myCards)

//Before game-------------------------------

console.log(myGame.cards); //Array of 6 elements

console.log(myGame.cardsClone); //Identical array of 6 elements

console.log(myGame.cards.length); // 6

console.log(myGame.cardsClone.length); // 6

console.log(myGame.shuffleCards()); // Array shuffled

console.log(myGame.cards); //Array shuffled

console.log(myGame.cardsClone); // [ ]

console.log(myGame.cardsClone.length); // 0

console.log(myGame.cards===myGame.shuffleCards()); // false


//During game-------------------------------

console.log(myGame.checkIfPair('A','B'));

console.log(myGame.checkIfFinished());

console.log(myGame.checkIfPair('A','A'));

console.log(myGame.checkIfFinished());

console.log(myGame.checkIfPair('B','C'));

console.log(myGame.checkIfFinished());

console.log(myGame.checkIfPair('B','B'));

console.log(myGame.checkIfFinished());

console.log(myGame.checkIfPair('C','C'));

//After game-------------------------------

console.log(myGame.pairsClicked);
console.log(myGame.pairsGuessed);
console.log(myGame.cards.length);
console.log(myGame.checkIfFinished());


let myGame2 = new MemoryGame()
console.log(myGame2.shuffleCards());*/



