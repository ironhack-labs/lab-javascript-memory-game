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

const memoryGame = new MemoryGame(cards)
memoryGame.shuffleCards(memoryGame.cards)
 

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
      if(memoryGame.isFinished()) {alert('won')}
      console.log(`Card clicked: ${card.getAttribute('data-card-name')}`)
      document.getElementById('pairs-clicked').textContent = memoryGame.pairsClicked/2
      if(memoryGame.pickedCards.length == 2) {
       
        let pairs = memoryGame.pickedCards;
        console.log(memoryGame.checkIfPair(pairs[0], pairs[1]))
        if(!memoryGame.checkIfPair(pairs[0], pairs[1])){

               pairs.forEach(card => {card.classList.remove('turned')})
               memoryGame.pickedCards = [];
        } else {
           document.getElementById('pairs-guessed').textContent = memoryGame.pairsGuessed/2
          pairs.forEach(card => {card.classList.add('turned')})
          memoryGame.pickedCards = [];
        console.log(memoryGame.pickedCards)
      }
      
    } else {
      
      memoryGame.pickedCards.push(card)
      card.classList.toggle('turned')
      console.log(memoryGame.pickedCards)
    }
      
      
    
      
      /*
      
      else {
        let pairs = memoryGame.pickedCards;
        if(!memoryGame.checkIfPair(pairs[0], pairs[1])){
               pairs.forEach(card => {card.classList.remove('turned')})
               memoryGame.pickedCards = [];
        } else {
          pairs.forEach(card => {card.classList.add('turned')})
          memoryGame.pickedCards = [];
        }
        
      }
      */
      
      
      
    });
  });
});
