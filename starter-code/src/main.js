var cards = [
    { name: 'aquaman', img: 'aquaman.jpg' },
    { name: 'batman', img: 'batman.jpg' },
    { name: 'captain america', img: 'captain-america.jpg' },
    { name: 'fantastic four', img: 'fantastic-four.jpg' },
    { name: 'flash', img: 'flash.jpg' },
    { name: 'green arrow', img: 'green-arrow.jpg' },
    { name: 'green lantern', img: 'green-lantern.jpg' },
    { name: 'ironman', img: 'ironman.jpg' },
    { name: 'spiderman', img: 'spiderman.jpg' },
    { name: 'superman', img: 'superman.jpg' },
    { name: 'the avengers', img: 'the-avengers.jpg' },
    { name: 'thor', img: 'thor.jpg' },
    { name: 'aquaman', img: 'aquaman.jpg' },
    { name: 'batman', img: 'batman.jpg' },
    { name: 'captain america', img: 'captain-america.jpg' },
    { name: 'fantastic four', img: 'fantastic-four.jpg' },
    { name: 'flash', img: 'flash.jpg' },
    { name: 'green arrow', img: 'green-arrow.jpg' },
    { name: 'green lantern', img: 'green-lantern.jpg' },
    { name: 'ironman', img: 'ironman.jpg' },
    { name: 'spiderman', img: 'spiderman.jpg' },
    { name: 'superman', img: 'superman.jpg' },
    { name: 'the avengers', img: 'the-avengers.jpg' },
    { name: 'thor', img: 'thor.jpg' }
];

$(document).ready(function() {
    var memoryGame = new MemoryGame(cards);
    memoryGame.cards = memoryGame.shuffleCard();
    var html = '';
    memoryGame.cards.forEach(function(pic, index) {
        html += '<div class= "card" id="card_' + pic.name + '">';
        html += '<div class="back"';
        html += '    name="' + pic.img + '">';
        html += '</div>';
        html += '<div class="front" ';
        html += 'style="background: url(img/' + pic.img + ') no-repeat">';
        html += '</div>';
        html += '</div>';
    });

    // Add all the div's to the HTML
    document.getElementById('memory_board').innerHTML = html;
    // Bind the click event of each element to a function

    $('.back').on('click', function() {
        var card = $(this).attr('name');
        console.log('CANOPEN', memoryGame.canOpenNewCard());
        if (memoryGame.canOpenNewCard()) {
            memoryGame.registerCard(card);
            var pairsClicked = memoryGame.getPairsClicked();
            $('#pairs_clicked').html(pairsClicked);
            var front = $(this).siblings();
            $(this).removeClass('back');
            $(this).addClass('front');
            front.removeClass('front');
            front.addClass('back');
        }

        setTimeout(
            function() {
                if (memoryGame.checkIfPair()) {
                    var pairsGuessed = memoryGame.getPairsGuessed();
                    $('#pairs_guessed').html(pairsGuessed);
                }

                memoryGame.unregisterCards();

                $(this).removeClass('front');
                $(this).addClass('back');
                front.removeClass('back');
                front.addClass('font');
            }.bind(this),
            3000
        );
    });
});
