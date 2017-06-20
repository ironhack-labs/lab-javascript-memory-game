// //******************************************************************
// // Game Logic
// //******************************************************************
var MemoryGame = function () {
  this.cards = [
    { name: "aquaman", img: "aquaman.jpg" },
    { name: "batman", img: "batman.jpg" },
    { name: "captain america", img: "captain-america.jpg" },
    { name: "fantastic four", img: "fantastic-four.jpg" },
    { name: "flash", img: "flash.jpg" },
    { name: "green arrow", img: "green-arrow.jpg" },
    { name: "green lantern", img: "green-lantern.jpg" },
    { name: "ironman", img: "ironman.jpg" },
    { name: "spiderman", img: "spiderman.jpg" },
    { name: "superman", img: "superman.jpg" },
    { name: "the avengers", img: "the-avengers.jpg" },
    { name: "thor", img: "thor.jpg" },
    { name: "aquaman", img: "aquaman.jpg" },
    { name: "batman", img: "batman.jpg" },
    { name: "captain america", img: "captain-america.jpg" },
    { name: "fantastic four", img: "fantastic-four.jpg" },
    { name: "flash", img: "flash.jpg" },
    { name: "green arrow", img: "green-arrow.jpg" },
    { name: "green lantern", img: "green-lantern.jpg" },
    { name: "ironman", img: "ironman.jpg" },
    { name: "spiderman", img: "spiderman.jpg" },
    { name: "superman", img: "superman.jpg" },
    { name: "the avengers", img: "the-avengers.jpg" },
    { name: "thor", img: "thor.jpg" },
  ];
  // this.selectedCards = [];
  this.pairsClicked = 0;
  this.correctPairs = 0;
  this.$candidate; // jQuery node for first card in potential match

  this._shuffleCards(this.cards);
};

MemoryGame.prototype._shuffleCards = function (array) {

  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

MemoryGame.prototype.selectCard = function ($card) {

  $front = $card.find('.front');
  $back = $card.find('.back');

  $front.toggle();
  $back.toggle();

  $card.addClass('blocked');

  if (this.$candidate) {
    this.pairsClicked += 1;
    if (this.$candidate.attr('id') === $card.attr('id')) {
      this.$candidate = null;
      this.correctPairs += 1;

      if (this.correctPairs === this.cards.length / 2) {
        this.finished();
      }

    } else {
      //flip the current and last try back
      $front.delay(1000).toggle(0);
      $back.delay(1000).toggle(0);
      this.$candidate.find('.front').delay(1000).toggle(0);
      this.$candidate.find('.back').delay(1000).toggle(0);
      this.$candidate.removeClass('blocked');
      $card.removeClass('blocked');
      this.$candidate = null;
    }
  } else {

    this.$candidate = $card;
  }
};

MemoryGame.prototype.finished = function() {
  alert('done');
};

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function () {

  memoryGame = new MemoryGame();
  var html = '';

  
  memoryGame.cards.forEach(function (pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" id="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="img/' + pic.name + '"';
    html += '    id="' + pic.img + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    id="' + pic.img + '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  // hide the fronts to start
  $('.front').hide();

  $('.card').on('click', function (evt) {

    $card = $(evt.currentTarget);

    memoryGame.selectCard($card);

    $('#pairs_clicked').text(memoryGame.pairsClicked);
    $('#pairs_guessed').text(memoryGame.correctPairs);




  });


});
