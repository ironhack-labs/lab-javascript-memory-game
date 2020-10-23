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
  memoryGame.shuffleCards(cards);

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
      
      // when card is clicked, class front-back should be toggled
      let cardName = card.getAttribute('data-card-name')
      console.log(`picked card is ${cardName}`);
      card.querySelectorAll('.card div').forEach(div => {
          div.classList.toggle("front")
          div.classList.toggle("back")
      })
      
      memoryGame.pickedCards.push(cardName)

      //if memorygame pickedcards length = 2, checkpair, if true block + clean array
       
      let card1 = memoryGame.pickedCards[0];
      let card2 = memoryGame.pickedCards[1];
      
      if (memoryGame.pickedCards.length ===2 ) {

        if (memoryGame.checkIfPair(card1, card2) === true) {
          console.log("It's a match!")
          let pairsGuessed = document.getElementById("pairs-guessed")
          pairsGuessed.innerHTML++

          let pairsClicked = document.getElementById("pairs-clicked")
          pairsClicked.innerHTML++

          
          memoryGame.pickedCards.splice(0, memoryGame.pickedCards.length)

        } else if (memoryGame.checkIfPair(card1, card2) === false) {
          let pairsClicked = document.getElementById("pairs-clicked")
          pairsClicked.innerHTML++

          memoryGame.pickedCards.splice(0, memoryGame.pickedCards.length)
          console.log(memoryGame.pickedCards)

        }
      }
      

      

      console.log(`Card clicked: ${card}`);
    });
  });
});
