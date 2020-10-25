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
    card.addEventListener('click', function flipCard() {
       card.querySelectorAll('.card div').forEach(div => {
          div.classList.toggle('front');
          div.classList.toggle('back');
       });
     // Game logic
     if (memoryGame.pickedCards.length < 2) {
       memoryGame.pickedCards.push(card);
       const card1 = memoryGame.pickedCards[0].getAttribute("data-card-name");
       console.log(card1);
       if (memoryGame.pickedCards.length === 2) {
         memoryGame.pickedCards.push(card);
         const card2 = memoryGame.pickedCards[1].getAttribute("data-card-name");
         console.log(card2);
         if (memoryGame.checkIfPair(card1, card2)) {
           //Updating the DOM Score Elements
           const pairsClicked = document.querySelector("#pairs-clicked");
           pairsClicked.innerText = memoryGame.pairsClicked;
           const pairsGuessed = document.querySelector("#pairs-guessed");
           pairsGuessed.innerText = memoryGame.pairsGuessed;
           //Clear pickedCards array for next turn
           memoryGame.pickedCards = [];
           // Check if the game if all pairs have been found
           if(memoryGame.isFinished()) {
             alert("Well done! You guessed them all. Refresh the page to start again ;)");
             memoryGame.shuffleCards();
           };
         } else {
            document.querySelector("#pairs-clicked").innerText = memoryGame.pairsClicked;
            memoryGame.pickedCards = [];
            setTimeout(flipCard, 700);
          }
        }  
      } 
    });
  });
});