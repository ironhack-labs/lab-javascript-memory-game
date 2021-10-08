// add this line to use the class

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



// 'load' ---> As soon as the page loads, all the elements from HTML, including the images
// we populate the cards with that information and images loaded before
window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      debugger
      console.log(`Card clicked: ${card}`);
      card.classList.toggle('turned');
      memoryGame.pickedCards.push(card);
      //console.log(memoryGame.pickedCards)
      // check if the user clicked two cards
      const checkTwoCards = memoryGame.pickedCards.length > 1;
      if (checkTwoCards) {
        // check if two cards names are the same, get the data name to compare
        // option 1 --> .getAttribute('data-card-name')
        // option 2 --> .dataset.cardName
        const card1 = memoryGame.pickedCards[0];
        const card2 = memoryGame.pickedCards[1];
        const cardName1 = card1.dataset.cardName;
        const cardName2 = card2.dataset.cardName;
        console.log(memoryGame.pickedCards);
        // Check if pair
        const sameCards = memoryGame.checkIfPair(cardName1, cardName2); // return--> true if they are same
        // render the pair of cards clicked - anyway
        document.querySelector('#pairs-clicked').textContent = memoryGame.pairsClicked;

        if(sameCards) { // if the cards are pair/same
          document.querySelector('#pairs-guessed').textContent = memoryGame.pairsGuessed;
          memoryGame.pickedCards = [];
         } else { // false --> if cards are not the same or false
          card1.classList.toggle('turned');
          card2.classList.toggle('turned');
          memoryGame.pickedCards = [];
        }
        const finished = memoryGame.checkIfFinished(); // true if 12 matches or 24 cards picked
        if (finished) {
          const templateMessage = `<h3>Awesome! You won!!!!!<h3/>`;
          const msgContainer = document.querySelector('.message');
          msgContainer.style.visibility = "visible";
          msgContainer.insertAdjacentHTML('afterbegin', templateMessage);
          // window --> global object
          // location --> object with current url
          // location has a method --> reload --> used to replace current document with a new one or reload the page
          window.location.reload();
        }
      }
    });
  });
});
