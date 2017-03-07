//put outside the function because its a global varriable.
var theGame;


//******************************************************************
// Game Logic/ cards
//******************************************************************
var MemoryGame = function() {
  this.Cards = [
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
this.picked_cards = [];
this.pairs_clicked = 0;
this.pairs_guessed = 0;
this._shuffleCard();
};

MemoryGame.prototype._shuffleCard = function() {
    var counter = this.Cards.length;

    while (counter > 0) {
        var index = Math.floor(Math.random() * counter);
        counter--;
        var temp = this.Cards[counter];
        this.Cards[counter] = this.Cards[index];
        this.Cards[index] = temp;
    }
    return;
};

MemoryGame.prototype.selectCard = function(card) {
    console.log(card);

    if (this.picked_cards.length === 0) {
        this.picked_cards.push(card);
    } else if (this.picked_cards.length == 1) {
        $('.back').addClass('blocked');
        this.pairs_clicked++;
        this.picked_cards.push(card);

        if (this.picked_cards[0].id == this.picked_cards[1].id) {
            console.log("correct");
            this.picked_cards = [];
            this.pairs_guessed++;
            $('.back').removeClass('blocked');
            didIwin();
        } else {
            console.log("incorrect");
            var self = this;
            setTimeout(function() {
                self.picked_cards[0].style.background = '#456783';
                self.picked_cards[1].style.background = '#456783';
                self.picked_cards = [];
                $('.back').removeClass('blocked');
            }, 1000);
        }
    }

};

//******************************************************************
// HTML/CSS Interactions
//******************************************************************
$(document).ready(function() {


    function renderShuffledCards() {
        var blueBoxes = $(".back");
        for (var i = 0; i < 24; i++) {
            var theBox = blueBoxes.eq(i);

            theBox.attr("id", theGame.Cards[i].img);
        }
    }

    theGame = new MemoryGame();

    renderShuffledCards();

    // Add all the div's to the HTML
    // Bind the click event of each element to a function
    $('.back').on('click', function() {
        var clickedSquare = $(this);

        clickedSquare.css("background", "url('img/" + $(this).attr("id") + "')");
        theGame.selectCard(this);
        $('#pairs_clicked').html(theGame.pairs_clicked);
        $('#pairs_guessed').html(theGame.pairs_guessed);

    });

});
