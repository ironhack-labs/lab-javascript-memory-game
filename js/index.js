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


window.addEventListener('load', event => {
  memoryGame.shuffleCards()
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  let hero1 = ''
  let hero2 = ''
  const cardsArr = []
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      // TODO: write some code here

        card.className = 'card turned'
        cardsArr.push(card.getAttribute('data-card-name'))
        let pair = false

        setTimeout(() => {

          if(cardsArr.length === 2){
            pair = memoryGame.checkIfPair(cardsArr[0], cardsArr[1])
            if(!pair && cardsArr.length === 2){
              const turned = document.getElementsByClassName('card turned')
              const turnedArr = [...turned]
              turnedArr.forEach(turnedCard => {
                if(!turnedCard.className.includes('blocked')){
                  turnedCard.className = 'card'
                }
                cardsArr.pop()
                cardsArr.pop()
              })
            }else {
              const turned = document.getElementsByClassName('card turned')
              const turnedArr = [...turned]
              turnedArr.forEach(turnedCard => {
                turnedCard.className = 'card turned blocked'
              })
              cardsArr.pop()
              cardsArr.pop()
            }
          }

        const pairsClicked = document.getElementById('pairs-clicked')
        pairsClicked.innerHTML = memoryGame.pairsClicked
        const pairsGuessed = document.getElementById('pairs-guessed')
        pairsGuessed.innerHTML = memoryGame.pairsGuessed

        if(memoryGame.isFinished()){
          const turnedCards = document.getElementsByClassName('card turned')
          const turnedArr = [...turnedCards]
          turnedArr.forEach(card => {
            card.className = 'card'
          })
          memoryGame.shuffleCards()
          memoryGame.pairsClicked = 0
          memoryGame.pairsGuessed = 0
        }

        
        },800)

  

    });
  });

});
