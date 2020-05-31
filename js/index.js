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
const body = document.getElementsByTagName('body')
let cardsCount = 0
let cardsUp = 0

memoryGame.shuffleCards()

window.addEventListener('load', event => {

  drawCards()


});

function drawCards() {

  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}" style="font-size:10px">${pic.name}</div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });



  document.querySelector('#memory-board').innerHTML = html;
  // Add all the divs to the HTML

  const pairCard = document.getElementById('pairs-clicked')


  // Bind the click event of each element to a function
  document.querySelectorAll('#memory-board > div.card').forEach((card, idx) => {
    memoryGame.cardsPair.forEach(e => {
      if (e.dataset.cardName === card.dataset.cardName) {
        card.classList.add('turned')
      }
    })

    card.addEventListener('click', () => {
      memoryGame.pickedCards.push(card)
      console.log(memoryGame.pickedCards[0].dataset.cardName);
      memoryGame.pickedCards[0] && memoryGame.pickedCards[1] ? memoryGame.checkIfPair(memoryGame.pickedCards[0].dataset.cardName, memoryGame.pickedCards[1].dataset.cardName) : memoryGame.checkIfPair(memoryGame.pickedCards[0].dataset.cardName)
      card.classList.toggle('turned', true)
      cardsCount++
      cardsUp++
      pairCard.innerText = cardsCount
      console.log(memoryGame.pickedCards)
      memoryGame.isFinished(memoryGame.pairsGuessed)


      if (cardsUp === 2) {
        if (memoryGame.pickedCards[0].dataset.cardName == memoryGame.pickedCards[1].dataset.cardName) {

          console.log('COINCIDE');
          memoryGame.cardsEqual++
          memoryGame.pairsGuessedCard.innerText = memoryGame.cardsEqual
          memoryGame.cardsPair.push(memoryGame.pickedCards[0])
          memoryGame.cardsPair.push(memoryGame.pickedCards[1])
          console.log('cardsPair: ', memoryGame.cardsPair);
          body[0].style.cursor = 'no-drop'

        } else {
          body[0].style.cursor = 'not-allowed'

        }

        setTimeout(() => {
          body[0].style.cursor = 'default'
          memoryGame.pickedCards = []
          drawCards()
          cardsUp = 0
        }, 1500)
      }

    });


  });

}
