
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

let count = 0; // Manage number of cards turned
const cardsTurned = ["", ""]; // Manage cards turned

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
      if (count < 2) {
        card.classList.toggle('turned')
        console.log(`Card clicked: ${card}`);
        cardsTurned[count] = card.getAttribute("data-card-name");
        count++;
      }
      
      setTimeout(() => {
        if(count === 2){
          console.log(cardsTurned)
          if(memoryGame.checkIfPair(cardsTurned[0], cardsTurned[1])) {
            document.querySelectorAll('.card').forEach((cardturned) => {
              if(cardturned.classList.value.includes("turned") && !cardturned.classList.value.includes("blocked")){
                cardturned.classList.toggle('blocked');
              }
            });
          } else {
            document.querySelectorAll('.card').forEach((cardturned) => {
              if(cardturned.classList.value.includes("turned") && !cardturned.classList.value.includes("blocked")){
                cardturned.classList.toggle('turned');
              }
            });
          }
          count = 0;
          console.log(memoryGame.pairsClicked)
        }
        document.getElementById("pairs-clicked").innerText = memoryGame.pairsClicked;
        document.getElementById("pairs-guessed").innerText = memoryGame.pairsGuessed;
        if(memoryGame.checkIfFinished()) alert("YOU WIN!!!!") 
      }, 1000);
      
      
    });
  });
});