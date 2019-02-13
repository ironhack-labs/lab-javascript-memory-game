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
    //memoryGame.shuffleCards()
    memoryGame.cards.forEach(function(pic) {
        html += '<div class="card" data-card-name="' + pic.name + '">';
        html += '  <div class="back" name="' + pic.img + '"></div>';
        html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
        html += '</div>';
    });

    // Add all the div's to the HTML
    $('#memory_board').html(html);
    var selectedCards = []
    var selectedNameCards = []
    var currentCard
    var currentNameCard
        // Bind the click event of each element to a function
    $('.back').click(function() {
        // TODO: write some code here

        currentCard = $(this)
        currentNameCard = $(this).attr('name')
        selectedCards.push(currentCard)
        selectedNameCards.push(currentNameCard)
        $(this).attr('class', 'front')
        $(this).next().attr('class', 'back')
        if (selectedNameCards.length === 2) {
            if (memoryGame.checkIfPair(selectedNameCards[0], selectedNameCards[1]) === false) {
                var first = selectedCards[0]
                var second = selectedCards[1]
                setTimeout(function() {
                    first.attr('class', 'back')
                    first.next().attr('class', 'front')
                    second.attr('class', 'back')
                    second.next().attr('class', 'front')
                }, 1000);
            }
            selectedNameCards = []
            selectedCards = []
            $('#pairs_clicked').text(memoryGame.pairsClicked)
            $('#pairs_guessed').text(memoryGame.pairsGuessed)
            if (memoryGame.isFinished() === true) {
                $('#memory_board').html('<h1>You win!!!!</h1>')
            }
        }
    });
});