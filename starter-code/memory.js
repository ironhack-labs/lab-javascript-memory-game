// //******************************************************************
// // Game Logic
// //******************************************************************
var MemoryGame = function() {
  this.cards = [
      { name: "aquaman",         img: "aquaman.jpg" },
      { name: "batman",          img: "batman.jpg" },
      { name: "captain america", img: "captain-america.jpg" },
      { name: "fantastic four",  img: "fantastic-four.jpg" },
      { name: "flash",           img: "flash.jpg" },
      { name: "green arrow",     img: "green-arrow.jpg" },
      { name: "green lantern",   img: "green-lantern.jpg" },
      { name: "ironman",         img: "ironman.jpg" },
      { name: "spiderman",       img: "spiderman.jpg" },
      { name: "superman",        img: "superman.jpg" },
      { name: "the avengers",    img: "the-avengers.jpg" },
      { name: "thor",            img: "thor.jpg" },
      { name: "aquaman",         img: "aquaman.jpg" },
      { name: "batman",          img: "batman.jpg" },
      { name: "captain america", img: "captain-america.jpg" },
      { name: "fantastic four",  img: "fantastic-four.jpg" },
      { name: "flash",           img: "flash.jpg" },
      { name: "green arrow",     img: "green-arrow.jpg" },
      { name: "green lantern",   img: "green-lantern.jpg" },
      { name: "ironman",         img: "ironman.jpg" },
      { name: "spiderman",       img: "spiderman.jpg" },
      { name: "superman",        img: "superman.jpg" },
      { name: "the avengers",    img: "the-avengers.jpg" },
      { name: "thor",            img: "thor.jpg" },
    ];
    this.selectedCards = [];
    this.pairsClicked = 0;
    this.correctPairs = 0;
};

MemoryGame.prototype._shuffleCards = function() {
  var getRandomIndex = function(myArray) {
    return Math.floor(Math.random() * myArray.length);
  };
  var tempArray = [];
  var arrayLength = this.cards.length;
  for (var i = 0; i < arrayLength; i++) {
    var tempIndex = getRandomIndex(this.cards);
    tempArray.push(this.cards[tempIndex]);
    this.cards.splice(tempIndex, 1);
  }
  return tempArray;
};

function flipCard(cardId, side) {
  if (side === 'up') {
    $('#' + cardId + ' .back').removeClass('card-visible');
    $('#' + cardId + ' .front').addClass('card-visible');
  } else if (side === 'down') {
    $('#' + cardId + ' .back').addClass('card-visible');
    $('#' + cardId + ' .front').removeClass('card-visible');
  }
}

MemoryGame.prototype.selectCard = function(card) {
  if (this.selectedCards.length == 1) {
    console.log(this.selectedCards);
    if (card.id === this.selectedCards[0].id) {
      alert("You can't click on the same card twice!");
      return;
    }
    $('.card').unbind('click');
    this.pairsClicked++;
    $('#pairs_clicked').text(this.pairsClicked);
    flipCard(card.id, 'up');
    if (card.name === this.selectedCards[0].name) {
      this.correctPairs++;
      $('#pairs_guessed').text(this.correctPairs);
      if (this.finished()) {
        alert('Congratulations!!! You won!!! You are a memory genius!!!');
        return;
      }
      this.bindKeys();
      this.selectedCards = [];
    } else {
      var self = this;
      setTimeout(function(){
        flipCard(card.id, 'down');
        flipCard(self.selectedCards[0].id, 'down');
        self.selectedCards = [];
        self.bindKeys();
      }, 1000);
    }
  } else {
    flipCard(card.id, 'up');
    this.selectedCards.push(card);
  }
};

MemoryGame.prototype.finished = function() {
  return this.correctPairs === 12;
};

MemoryGame.prototype.bindKeys = function () {
  $('.card').on('click', function() {
    var card = {
      name: $(this).attr('name'),
      id: $(this).attr('id')
    };
    memoryGame.selectCard(card);
  });
};
//******************************************************************
// HTML/CSS Interactions
//******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';
  memoryGame.cards = memoryGame._shuffleCards();
  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card card_' + sanitizedName + '" id="' + index + '" name="' + sanitizedName + '">';
    html += ' <div class="card-visible back">';
    html += ' </div>';
    html += ' <div class="front" style="background: url(\'img/' + pic.img + '\') no-repeat">';
    html += ' </div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;
  memoryGame.bindKeys();

});
