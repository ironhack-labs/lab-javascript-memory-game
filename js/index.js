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
const pairGuessedCounter = document.getElementById('pairs-guessed');
const pairsClickedCounter = document.getElementById('pairs-clicked');

memoryGame.shuffleCards(cards);

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

  function blockClickedCards(selectedCards){
    selectedCards.forEach(card => {
      card.classList.add('blocked');
    });
  }

  function unblockClickedCards(selectedCards){
    selectedCards.forEach(card => {
      card.classList.remove('blocked');
    });
  }

  function turnCardsBack(selectedCards) {
    selectedCards.forEach(card => {
      card.classList.remove('turned');
    });
  
    //Permitir al usuario seleccionar cartas hasta voltearlas de regreso
    unblockClickedCards(selectedCards);
    memoryGame.pickedCards = [];
  }

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      //Verificar que la carta no este bloqueada

      if(!card.classList.contains('blocked') && memoryGame.pickedCards.length<2) {
        //Voltear la carta con la clase turned
        card.classList.add('turned');

        //Agregarla a el array pickedCards
        memoryGame.pickedCards.push(card);

        //Si la cantidad de cartas seleccionadas es 2, verificar si es par o no.
        if(memoryGame.pickedCards.length === 2) {
          const pickedCards = memoryGame.pickedCards;
          const isPair = memoryGame.checkIfPair(pickedCards[0].getAttribute('data-card-name'), pickedCards[1].getAttribute('data-card-name'));

          pairsClickedCounter.innerHTML = memoryGame.pairsClicked;

          if(!isPair) {
            blockClickedCards(pickedCards);
            setTimeout(()=>{turnCardsBack(pickedCards)}, '1000');
          }
          else {
            blockClickedCards(pickedCards);

            memoryGame.pickedCards = [];

            pairGuessedCounter.innerHTML = memoryGame.pairsGuessed;

            if(memoryGame.isFinished()){
              setTimeout(()=>{alert("You won!!!");}, '500');
              
            }
          }
        }
      }

    });
  });
});
