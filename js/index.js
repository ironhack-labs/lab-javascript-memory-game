// const MemoryGame = require("./memory");

const cards = [
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

const memoryGame = new MemoryGame(cards);

//page has loaded already
window.addEventListener('load', (event) => {
    let html = '';
    // property "cards" of object "memoryGame"
    memoryGame.cards.forEach((card) => {
        html += `
      <div class="card" data-card-name="${card.name}">
        <div class="back" name="${card.img}"></div>
        <div class="front" style="background: url(img/${card.img}) no-repeat"></div>
      </div>
    `;
    });

    // Add all the divs to the HTML
    document.querySelector('#memory-board').innerHTML = html;

    // Bind the click event of each element to a function
    document.querySelectorAll('.card').forEach((card) => {
        card.addEventListener('click', () => {
            card.classList.add('turned')
            memoryGame.pickedCards.push(card);

            if (memoryGame.pickedCards.length === 1) {
                return
            }

            const timeout = 600; // wait for the card to be flipped;

            setTimeout(() => {
                const card1 = memoryGame.pickedCards[0].getAttribute('data-card-name');
                const card2 = card.getAttribute('data-card-name');

                if (!memoryGame.checkIfPair(card1, card2)) {
                    card.classList.remove('turned');
                    memoryGame.pickedCards[0].classList.remove('turned');
                }

                document.querySelector('#pairs-clicked').innerText = memoryGame.pairsClicked;
                document.querySelector('#pairs-guessed').innerText = memoryGame.pairsGuessed;

                if (memoryGame.checkIfFinished()) {
                    alert("You won!")
                }

                memoryGame.pickedCards = [];
            }, timeout);
        });
    });
});