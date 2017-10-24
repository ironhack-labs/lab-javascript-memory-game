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

MemoryGame.prototype.shuffle = function() {
    var cards = this.cards;
    this.cards = _.shuffle(cards);
};

MemoryGame.prototype.selectCard = function(card) {
    if (this.selectedCards.length == 0) {
        this.selectedCards.push(card);
        this.flipToFrontCard(card);
    } else if (this.selectedCards.length == 1) {
        this.pairsClicked++;
        $('#pairs_clicked').text(this.pairsClicked);
        this.selectedCards.push(card);
        this.flipToFrontCard(card);

        if (this.selectedCards[0].attr('name') == this.selectedCards[1].attr('name')) {
            this.selectedCards.splice(0, 2);
            this.correctPairs++;
            $('#pairs_guessed').text(this.correctPairs);
        } else {
            var cards = this.selectedCards;
            setTimeout(function() {
                this.flipToBackCard(cards[0]);
                this.flipToBackCard(cards[1]);
            }, 2000);
        }
    }
};

MemoryGame.prototype.flipToFrontCard = function(card) {
    card.addClass("hidden");
    card.removeClass("visible");
    card.next().addClass("visible");
    card.next().removeClass("hidden");
};

MemoryGame.prototype.flipToBackCard = function(card) {
    card.addClass("visible");
    card.removeClass("hidden");
    card.next().addClass("hidden");
    card.next().removeClass("visible");
};

MemoryGame.prototype.finished = function() {
    if (this.correctPairs == 12) {
        // Finish
    } else {
        return;
    }
};
