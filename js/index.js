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

window.addEventListener('load', event => {
    memoryGame.shuffleCards()
    let html = '';
    memoryGame.cards.forEach(pic => {
        html += `<div class="card" data-card-name="${pic.name}">`;
        html += `<div class="back" name="${pic.img}"></div>`;
        html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
        html += `</div>`;
    });

    // Add all the divs to the HTML
    document.querySelector('#memory-board').innerHTML = html;

    // Bind the click event of each element to a function
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            // TODO: write some code here
            console.log(`Card clicked: ${card}`);
            showCard(card)
            memoryGame.pickedCards.push(card)
            checkingCards()


        });
    });
});

//TODO: Hacer la funcion para girar la carta
const showCard = (card) => {
    card.classList.toggle('turned')
}

//TODO: Sacar los contadores
const pairsClickedCounter = () => document.querySelector('#pairs-clicked').innerHTML++

    const pairsGuessedCounter = () => document.querySelector('#pairs-guessed').innerHTML++


        //TODO: Hacer la funcion para comparar las cartas 

        const checkingCards = () => {
            if (memoryGame.pickedCards.length === 0) {
                pairsClickedCounter()
            }

            const card1 = memoryGame.pickedCards[0].getAttribute('data-card-name')
            const card2 = memoryGame.pickedCards[1].getAttribute('data-card-name')

            if (memoryGame.checkIfPair(card1, card2)) {
                pairsGuessedCounter()
                memoryGame.pairsClicked = []
            } else {

                setTimeout(() => {
                    memoryGame.pickedCards.map(card => card.classList.toggle("turned"))
                    memoryGame.pickedCards = []
                }, 1000)
            }

            if (memoryGame.isFinished()) {
                const clickerCounter = document.querySelector('#pairs-clicked').innerHTML++
                    if (clickerCounter < 20) {
                        alert('Enhorabuena, tu memoria esta muy bien!!!')
                    } else {
                        alert('Trabaja mas esa concentracion, puedes intentarlo de nuevo ;)')
                    }
            }


        }