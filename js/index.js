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

console.log(memoryGame.cards);

function toggleCards(element, classes){
  classes.forEach(className => element.classList.toggle(className))
}

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
      const clicked = document.getElementById("pairs-clicked");
      const guessed = document.getElementById("pairs-guessed");

      toggleCards(card.children[0], ["back", "front"])
      toggleCards(card.children[1], ["back", "front"])

      memoryGame.pickedCards.push(card);

      // console.log(memoryGame.pickedCards);

      if (memoryGame.pickedCards.length === 2){
        const firstPicked = memoryGame.pickedCards[0];
        const secondPicked = memoryGame.pickedCards[1];

        // console.log(firstPicked, secondPicked);

        const cardName1 = firstPicked.getAttribute("data-card-name");
        const cardName2 = secondPicked.getAttribute("data-card-name");

        // console.log(cardName1, cardName2);

        if(memoryGame.checkIfPair(cardName1, cardName2)){
          
          firstPicked.children[1].classList.add("blocked")
          secondPicked.children[1].classList.add("blocked")

          memoryGame.pickedCards = [];

          guessed.innerHTML = memoryGame.pairsGuessed; 

        } else {

          setTimeout(() => {
            toggleCards(firstPicked.children[0], ["back", "front"])
            toggleCards(firstPicked.children[1], ["back", "front"])
            toggleCards(secondPicked.children[0], ["back", "front"])
            toggleCards(secondPicked.children[1], ["back", "front"])
          },1000)

          memoryGame.pickedCards = [];
        }
        
        clicked.innerHTML = memoryGame.pairsClicked; 
      }


    });
  });
});