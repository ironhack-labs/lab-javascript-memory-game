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

window.addEventListener('DOMContentLoaded', event => {
    addAllCards();
});

function addAllCards() {
    let html = '';
    memoryGame.cards.forEach(pic => {
      html += `<div class="card" data-card-name="${pic.name}">`;
      html += `<div class="back" name="${pic.img}"></div>`;
      html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
      html += `</div>`;
    });
  
    document.querySelector('#memory-board').innerHTML = html;
  
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', onClickCard);
    });
}

function removeAllCards() {
    document.querySelector('#memory-board').innerHTML = '';
}

function onClickCard(event) {
    if (memoryGame.isFinished()) {
        return;
    }

    const card = event.currentTarget;
    flipCard(card);
    updateScore();
    if (memoryGame.isFinished()) {
        onWin();
    }
}

function flipCard(card) {
    const pickedCards = memoryGame.pickedCards;
    
    card.classList.add('turned');
    pickedCards.push(card.getAttribute('data-card-name'));

    if (pickedCards.length !== 2) {
        return;
    }

    const result = memoryGame.checkIfPair(pickedCards[0], pickedCards[1]);
    const firstCard = document.querySelector(`.turned[data-card-name="${pickedCards[0]}"]`);
    
    if (result) {
        firstCard.classList.add('blocked');
        card.classList.add('blocked');
    } else {
        flipCardBack(firstCard);
        flipCardBack(card);
    }

    memoryGame.pickedCards = [];
}

function flipCardBack(card) {
    setTimeout(function() {
        card.classList.remove('turned');
    }, 1000);
}

function updateScore() {
    document.getElementById('pairs-clicked').textContent = memoryGame.pairsClicked;
    document.getElementById('pairs-guessed').textContent = memoryGame.pairsGuessed;
}

function onWin() {
    const FLIP_DELAY = 200;
    const FLIP_DURATION = 600;

    setTimeout(() => {
        alert(`Congratualations! You've won!`);
        
        document.querySelectorAll('.card.turned').forEach((card, index) => {
            setTimeout(function() {
                flipCardBack(card);
            }, index * FLIP_DELAY);
        });

        setTimeout(() => {
            memoryGame.resetGame();
            removeAllCards();
            updateScore();
            addAllCards();
        }, FLIP_DELAY * memoryGame.cards.length + FLIP_DURATION * 2);
    }, 500);    
}