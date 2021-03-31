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
      // TODO: write some code here
      // console.log(`Card clicked: ${card}`);
      const pickedCards = memoryGame.pickedCards;


      card.classList.toggle("turned");

      pickedCards.push(card);
      

      if (pickedCards.length === 2) {
        let firstCard = pickedCards[0];
        let secondCard = pickedCards[1];

        firstCardName = firstCard.getAttribute("data-card-name");
        secondCardName = secondCard.getAttribute("data-card-name");

        if(memoryGame.checkIfPair(firstCardName, secondCardName)){
          firstCard.classList.add("blocked");
          secondCard.classList.add("blocked");
          pickedCards.length = 0;

        }else {
          setTimeout(() => {
            firstCard.classList.toggle("turned");
            secondCard.classList.toggle("turned");

          }, 1000);

          pickedCards.length = 0;

        }
        const clickkAm = document.getElementById("pairs-clicked");
        const guessedAm = document.getElementById("pairs-guessed");

        clickkAm.innerHTML = memoryGame.pairsClicked;
        guessedAm.innerHTML = memoryGame.pairsGuessed;

      }
      if (memoryGame.isFinished()){
        alert("Congratzzzz you win")
      }
    });
  });
});
