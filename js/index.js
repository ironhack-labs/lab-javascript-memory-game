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

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.shuffleCards()
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
  const pairCounter = document.querySelector('#pairs-clicked')
  const guessCounter = document.querySelector('#pairs-guessed')
            
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    
      card.addEventListener('click', () => {
          //allow only 2 cards to pe open at the same time
          if(memoryGame.pickedCards.length<2){
            card.classList.add('turned')
          }
          guessCounter.innerText = memoryGame.pairsGuessed
          //καθε καρτουλα που ανοιγω την βαζω μεσα σε ενα πινακα με το ονομα
          //picked cards
          memoryGame.pickedCards.push(card)
          //for every 2 cards i have to check if I have a pair
          if(memoryGame.pickedCards.length===2){
            
            const checked = memoryGame.checkIfPair(memoryGame.pickedCards[0].dataset.cardName,memoryGame.pickedCards[1].dataset.cardName)
            pairCounter.innerText = memoryGame.pairsClicked
            // console.log(memoryGame.pickedCards)
            // console.log(checked)
            
            if (!checked){
              setTimeout(function () {
                memoryGame.pickedCards[0].classList.remove("turned")
                memoryGame.pickedCards[1].classList.remove("turned")
                memoryGame.pickedCards.shift()
                memoryGame.pickedCards.shift()
              
            }, 900)
            }
            else {
                setTimeout(function () {              
                memoryGame.pickedCards.shift()
                memoryGame.pickedCards.shift()              
            }, 900)
            }
            
          }
          if(memoryGame.checkIfFinished()){
            const finished = document.querySelector('#memory-board')
            finished.setAttribute('id', 'finished')
            finished.innerText = 'Congratulations! You have a strong memory!'
          }
          
        });
  });
});
