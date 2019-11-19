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
let compare;
const memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards();

function updateScore() {
    document.querySelector('#pairs_clicked').innerHTML = memoryGame.pairsClicked;
    document.querySelector('#pairs_guessed').innerHTML = memoryGame.pairsGuessed;
}

document.addEventListener("DOMContentLoaded", function(event) {
    let html = '';
    memoryGame.cards.forEach(pic => {
        html += `<div class="card" data-card-name="${pic.name}">`;
        html += `<div class="back" name="${pic.img}"></div>`;
        html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
        html += `</div>`;
    });

    // Add all the divs to the HTML
    document.querySelector('#memory_board').innerHTML = html;

    // Bind the click event of each element to a function
    document.querySelectorAll('.card').forEach((card, index) => {
        card.onclick = function() {
            //turn the card
            this.classList.add("turned");
            //push th picked cards array
            let obj = { card: memoryGame.cards[index], pos: index };
            memoryGame.pickedCards.push(obj);
            if (memoryGame.pickedCards.length == 2) {
                compare = memoryGame.checkIfPair(memoryGame.pickedCards[0].card.name, memoryGame.pickedCards[1].card.name);
                updateScore();
                setTimeout(() => {
                    if (!compare) {
                        let i = memoryGame.pickedCards[0].pos;
                        document.querySelector('#memory_board').children[i].classList.remove("turned");
                        this.classList.remove("turned")
                    }
                    if (memoryGame.isFinished()) {
                        alert("You did it!!!!!");
                        let html = '';
                        memoryGame.shuffleCards();
                        memoryGame.pairsClicked = 0;
                        memoryGame.pairsGuessed = 0;
                        updateScore();
                        memoryGame.cards.forEach(pic => {
                            html += `<div class="card" data-card-name="${pic.name}">`;
                            html += `<div class="back" name="${pic.img}"></div>`;
                            html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
                            html += `</div>`;
                        });

                        // Add all the divs to the HTML
                        document.querySelector('#memory_board').innerHTML = html;
                    }
                    // //empty the picked card array
                    memoryGame.pickedCards.splice(0, 2);
                }, 1000);

            }
        }
    })
});