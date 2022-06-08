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

// let { pickedCards, pairsClicked, pairsGuessed, shuffleCards, checkIfPair, checkIfFinished } = memoryGame

window.addEventListener('load', (event) => {
  // memoryGame.shuffleCards()

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
      console.log(`Card clicked: ${card}`);


      let pairsClickedTitle = document.querySelector('#pairs-clicked')
      let pairsGuessedTitle = document.querySelector('#pairs-guessed')

      pairsClickedTitle.innerHTML = memoryGame.pairsClicked
      pairsGuessedTitle.innerHTML = memoryGame.pairsGuessed

      memoryGame.pickedCards.unshift(card)

      // console.log(memoryGame.pickedCards[1].dataset.cardName)

      // console.log(memoryGame.pickedCards[0].dataset.cardName)

      if (memoryGame.checkIfPair(memoryGame.pickedCards[0].dataset.cardName, memoryGame.pickedCards[1].dataset.cardName)) {
        console.log(memoryGame.pickedCards[0].dataset.cardName)
        console.log(memoryGame.pickedCards[1].dataset.cardName)

        memoryGame.pickedCards[0].classList.add('blocked')
        memoryGame.pickedCards[1].classList.add('blocked')
        memoryGame.pickedCards = []
        console.log(memoryGame.pickedCards)
      }

      else {
        setTimeout(function () {
          memoryGame.pickedCards[0].classList.toggle('turned')
          memoryGame.pickedCards[1].classList.toggle('turned')
          memoryGame.pickedCards = []
          console.log(memoryGame.pickedCards)
        }, 1000)

      }

      if (memoryGame.checkIfFinished()) {
        let cards = document.querySelectorAll('.card')
        cards.forEach(element => {
          element.classList.toggle('blocked')
          element.classList.toggle('turned')
        })

        memoryGame.pairsGuessed = 0
        window.alert('ENHORABUENA, TE HAS PASADO EL JUEGO!!!!')
      }

    });
  });
});



