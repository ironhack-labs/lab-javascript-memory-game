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
  memoryGame.shuffleCards();
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
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', letTheGamesBegin);
  });

  let ready = true;
  async function letTheGamesBegin(e){
    if (ready !== true) {
      return;
    }
    let isEqual;
    if (
      memoryGame.pickedCards.length < 2) {
      e.currentTarget.className = "card turned";
      memoryGame.pickedCards.push(e.currentTarget);
    }
    if (memoryGame.pickedCards.length === 2 && ready === true) 
      {
      isEqual = checkIfEqual();
      if (isEqual) {
        block();
        document.getElementById("pairs-guessed").innerText = `${memoryGame.pairsGuessed}`;
        let hasFinished = memoryGame.checkIfFinished();
        if (hasFinished) {
          document.querySelector('#memory-board').innerHTML = "You Won!";
        }
        memoryGame.pickedCards = [];
      } else {
        ready = false;
        ready = await turnBack();
        if (ready) {
          memoryGame.pickedCards = [];
        } else {
          throw new Error("Promise not working");
        }
      }
      document.getElementById("pairs-clicked").innerText = `${memoryGame.pairsClicked}`;
    }
  }

  function checkIfEqual() {
    let card1 = memoryGame.pickedCards[0].getAttribute("data-card-name");
    let card2 = memoryGame.pickedCards[1].getAttribute("data-card-name");
    let isEqual = memoryGame.checkIfPair(card1, card2);
    document.getElementById("pairs-clicked").innerText = `${memoryGame.pairsClicked}`;
    let hasFinished = memoryGame.checkIfFinished();
    if (hasFinished) {
      document.querySelector('#memory-board').innerHTML = "You Won!";
    }
    return isEqual;
  }

  function block(){
    memoryGame.pickedCards[0].className = "card turned";
    memoryGame.pickedCards[1].className = "card turned";
    memoryGame.pickedCards[0].removeEventListener("click", letTheGamesBegin);
    memoryGame.pickedCards[1].removeEventListener("click", letTheGamesBegin);
  }

  async function turnBack() {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
      memoryGame.pickedCards[0].className = "card";
      memoryGame.pickedCards[1].className = "card";
      resolve(true);
    }, 2500);
    });
  }
});