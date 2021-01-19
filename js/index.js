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
memoryGame.shuffleCards()

window.addEventListener('load', event => {
    let html = '';
    memoryGame.cards.forEach(pic => {
        html += `<div class="card" data-cardname="${pic.name}">`;
        html += `<div class="back" name="${pic.img}"></div>`;
        html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
        html += `</div>`;
    });

    // Add all the divs to the HTML
    document.querySelector('#memory-board').innerHTML = html;

    // Bind the click event of each element to a function

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            if (memoryGame.pickedCards.length < 2) {
                memoryGame.pickedCards.push(card)
                card.classList.add('turned')
            }
            if (memoryGame.pickedCards.length === 2) {
                const result = memoryGame.checkIfPair(memoryGame.pickedCards[0].dataset.cardname, memoryGame.pickedCards[1].dataset.cardname)
                document.getElementById('pairs-clicked').textContent = memoryGame.pairsClicked
                document.getElementById('pairs-guessed').textContent = memoryGame.pairsGuessed
                if (result) {
                    if (memoryGame.isFinished()) {
                        const winMessage = document.createElement('div')
                        winMessage.textContent = 'You Won!'
                        document.getElementById('memory-board').appendChild(winMessage)
                        
                    }
                    memoryGame.pickedCards= []
                }
                else {
                    setTimeout(() => {
                        memoryGame.pickedCards[0].classList.toggle('turned')
                        memoryGame.pickedCards[1].classList.toggle('turned')
                        memoryGame.pickedCards = []
                    }, 500)
                }
            }
        });
    });

});