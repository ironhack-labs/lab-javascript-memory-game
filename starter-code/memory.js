// //******************************************************************
// // Game Logic
// //******************************************************************

//TODO:- PRIMERO LOGICA! LUEGO MANIPULACION DOM!!!!!!
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
    this.isComparing = false;
};

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************



$(document).ready(function(){

    memoryGame = new MemoryGame();
    memoryGame.setupGame();

});



MemoryGame.prototype._shuffleCards = function() {

 var currentIndex = this.cards.length, temporaryValue, randomIndex;

 while (0 !== currentIndex) {
   randomIndex = Math.floor(Math.random() * currentIndex);
   currentIndex -= 1;

   temporaryValue = this.cards[currentIndex];
   this.cards[currentIndex] = this.cards[randomIndex];
   this.cards[randomIndex] = temporaryValue;

 }
};


MemoryGame.prototype.setupGame = function() {

  this.removeChildrenBoard();

  memoryGame._shuffleCards();

  var html = '';

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

  this.selectedCards = [];
  this.pairsClicked = 0;
  this.correctPairs = 0;
  this.isComparing = false;

  memoryGame.setupCards();


};

MemoryGame.prototype.removeChildrenBoard = function() {

  var childrens = $("#memory_board").children();

  $(childrens).each(function(i, child) {
    child.remove();
  });
};


MemoryGame.prototype.setupCards = function() {


  var $allCards = $('.card');

  //TODO-: Solve this thing!
  var self = this;

  $allCards.each(function(i, card) {
    //each devuelve a DOM element

    $(card).on("click", function() {

      if (!self.isComparing) {
        self.pushCardToSelected(card);
        self.checkGame();
        console.log("click");
      }
      console.log(self.selectedCards);
    });
  });
};

MemoryGame.prototype.checkGame = function() {


  if(this.selectedCards.length === 2) {

    this.compareSelectedCards();

  }


};

MemoryGame.prototype.compareSelectedCards = function() {

  this.isComparing = true;
  var self = this;

  var timeoutId = setTimeout (function() {

    self.venedictOfCards();
    self.isComparing = false;

  }, 500);
};

MemoryGame.prototype.venedictOfCards = function() {

  if($(this.selectedCards[0]).attr("name") === $(this.selectedCards[1]).attr("name")) {

    this.correctPairs += 1;

  }
  else {

    //TODO:- Clean up!
    this.reverseCard(this.selectedCards[0]);
    this.reverseCard(this.selectedCards[1]);
    this.toggleSelected(this.selectedCards[0]);
    this.toggleSelected(this.selectedCards[1]);

  }

  this.selectedCards = [];
  this.pairsClicked += 1;
  this.updateScore();

};

MemoryGame.prototype.updateScore = function() {

  $("#pairs_clicked").text(this.pairsClicked);
  $("#pairs_guessed").text(this.correctPairs);
  this.checkIfFinisih();

};

MemoryGame.prototype.checkIfFinisih = function() {

  if(this.correctPairs === this.cards.length / 2) {

    alert("You win!");
    this.setupGame();

  }

};


MemoryGame.prototype.updatePairGuess = function() {

  if (this.correctPairs === this.cards.length / 2) {

    alert("You win!!");
    this.setupGame();

  }

};

MemoryGame.prototype.pushCardToSelected = function(card) {

  if(!$(card).hasClass("selected")) {
      this.toggleSelected(card);
      this.selectedCards.push(card);
      this.reverseCard(card);
    }
};


MemoryGame.prototype.toggleSelected = function(card) {

    $(card).toggleClass("selected");

};

MemoryGame.prototype.reverseCard = function(card) {

  var childrens = card.children;

  $(childrens).each(function(i, child) {

    if(child.className === "back") {

      child.className = "front";

    }else {

      child.className = "back";

    }
  });
};
