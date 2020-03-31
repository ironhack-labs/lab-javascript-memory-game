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
  // He añadido aquí el shuffle para que cada vez que se cargue, se 'shufleen' las cartas
  memoryGame.shuffleCards()
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
      
      card.setAttribute('class', 'card turned')

      memoryGame.pickedCards.push(card)

      if (memoryGame.pickedCards.length === 2) {
        //Necesito dos constantes que me digan el nombre de las cartas, para que se puedan comparar
        const crd1 = memoryGame.pickedCards[0].getAttribute("data-card-name")
        const crd2 = memoryGame.pickedCards[1].getAttribute("data-card-name")

        console.log(crd1);
        if (memoryGame.checkIfPair(crd1, crd2)) {

          //Si el statement es cierto, debe añadirse una unidad a las cartas clicadas y a las cartas adivinadas
          document.getElementById("pairs-clicked").innerText = memoryGame.pairsClicked
          document.getElementById("pairs-guessed").innerText = memoryGame.pairsGuessed

        } else {

          //Aquí es donde me sale el error. La teoría es que si el if es falso, se dan la vuelta las cartas y se suma una carta clicada: eso guay.
          //El problema es que una vez descubiertas las cartas, no consigo que se den la vuelta
          document.getElementById("pairs-clicked").innerText = memoryGame.pairsClicked
          memoryGame.pickedCards[0].classList.remove('turned')
          memoryGame.pickedCards[1].classList.remove('turned')
          memoryGame.pairsClicked = []

        }
      }
    });
  });
});