var memoryGame;

$(document).ready(function () {
    memoryGame = new MemoryGame();
    var html = '';

    memoryGame.shuffleCards()

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

    $(".card").on("click", function () {
        var selectCard = $(this).attr("name");
        memoryGame.selectCard(selectCard)
        //console.log(memoryGame.selectedCards)
        if (memoryGame.selectedCards.length == 2) {
            memoryGame.compareCards()
        }
    });
});