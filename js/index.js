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
      card.classList.add('turned');

      // fill up pickedCards with chosen cards
      pickedCards.push(card);
      
      if(pickedCards.length === 2) {
        // compare
        const fistCard = pickedCards[0];
        const secondCard = pickedCards[1];

        const fistCardName = fistCard.getAttribute("data-card-name");
        const secondCardName = secondCard.getAttribute("data-card-name");

        if (memoryGame.checkIfPair(fistCardName, secondCardName)) {
          // do something if cards are pairs
            fistCard.classList.toggle('blocked');
            secondCard.classList.toggle('blocked');
            
            pickedCards.length = 0;
            
          } else {
          // do somethig if they are not
            setTimeout(() => {
              // toggle class turned
              fistCard.classList.toggle('turned');
              secondCard.classList.toggle('turned');
            }, 1000);
            // pickedCards = [];
            pickedCards.length = 0;
          }

        const clickClicked = document.getElementById('pairs-clicked');
        const clickGuessed = document.getElementById('pairs-guessed');

        clickClicked.innerHTML = memoryGame.pairsClicked;
        clickGuessed.innerHTML = memoryGame.pairsGuessed;
      }

      if(memoryGame.isFinished()) {
        alert('Congratulations!!!');
      }
    });
  });
});
