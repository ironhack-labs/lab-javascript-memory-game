//console.log('test')

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
  //console.log(memoryGame);
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });
  // Add all the divs to the HTML

  document.querySelector('#memory-board').innerHTML = html;

  //console.log(document.querySelectorAll('.card'))
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (event) => {
     currentPickedCards.length==2 ? (nextTurn(), pickCard(event)) : pickCard(event) ;
      //console.log(`Card clicked`);
    });
  });
});

let currentPickedCards = [];   // array of elements line 60

function pickCard (event) {
  let clicked = event.currentTarget
  clicked.classList.add('turned');  
 
  currentPickedCards.push(clicked); // defined outside

  let name1 = currentPickedCards[0].getAttribute('data-card-name');
  let name2 = currentPickedCards[1].getAttribute('data-card-name')

  console.log(clicked);
 
  // pair guessed logic
  if ( currentPickedCards.length === 2 
      && name1 === name2) {
    console.log('yay')
    currentPickedCards.forEach(c=> c.classList.add('blocked'));
    // show count: 
    memoryGame.pairsGuessed++
    document.getElementById('pairs-guessed').innerText = memoryGame.pairsGuessed.toString();
   }
   //check if all clicked and if finished
   if (memoryGame.isFinished()) {
    const win =  '<div> <img src="yawnscream.jpg" id="scream"></div>';
    document.querySelector('#memory-board').innerHTML = win;
  }

}

function nextTurn () {
  currentPickedCards.forEach(c => {
    if (!c.classList.contains('blocked')) {
      c.classList.remove('turned') 
    }
  })
  currentPickedCards=[];  //reset
  memoryGame.pairsClicked++  //count
  //show count:
  document.getElementById('pairs-clicked').innerText = memoryGame.pairsClicked.toString(); 
  
}
