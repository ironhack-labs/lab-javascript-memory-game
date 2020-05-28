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
  memoryGame.shuffleCards(cards);
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
      card.classList.toggle('turned');
      memoryGame.pickedCards.push(card)
      if (memoryGame.pickedCards.length === 2) {
        const card1 = memoryGame.pickedCards[0]
        const card2 = memoryGame.pickedCards[1]

        const cardAttibute1 = card1.getAttribute('data-card-name')
        const cardAttibute2 = card2.getAttribute('data-card-name')

        if (cardAttibute1, cardAttibute2) {
          card1.classList.add('blocked')
          card2.classList.add('blocked')
          document.getElementById('pairs-clicked').innerHTML = memoryGame.pairsClicked
          setTimeout(() => {
            if (memoryGame.checkIfPair(cardAttibute1, cardAttibute2)) {
              memoryGame.pickedCards = []
              document.getElementById('pairs-guessed').innerHTML = memoryGame.pairsGuessed
            } else {
              card1.classList.remove('turned')
              card2.classList.remove('turned')
              memoryGame.pickedCards = []
              document.getElementById('pairs-clicked').innerHTML = memoryGame.pairsClicked
              document.getElementById('pairs-guessed').innerHTML = memoryGame.pairsGuessed
            }
          }, 500)
        }

        if (memoryGame.isFinished()) {
          alert('You Won!!');
          location.reload();
        }
        
      }
      
      console.log(`Card clicked: ${card}`);
    });
  });
});
