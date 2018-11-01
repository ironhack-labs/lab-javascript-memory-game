var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = []
  this.pairsGuessed = 0;
  this.pairsClicked= 0;
  this.paired = false;
};

MemoryGame.prototype.shuffleCards = function () {
  var currentIndex = this.cards.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
};

MemoryGame.prototype.loadGame = function () {
  let html = '';
  this.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });
  $('#memory_board').html(html);
}

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    if (firstCard == secondCard) {
      this.paired = true
      this.pairsGuessed +=1;
      this.pairsClicked +=1;
    } else {
      this.pairsClicked +=1
    }
    return this.paired
}

MemoryGame.prototype.playGame = function (card) {
    $(card).children().one().toggleClass("back front")
    $(card).children().addClass("turned blocked")
    $(".card").find(".change").toggleClass("front back")
    $(".card").find(".change").removeClass("change")
    this.pickedCards.push($(card).children().one().attr("name"))
    console.log(this.pickedCards)
    if (this.pickedCards.length == 2) {
      this.checkIfPair(this.pickedCards[0],this.pickedCards[1]);
      console.log(this.paired)
      this.pickedCards = []
      if (this.paired == false) {
        $(".card").find(".turned").addClass("change")
        $(".card").find(".turned").removeClass("blocked")
      }
      $(".card").find(".turned").removeClass("turned")
      this.paired = false
      } 
    $("#pairs_clicked").html(this.pairsClicked)
    $("#pairs_guessed").html(this.pairsGuessed)
    console.log(this.pairsClicked)
    console.log(this.pairsGuessed)
  }; 

MemoryGame.prototype.isFinished = function () {
};
