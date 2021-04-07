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
    card.addEventListener('click', () => {
      // console.log(`Card clicked: ${card}`);
      const pickedCards = memoryGame.pickedCards;
     // toggle the class "turned"
      card.classList.toggle("turned");

      // fill up pickedCards
      pickedCards.push(cards);

      if (pickedCards === 2) {
        const firstCard = pickedCards[0];
        const secondCard = pickedCards[1];

        const firstCardName = firstCard.getAttribute('data-card-name');
        const secondCardName = secondCard.getAttribute('data-card-name');
        //compare
        if (memoryGame.checkIfPair(firstCardName, secondCardName)) {
           //do something if cards are pairs
          firstCard.classList.add("blocked");
          secondCard.classList.add("blocked");
          pickedCards.length = 0;
        } else {
          setTimeout(() => {
            //toggle the class "turned"
            firstCard.classList.toggle("turned")
            secondCard.classList.toggle("turned")
          }, 1000);
          
          //remove the cards from the list
          pickedCards.length = 0;
        }
      
        const clickedAmount = document.getElementById("pairs-clicked");
        const guessedAmount = document.getElementById("pairs-guessed");

        clickedAmount.innerHTML = memoryGame.pairsClicked;
        guessedAmount.innerHTML = memoryGame.pairsGuessed;
      }
      //set up when the game is finished
    
    });
  });
});
