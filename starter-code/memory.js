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
    this.indexes=[];
    this.selectedCards = [];
    this.pairsClicked = 0;
    this.correctPairs = 0;
    this.lastCorrect = false;
};


MemoryGame.prototype.shuffleCards = function() {
  this.cards = _.shuffle(this.cards);
}

MemoryGame.prototype.selectCard = function(card){
  if(this.selectedCards.length == 1){

    this.selectedCards.push(this.cards[card]);
    this.indexes.push(card);
    this.pairsClicked ++;

    if(this.selectedCards[1].name == this.selectedCards[0].name && this.indexes[0]!==this.indexes[1]){

      this.correctPairs ++;
      this.selectedCards = [];
      this.indexes = []
      this.lastCorrect = true;

    } else {

      this.selectedCards = [];
      this.indexes = []
      this.lastCorrect = false;

    };
  } else if (this.selectedCards.length == 0){

    this.selectedCards.push(this.cards[card]);
    this.indexes.push(card);

  };
  };

  MemoryGame.prototype.finished = function() {
  };

/*If the user has selected a card in the last turn
Increase the pairsClicked attribute of the memoryGame and update the DOM
Compare the newly selected card to the previously selected card. Are they of the same type?
If yes
Empty out the selectedCards array for the next round
Increase the correctPairs attribute by one
"Flip" the card
If no
Possibly add some styling to tell the user "Wrong Guess"
Flip both cards back to the "back side"
If the user has not selected a card in the last turn
Add the card to the selectedCards array and move on*/


// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************



var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  memoryGame.shuffleCards();

  var html = '';

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" id="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="img/' + pic.name + '"';
    html += '    index="' + index + '"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  $('.card').on('click', function(){

    var card = $(this).children(".back").attr("index");
    //$(this).children(".back").css("display", "none");
    //$(this).children(".front").addClass("back");

    memoryGame.selectCard(card);

    $("#pairs_clicked").html(memoryGame.pairsClicked)
    $("#pairs_guessed").html(memoryGame.correctPairs)

    if(memoryGame.lastCorrect===true){

      //$(this).children(".back").css("display", "none");
      $(this).children(".front").addClass("back");

    }else if(memoryGame.lastCorrect===false && memoryGame.selectedCards.length == 0){

      //$(this).children(".back").css("display", "block");
      //$(this).children(".front").removeClass("back");

    } else if (memoryGame.lastCorrect===false && memoryGame.selectedCards.length == 1){

      //$(this).children(".back").css("display", "inherit");
      //$(this).children(".front").addClass("back");
    }
  });


});
