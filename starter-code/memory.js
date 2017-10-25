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

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

//Iteration 1
MemoryGame.prototype.shuffle = function(array) {
  return _.shuffle(array);
}

//Iteration 2
MemoryGame.prototype.selectCard = function(card) {
  flipCards(card);
  if (this.selectedCards.length > 0) {
    this.pairsClicked += 1;
    $("#pairs_clicked").text(this.pairsClicked);
    this.selectedCards.push(card);
    if (this.selectedCards[0].attr("name") == this.selectedCards[1].attr("name")) {
      this.correctPairs += 1;
      $("#pairs_guessed").text(this.correctPairs);
      this.selectedCards = [];
      return;
    } else {
      setTimeout(flipBack, 500, this.selectedCards[0]);
      setTimeout(flipBack, 500, card);
      this.selectedCards = [];
    }
  } else {
    this.selectedCards.push(card);
  }
};

//Iteration 3
MemoryGame.prototype.finished = function() {
  if(this.correctPairs === 12) {
    console.log("you win");
    correctPairs = 0;
    pairsClicked = 0;
  }
}

function flipCards(e) {
  e.removeClass("back");
  e.siblings().addClass("back");
}

function flipBack(e) {
  e.siblings().removeClass("back");
  e.addClass("back");
}
