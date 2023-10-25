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
      // TODO: write some code here
      console.log(`Card clicked: ${card}`);
      if(memoryGame.pickedCards.length < 2){
        memoryGame.pickedCards.push(card)
        card.classList.add("turned")
      }
      if(memoryGame.pickedCards.length === 2){
        const card1 = memoryGame.pickedCards [0] 
        const card2 = memoryGame.pickedCards [1]

        const picName1 = card1.getAttribute("data-card-name")
        const picName2 = card2.getAttribute("data-card-name")
      
      if(memoryGame.checkIfPair(picName1, picName2)){
        card1.classList.add("blocked")
        card2.classList.add("blocked")
        memoryGame.pairsGuessed++
      }else{
  
        setTimeout(() => {
          card1.classList.remove("turned")
          card2.classList.remove("turned")
          memoryGame.pickedCards = [];
        }, 590)
            }
      }
    const guessPairs = document.getElementById("pairs-guessed")
    guessPairs.innerHTML = memoryGame.pairsGuessed

    });
  });
});


  // if statement cards selected  =2 
      // memory. cardarray [0],[1]
      // get atrributes(pic.name) of cards
      // check cards are pairs
      // add property block in case of cards are same
      // turn the cards back