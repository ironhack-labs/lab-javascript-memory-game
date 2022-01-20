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
memoryGame.shuffleCards()

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

  // Select pairs clicked and pairs guessed
  const pairsClickedTag = document.querySelector('#pairs-clicked')
  const pairsGuessedTag = document.querySelector('#pairs-guessed')

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      console.log(`Card clicked: ${card}`);
      card.setAttribute('class', ' card turned')
      memoryGame.pickedCards.push(card)

      if (memoryGame.pickedCards.length === 2) {
        let card1 = memoryGame.pickedCards[0]
        let card2 = memoryGame.pickedCards[1]

        let card1Name = card1.getAttribute('data-card-name')
        let card2Name = card2.getAttribute('data-card-name')

        if (!memoryGame.checkIfPair(card1Name, card2Name)) {
          const timeoutId = setTimeout(() => {
            card1.setAttribute('class', 'card')
            card2.setAttribute('class', 'card')
          }, 1000)
        }
        memoryGame.pickedCards = []

        // card.setAttribute('class', 'card turned')
        // memoryGame.pickedCards.push(card.getAttribute('data-card-name'))
        // console.log(`Card clicked: ${card.getAttribute('data-card-name')}`);


        // if (memoryGame.pickedCards.length === 2) {
        //   console.log(memoryGame.pickedCards[0], memoryGame.pickedCards[1])
        //   if (!memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {
        //     // cambiar la clase de nuevo
        //     const timeOutId = setTimeout(() => {
        //       memoryGame.pickedCards[0].setAttribute('class', 'card')
        //       memoryGame.pickedCards[1].setAttribute('class', 'card')
        //     }, 1000)
        //   }
        //   // limpiar array
        //   memoryGame.pickedCards = []


      }

      pairsClickedTag.innerHTML = memoryGame.pairsClicked
      pairsGuessedTag.innerHTML = memoryGame.pairsGuessed

      if (memoryGame.checkIfFinished()) {
        alert('You won!')
      }
    })
  })
})


