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
memoryGame.shuffleCards()
//memoryGame.cards.sort((a,b) => a.name.localeCompare(b.name))
const clicked = document.getElementById('pairs-clicked')
const guessed = document.getElementById('pairs-guessed')

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
      
      memoryGame.pickedCards.push(card);

      toggleFunction(card)

      if(memoryGame.pickedCards.length === 2){
        const card1 = memoryGame.pickedCards[0]
        const card2 = memoryGame.pickedCards[1]
        
        if(memoryGame.checkIfPair(card1, card2)){
          card1.classList.add('turned')
          card2.classList.add('turned')
  
          guessed.innerText = memoryGame.pairsGuessed
          if(memoryGame.checkIfFinished()) return document.querySelector('.win').innerText = "YOU WON !!!"
         
        }
        else{
          memoryGame.pickedCards.forEach(card => setTimeout(() => toggleFunction(card), 1000))
        }
       
        clicked.innerText = memoryGame.pairsClicked
        memoryGame.pickedCards = []
      }

    }); 

  });
});


function toggleFunction(parentElem){
  [...parentElem.children].forEach(child => {
    child.classList.toggle('front')
    child.classList.toggle('back')
  })
}