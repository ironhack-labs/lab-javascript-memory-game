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
pickedCards = memoryGame.pickedCards;


const flipCard = (e) => {
  const target = e.currentTarget;
  
  if (!target.classList.contains('turned')){
    target.classList.add('turned');
  } else {
    target.classList.remove('turned');
  }

  if (pickedCards.length < 2) {
    pickedCards.push(target);
    console.log(pickedCards);
  }

  if (pickedCards.length === 2) {
    blockPlay();
    compareCards(pickedCards);
  }
  
};

//this blocks the player from flipping more cards in the case that they have already selected two cards
const blockPlay = () => {
  document.querySelector('body').classList.add('block_play');
};

const compareCards = ([card1, card2]) => {
  card1 = card1.dataset.cardName;
  card2 = card2.dataset.cardName;
  
  const result = memoryGame.checkIfPair(card1,card2);

  disableMatched(result);
  reSet();
  printStats();

  const finished = memoryGame.isFinished(); 
  if (finished) {youWin();} 

};

const disableMatched = (result) => {
  if (result) {
    pickedCards[0].classList.add('disabled'); 
    pickedCards[1].classList.add('disabled');
   } 
};

const printStats = () => {
  document.getElementById('pairs-clicked').innerText = memoryGame.pairsClicked;
  document.getElementById('pairs-guessed').innerText = memoryGame.pairsGuessed;
};

const reSet = () => {
  setTimeout(() => {
    document.querySelector('body').classList.remove('block_play');
    document.querySelectorAll('.card:not(.disabled)').forEach(card => {
      card.classList.remove('turned');
    });
      pickedCards.length = 0;
  }, 1000);
};

const youWin = () => {
  setTimeout(() => {
    const body = document.querySelector('body');
    
    const pyroDiv = document.createElement('div'); 
    pyroDiv.classList.add('pyro');
    pyroDiv.style.margin = '0';
    pyroDiv.style.padding = '0';
    pyroDiv.style.width = '100%';
    pyroDiv.style.height = '1800px';
    pyroDiv.style.background = 'black';
    pyroDiv.style.overflow = 'hidden';
    pyroDiv.style.position = 'fixed';
    pyroDiv.style.top = '0';
    pyroDiv.style.zIndex = '10';

    body.appendChild(pyroDiv);

    const winText = document.createElement('h1');
    winText.innerText = 'You are a fucking wizard.';

    pyroDiv.appendChild(winText);

    const beforePyroDiv = document.createElement('div');
    beforePyroDiv.classList.add('pyro');
    beforePyroDiv.classList.add('before');
    const afterPyroDiv = document.createElement('div');
    afterPyroDiv.classList.add('pyro');
    afterPyroDiv.classList.add('after');

    
    pyroDiv.appendChild(beforePyroDiv);
    pyroDiv.appendChild(afterPyroDiv);
    }, 1000
  );
};


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
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (e) => {
      flipCard(e);
    });
  });
});

