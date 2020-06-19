import {MemoryGame} from "/js/memory.js";

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
memoryGame.shuffleCards();

function flipBackCarts(){
  setTimeout( () => {
    memoryGame.pickedCards[0].classList.remove("turned");
    memoryGame.pickedCards[1].classList.remove("turned");
    memoryGame.pickedCards = [];
  }, 1500)
}

function updateUiScore(){
  const clickedSpan = document.getElementById("pairs-clicked");
  const guessedSpan = document.getElementById("pairs-guessed");
  clickedSpan.textContent = String(memoryGame.pairsClicked);
  guessedSpan.textContent = String(memoryGame.pairsGuessed);
}

function endGame(){
  document.querySelectorAll(".card").forEach( card => {
    card.classList.add("hide");
  });
  setTimeout( () => {
    document.querySelectorAll(".card").forEach( card => {
      card.style.display = "none";
    });
  }, 3000);
  document.getElementById("end-game-box").style.display = "flex";
  document.getElementById("end-game-box").classList.remove("hide");
}

function checkCards(){
  const cardName1 = memoryGame.pickedCards[0].getAttribute("data-card-name");
  const cardName2 = memoryGame.pickedCards[1].getAttribute("data-card-name");
  if(memoryGame.checkIfPair(cardName1, cardName2)){
    memoryGame.pickedCards = [];
    if(memoryGame.isFinished()) endGame();
  } else {
    flipBackCarts();
  }
  updateUiScore();
}

function flipCard(){
  if(memoryGame.pickedCards.length != 2){
    this.classList.add("turned");
  memoryGame.pickedCards.push(this);
  if(memoryGame.pickedCards.length === 2) checkCards();
  }
}

function resetGame(){
  document.querySelectorAll(".card").forEach( card => {
    card.classList.remove("hide", "turned");
  });
  document.getElementById("end-game-box").classList.add("hide");

  memoryGame.reset();
  updateUiScore();
  
  document.querySelectorAll(".card").forEach( card => {
    card.style.display = "";
  });
  document.getElementById("end-game-box").style.display = "none";

}

function start() {
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML += html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.onclick = flipCard;
  });

  document.getElementById("reset-game").onclick = resetGame;

};


start();
