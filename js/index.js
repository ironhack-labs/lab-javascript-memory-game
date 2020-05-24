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

window.addEventListener('load', event => {
  // cada vez que se recarga la página, llamamos a la función que baraja las cartas.

  memoryGame.shuffleCards()

  // creamos una variable con html en la que con un forEach, asignamos cada carta a un elemento del DOM
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
      console.log(`Card clicked: ${card}`);

      // cada vez que hacemos click, hacemos toggle en la clase 'turned' de la carta clickada.

      card.classList.toggle('turned');

      // metemos la carta clickada en nuestro array pickedCards

      memoryGame.pickedCards.push(card);

      // comprobamos que hay dos cartas en pickedCards

      if (memoryGame.pickedCards.length === 2) {

        // asignamos a una variable "cardN" el nombre de los elementos clickados (2)

        const card1 = memoryGame.pickedCards[0].getAttribute('data-card-name')
        const card2 = memoryGame.pickedCards[1].getAttribute('data-card-name')

        // comprobamos si son iguales y añadimos a los marcadores en función de si se cumple o no la coincidencia

        if (memoryGame.checkIfPair(card1, card2)) {
        
          document.querySelector('#pairs-guessed').innerHTML = memoryGame.pairsGuessed;
          document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked;

        // reiniciamos el array pickedCards
          memoryGame.pickedCards = [];

        // comprobamos si el ljuego ha terminado
          if (memoryGame.isFinished()) {
            setTimeout(() => {
              alert("You're a real SUPERHERO!")
            }, 1000);
          }

        } else {
          document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked;
          setTimeout(() => {
            memoryGame.pickedCards.forEach(card => card.classList.toggle('turned'));
            memoryGame.pickedCards = [];
          }, 1000)
        }
      }

    });
  });
});
