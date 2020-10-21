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

window.addEventListener('load', () => {
  let html = '';
  memoryGame.shuffleCards();
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
  //pairsClickedHTML = document.querySelector('#pairs-clicked')
  //pairsGuessedHTML = document.querySelector('#pairs-guessed')
  
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      let card1;
      let card2;
      card.querySelectorAll('.card > div').forEach(div => {
        console.log(div);
        div.classList.toggle('front');
        div.classList.toggle('back');
      });
      memoryGame.pickedCards.push(card);
      if (memoryGame.pickedCards.length === 2) {
        card1 = memoryGame.pickedCards[0].getAttribute('data-card-name');
        card2 = memoryGame.pickedCards[1].getAttribute('data-card-name');
        //console.log('2 cards');

        if (memoryGame.checkIfPair(card1, card2)) {
          memoryGame.pickedCards[0].classList.add('empty');
          memoryGame.pickedCards[1].classList.add('empty');
          memoryGame.pickedCards = [];
        } else {
          console.log(memoryGame.pickedCards);
          setTimeout(() => {
            console.log(memoryGame.pickedCards);
            memoryGame.pickedCards.forEach(card => {
              card.querySelectorAll('.card > div').forEach(div => {
                console.log(div);
                div.classList.toggle('front');
                div.classList.toggle('back');
              });
            
            })
            memoryGame.pickedCards = [];
          },1000);
        }
        //memoryGame.pickedCards = [];
        //setTimeout(() => {memoryGame.pickedCards = [];}, 2000);
        document.getElementById('pairs-clicked').innerHTML = memoryGame.pairsClicked;
        document.getElementById('pairs-guessed').innerHTML = memoryGame.pairsGuessed;
        if (memoryGame.isFinished()) {
          //window.alert('Game finished: YOU WON!!!!');
          setTimeout(() => {
            window.alert('Game finished: YOU WON!!!!');
          },1000);
        }

      }
      //console.log(`Card clicked: ${card}`);
    });
  });
});
