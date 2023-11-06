document.addEventListener('DOMContentLoaded', function () {
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

  let firstCard = null;
  let secondCard = null;

  function flipCard(card) {
    
    if (!card.classList.contains('turned') && !card.classList.contains('blocked')) {
      card.classList.add('turned'); 

      
      if (firstCard === null) {
        firstCard = card;
      } else {
        secondCard = card;
        
        const cardName1 = firstCard.getAttribute('data-card-name');
        const cardName2 = secondCard.getAttribute('data-card-name');

        const isPair = memoryGame.checkIfPair(cardName1, cardName2);

        if (isPair) {
          firstCard.classList.add('blocked');
          secondCard.classList.add('blocked');
        } else {
          setTimeout(() => {
            firstCard.classList.remove('turned');
            secondCard.classList.remove('turned');
          }, 1000);
        }

        firstCard = null;
        secondCard = null;

        memoryGame.pairsClicked++;
        document.getElementById('pairs-clicked').textContent = memoryGame.pairsClicked;

        if (isPair) {
          memoryGame.pairsGuessed++;
          document.getElementById('pairs-guessed').textContent = memoryGame.pairsGuessed;
        }

        if (memoryGame.checkIfFinished()) {
          alert('You won!!!');
        }
      }
    }
  }

  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  document.querySelector('#memory-board').innerHTML = html;

  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      flipCard(card);
    });
  });
});
