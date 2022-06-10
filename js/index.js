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
      memoryGame.pickedCards.push(card)
      card.classList.add('turned');
      // console.log(`Card clicked: ${card}`);
      console.log(memoryGame.pickedCards[0])
      console.log(memoryGame.pickedCards[1])
      console.log(`pickedCars length: ${memoryGame.pickedCards.length}`)
      if (memoryGame.pickedCards.length === 2) {
        // console.log(`pairsClicked: ${memoryGame.pairsClicked}`)
        // console.log(`pairsGuessed: ${memoryGame.pairsGuessed}`)
        if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {
          console.log(memoryGame.pickedCards)
          memoryGame.pickedCards[0].classList.add('blocked');
          memoryGame.pickedCards[1].classList.add('blocked');
          document.querySelector('#pairs-clicked').innerText = `${memoryGame.pairsClicked}`
          document.querySelector('#pairs-guessed').innerText = `${memoryGame.pairsGuessed}`
          memoryGame.pickedCards.splice(0,2)
          console.log(`pickedCard after splice equal to ${memoryGame.pickedCards.length}`)
          checkIfFinished()
        } else {
          memoryGame.pickedCards[0].classList.remove('turned');
          memoryGame.pickedCards[1].classList.remove('turned');
          memoryGame.pickedCards.splice(0,2)
          document.querySelector('#pairs-clicked').innerText = `${memoryGame.pairsClicked}`
        }
      } 
      })

      })
    });
  // });
// });
