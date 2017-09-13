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
  this.cards = _.shuffle(this.cards);
};

// Game mechanics and logic

MemoryGame.prototype.selectCard = function(card) {
  if (this.selectedCards.length === 1) { // 2nd card from attempted pair
    this.pairsClicked += 1;
    if ( card === this.selectedCards[0] ) { // we picked a pair
      this.selectedCards = [];
      this.correctPairs += 1;
      // We do nothing to the css, because we want the pair to stay shown
    } else {
      this.selectedCards = []; // our 2 cards didn't match, so we need to turn them again
      $(".front[name='" + card + "']").hide();
      // $(".front").attr(card)
      $(".back[name='" + card + "']").show();
      $(".front[name='" + card + "']").parent().children(".front").show();
      console.log($(".front[name='" + card + "']"));
      console.log("different card picked, the array is: "); console.log(this.selectedCards);
    }
  }
  else {
    this.selectedCards.push(card);
    console.log(this.selectedCards);
   }
};

MemoryGame.prototype.finished = function() {
  if ( this.correctPairs === (this.cards.length / 2) ) {
    return "You win!!";
  } else {
    return "Pick another card!";
  }
};



// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

   html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat"';
    html += '    name="'       + pic.name +  '">';
    html += '</div>';
    html += '</div>';
  });


  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;


  // storing the clicked card as a variable to be called on the selectCard function (the one that handles the game mechanics and logic)

$('.back').click(function() {
    // $(this).attr("name");
    cardName = $(this).attr("name");
    memoryGame.selectCard(cardName);
    if ( memoryGame.selectCard.length <= 2) {
      $(this).css("display", "none");
      $(this).parent().children(".front").show();
    }
  });




});
