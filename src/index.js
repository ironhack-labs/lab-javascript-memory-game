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

window.addEventListener('load', (event) => {
  let index = 0;
  let html = '';
  memoryGame.shuffleCards();
  memoryGame.cards.forEach((pic) => {
    html += `
      <div id="${index}" class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
    index++;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

   let compareCards = [];

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.add('turned');
      console.log(card);
      compareCards.push(card);
      if(compareCards.length === 2){
       if(memoryGame.checkIfPair(compareCards[0], compareCards[1]) === true){
        const firstCard = compareCards[0].getAttribute('id');
        const secondCard = compareCards[1].getAttribute('id');
        const firstCardId = document.getElementById(`${firstCard}`);
        const secondCardId = document.getElementById(`${secondCard}`);
        firstCardId.classList.add('blocked');
        secondCardId.classList.add('blocked');
        if(memoryGame.checkIfFinished() === true){
          alert("The Game is finished");
        }
       }else{
        const firstCard = compareCards[0].getAttribute('id');
        const secondCard = compareCards[1].getAttribute('id');
        const firstCardId = document.getElementById(`${firstCard}`);
        const secondCardId = document.getElementById(`${secondCard}`);
        setTimeout(() => {
          firstCardId.classList.remove('turned');
          secondCardId.classList.remove('turned');
        }, 1500)
        if(memoryGame.checkIfFinished() === true){
          alert("The Game is finished");
        }
       }
      compareCards = [];
      }
    });
  });
});
