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

    $('.back').on('click', function(ev) {
        var myArr = memoryGame.pickedCards;
        myArr.push(ev.target.parentElement); //pushes current clicked event to array

        var pair = createPair(myArr);

        removeAndAddClass($(this));

        if (myArr.length % 2 === 0) {
            memoryGame.checkIfPair(pair[0], pair[1]);

            if (pair[0].getAttribute('id') !== pair[1].getAttribute('id')) {
                pair.forEach(function(el) {
                    for (var i = 0; i < el.childNodes.length; i++) {
                        if (el.childNodes[i].className === 'front') {
                            hideCard(el);
                        }
                    }
                });
            }
        }
    });
});

function removeAndAddClass(el) {
    el.removeClass();
    el.addClass('front');

    el.siblings().removeClass();
    el.siblings().addClass('back');
}

function hideCard(el) {
    setTimeout(function() {
        el.childNodes[0].classList.remove('front');
        el.childNodes[0].classList.add('back');

        el.childNodes[1].classList.remove('back');
        el.childNodes[1].classList.add('front');
    }, 1000);
}

function createPair(arr) {
    var pair = [];
    pair[0] = arr[arr.length - 2];
    pair[1] = arr[arr.length - 1];
    return pair;
}
