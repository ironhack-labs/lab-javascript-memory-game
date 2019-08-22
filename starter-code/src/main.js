var cards = [
    { name: 'aquaman', img: 'aquaman.jpg' },
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


function createCards(arrayCards) {
    let dec = [];
    for (i = 0; i < arrayCards.length; i++) {
        let card = new Card(arrayCards[i].name, arrayCards[i].img, i + 1);
        deck.push(card);
    }
    return dec;
}

var memoryGame = new MemoryGame(createCards(cards));

var twoUnflip = [];

let unflip = (item) => {
    let children = item.children();
    children.last().removeClass('back');
    children.first().addClass('back');
}

let unflipItens = () => {
    unflip(twoUnflip[0]);
    unflip(twoUnflip[1]);
    twoUnflip = [];
}

let unflipEveryBody = () => {
    $('.card').each(function(index) {
        unflip($(this));
    });
}

let colorFinalGame = function() {
    let defaultColor = "rgb(221, 221, 221)";
    let winnerColor = "yellow";
    let color = $('#memory_board').css("background-color");
    (color === "rgb(221, 221, 221)") ? $('#memory_board').css("background-color", winnerColor): $('#memory_board').css("background-color", defaultColor);

}

let restarGame = () => {

    var id = setInterval(colorFinalGame, 200);
    setTimeout(() => {
        clearInterval(id);
        $('#memory_board').css("background-color", "#dddddd");
        memoryGame.shuffleCards();
    }, 1200);
    setTimeout(unflipEveryBody, 500);



}

let blockCards = (cards) => {
    let first = cards.first();
    let second = cards.last();
    first.children().last().addClass("blocked");
    second.children().last().addClass("blocked");

}
let updateScore = () => {

    $('#pairs_clicked').text(memoryGame.pairsClicked);
    $('#pairs_guessed').text(memoryGame.pairsGuessed);
    if (memoryGame.isFinished()) {
        restarGame();
        memoryGame.pairsClicked = 0;
        memoryGame.pairsGuessed = 0;
        $('#pairs_clicked').text(memoryGame.pairsClicked);
        $('#pairs_guessed').text(memoryGame.pairsGuessed);


    }
}

let cardArea = (index) => {
    return $(`.card:nth-child(${index})`);
}

let flipCard = (jCard, index) => {

    if (twoUnflip.length == 2) {
        unflipItens();
    }

    let children = jCard.children();
    let card = memoryGame.findCard(index);

    let backCard = children.first();
    let frontCard = children.last();
    if (backCard.hasClass('back')) {
        backCard.removeClass('back');

        frontCard.toggleClass('back');
        memoryGame.setPair(card, (ifPairs, card1, card2) => {


            let jFirstCard = cardArea(card1.position);
            let jSecondCard = cardArea(card2.position);

            if (ifPairs) {
                blockCards(jFirstCard);

            } else {
                twoUnflip.push(jFirstCard.first());
                twoUnflip.push(jSecondCard.first());


            }
            updateScore();
        });
    } else {
        backCard.addClass('back');
    }

}


$(document).ready(() => {
    var html = '';
    memoryGame.cards.forEach(function(pic) {
        html += '<div class="card" data-flipped="0" data-card-name="' + pic.name + '">';
        html += '  <div class="back" name="' + pic.img + '"></div>';
        html += '  <div class="front blocked" style="background: url(img/' + pic.img + ') no-repeat"></div>';
        html += '</div>';
    });
    $('#memory_board').html(html);
    $('.card').each(function(index) {

        $(this).on("click", () => {
            flipCard($(this), index + 1);

        });

    });
});