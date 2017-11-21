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

MemoryGame.prototype.shuffleCards = function (cards) {
  var currentIndex = cards.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
  return cards;
};

MemoryGame.prototype.selectCard = function(element){
  var cardElement = element;
  cardElement.find('.back').removeClass('back').addClass('front');
  cardElement.find('#img').removeClass('front').addClass('back');
  var card = element.attr('name');
  if(this.selectedCards.length === 1){
    this.pairsClicked++;
    this.selectedCards.push(cardElement);
    if(this.selectedCards[0].attr('name') === this.selectedCards[1].attr('name')){
      this.correctPairs++;
      cardElement.find('#img').addClass('blocked');
      cardElement.find('#reverse').addClass('blocked');
      this.selectedCards = [];
      if(this.correctPairs === 12){
        this.finished();
      }
    } else {
      var self = this;
      $('.card #reverse').addClass('blocked');
      setTimeout(function() {
        self.selectedCards[1].find('#img').removeClass('back').addClass('front');
        self.selectedCards[1].find('#reverse').removeClass('front').addClass('back');
        self.selectedCards[1].find('.blocked').removeClass('blocked');
        self.selectedCards[0].find('#img').removeClass('back').addClass('front');
        self.selectedCards[0].find('#reverse').removeClass('front').addClass('back');
        self.selectedCards[0].find('.blocked').removeClass('blocked');
        self.selectedCards = [];
        $('.card #reverse').removeClass('blocked');
      },1000);
    };
  } else {
    cardElement.find('#img').addClass('blocked');
    cardElement.find('#reverse').addClass('blocked');
    this.selectedCards.push(cardElement);
  }
  $('#pairs_clicked').html(this.pairsClicked);
  $('#pairs_guessed').html(this.correctPairs);
};

MemoryGame.prototype.finished = function() {
    alert('You win!! Reload page for try again :)')
};

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  memoryGame.shuffleCards(memoryGame.cards);

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

   html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div id= "reverse" class="back"';
    html += ' name="' + pic.name + '">';
    html += '</div>';
    html += '<div id= "img" class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += ' name="' + pic.name + '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  $('#memory_board').on('click','.card', function(){
    memoryGame.selectCard($(this));
  });

});

