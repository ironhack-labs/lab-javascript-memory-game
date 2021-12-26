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

window.addEventListener('load', () => {
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

  function turnCard(card){
    if(card.className === "card turned"){
      card.className = "card";
    } else {
      card.className = "card turned";
    }
  }

  const guessed = document.getElementById("pairs-guessed");

  function updateGuessed(){
    guessed.innerHTML=memoryGame.pairsGuessed;
  }

  const clicked = document.getElementById("pairs-clicked");

  function updateClicked(){
    clicked.innerHTML=memoryGame.pairsClicked; 
  }

  let cardsPicked = [];

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', (cardPicked) => {
      // TODO: write some code here
      cardsPicked.push(cardPicked.currentTarget);
      if(cardsPicked.length <= 2){
        turnCard(cardPicked.currentTarget);
        if(cardsPicked.length===2){
          const cardPicked1Name = cardsPicked[0].attributes[1].value;
          const cardPicked2Name = cardsPicked[1].attributes[1].value;
          if(!memoryGame.checkIfPair(cardPicked1Name, cardPicked2Name)){
            setTimeout(() => {
              turnCard(cardsPicked[1]);
              turnCard(cardsPicked[0]);
              cardsPicked = [];
            }, 1500);
          } else {
            updateGuessed();
            if(memoryGame.checkIfFinished()){
              setTimeout(() => {
                const finalDiv = document.getElementById("you-win");
                finalDiv.hidden = false;
              }, 1000);
            }
            cardsPicked = [];
          }
          updateClicked();          
        }
      }
      console.log(`Card clicked: ${card}`);
    });
  });
});
