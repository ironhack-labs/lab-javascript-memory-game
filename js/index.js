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
  memoryGame.shuffleCards(cards)

  let html = '';
  
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
 

  let clickedArray = ['','']
  let firstCard
  let clickedScore = document.querySelector('#pairs-clicked')
  let guessedScore = document.querySelector('#pairs-guessed')

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.onclick = function() {

      this.classList.add('turned') // Clicas y Hacer que gire 



      if (!clickedArray[0]) { // Si es la primera carta 
        clickedArray[0] = this.dataset.cardName // Saber qué carta es y guardarla en clickedArray=[card1, card2] para compararla con la siguiente 
        firstCard = this //hago un selector para poder cambiar las propiedades de la carta después
      }

      else {
        clickedArray[1] = this.dataset.cardName // Clicas la segunda carta  
        
        secondCard = this
        
          if (memoryGame.checkIfPair(clickedArray[0],clickedArray[1])) { //si aciertas

            clickedArray = ['','']

          }

          else { 

            setTimeout(function() { //giramos de nuevo las cartas
              firstCard.classList.remove('turned')
              secondCard.classList.remove('turned')
              console.log(memoryGame.pairsClicked)
              clickedArray = ['','']              
            }, 1500)
          
          }   
        clickedScore.innerText = memoryGame.pairsClicked //actualizamos puntuación
        guessedScore.innerText = memoryGame.pairsGuessed
        if (memoryGame.isFinished()) {
          window.alert ('Enhorabuena, has ganado')
        }

      }
    


    console.log(`Card clicked: ${card}`);
    }
  });

    //     // TODO: write some code here

  //       // Clicas la primera carta      
  //       // Hacer que gire      
  //       // Saber qué carta es y guardarla en clickedArray=[indexOf(card1), card2] para compararla con la siguiente
  //       // Mantenerla girada
  //       // Clicas la segunda carta 
  //       // Comparar las cartas (checkIfPair)
  //       // Actualizar las puntuaciones en pantalla
  //       // Si checkIfPair true tenemos que cambiar el css de las cartas para que no se giren
  //             // isFinished
  //       // Si checkIf Pair false tenemos que girar las cartas y vaciar el comparador
});

