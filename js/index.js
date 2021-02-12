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
let pairsGuessedArea = document.getElementById("pairs-guessed");
const pairsClickedArea = document.getElementById("pairs-clicked");


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
      
      if (memoryGame.pickedCards.length<2){
        card.classList.toggle("turned")
        memoryGame.pickedCards.push(card);        
      }
      if (memoryGame.pickedCards.length===2){
        card1Name = memoryGame.pickedCards[0].getAttribute('data-card-name')
        card2Name = memoryGame.pickedCards[1].getAttribute('data-card-name')
        let bool= (memoryGame.checkIfPair(card1Name,card2Name))
        pairsClickedArea.innerText= `${memoryGame.pairsClicked}`;
        console.log(memoryGame.pickedCards[0], memoryGame.pickedCards[1] );
        console.log(bool);
        if (bool){
          memoryGame.pickedCards[0].classList.add('blocked');
          memoryGame.pickedCards[1].classList.add('blocked');
          console.log(memoryGame.pairsGuessed)
          pairsGuessedArea.innerText= `${memoryGame.pairsGuessed}`;
          memoryGame.pickedCards = []

        } else {
          setTimeout(() => {
          memoryGame.pickedCards[0].classList.toggle("turned");
          memoryGame.pickedCards[1].classList.toggle("turned");
          memoryGame.pickedCards = []

          }, 1000);
          
        }

      }
      const a = memoryGame.isFinished()
      if (a===true){
        console.log("you win");
        setTimeout(() => {
        document.querySelectorAll(".turned").forEach(card => card.classList.toggle("turned"))
        memoryGame.pairsGuessed=0;
        memoryGame.pairsClicked=0;
        pairsGuessedArea.innerText= `${memoryGame.pairsGuessed}`;
        pairsClickedArea.innerText= `${memoryGame.pairsClicked}`;

        memoryGame.shuffleCards()
      } , 2000);
      } 
      
        // console.log(`Card clicked: ${card}`);
    
  })
})})


  
