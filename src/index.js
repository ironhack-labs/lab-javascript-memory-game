
// console.log('prueba de conexion 1')

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
memoryGame.shuffleCards(cards)

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
      // TODO: write some code here
      
      card.classList.toggle('turned')
      
      memoryGame.pickedCards.push(card)
      // console.log(memoryGame.pickedCards)

      if (memoryGame.pickedCards.length === 2) {
        const card1 = memoryGame.pickedCards[0]
        const card2 = memoryGame.pickedCards[1]

        const attribute1 = card1.getAttribute('data-card-name')
        const attribute2 = card2.getAttribute('data-card-name')
        // memoryGame.checkIfPair(card1, card2)
        // console.log(memoryGame.checkIfPair(card1, card2))
        if (memoryGame.checkIfPair(attribute1, attribute2) === false) {
          console.log(attribute1)
          // console.log(memoryGame.pickedCards)
          card1.classList.remove('turned')
          // console.log(memoryGame.pickedCards)
          card2.classList.remove('turned')
          // console.log(memoryGame.pickedCards)
          memoryGame.pickedCards = []
          // console.log(memoryGame.pickedCards)
             

        }
     
      }

      console.log(`Card clicked: ${card}`);
    },);
  },);
});
