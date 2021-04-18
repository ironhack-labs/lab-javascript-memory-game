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

function onClick(event) {
  const card = event.currentTarget;
  if (memoryGame.pickedCards.length < 2) {
    card.classList.add('turned');
    memoryGame.pickedCards.push(card);  } 
    else if(memoryGame.pickedCards.length === 2){
    const pickedCardNames = memoryGame.pickedCards.map(card => card.getAttribute('data-card-name'));
    const test = memoryGame.checkIfPair(pickedCardNames[0], pickedCardNames[1]);
    
    setTimeout(() => {

    if(test === false){
        memoryGame.pickedCards[0].classList.remove('turned');
    memoryGame.pickedCards[1].classList.remove('turned');
   }
   else {
    memoryGame.pickedCards[0].classList.add('blocked');
    memoryGame.pickedCards[1].classList.add('blocked');
   }

  }, 1000);

   memoryGame.pickedCards = []
 let cardsClicked = memoryGame.pairsClicked
 document.querySelector('#pairs-clicked').textContent = cardsClicked;
 let cardsGuessed = memoryGame.pairsGuessed
 document.querySelector('#pairs-guessed').textContent = cardsGuessed;
}
else if(memoryGame.isFinished()){
  alert(`You finally won!! Your score is ${memoryGame.pairsGuessed}`)
}
}

  
  


window.addEventListener('load', () => {
  memoryGame.shuffleCards();
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card " data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });
  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', onClick);
    console.log('Card clicked: ', card);
  });
});















