// //******************************************************************
// // Game Logic
// //******************************************************************
var MemoryGame = function() {
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
    this.selectedCards = [];
    this.pairsClicked = 0;
    this.correctPairs = 0;
};

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function() {
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
        html += '    name="' + pic.name + '">';
        html += '</div>';
        html += '</div>';
    });

    // Add all the divs to the HTML
    document.getElementById('memory_board').innerHTML = html;


// Game Mechanics

//$(document).ready(function() { //document ready wrapper
    $('.front').hide()


    MemoryGame.prototype._shuffleCards = function shuffle() {
        this.cards = _.shuffle(this.cards)
    }



    MemoryGame.prototype.selectCard = function(card) {
        if (selectedCards.length === 0)
            this.selectedCards.push(card)
        if (selectedCards.length === 1) {
            this.selectedCards.push(card)
            if (this.selectedCards[0] === this.selectedCards[1]) {
                this.correctPairs++;
                $(".card[name=card]").hide();
            }
            this.pairsClicked++;
            this.selectedCards = []
          }
    }

    $('.card').click(function() {
        $(this).children().toggle()
        let card = $(this).attr('name')
        console.log(card)
    }).selectCard(card)

});