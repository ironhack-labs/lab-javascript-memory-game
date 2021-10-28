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
  document.querySelector('#memory-board').innerHTML = html
  var pairsClicked = document.querySelector("#pairs-clicked");
  var pairsGuessed = document.querySelector("#pairs-guessed");
  var memoryBoard = document.querySelector("#memory-board")

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    if (card1 === undefined) {
      card1 = card;
      console.log('relleno 1');
    } else {
      console.log('entro');
      let valCard1= card1.dataset.cardName;
      let valCard2= card.dataset.cardName;


      console.log(valCard1,valCard2);
      if(memoryGame.checkIfPair(valCard1, valCard2)){
        console.log("Son iguales")

        card1.classList.add('blocked');
        card1 = undefined;
        card.classList.add('blocked');

        pairsGuessed.innerHTML = memoryGame.pairsGuessed;

         pairsClicked.innerHTML = memoryGame.pairsClicked;

        console.log(memoryGame.checkIfFinished())

        if(memoryGame.checkIfFinished()) {
          memoryBoard.innerHTML += `<h1 class= "victoria"> HAS GANADO</h1>`

        }

      }
      else {
           pairsClicked.innerHTML = memoryGame.pairsClicked;


        setTimeout(()=>{
          card1.classList.remove('turned');
            card1 = undefined;
          card.classList.remove('turned');

        }

          ,1000)

           console.log("No son iguales ");
      }
 console.log(card1);
    }
  });
 });
});


