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
// console.log(memoryGame.cards)

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

      if (memoryGame.pickedCards.length < 2) {
        card.classList.add('turned')
      }
      memoryGame.pickedCards.push(card)

      //if the length of picked cards is 2
      if (memoryGame.pickedCards.length === 2) {

        let card1 = memoryGame.pickedCards[0].getAttribute('data-card-name')
        let card2 = memoryGame.pickedCards[1].getAttribute('data-card-name')

        let result = memoryGame.checkIfPair(card1, card2)

        console.log(card1)
        console.log(card2)
        console.log(result)

        if (!result) {
          setTimeout(function () {

            for (let card of memoryGame.pickedCards) {
              card.classList.remove('turned')
            }
            memoryGame.pickedCards = []
          }, 2000)

        } else {
          for (let card of memoryGame.pickedCards) {
            card.classList.add('blocked')
          }
          memoryGame.pickedCards = []
        }

      }


      if (memoryGame.checkIfFinished() === true) {

        alert('Congratulations, You Win!')

      }

      const pairsClicked = document.getElementById('pairs-clicked')
      const pairsGuessed = document.getElementById('pairs-guessed')
      pairsClicked.innerHTML = memoryGame.pairsClicked
      pairsGuessed.innerHTML = memoryGame.pairsGuessed






      console.log(memoryGame.pickedCards)



      //the memory game above is the object from which we need to extract logic


    });
  });
});


// console.log(memoryGame)

