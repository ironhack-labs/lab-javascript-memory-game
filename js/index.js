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
      card.classList.add('turned') 
      console.log(`Card clicked: ${card}`);

      memoryGame.pickedCards.push(card);  
      console.log(memoryGame.pickedCards);

      if (memoryGame.pickedCards.length === 2) {
        let cardOne = memoryGame.pickedCards[0] 
        let cardOneReveal = cardOne.getAttribute('card-name-data')

        let cardTwo = memoryGame.pickedCards[1]
        let cardTwoReveal = cardTwo.getAttribute('card-name-data')

        if (memoryGame.checkIfPair(cardOneReveal, cardTwoReveal)) {
          cardOne.classList.add('blocked')
          cardTwo.classList.add('blocked')
        } else {
          setTimeout(() => {
            cardOne.classList.remove('turned')
            cardTwo.classList.remove('turned')
          }, 1000)
        }
        document.querySelector('#pairs-clicked').innerHTML = `<p> ${memoryGame.pairsClicked}</p>` 
        memoryGame.pickedCards = []

        document.querySelector('#pairs-guessed').innerHTML = `<p> ${memoryGame.pairsGuessed}</p>`
          memoryGame.checkIfFinished()
      }
      
    });
  });
});
