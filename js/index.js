
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

function runCard(card) {
  console.log(card);
}

function gamePlay(card) {
  // Ensure we only pick two cards to compare
  if (memoryGame.pickedCards.length < 2) {
    memoryGame.pickedCards.push(card);
  }
  // turn over the selected card
  card.classList.add('turned');
  // When 2 cards have been selected, split the array into two variables.
  if (memoryGame.pickedCards.length === 2) {
    let card1 = memoryGame.pickedCards[0]
    let card2 = memoryGame.pickedCards[1]
    console.log(card1)
    console.log(card2)
    // Add 1 to pairs clicked count
    document.getElementById('pairs-clicked').innerHTML++;
    // If the cards are pairs... 
    if (memoryGame.checkIfPair(card1, card2)) {
      // Add 1 to pairs guessed
      document.getElementById('pairs-guessed').innerHTML++;
      // Block cards so they're not guessed again
      card1.classList.add('blocked');
      card2.classList.add('blocked');
      // Reset picked cards to be empty
      memoryGame.pickedCards = [];
    } else {
      // if cards are not pairs, remove turned class and reset array.
      setTimeout(() => {
        card1.classList.remove('turned');
        card2.classList.remove('turned');
      }, 500);
      memoryGame.pickedCards = [];
    }
    // if game finishes, display alert.
    if (memoryGame.checkIfFinished()) {
      alert('You won!');
    }
  }
}

