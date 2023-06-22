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


// Declaramos las variables que van a contar los pares clickeados y adivinados
let pClick = 0;
let pairsClick = document.querySelector('#pairs-clicked');
let pGuess = 0;
let pairsGuessed = document.querySelector('#pairs-guessed');

// Mezclamos las cartas antes de comenzar
memoryGame.shuffleCards();

// Cuando la página termine de cargar, ejecutamos el siguiente código
window.addEventListener('load', (event) => {
  let html = '';

  // Para cada carta, generamos el HTML correspondiente
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Agregamos todas las cartas generadas al tablero de juego
  document.querySelector('#memory-board').innerHTML = html;

  // Por cada carta, añadimos un evento de click
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {

      // Al hacer click en una carta, la giramos y la añadimos a las cartas seleccionadas
      card.classList.add('turned');
      memoryGame.pickedCards.push(card);

      // Si hay dos cartas seleccionadas
      if (memoryGame.pickedCards.length === 2) {
        // Guardamos ambas cartas y sus nombres
        let firstCard = memoryGame.pickedCards[0];
        let secondCard = memoryGame.pickedCards[1];
        let firstCardName = firstCard.getAttribute("data-card-name");
        let secondCardName = secondCard.getAttribute("data-card-name");

        // Incrementamos el contador de pares clickeados
        pClick++;
        pairsClick.innerText = pClick;

        // Comprobamos si las dos cartas seleccionadas forman un par
        let result = memoryGame.checkIfPair(firstCardName, secondCardName);

        // Si forman un par
        if (result) {
          // Las bloqueamos y aumentamos el contador de pares adivinados
          firstCard.classList.add("blocked");
          secondCard.classList.add("blocked");
          pGuess++;
          pairsGuessed.innerText = pGuess;

          // Después de un segundo, comprobamos si el juego ha terminado
          setTimeout(() =>{
            if (memoryGame.checkIfFinished()) {
              alert("you win!");
            }
          }, 1000);

        } else {
          // Si no forman un par, después de un segundo, las volvemos a poner boca abajo
          setTimeout( ()=> {
            firstCard.classList.remove("turned");
            secondCard.classList.remove("turned");
          }, 1000);
        }

        // Vaciamos el array de cartas seleccionadas para el próximo turno
        memoryGame.pickedCards = [];
      }
    });
  });
});
