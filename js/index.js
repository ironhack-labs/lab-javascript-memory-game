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

// function pairValidation(event) {
//   const target = event.currentTarget;
//   console.log('The target in remove is:', target);
//... your code goes here
// const toRemove = target.parentNode.parentNode.querySelector(".quantity input");
// toRemove.value = 0
// calculateAll();
// }
const memoryGame = new MemoryGame(cards);
let counter = 0;
let card1;
let card2;

function turnCard(event) {
  const target = event.currentTarget;
  console.log(event.currentTarget)
  counter += 1
  console.log(counter)
  if (counter === 1) {
    target.className = "card turned blocked";
    memoryGame.pickedCards[0] = target;
  } else if (counter === 2) {
    target.className = "card turned blocked";
    memoryGame.pickedCards[1] = target;
    setTimeout(evaluate, 500);
    counter = 0;
  }
}

function evaluate() {
  const veredict = memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute("data-card-name"), memoryGame.pickedCards[1].getAttribute("data-card-name"))
  let clicks = document.querySelector("#pairs-clicked")
  let guesses = document.querySelector("#pairs-guessed")
  clicks.innerHTML = memoryGame.pairsClicked;
  guesses.innerHTML = memoryGame.pairsGuessed;
  const finished = memoryGame.isFinished()
  if(finished){
    alert('You Won');
    document.querySelectorAll('.card').forEach((card) => {
    card.className = "card";
  });
  //memoryGame.pairsClicked = 0;
  //memoryGame.pairsGuessed = 0;
  location.reload();
    }
   else if(veredict === false){
    memoryGame.pickedCards[0].className = "card";
    memoryGame.pickedCards[1].className = "card";
  }
  memoryGame.pickedCards[0] = {};
  memoryGame.pickedCards[1] = {};
}

function turnBack() {
  memoryGame.pickedCards[0].className = "card";
  memoryGame.pickedCards[1].className = "card";
  memoryGame.pickedCards = [];
}

function allCardsBack() {
  document.querySelectorAll('.card').forEach((card) => {
    card.className = "card";
});
}


window.addEventListener('load', event => {
  memoryGame.shuffleCards();
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
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', turnCard);
  });
});