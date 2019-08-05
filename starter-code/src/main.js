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
var memoryGame = new MemoryGame(cards);
var twoUnflip = [];

function notify() {
    alert("clicked");
}

function giveTime() {

}

let blockCards = (cards) => {
    let first = cards.first();
    let second = cards.last();
    first.children().last().addClass("blocked");
    second.children().last().addClass("blocked");

}
let flipCard = (card,target) => {


    if (twoUnflip.length == 2) {
        twoUnflip[0].children().last().removeClass('back');
        twoUnflip[0].children().first().addClass('back');
        twoUnflip[1].children().last().removeClass('back');
        twoUnflip[1].children().first().addClass('back');
        twoUnflip = [];
    }
    let children = card.children();
    let backCard = children.first()
    let frontCard = children.last();

    if (backCard.hasClass('back')) {
        backCard.removeClass('back');
        memoryGame.setPair(card.data("card-name"), (ifPairs, card1, card2) => {
            let firstCard = $(document).find(`[data-card-name='${card1}']`);
            let secondCard = $(document).find(`[data-card-name='${card2}']`);

            if (ifPairs) {
                blockCards(firstCard);
            } else {
                console.log("passou aqui");
                twoUnflip.push(firstCard.first());
                twoUnflip.push(secondCard.first());

            }
        });

    } else {
        backCard.addClass('back');
    }
    frontCard.toggleClass('back');

    if(card.data("flipped") === "1") {
      card.data("flipped", "0");
    } else {
      card.data("flipped", "1");
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
        //console.log( index + ": " + $( this ).text() );
        $(this).on("click", (target) => {
            flipCard($(this), target);
        });

    });
});