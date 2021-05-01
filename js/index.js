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
      console.log(`Card clicked: ${card}`);
      card.firstElementChild.classList.add("front")
      card.firstElementChild.classList.remove("back")
      card.lastElementChild.classList.add("back")
      card.lastElementChild.classList.remove("front")
      memoryGame.pickedCards.push(card)
    
        if(memoryGame.pickedCards.length % 2 === 0) {
          let result = memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute("data-card-name"),memoryGame.pickedCards[1].getAttribute("data-card-name"))
          console.log(result)
          console.log(memoryGame.pickedCards[0])
          console.log(memoryGame.pickedCards[1])
        
          if(result === true) {
            memoryGame.pickedCards = []
          } else {
            setTimeout( () => {
            memoryGame.pickedCards.forEach( (card) => {
              card.firstElementChild.classList.add("back")
              card.firstElementChild.classList.remove("front")
              card.lastElementChild.classList.add("front")
              card.lastElementChild.classList.remove("back")
            })
            memoryGame.pickedCards = []
            }, 1000)
          
          }
        
        }
    

      
    });
  });
});
