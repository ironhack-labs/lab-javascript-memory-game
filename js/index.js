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
const pairsClicked = document.getElementById('pairs-clicked')
const pairsGuessed = document.getElementById('pairs-guessed')
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
      
      console.log(`Card clicked: ${card}`);
      if(memoryGame.pickedCards.length < 2){
        memoryGame.pickedCards.push(card.getAttribute('data-card-name'));
        return card.classList.add("turned");
      }
      if(memoryGame.pickedCards.length === 2){
        const card1 = memoryGame.pickedCards[0]
        const card2 = memoryGame.pickedCards[1]
        const valida = memoryGame.checkIfPair(card1, card2)
        if(valida){
          memoryGame.pickedCards = []
        }
      else{
        if(memoryGame.pickedCards.length > 0){
        let card = document.querySelectorAll('.card').forEach((e) => {
          e.getAttribute('data-card-name') === memoryGame.pickedCards[0]
          e.classList.remove('turned')
          e.getAttribute('data-card-name') === memoryGame.pickedCards[1]
          e.classList.remove('turned')
          memoryGame.pickedCards = [];
        })
        setTimeout(() => {
          return card 
          },1000)
          }
          }
          pairsClicked.innerHTML = memoryGame.pairsClicked
          pairsGuessed.innerHTML = memoryGame.pairsGuessed 
        }
    });
  });
  return pairsClicked.innerHTML, pairsGuessed.innerHTML

});
