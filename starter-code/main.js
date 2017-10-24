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



    // $('.back').on('click', function () {
    //    $(this).attr('name')
    //     console.log( $(this).attr('name'))
    //     if (memoryGame.selectedCards.length > 0) {
    //         if (memoryGame.selectedCards[0] == $(this).attr('name')) {
                
    //         } else {
    //             memoryGame.selectedCards.push($(this).attr('name'));
    //             console.log()
    //         }
    //     }
    // });
    $(".card").on("click", function(){
            var carta = $(this).attr("name");
            memoryGame.theCard(carta);
            console.log(memoryGame.selectedCards)
            if(memoryGame.selectedCards.length == 2){
              memoryGame.compareCards();
            }
            
            // $('.back').toggleClass('back')
            // $('.front').toggleClass('back')
        });
        

});
