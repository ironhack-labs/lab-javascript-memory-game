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
    this.correctPairsArray = []; // So we can access the already correct pairs later
    this._shuffleCards() // Shuffle the board on each new instance (prototype on line 42)
};

// //******************************************************************
// // Game Functions (prototypes)
// //******************************************************************

MemoryGame.prototype._shuffleCards = function() {
    this.cards = _.shuffle(this.cards)
}

MemoryGame.prototype.selectCard = function(card) {

    this.selectedCards.push($(card).attr('name')) // Push card on the selected cards array for later comparison

    this.correctPairsArray.push(card) // Push card on the correct cards array so we can access them later

    if (this.selectedCards.length === 2) { // A pair is on screen

        if (this.selectedCards[0] === this.selectedCards[1]) { // Cards are the same
            this.correctPairs++; // Increment correct count
            this.pairsClicked++; // Increment clicked count

            // Memory Board actions

            for (i = 0; i < this.correctPairsArray.length; i++) { // Loop to leave correct pairs on front side
                $(this.correctPairsArray[i]).siblings().removeClass('front') // Workaround hide by removing 
                $(this.correctPairsArray[i]).siblings().addClass('back') // switching the class from front to back
                $(this.correctPairsArray[i]).removeClass('back') // so when the pairs are correct they aren't hidden
                $(this.correctPairsArray[i]).addClass('front') // by the reseting called by the incorrect cards block
            }

        }

        if (this.selectedCards[0] !== this.selectedCards[1]) { //Cards are different
            this.pairsClicked++; // Increment clicked count
            this.correctPairsArray.splice(this.correctPairsArray.length - 2, 2) // Remove the last two cards from the correct arrays 

            // Memory Board actions
            $(".front").delay(1000).hide(0) // Hide back the front side of incorrect pair
            $(".back").delay(1000).show(0) // Restore incorrect cards to original setup


        }
        // Victory
        if (this.correctPairs === 12) { // All pairs have been found
            alert('You beat the game, you memory maniac')
            memoryGame.MemoryGame() // New game immediatly starts afterwards
        }

        this.selectedCards = [] // Empty the selected cards array 

        // Counters action

        $('#pairs_guessed').text(this.correctPairs) // Uptate the correct pairs counter
        $('#pairs_clicked').text(this.pairsClicked) // Uptate the tries counter
    }
}

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

    $('.front').hide()




    // //******************************************************************
    // // JQuery DOM interactions
    // //******************************************************************

    $('.back').click(function() {
        $(this).hide() // Hide the back of the card
        $(this).siblings(".front").show() // Show the front of the card
        memoryGame.selectCard(this) // Call the selectCard function (line 46)
    })

})