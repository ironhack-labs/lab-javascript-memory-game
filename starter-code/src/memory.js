class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.guessCardOpenOne = "";
    this.guessCardOpenTwo = "";
    this.pairsGuessed = 0;
    this.pairsClicked = 0;
  }
  shuffleCards(cards = this.cards) {
    cards.forEach((element, index, array) => {
      let randomNumber = Math.floor(Math.random() * array.length);
      let tempShuffleOne = array[randomNumber];
      array[randomNumber] = element;
      array[index] = tempShuffleOne;
    })
  }
  guessCard(card) {
    if (!this.guessCardOpenTwo) {
      this.toggleGuessCards(card);
      this.guessCardOpenOne ? this.guessCardTwo(card) : this.guessCardOpenOne = card;
    }
  }
  guessCardTwo(cardTwo, cardOne = this.guessCardOpenOne) {
    this.guessCardOpenTwo = cardTwo;
    this.pairsClicked++;
    $('#pairs_clicked').html(this.pairsClicked);
    this.guessCardOpenOne.parent().data('card-name') === this.guessCardOpenTwo.parent().data('card-name') ? 
    (this.pairsGuessed++ , this.resetGuessCards()) :
    setTimeout(() => (this.toggleGuessCards(cardOne, cardTwo), this.resetGuessCards()), 1000);
    $('#pairs_guessed').html(this.pairsGuessed);
    setTimeout(() => this.pairsGuessed === this.cards.length / 2 ? MemoryGame.startNextGame() : "", 5000) ;    
  }
  toggleGuessCards(cardOne, cardTwo) {
    cardOne.toggleClass('back front');
    cardOne.siblings().toggleClass('front back');
    cardTwo ? (cardTwo.toggleClass('back front'), cardTwo.siblings().toggleClass('front back')) : "";
  }
  resetGuessCards() {
    this.guessCardOpenOne = "";
    this.guessCardOpenTwo = "";
  }
  static startNextGame() {
    let nextGame = new MemoryGame(cards);
    memoryGameArray.push(nextGame);
    nextGame.shuffleCards();
    let html = '';
    nextGame.cards.forEach(pic => {
      html += `<div class="card" data-card-name="${pic.name}"><div class="back" name="${pic.img}"></div>
              <div class="front" style="background: url(img/${pic.img}) no-repeat"></div></div>`
    })
    $('#memory_board').html(html);
    $('#pairs_clicked').html(nextGame.pairsClicked);
    $('#pairs_guessed').html(nextGame.pairsGuessed);
    $('.back').off();
    $('.back').click(function () {
    nextGame.guessCard($(this))
    });  
  }
}

