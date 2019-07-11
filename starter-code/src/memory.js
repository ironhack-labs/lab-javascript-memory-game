class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
   // this.shuffleCards(cards)
  }
  shuffleCards() {
   
    //if (arrCards.length === 0) {return undefined};

    let remainLength = this.cards.length;
    

    while (remainLength > 0) {
      let randomElement = Math.floor(Math.random() * remainLength);
      
      remainLength -= 1;

      let temporaryElement = this.cards[remainLength];
      this.cards[remainLength] = this.cards[randomElement];
      this.cards[randomElement] = temporaryElement;

      
    }
  
    
    //return arrCards;

  }
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;


    if (card1 === card2) {
      this.pairsGuessed += 1;
      
      document.querySelectorAll('.selected-card').forEach(function(card) {
      card.classList.remove('selected-card');
      card.classList.add('blocked')
      
      });

      
      setTimeout(() => {
        this.isFinished();
      }, 100);
      this.pickedCards = [];
      return true

    } else {
      console.log('NOT GUESSED')
     setTimeout(() => {
      document.querySelectorAll('.selected-card').forEach(function(card) {
        
        console.log('REMOVE Abaixo')
          card.classList.remove('selected-card');
    
          let divBack = card.querySelector('.back');
          let divFront = card.querySelector('.front');
    
          divBack.classList.toggle('front')
          divBack.classList.toggle('back')
    
          divFront.classList.toggle('front')
          divFront.classList.toggle('back')
    
         

          console.log('Card clicked')
    
      });

      this.pickedCards = [];
      }, 1500);
      
      return false;  
    }


  }
  isFinished() {
    if (this.pairsGuessed === (this.cards.length/2)) {
      alert('You Killed Thanos');

      document.location.reload()
      
      return true
    } else {
      return false;
    }
  }
}