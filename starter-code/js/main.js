const cards = [{
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  },
  {
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  }
];

const memoryGame = new MemoryGame(cards);

// Make sure to randomize the cards first..
memoryGame.shuffleCards();

document.addEventListener("DOMContentLoaded", function (event) {

  let html = '';

  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory_board').innerHTML = html;


  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.onclick = function () {

      // Add the "turned" class to the current card they clicked (card);
      card.className += " turned";
      console.log('Card clicked: ', card);

      // add current clicked card to clicked cards on memory game class object..
      memoryGame.pickedCards.push(card);

      if (memoryGame.pickedCards.length === 2) {

        if (memoryGame.checkIfPair(memoryGame.pickedCards[0].dataset.cardName, memoryGame.pickedCards[1].dataset.cardName)) {
          console.log("Matched")
        } else {
          console.log("Did not match")
          let card1 = memoryGame.pickedCards[0];
          let card2 = memoryGame.pickedCards[1];
          setTimeout(function () {
            card1.classList.remove("turned");
            card2.classList.remove("turned");
          }, 500);

        }

        // Clear out pickedCards so we can check the next pair...
        memoryGame.pickedCards = [];
      }


    };

    //how do we get the movement/flipping sides effect;

    //how we keep the cards showing images if they are found to be the same; 

    //how we make cards flip back to blue background if the cards are not the same; 

    //All the time keep in mind, we need to work only with two cards at the same time;


  });
});