
// Create an instance of the MemoryGame class, passing the 'cardsData' array (from deck.js) as argument
const memoryGame = new MemoryGame(cardsData);

// 🌟 BONUS: 👇 Call the shuffleCards method, to shuffle the deck before displaying it


// when the page loads, for each card in the memoryGame.cards array, create divs with card's data
window.addEventListener('load', (event) => {
  let cardsDomElement = '';
  memoryGame.cards.forEach((cardObj) => {
    cardsDomElement += 
    `
      <div class="card" data-card-name="${cardObj.name}">
        <div class="back" name="${cardObj.img}"></div>
        <div class="front" style="background: url(img/${cardObj.img}) no-repeat"></div>
      </div>
    `
  });

  // target the div element with id = memory-board
  let board = document.querySelector('#memory-board');
  // inject the cards element into the board
  board.innerHTML = cardsDomElement;

  // Bind the click event of each (<div class="card" ...>) element to a function
  // every time a card is clicked your code will be executed 
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
  
      console.log(`Card clicked: `, card);

      // 👇👇👇 TODO: write your code here 👇👇👇

      // Iter 2.1


      // Iter 2.2

      
      // Iter 2.3 

        
      // 🌟 BONUS: replace alert with message

      // 🌟 BONUS: display score
      

    });
  });
});
