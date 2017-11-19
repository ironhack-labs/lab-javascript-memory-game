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
////////////////// Método Shuffle
MemoryGame.prototype.shuffleCards = function() {
  var i = this.cards.length, randomNumber, temp;
  while (i) {
    randomNumber = Math.floor(Math.random() * i--);
    temp = memoryGame.cards[randomNumber];
    memoryGame.cards[randomNumber] = memoryGame.cards[i];
    memoryGame.cards[i] = temp;
  }
  return memoryGame.cards;
};

/////////////////// Comparación de dos cartas
MemoryGame.prototype.selectCard = function(card){
  $('.back',card).toggle();
  $('.front',card).removeClass('front').addClass('back blocked');
  if(memoryGame.selectedCards.length === 1){
    memoryGame.pairsClicked += 1;
    if (memoryGame.selectedCards[0].attr('name') === card.attr('name')){
      console.log("They match!");
      memoryGame.selectedCards.length = 0;
      memoryGame.correctPairs += 1;
      return;
    } else {
      console.log("Wrong guess");
      $('.back',memoryGame.selectedCards[0]).toggle();
      $('.back .blocked',memoryGame.selectedCards[0]).removeClass('back blocked').addClass('front');
      $('.back',card).toggle();
      $('.back .blocked',card).removeClass('back blocked').addClass('front');
      memoryGame.selectedCards.length = 0;
      return;

    }
  } else {
    memoryGame.selectedCards.push(card);
  }
};
////////////////////////////// Reset function
MemoryGame.prototype.finished = function() {
  alert('Congratulations, you win!');

};

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';
  memoryGame.shuffleCards();

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    name="'       + pic.name +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  //////////////////// Todo lo que pasa al hacer click sobre una carta:
  $('#memory_board').on('click','.card', function(){
    console.log($(this).attr('name'));
    MemoryGame.prototype.selectCard($(this));
    $('#pairs_clicked').html(memoryGame.pairsClicked);
    $('#pairs_guessed').html(memoryGame.correctPairs);
    if(memoryGame.correctPairs === 12){

      MemoryGame.prototype.finished();
    }
  }
);


});
