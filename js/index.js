const cards = [{
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  },
  {
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', event => {

  memoryGame.shuffleCards();

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
      // TODO: write some code here

      card.classList.toggle('turned'); // Al clickar la carta ésta se gira
      cardName = card.getAttribute('data-card-name'); // Por cada click se obtiene el nombre de la carta
      memoryGame.pickedCards.push(cardName); // El nombre de la carta clicada se añade al array pickedCards
      // console.log(memoryGame.pickedCards); // TEST 

      if (memoryGame.pickedCards.length > 1) { // Solo se comprueban los arrays con más de dos elementos para evitar el false en la primera iteración

        let card1 = memoryGame.pickedCards[memoryGame.pickedCards.length - 1]; // La posición inicial es card1
        let card2 = memoryGame.pickedCards[memoryGame.pickedCards.length - 2]; // La siguiente posición es card2

        memoryGame.checkIfPair(card1, card2);

        if (!memoryGame.checkIfPair(card1, card2)) { // Si no son iguales se dan la vuelta

          setTimeout(() => {

            card.classList.toggle('turned'); // La carta 2 se da la vuelta
            // Inicio solución de Marcos
            let turnedCards = document.querySelectorAll('.turned');
            turnedCards.forEach(turnedCard => {
              if (turnedCard.attributes['data-card-name'].nodeValue === card2) {
                turnedCard.classList.toggle('turned');
              }
            })
            //Fin solución de Marcos
          }, 1000);

        }

        memoryGame.pickedCards.splice(0, 2); // Las cartas clicadas se eleminan del array pickedCards

        const clicked = document.getElementById('pairs-clicked');
        const guessed = document.getElementById('pairs-guessed');
        clicked.innerHTML = Math.floor(memoryGame.pairsClicked / 3) + 1;
        guessed.innerHTML = Math.floor(memoryGame.pairsGuessed / 2);

        if (memoryGame.isFinished() == true && guessed.innerHTML === memoryGame.cards.length - 2) {
          return alert('Congratulations! You won the game!') // Si se cumple isFinished se notifica
        };

        // TESTS
        console.log(`checkIfPair: ${memoryGame.checkIfPair(card1, card2)}`)
        console.log(`Pairs clicked: ${memoryGame.pairsClicked}`);
        console.log(`Pairs guessed: ${memoryGame.pairsGuessed}`);
        console.log(`Game finished: ${memoryGame.isFinished()}`);
      }
    });
  });
});