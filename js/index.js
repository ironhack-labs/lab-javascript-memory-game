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

window.addEventListener('load', event => {
  let html = '';
  memoryGame.cards.forEach(card => {
    html += `<div class="card" data-card-name="${card.name}">`;
    html += `<div class="back" name="${card.img}"></div>`;
    html += `<div class="front" style="background: url(img/${card.img}) no-repeat"></div>`;
    html += `</div>`;
  });
  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;


  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      memoryGame.pickedCards.push(card)
      card.classList.toggle('turned');

      if(memoryGame.pickedCards.length==2){
        if(!memoryGame.checkIfPair(memoryGame.pickedCards[0].dataset.cardName,memoryGame.pickedCards[1].dataset.cardName)){
        setTimeout(() => {
          memoryGame.pickedCards[0].classList.toggle('turned');
          memoryGame.pickedCards[1].classList.toggle('turned')        
          memoryGame.pickedCards=[]
        }, 500)}else{
          memoryGame.pickedCards=[]
          document.querySelector('#pairs-guessed').innerText= memoryGame.pairsGuessed;
          memoryGame.isFinished()
        }
      }  
      
      
      
      
      

      document.querySelector('#pairs-clicked').innerText= memoryGame.pairsClicked;        
       

      // TODO: write some code here
      console.log(`Card clicked: ${card}`);
      console.log(card1)
    });
  });
});
