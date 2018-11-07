var MemoryGame = function (cards) {
  this.cards = cards
  this.pickedCards = []
  this.pairsClicked = 0
  this.pairGuessed = 0
};

MemoryGame.prototype.shuffleCards = function () {
  var j, x, i;
    for (i = this.cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = x;
    }
};


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  firstCard = tarjetas[0]
  secondCard = tarjetas[1]
  if(tarjetas[0]== tarjetas[1]){

    alert=("Bien hecho! Has encontrado un par")
    this.pairGuessed ++
  }else{
    $('.front').click(function (e) {
      $(this).removeClass('front')
      $(this).addClass('back')
  
      $(this).next().removeClass('back')
      $(this).next().addClass('front')
      console.log(e)
      console.log("front")
    })
  }
}

MemoryGame.prototype.isFinished = function () {
  if(this.pairGuessed=12){
    alert("You won")
  }
};