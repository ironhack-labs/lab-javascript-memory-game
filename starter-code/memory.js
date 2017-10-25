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
        console.log("Añado carta 1");
        this.selectedCards.push(card);
    } else if (this.selectedCards.length == 1) {
        console.log("Añado carta 2");
        this.pairsClicked++;
        $('#pairs_clicked').text(this.pairsClicked);
        this.selectedCards.push(card);

        if (this.selectedCards[0].attr('name') == this.selectedCards[1].attr('name')) {
            console.log("Cartas iguales");
            this.selectedCards.splice(0, 2);
            console.log(this.selectedCards);
            this.correctPairs++;
            $('#pairs_guessed').text(this.correctPairs);
        } else {
            console.log("Cartas distintas");
            var memoryGameInstance = this;
            var cards = this.selectedCards;
            console.log(cards[0]);
            console.log(cards);
            setTimeout(function() {
                console.log("Dar la vuelta de nuevo");
                console.log(cards[0]);
                memoryGameInstance.flipBackCard(cards[0]);
                memoryGameInstance.flipBackCard(cards[1]);
                cards.splice(0, 2);
            }, 2000);
        }
    }
};

MemoryGame.prototype.flipBackCard = function(card) {
    card.addClass('back');
    card.siblings().removeClass('back');
};

MemoryGame.prototype.finished = function() {
    if (this.correctPairs == 12) {
        console.log('You win!');
    } else {
        return;
    }
};
