// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function () {
    memoryGame = new MemoryGame();
    var html = '';

    memoryGame._suffleCards();

    memoryGame.cards.forEach(function (pic, index) {
        var sanitizedName = pic.name.split(' ').join('_');

        html += '<div class= "card" name="card_' + sanitizedName + '">';
        html += '<div class="back"';
        html += '    name="' + pic.name + '">';
        html += '</div>';
        html += '<div class="front" ';
        html += 'style="background: url(img/' + pic.img + '") no-repeat"';
        html += '    name="' + pic.name + '">';
        html += '</div>';
        html += '</div>';
    });

    // Add all the divs to the HTML
    document.getElementById('memory_board').innerHTML = html;


    var flip = function (carta) {
        carta.toggleClass('back')
        carta.next().toggleClass('back')
        carta.next().toggleClass('front')
    }


    $('.back').on('click', function () {
        flip($(this))
        var carta = $(this);
        memoryGame.theCard(carta);
        console.log(memoryGame.selectedCards)
        if (memoryGame.selectedCards.length == 2) {
            console.log(memoryGame.selectedCards[0]);
            console.log(memoryGame.selectedCards[1]);
            if (!memoryGame.compareCards()) {
                //flip(memoryGame.selectedCards[0]);
                flip();
            }
        }
    });



});
