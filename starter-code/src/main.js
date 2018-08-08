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
    memoryGame.shuffleCard(cards); //shuffle cards

    //for each card,
    //push to new array

    // memoryGame.checkIfPair();
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

    //call memoryGame.finished?

    // Add all the div's to the HTML
    document.getElementById('memory_board').innerHTML = html;

    // Bind the click event of each element to a function
    $('.back').on('click', function(ev) {
        var myArr = memoryGame.pickedCards;
        myArr.push(ev.target.parentElement); //pushes clicked card to array in object

        var pair = [];
        pair[0] = myArr[myArr.length - 2];
        pair[1] = myArr[myArr.length - 1];

        $(this).removeClass();
        $(this).addClass('front');

        $(this)
            .siblings()
            .removeClass();
        $(this)
            .siblings()
            .addClass('back');

        if (myArr.length % 2 === 0) {
            memoryGame.checkIfPair(pair[0], pair[1]);

            var secondLastEl = String(pair[0].getAttribute('id'));
            var lastEl = String(pair[1].getAttribute('id'));

            if (secondLastEl !== lastEl) {
                pair.forEach(function(el) {
                    for (var i = 0; i < el.childNodes.length; i++) {
                        if (el.childNodes[i].className === 'front') {
                            setTimeout(function() {
                                el.childNodes[0].classList.remove('front');
                                el.childNodes[0].classList.add('back');

                                el.childNodes[1].classList.remove('back');
                                el.childNodes[1].classList.add('front');
                            }, 1000);
                        }
                    }
                });
            }
        }

        //hide images if they do not match
        //change class to back
        // lastEl.removeClass('front');
        // lastEl.addClass('back');
        // secondLastEl.removeClass('front');
        // secondLastEl.addClass('back');
    });
});
//
