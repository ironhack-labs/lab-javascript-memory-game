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

  const addPickedNumber = () => {
  const clicked = document.querySelector('#pairs-clicked')
      memoryGame.pairsClicked++
      clicked.innerHTML = memoryGame.pairsClicked
}
  // Bind the click event of each element to a function
  
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      // TODO: write some code here
     memoryGame.pickedCards.push(card)
      
      card.classList.toggle('turned')
      setTimeout(() => {
        card.classList.toggle('turned')
      }, 1000)
      
      addPickedNumber()
      console.log(`Card clicked: ${card}`);

      if(memoryGame.pickedCards.length === 2){
        let card1 = memoryGame.pickedCards[0].getAttribute('data-card-name')
        let card2 = memoryGame.pickedCards[1].getAttribute('data-card-name')
        if(memoryGame.checkIfPair(card1, card2)) {
          setTimeout(()=>{
            memoryGame.pickedCards.forEach(card =>{
              card.classList.add('blocked')
            })
          })
        } else {memoryGame.pairsGuessed
  
        }
      } 
      
    

    });
  });
});
