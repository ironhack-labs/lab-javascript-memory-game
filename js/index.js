const cards = [
    {name: 'aquaman', img: 'aquaman.jpg'},
    {name: 'batman', img: 'batman.jpg'},
    {name: 'captain america', img: 'captain-america.jpg'},
    {name: 'fantastic four', img: 'fantastic-four.jpg'},
    {name: 'flash', img: 'flash.jpg'},
    {name: 'green arrow', img: 'green-arrow.jpg'},
    {name: 'green lantern', img: 'green-lantern.jpg'},
    {name: 'ironman', img: 'ironman.jpg'},
    {name: 'spiderman', img: 'spiderman.jpg'},
    {name: 'superman', img: 'superman.jpg'},
    {name: 'the avengers', img: 'the-avengers.jpg'},
    {name: 'thor', img: 'thor.jpg'},
    {name: 'aquaman', img: 'aquaman.jpg'},
    {name: 'batman', img: 'batman.jpg'},
    {name: 'captain america', img: 'captain-america.jpg'},
    {name: 'fantastic four', img: 'fantastic-four.jpg'},
    {name: 'flash', img: 'flash.jpg'},
    {name: 'green arrow', img: 'green-arrow.jpg'},
    {name: 'green lantern', img: 'green-lantern.jpg'},
    {name: 'ironman', img: 'ironman.jpg'},
    {name: 'spiderman', img: 'spiderman.jpg'},
    {name: 'superman', img: 'superman.jpg'},
    {name: 'the avengers', img: 'the-avengers.jpg'},
    {name: 'thor', img: 'thor.jpg'}
];

const memoryGame = new MemoryGame(cards);
let canPlay = true;

window.addEventListener('load', (event) => {
    let html = '';
    memoryGame.shuffleCards();
    memoryGame.pairsGuessed = 0;
    memoryGame.pairsClicked = 0;

    memoryGame.cards.forEach((pic) => {
        html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
    });

    // Add all the divs to the HTML
    document.querySelector('#memory-board').innerHTML = html;

    // Bind the click event of each element to a function
    document.querySelectorAll('.card').forEach((card) => {
        card.addEventListener('click', () => {

            turnCard(card);
            if (memoryGame.pickedCards.length % 2 === 0) {
                canPlay = false;
                setTimeout(function () {
                    play();
                }, 500)
            }
        });
    });
})
;

function play() {
    const card1 = memoryGame.pickedCards[0];
    const card2 = memoryGame.pickedCards[1];

    if (!memoryGame.checkIfPair(card1, card2)) {
        memoryGame.pickedCards = memoryGame.pickedCards.slice(2);

        for (let item of document.querySelectorAll('.card.turned')) {
            if (item.getAttribute('data-card-name') === card1 ||
                item.getAttribute('data-card-name') === card2) {
                item.classList.toggle("turned");
            }
        }
    }
    canPlay = true;
    updateScreen();
    isGameOver();
}

function turnCard(card) {
    if (canPlay) {
        card.classList.toggle('turned');
        memoryGame.pickedCards.unshift(card.getAttribute('data-card-name'));
    }
}

function updateScreen() {
    document.querySelector('#pairs-guessed').innerText = `${memoryGame.pairsGuessed}`;
    document.querySelector('#pairs-clicked').innerText = `${memoryGame.pairsClicked}`;
}

function isGameOver() {
    if (memoryGame.checkIfFinished()) {
        canPlay = false;
        alert('Game Over');
    }

}