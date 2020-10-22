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
      let cardName = card.getAttribute("data-card-name");
      console.log(`card picked is ${cardName}`);
      card.querySelectorAll('.card div').forEach(div =>{
        div.classList.toggle("front")
        div.classList.toggle("back")
      })
      memoryGame.pickedCards.push(cardName)
      console.log(memoryGame.pickedCards)
      let card1 = memoryGame.pickedCards[0];
      let card2 = memoryGame.pickedCards[1];
      //console.log(memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1]))
      if (memoryGame.checkIfPair(card1, card2) === true){
        console.log(`it is a match !`)
        let pairsGuessed = document.getElementById("pairs-guessed")
        pairsGuessed.innerHTML++;
        memoryGame.pickedCards.length = 0
        let pairsClicked = document.getElementById("pairs-clicked") ;
        pairsClicked.innerHTML++;
      }else if (memoryGame.checkIfPair(card1, card2) === false){
        let pairsClicked = document.getElementById("pairs-clicked") ;
        pairsClicked.innerHTML++;
      }
    });
  });
});
