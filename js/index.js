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

window.addEventListener('load', (event) => {
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
      let isPair = false;
      let pairsClicked = document.getElementById('pairs-clicked');
      let pairsGuessed = document.getElementById('pairs-guessed');
      let score = document.getElementsByTagName('h2');

      console.log('Card clicked: ', card);
      card.classList.add('turned'); // Shows the card

      if (memoryGame.pickedCards.length < 2) { // Player hasn't clicked on two cards yet, so pickedCards can be updated with the clicked card
        memoryGame.pickedCards.push(card);
      }
      else { // Player has already selected two cards which were not a pair, so pickedCards needs to be emptied before the clicked card is added
        memoryGame.pickedCards[1].classList.remove('turned');
        memoryGame.pickedCards.pop();
        memoryGame.pickedCards[0].classList.remove('turned');
        memoryGame.pickedCards.pop();
        memoryGame.pickedCards.push(card);
      }
      
      if (memoryGame.pickedCards.length === 2) { // If there are two picked cards, compare if they form a pair
        isPair = memoryGame.checkIfPair(memoryGame.pickedCards[0].attributes[1].value,memoryGame.pickedCards[1].attributes[1].value);
        pairsClicked.textContent = memoryGame.pairsClicked; // Updates the score with the pairs clicked
        if (isPair) {
          // Cleans the pickedCards array but leaves the cards open
          memoryGame.pickedCards.pop();
          memoryGame.pickedCards.pop();
          pairsGuessed.textContent = memoryGame.pairsGuessed; // Updates the score
        }  
      }
      
      if (memoryGame.checkIfFinished())
        score[0].innerText = 'YOU WON';
    });
  });
});
