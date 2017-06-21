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

MemoryGame.prototype.compareCards = function (cardName1, cardName2) {
  if(cardName1 === cardName2) {
    return true;
  } else {
    return false;
  }
};

MemoryGame.prototype._shuffleCards = function(array) {

  //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;

};

MemoryGame.prototype.selectCard = function(card) {

  var cardPair = memoryGame.selectedCards;

  if (memoryGame.selectedCards.length === 1) {
    console.log('only one card selected');
  } else if (memoryGame.selectedCards.length > 1) {

    if ( cardPair[0] === cardPair[1] ) {
      updatePairsClicked();
      memoryGame.selectedCards = [];
      updatePairsGuessed();
      success();
      updateAsDone(cardPair[0]);

      if (memoryGame.correctPairs === (memoryGame.cards.length / 2)) {
        memoryGame.finished();
      }

    }
    if ( cardPair[0] !== cardPair[1] ) {
      memoryGame.selectedCards = [];
      updatePairsClicked();
      wrongGuess();
      hideCards(cardPair[0], cardPair[1]);
    }
  }
};

MemoryGame.prototype.finished = function() {
  $('h2').html('Done!');
  $('h2, p').solitaireVictory();
};

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  memoryGame._shuffleCards(memoryGame.cards);

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" id="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="img/' + pic.name + '"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(\'img/' + pic.img + '\') no-repeat"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  $('.back').on('click', function(){

    if ($(this).hasClass('done')) {
      console.log('done, do nothing');
    } else {

      if (memoryGame.selectedCards.length === 2) {
        memoryGame.selectedCards = [];
      }

      if ($(this).hasClass('front')) {
        $(this).removeClass('front');
        $(this).css('background', '#456783');
        memoryGame.selectCard(memoryGame.selectedCards);

      } else {

        var id = $(this).attr('id');
        $(this).addClass('front');
        $(this).css('background', 'url(' + 'img/' + id + ')');
        memoryGame.selectedCards.push($(this).attr('id'));
        memoryGame.selectCard(memoryGame.selectedCards);
      }
    }

  });

});

function updatePairsClicked() {
  memoryGame.pairsClicked += 1;
  $('#pairs_clicked').html(memoryGame.pairsClicked);
}

function updatePairsGuessed() {
  memoryGame.correctPairs += 1;
  $('#pairs_guessed').html(memoryGame.correctPairs);
}

function updateAsDone(card) {
  var cardName = card.split('.')[0];
  $('#' + cardName + '\\.jpg').addClass('done');
}

function success() {
  $('#score').addClass('success');
  setTimeout( function(){
    $('#score').removeClass('success');
  }, 1000);
}

function wrongGuess() {
  $('#score').addClass('failure');
  setTimeout( function(){
    $('#score').removeClass('failure');
  }, 1000);
}

function hideCards(card1, card2) {

  setTimeout( function(){

    var cardName1 = card1.split('.')[0];
    var cardName2 = card2.split('.')[0];

    $('#' + cardName1 + '\\.jpg').removeClass('front');
    $('#' + cardName1 + '\\.jpg').css('background', '#456783');

    $('#' + cardName2 + '\\.jpg').removeClass('front');
    $('#' + cardName2 + '\\.jpg').css('background', '#456783');

  }, 400);
}
