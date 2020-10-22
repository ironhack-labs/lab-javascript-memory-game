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

memoryGame.shuffleCards();
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
      // TODO: write some code here

      card.querySelectorAll('.card div').forEach(div => {
        div.classList.toggle('front');
        div.classList.toggle('back')
      })

      memoryGame.pickedCards.push(card);

      if (memoryGame.pickedCards.length === 2) {

        if (memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute('data-card-name'), memoryGame.pickedCards[1].getAttribute('data-card-name'))) {

          document.getElementById('pairs-guessed').innerHTML = memoryGame.pairsGuessed;
          document.getElementById('pairs-clicked').innerHTML = memoryGame.pairsClicked;
          memoryGame.pickedCards = [];

        } else {
          document.getElementById('pairs-clicked').innerHTML = memoryGame.pairsClicked;
          setTimeout(() => {
            card.querySelectorAll('.card div').forEach(div => {
              div.classList.toggle('front');
              div.classList.toggle('back');
            }

            )
            memoryGame.pickedCards = [];
          }, 1000)
        }

        if (memoryGame.isFinished()) {
          setTimeout(() => {
            window.alert('Congratz, you won!!!!')
          }, 1000);
        }



      }

      console.log(`Card clicked: ${card}`);
    });
  });
});

/*  card.classList.toggle("turned"); // add "turned" class to turned card
      // cards need to be pickedCards
      memoryGame.pickedCards.push(card);
      //declare card1 and card2 (by their names to compare)
      if (memoryGame.pickedCards.length === 2) {
        let card1 = memoryGame.pickedCards[0].getAttribute("data-card-name");
        let card2 = memoryGame.pickedCards[1].getAttribute("data-card-name");
      }
      //check if the cards are a pair,
      if (memoryGame.checkIfPair(card1, card2)) {

        //let it show in the HTML
        document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked
        document.querySelector('#pairs-guessed').innerHTML = memoryGame.pairsGuessed
        //set array of pickedCards back to empty
        memoryGame.pickedCards = []

      } else {
        console.log("No match")
        document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked
        //set array of pickedCards back to empty
        memoryGame.pickedCards = []
      }*/