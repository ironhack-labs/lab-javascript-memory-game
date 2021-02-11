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
memoryGame.shuffleCards(cards);

// window.addEventListener('load', event => {
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
      card.classList.add('turned');
      memoryGame.pickedCards.push(card);
      // console.log(memoryGame.pickedCards[0].getAttribute('data-card-name'));
      if(memoryGame.pickedCards.length === 2) {
        document.querySelectorAll('.card').forEach(card => card.style.pointerEvents = "none");


        let card1Attribute = memoryGame.pickedCards[0].getAttribute('data-card-name');
        let card2Attribute = memoryGame.pickedCards[1].getAttribute('data-card-name');
        let sameOrNot = memoryGame.checkIfPair(card1Attribute, card2Attribute);

        if(sameOrNot) {
          memoryGame.pickedCards[0].classList.add('blocked');
          memoryGame.pickedCards[1].classList.add('blocked');
          memoryGame.pickedCards = [];
          document.querySelectorAll('.card').forEach(card => card.style.pointerEvents = "auto");
        } else if(sameOrNot === false) {
          setTimeout(() => {
            memoryGame.pickedCards[0].classList.remove('turned');
            memoryGame.pickedCards[1].classList.remove('turned');
            memoryGame.pickedCards = [];
            document.querySelectorAll('.card').forEach(card => card.style.pointerEvents = "auto");
          }, 1000);
        }
      }

      if(memoryGame.isFinished()) {
        document.querySelector('#memory-board').innerHTML = `
        <h1> YOU QUEEN/KING <br>
          YOU WOOOON </h1>
        <div class="a-container">
          <a href="./index.html"> click here if you want to play again </a>
        </div>
        `

      }
    });
  });


// });
