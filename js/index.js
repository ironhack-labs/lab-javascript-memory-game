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

let cardsPicked = [];
const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
    memoryGame.shuffleCards();
    let html = '';
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
            // TODO: write some code here
            //console.log(`Card clicked: ${card}`);

            console.log(`Card clicked: ${cardsPicked.length} ${cardsPicked}`)
            if (cardsPicked.length > 2) {
                console.log("no permitido")
                return;
            }
            cardsPicked.push(card);
            if (cardsPicked.length < 3) {
                card.classList.toggle('turned');
            }

            if (cardsPicked.length == 2) {
                let nameCardOne = cardsPicked[0].getAttribute('data-card-name');
                let nameCardTwo = cardsPicked[1].getAttribute('data-card-name')
                console.log(nameCardOne, nameCardTwo)
                let equal = memoryGame.checkIfPair(nameCardOne, nameCardTwo)

                if (!equal) {
                    //alert("las cartas no son iguales")
                    setTimeout(function() {
                        console.log("entre al set ")

                        cardsPicked.forEach(cardone => {
                            cardone.classList.toggle('turned');
                        });
                        console.log("dentro del set")
                        cardsPicked = [];

                    }, 500);
                    //console.log("fuera del set time out")
                } else {
                    const finished = memoryGame.checkIfFinished();
                    if (finished) { alert("Congratulation") }
                    cardsPicked = [];
                }


            }

            const clicked = document.getElementById('pairs-clicked');
            const guessed = document.getElementById('pairs-guessed');

            clicked.innerText = memoryGame.pairsClicked;
            guessed.innerText = memoryGame.pairsGuessed;





        });
    });
});