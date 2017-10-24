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

// ITERATION 1
MemoryGame.prototype._shuffleCards = function() {
    var shuffle = _.shuffle(this.cards);
    this.cards = shuffle;
};

// ITERATION 2, NO FISHER PERM
MemoryGame.prototype.selectCard = function(card){
  if (this.selectedCards.length > 0) {
      this.pairsClicked += 1;
      $("#pairs_clicked").text(this.pairsClicked);
      this.selectedCards.push(card);
      if(this.selectedCards[0].attr("name") == this.selectedCards[1].attr("name")) {
          this.correctPairs += 1;
          $("#pairs_guessed").text(this.correctPairs);
          card.removeClass("back");
          card.siblings().addClass("back");
          this.selectedCards = [];
          return;
        } else {
          this.selectedCards[0].siblings().removeClass("back");
          this.selectedCards[0].addClass("back");
          this.selectedCards = [];
        }
  } else {
    this.selectedCards.push(card);
    card.removeClass("back");
    card.siblings().addClass("back");
  }
};

// ITERATION 3
MemoryGame.prototype.finished = function() {
  if(this.correctPairs == 12) {
    alert("It's a Win!! Congratulations!!");
  }
};
