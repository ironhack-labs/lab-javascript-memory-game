window.addEventListener('DOMContentLoaded', (event) => {
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
  memoryGame.pickedCards = [];
  memoryGame.pairsGuessed = 0;
  memoryGame.pairsClicked = 0;

  memoryGame.shuffleCards(memoryGame.shuffleCards(memoryGame.cards))

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
  function pickedCards() {
    document.querySelectorAll('.card').forEach((card) => {

      //Función para agregar las cartas en el mismo array y luego compararlas
      card.addEventListener('click', () => {
        memoryGame.pickedCards.push(card);
        let pairPickedCards = memoryGame.pickedCards;
        console.log (pairPickedCards)

        if (pairPickedCards.length === 2) {
          let card1 = memoryGame.pickedCards[0];
          let card2 = memoryGame.pickedCards[1];
          let totalGuessed = memoryGame.checkIfPair(card1, card2, pairPickedCards);
          // Función para sumar el total de pares conseguidos
          if (totalGuessed === true){
            calculateTotalGuessed()
          } 
        }
      });

      // Función para girar cartas y aumentar el contador de cartas clickeads
      card.onclick = function () {
        memoryGame.pairsClicked++;
        card.classList.add('turned');
        // Función para imprimir los Pairs clicked
        if (memoryGame.pairsClicked % 2 === 0) {
          document.querySelector('#pairs-clicked').innerText =
            memoryGame.pairsClicked / 2;
        }
      };

    });
  }
  
  // Función para imprimir los Pairs guessed
  function calculateTotalGuessed(){
    memoryGame.pairsGuessed++
    document.querySelector('#pairs-guessed').innerText = memoryGame.pairsGuessed
    memoryGame.checkIfFinished(memoryGame.pairsGuessed)
  }

  pickedCards();
});
