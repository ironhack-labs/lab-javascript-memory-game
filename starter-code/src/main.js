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

    var backside = $('.back');

    backside.on('click', function() {
        if (memoryGame.pickedCards.length < 2) {
            $(this).toggleClass('front back');
            $(this)
                .siblings()
                .removeClass();
            $(this)
                .siblings()
                .addClass('back');
            $(this)
                .parent()
                .addClass('picked');
            memoryGame.pickedCards.push($(this));

            console.log(memoryGame.pickedCards);
        }
        if (memoryGame.pickedCards.length === 2) {
            console.log('pickedCards: ', memoryGame.pickedCards);
            var isMatch = memoryGame.checkIfPair(
                memoryGame.pickedCards[0].attr('name'),
                memoryGame.pickedCards[1].attr('name')
            );
            console.log(isMatch);
            if (isMatch) {
                console.log(isMatch);
            } else {
                setTimeout(
                    function() {
                        console.log(this);
                        $(this).removeClass('back');
                        $(this).addClass('front');

                        $(this)
                            .siblings()
                            .removeClass('back');
                        console.log($(this).siblings());
                        $(this)
                            .siblings()
                            .addClass('front');

                        console.log(isMatch);
                    }.bind(this),
                    1000
                );
            }
        }
    });
    function clickOnlyTwoCards(firstCard, secondCard) {}
});
