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
      card.classList.add('turned')
      const cardx = []
      memoryGame.pickedCards.push(card)
      cardx.push(card)
      if(memoryGame.pickedCards.length === 2)
      {    
        console.log("paco")
        if(memoryGame.checkIfPair(memoryGame.pickedCards[0].dataset.cardName,memoryGame.pickedCards[1].dataset.cardName) == 0)
        {
          
          setTimeout(() => {
            for (i = 0; i < memoryGame.pickedCards.length;i++)
                memoryGame.pickedCards[i].classList.remove('turned')
             memoryGame.pickedCards = []
          }, 800)
          document.getElementById("pairs-clicked").textContent = memoryGame.pairsClicked
          
        }else{
          memoryGame.pickedCards = []
          document.getElementById("pairs-clicked").textContent = memoryGame.pairsClicked
          document.getElementById("pairs-guessed").textContent = memoryGame.pairsGuessed
        }
      }
      console.log(cardx)
        if(memoryGame.isFinished())
        {
          setTimeout(() => {
            document.getElementById("pairs-clicked").textContent = 0
            document.getElementById("pairs-guessed").textContent = 0
            window.alert("hahahahh")
            memoryGame.shuffleCards()
            
            for (i = 0; i < memoryGame.cards.length;i++)
                memoryGame.cards[i].classList.remove('turned')

          },800)
      }
        
      
    });
  });
});
