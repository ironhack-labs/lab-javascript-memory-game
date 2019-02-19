var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  
  });
  
  var MemoryGame = function (cards) {
    
    this.cards = cards;
    this.pickedCards = [];
    this.firstCard = "";
    this.secondCard = "";
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.html = "";

  
  //reset deck 

  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  $("#pairs_clicked").text(this.pairsClicked);
  $("#pairs_guessed").text(this.pairsGuessed);

  //shuffle 
  var currentIndex = array.length,
      temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

  //NEW
  this.startNewGame(array);
}

// STARTS 
this.startNewGame = function (shufledCards) {
  var html = '';
  shufledCards.forEach(function (pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
    html += '</div>';
  });
  $('#memory_board').html(html);
  this.listenToClicks();
}


this.listenToClicks = function () {
  $('.back').click(function (cardClick) {
    if (this.pickedCards.length % 2 == 0) {

      this.firstCard = $(cardClick.target);
      this.pickedCards.push(this.firstCard);
      this.toggleCard(this.firstCard)

    } else {
      this.secondCard = $(cardClick.target);
      this.pickedCards.push(this.secondCard);
      this.toggleCard(this.secondCard)
      this.checkIfPair(this.firstCard, this.secondCard);
    }
  }.bind(this))
};

this.checkIfPair = function (firstCard, secondCard) {
  (firstCard.parent().attr('data-card-name') === secondCard.parent().attr('data-card-name')) ?
  (this.pairsClicked++, this.pairsGuessed++) : (this.pairsClicked++, setTimeout(function () {
    this.toggleCard(firstCard),
      this.toggleCard(secondCard)
  }.bind(this), 1000))
  $("#pairs_clicked").text(this.pairsClicked);
  $("#pairs_guessed").text(this.pairsGuessed);
  this.isFinished()
}

this.isFinished = function () {
  this.pairsGuessed === 12 ? (this.winner(), this.shuffleCards(this.cards)) : false;
}

this.toggleCard = function (cardToFlip) {
  cardToFlip.toggleClass("back front");
  cardToFlip.parent().children(":last-child").toggleClass("front back");
}
this.winner = function () {
  alert(`YOU SUCK' ${this.pairsClicked} "OK"`)
};



