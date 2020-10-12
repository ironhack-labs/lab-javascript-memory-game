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
  memoryGame.shuffleCards();
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
      console.log(`Card clicked: ${card}`);
      if (memoryGame.pickedCards.length === 0){
        if(!card.classList.contains("blocked")){
          document.querySelectorAll(".turned").forEach(card =>{
            if(!card.classList.contains("blocked")){
              card.classList.remove("turned");
            }
          });
        }
      }
      memoryGame.pickedCards.push(card.getAttribute("data-card-name"));
      card.classList.add("turned");
      if(memoryGame.pickedCards.length === 2){
        let sameCard = memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]);
        document.querySelectorAll(".turned").forEach(card =>{
          if(sameCard){
            card.classList.add("blocked");
          }
        });
        memoryGame.pickedCards = [];
      }
      document.getElementById("pairs-clicked").innerHTML = memoryGame.pairsClicked;
      document.getElementById("pairs-guessed").innerHTML = memoryGame.pairsGuessed;
      if(memoryGame.isFinished()){
        alert("You won");
      }
      
    });
  });
});
