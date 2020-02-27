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
let pickedCards = []
let msg1 = true
let msg2 = true
let msg3 = true
let msg4 = true



window.addEventListener('load', event => {
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
      // TODO: write some code here
      
      console.log(card.getAttribute('data-card-name'))
      
      if (pickedCards.length < 2){
        pickedCards.push(card)
      }
      for (c of pickedCards){
        c.classList.add('turned')
      }

      if (pickedCards.length == 2){
        
        let pairState = memoryGame.checkIfPair(pickedCards[0].getAttribute('data-card-name'),pickedCards[1].getAttribute('data-card-name'))
        
        if (!pairState){
          setTimeout(function(){
            for (c of pickedCards){
              c.classList.remove('turned')
              pickedCards = []
            }
            //joke alerts
            if (memoryGame.pairsClicked == 10 && msg1){
              msg1 = false
              alert('a normal person would have finished by now')
            } else if (memoryGame.pairsClicked == 20 && msg2){
              msg2 = false
              alert('are u even trying???')
            } else if (memoryGame.pairsClicked == 40 && msg3){
              msg3 = false
              alert('uhhh, this game is designed for humans, not goldfish...')
            } else if (memoryGame.pairsClicked == 40 && msg3) {
              msg4 = false
              alert('get gud noob')
            }
          },1500)          
        } else {
          document.querySelector('#pairs-guessed').innerHTML = memoryGame.pairsGuessed
          pickedCards = []
        }
        document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked 
      }
    });
  });
});


