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
  memoryGame.shuffleCards();
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


  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      if (memoryGame.pickedCards.length < 2){
            memoryGame.pickedCards.push(card);
            card.className = 'card turned';
      }
        
      if (memoryGame.pickedCards.length === 2){
            let firstCard = memoryGame.pickedCards[0];
            let secondCard = memoryGame.pickedCards[1];
      

      let areTheyPair = memoryGame.checkIfPair(
        firstCard.getAttribute('data-card-name'), 
        secondCard.getAttribute('data-card-name'));
            if (areTheyPair === true){
              memoryGame.pickedCards = [];
              console.log(memoryGame.pickedCards);
            }else{
              setTimeout(() => {

                memoryGame.pickedCards = [];
                firstCard.className = 'card';
                secondCard.className = 'card';
                console.log(firstCard)
            }
            , 500);
        
            }
      }
      
      if(memoryGame.checkIfFinished()){
        setTimeout(() => {
          alert('You won')
        }, 500)
        }

      const pairsClicked = document.getElementById('pairs-clicked');
      const pairsGuessed = document.getElementById('pairs-guessed');
      pairsClicked.innerHTML = memoryGame.pairsClicked;
      pairsGuessed.innerHTML = memoryGame.pairsGuessed;
          
    });
  });
    
});

      
