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
memoryGame.shuffleCards(cards);

// window.addEventListener('load', event => {
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
      //turn the card clicked and push it to the pickedCards array
      card.classList.add('turned');
      memoryGame.pickedCards.push(card);

      //checking if there's a pair of cards turned
      if(memoryGame.pickedCards.length === 2) {

        //show the number of pairs clicked on HTML
        document.querySelector('#pairs-clicked').innerText = memoryGame.pairsClicked;

        //prevent from user to click on another card for now
        document.querySelectorAll('.card').forEach(card => card.style.pointerEvents = "none");

        //the 2 cards user chose - stocking their name attribute to compare
        let card1Attribute = memoryGame.pickedCards[0].getAttribute('data-card-name');
        let card2Attribute = memoryGame.pickedCards[1].getAttribute('data-card-name');

        //checking if those 2 cards are the same
        let sameOrNot = memoryGame.checkIfPair(card1Attribute, card2Attribute);

        //if they are the same : 
        //show the number of pairs guessed on HTML
        //add blocked class so they stay turned
        //reset the pickedCards array
        //allow user to click next cards
        if(sameOrNot) {
          document.querySelector('#pairs-guessed').innerText = memoryGame.pairsGuessed;
          memoryGame.pickedCards[0].classList.add('blocked');
          memoryGame.pickedCards[1].classList.add('blocked');
          memoryGame.pickedCards = [];
          document.querySelectorAll('.card').forEach(card => card.style.pointerEvents = "auto");
        } 
        
        //if they aren't the same : 
        //setTimeOut 1 second to let user check the cards they turned
        //after that 1 second : 
        //remove turned class on those cards
        //reset the pickedCards array
        //allow user to click next cards
        else if(sameOrNot === false) {
          setTimeout(() => {
            memoryGame.pickedCards[0].classList.remove('turned');
            memoryGame.pickedCards[1].classList.remove('turned');
            memoryGame.pickedCards = [];
            document.querySelectorAll('.card').forEach(card => card.style.pointerEvents = "auto");
          }, 1000);
        }
      }

      //if user won, winning message + link to reload the page
      if(memoryGame.isFinished()) {
        document.querySelector('#memory-board').innerHTML = `
        <h1> YOU QUEEN/KING <br>
          YOU WOOOON </h1>
        <div class="a-container">
          <a href="./index.html"> click here if you want to play again </a>
        </div>
        `

      }
    });
  });


// });
