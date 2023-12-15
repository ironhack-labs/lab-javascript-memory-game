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


  let previousElement = []
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
    //add class turned when clicked (css shows the card front)
    card.classList.add("turned")
    previousElement.push(card)
    //We go into the name of the card and add it to a variable. 
    let cardName = card.getAttribute('data-card-name')

    //Push it into th array pickedCards. Important. We use memoryGame and not this. since we created a variable called memoryGame that emulates a game. 
    memoryGame.pickedCards.push(cardName)

    // we show on screen how many element did we click already. 
    document.getElementById("pairs-clicked").textContent = previousElement.length

if (memoryGame.pickedCards.length === 2) {
  setTimeout(function(){
    //if the 2 elements of the array are the same. Remember that we created this array and only has the name on it, not the full element. 
    if (memoryGame.pickedCards[0] === memoryGame.pickedCards[1]){
      card.classList.add("bloqued");
      previousElement[0].classList.add("bloqued")
      memoryGame.pairsGuessed ++
      document.getElementById("pairs-guessed").textContent = memoryGame.pairsGuessed
     } else {
      card.classList.remove("turned");
      previousElement[0].classList.remove("turned")
     }
    // We reset both of the arrays when the array.lengh is 2, but after deciding if they are pair or not. 
  previousElement =[]
  memoryGame.pickedCards = []
  // we give back again the counter to 0. 
  document.getElementById("pairs-clicked").textContent = 0
  },500)// possible bug beacuse of time: if you select more than 2 cards in this time they will not go back again and will stay
}
    });
  });
});
