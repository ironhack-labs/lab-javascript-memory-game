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
  memoryGame.shuffleCards(cards)
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
      console.log(`Card clicked: ${card}`)

      // console.log(`Card clicked:` + card.getAttribute('data-card-name'))

      card.classList.toggle('turned', true)
     
      
      if (memoryGame.pickedCards.length === 0) {
        memoryGame.pickedCards.push(card.getAttribute('data-card-name'))
        // console.log('first-if')
      } else {
        console.log(memoryGame.pickedCards.length)
        let resultBoolean = memoryGame.checkIfPair(card.getAttribute('data-card-name'), memoryGame.pickedCards[memoryGame.pickedCards.length - 1] )
        console.log(resultBoolean)
        if (resultBoolean === false) {
          const timeoutId = setTimeout(() => {
            card.classList.toggle('turned', false)
          }, 1500)
        } 
        // console.log('second-if')
      }
      
      document.getElementById('pairs-clicked').innerHTML = memoryGame.pairsClicked
      document.getElementById('pairs-guessed').innerHTML = memoryGame.pairsGuessed
    });
  });
});
