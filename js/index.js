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

      //La carta seleccionada se da la vuelta
      card.classList.add('turned')

      //Si es la SEGUNDA carta
      if (memoryGame.pickedCards.length === 1) {
        //Se actualiza el marcador de pares selecionados
        document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked
        //Se añade la nueva carta
        memoryGame.pickedCards.push(card)

        //Si la pareja es CORRECTA
        if (memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute('data-card-name'), memoryGame.pickedCards[1].getAttribute('data-card-name'))) {

          //Se actualiza el marcados de pares adivinados
          document.querySelector('#pairs-guessed').innerHTML = memoryGame.pairsGuessed

          //Se bloquean las cartas de la pareja acertada
          memoryGame.pickedCards[0].classList.add('blocked')
          memoryGame.pickedCards[1].classList.add('blocked')
          //Se saca la pareja para que no se voltee
          memoryGame.pickedCards.splice(0, 2)

          //Se comprueba que esta pareja no sea la última que faltaba
          if (memoryGame.isFinished()) alert("Congratulation! You've won the game")
        }

        //Si es la PRIMERA carta
      } else {
        //Si hay una pareja descubierta INCORRECTA se voltea y se quita del array pickedCards
        if (memoryGame.pickedCards.length === 2) {
          memoryGame.pickedCards[0].classList.remove('turned')
          memoryGame.pickedCards[1].classList.remove('turned')

          memoryGame.pickedCards.splice(0, 2)
        }
        //Se añade la que será la primera carta de la pareja
        memoryGame.pickedCards.push(card)
      }

    });
  });
});
