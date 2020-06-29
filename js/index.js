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
memoryGame.shuffleCards(cards)

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
    card.addEventListener('click', () => {
    card.classList.toggle('turned'); //turns card over on every click
    memoryGame.pickedCards.push(card);
    console.log(`Card clicked: ${card}`);

      //wrote a simple function to see if two cards are in the pickedCards array, prob not necessary
      if(memoryGame.checkIfTwoCards()) {
        let card1 = memoryGame.pickedCards[0];
        let card2 = memoryGame.pickedCards[1];
        let card1Attribute = card1.getAttribute('data-card-name'); //gets the attribute 'data-card-name'
        let card2Attribute = card2.getAttribute('data-card-name');
       
        setTimeout(function() {
          if(!memoryGame.checkIfPair(card1Attribute, card2Attribute)) {
         card1.className = 'card'; // turns the cards back over if the two flipped cards are not a match
         card2.className = 'card';
        }
        }, 1000);
        
        memoryGame.pickedCards = []; //clears out the pickedCards if the two cards are not a match
      }

      memoryGame.isFinished();
    });
  });

});




