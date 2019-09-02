class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.currentCard = {};

  }
  shuffleCards() {
    var j, x, i;
    let a = this.cards;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return;
  }
  checkIfPair(card1, card2) {

    this.pairsClicked += 1;

    if (card1 === card2) {           //
      this.pairsGuessed += 1;
    }
    
    return (card1 === card2);

  }
  isFinished() {
    return (this.cards.length / 2 === this.pairsGuessed);
  }
  clickCard(){
    {
      this.currentCard.parentNode.childNodes[0].className = "front";
      this.currentCard.parentNode.childNodes[1].className = "back";
      //console.log('Card clicked: ', this.currentCard);

      this.pickedCards.push(this.currentCard); // in pickedCards aufnehmen
      
      if (this.pickedCards.length === 2) {

        if (this.checkIfPair(this.pickedCards[0].getAttribute('name'), this.pickedCards[1].getAttribute('name'))) { 
          alert("match!");
          document.getElementById('pairs_guessed').innerHTML = this.pairsGuessed;

        } else {

          alert("no match!");

           // flip first back
           this.currentCard.parentNode.childNodes[0].className = "back";
           this.currentCard.parentNode.childNodes[1].className = "front";

           // flip second back

           //console.log(this.pickedCards[0]);

           this.pickedCards[0].parentNode.childNodes[0].className = "back";
           this.pickedCards[0].parentNode.childNodes[1].className = "front";

        }
        document.getElementById('pairs_clicked').innerHTML = this.pairsClicked;
        this.pickedCards = [];
        
        if (this.isFinished()) {
          alert("finished!");
        }
      }



    };
  }

}