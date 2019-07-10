class MemoryGame {
  constructor(card){
    this.cards = card;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }


  shuffleCards() {

      var j, x, i;
      for (i = this.cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = x;
    }
    



//     function shuffleCards() {

//     var currentIndex = cards.length, temporaryValue, randomIndex; 
// //Mientras haya elementos que mezclar
//     while (0 !== currentIndex) {

      
//       //Coge los elementos que quedan...

//       randomIndex = Match.floor(Math.random() * currentIndex);
//       currentIndex -= 1;


//       temporaryValue = cards[currentIndex];
//       cards[currentIndex] = cards[randomIndex];
//       cards[randomIndex] = temporaryValue;


//     }
  }

  checkIfPair(card1, card2) {

    this.pairsClicked++;
    if (card1 == card2) {
      this.pairsGuessed++
      return true
      
    } else {
      return false
    }
  }

  isFinished() {

    if (this.pairsGuessed === this.cards.length / 2){
      return true 
    } return false
    
  }

  }

  // flipCard() {
  //   var front = document.getElementById("pairsClicked");
  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }
  // }




  
