// Array of cards we'll be displaying / playing with
const cardsData = [
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

// Create an instance of the Memory Game passing the 'cardsData' array as argument
const memoryGame = new MemoryGame(cardsData);

// 🌟 BONUS: Call the shuffleCards method rigth at the beginning, to shuffle the deck before displaying it


// when the page load, this code will be executed: 
// will take the cards array, and for each card create divs with all card's info
window.addEventListener('load', (event) => {
  let cardsDomElements = '';
  memoryGame.cards.forEach((cardObj) => {
    cardsDomElements += 
    `
      <div class="card" data-card-name="${cardObj.name}">
        <div class="back" name="${cardObj.img}"></div>
        <div class="front" style="background: url(img/${cardObj.img}) no-repeat"></div>
      </div>
    `
  });

  // Inject all the divs into the HTML, inside targeted board
  document.querySelector('#memory-board').innerHTML = cardsDomElements;

  // Bind the click event of each (<div class="card" ...>) element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      console.log(`Card clicked: `, card);

      // 👇👇👇 TODO: write your code here 👇👇👇



    });
  });
});
