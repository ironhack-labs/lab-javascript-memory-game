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
    let html = '';
    memoryGame.shuffleCards();
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
            let card1;
            let card2;
            card.querySelectorAll('.card > div').forEach(div => {

                //another alternative is to toggle the classes back and front when the user 
                //clicks on a card. For this functionality, the method element.classList.toggle() 
                //can be very helpful. This method receives a string as the first argument 
                //(the class to toggle).
                div.classList.toggle('front');
                div.classList.toggle('back');
            });

            //(append) pushing the picked cards to the empty array "pickedcards"
            memoryGame.pickedCards.push(card);


            //if logic sets name of the 2 picked cards in the card1 and card2 if 2 cards are selected from the data-card-name
            if (memoryGame.pickedCards.length === 2) {
                card1 = memoryGame.pickedCards[0].getAttribute('data-card-name');
                card2 = memoryGame.pickedCards[1].getAttribute('data-card-name');

                // if the checkIfPair returns true (cards match), then it empties the pickedcards array
                if (memoryGame.checkIfPair(card1, card2)) {
                    memoryGame.pickedCards[0].classList.add('empty');
                    memoryGame.pickedCards[1].classList.add('empty');
                    memoryGame.pickedCards = [];
                } else {
                    //if the checkIfPair returns false (cards do not match), then it pushes each .card to the div 
                    //and reverses the cards with the given timout time
                    setTimeout(() => {
                        memoryGame.pickedCards.forEach(card => {
                            card.querySelectorAll('.card > div').forEach(div => {
                                div.classList.toggle('front');
                                div.classList.toggle('back');
                            });
                        })
                        memoryGame.pickedCards = [];
                    }, 800);
                }

                // pushes the incremented numbers from pairsclicked and pairsgussed to the HTML
                document.getElementById('pairs-clicked').innerHTML = memoryGame.pairsClicked;
                document.getElementById('pairs-guessed').innerHTML = memoryGame.pairsGuessed;

                //if the pairs guessed so far equals to the card length/2 then alert game finished you won!
                if (memoryGame.isFinished()) {
                    setTimeout(() => {
                        window.alert('Game finished: YOU WON!!!!');
                    }, 1000);
                }


                if (memoryGame.notFinished()) {
                    setTimeout(() => {
                        alert('Wrong choice. try again');
                    }, 1000);
                }
            }
        });
    });
});