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
console.log(memoryGame)

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
      card.classList.toggle('turned'); 
      
      card.dataset.cardName
      memoryGame.pickedCards.unshift(card);
      console.log("ANTES DEL IF", memoryGame.pickedCards)
     
     //Este es mi código final 
      
    //  if(memoryGame.pickedCards.length === 2 && memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]) ){
    //   card.classList.toggle('block')
    //   memoryGame.pickedCards[0].classList.toggle('block')
    //   memoryGame.pickedCards[1].classList.toggle('block')
    //  }
   
    //Qué majete es Santiago :)
    let result = memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])
    if(!result) {
      setTimeout(() => {
        memoryGame.pickedCards[0].classList.toggle('turned')
        memoryGame.pickedCards[1].classList.toggle('turned')
        memoryGame.pickedCards = []
      },1000)
    }
    
      
      
      

       
    });
  });
});
