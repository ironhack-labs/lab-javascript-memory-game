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
  memoryGame.shuffleCards()
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
      let card1;
      let card2;
      card.querySelectorAll(".card > div").forEach(div => {
        div.classList.toggle("front");
        div.classList.toggle("back");
      });
      memoryGame.pickedCards.push(card)
      if(memoryGame.pickedCards.length === 2) {
        card1 = memoryGame.pickedCards[0].getAttribute("data-card-name");
        card2 = memoryGame.pickedCards[1].getAttribute("data-card-name");
        if(memoryGame.checkIfPair(card1, card2) && memoryGame.pickedCards[0] !== memoryGame.pickedCards[1]) {
          
          memoryGame.pickedCards[0].setAttribute("class", "card turned")
          memoryGame.pickedCards[1].setAttribute("class", "card turned")
          memoryGame.pickedCards = [];
          let pairsGuessed = document.querySelector("#pairs-guessed");
          pairsGuessed.innerText = memoryGame.pairsGuessed;
          
        } else {
            memoryGame.pickedCards[0].querySelectorAll("div").forEach(div => {
              setTimeout(() => {
                div.classList.toggle("back")
                div.classList.toggle("front")
              },1000)
            });
            memoryGame.pickedCards[1].querySelectorAll("div").forEach(div => {
              setTimeout(() => {
                div.classList.toggle("back")
                div.classList.toggle("front")
              },1000)
              
            });
           
          memoryGame.pickedCards = [];
        }
      }
      let pairsClicked = document.querySelector("#pairs-clicked");
      pairsClicked.innerText = memoryGame.pairsClicked;
      
      
      console.log(`Card clicked: ${card}`);
      memoryGame.isFinished();
    
    });
  });
});


  
 


