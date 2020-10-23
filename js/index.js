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
console.log(memoryGame);
memoryGame.shuffleCards();

window.addEventListener('load', event => {
  let html = '';
  memoryGame.cards.forEach(pic => {
    //console.log(`${pic.name}`);
    html += `<div class="card" data-card-name="${pic.name}">`;
    /* console.log(pic.name); */
    html += `<div class="back" name="${pic.name}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;

  });

  function toggle (cardElement, classList){
classList.forEach(name => cardElement.classList.toggle(name))
  }

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
  
  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      let cardName = card.getAttribute("data-card-name");
      console.log(`card picked is ${cardName}`);
      card.querySelectorAll(".card div").forEach(div =>{
        div.classList.toggle("front")
        div.classList.toggle("back")
      })
      //console.log(`bla`,memoryGame.pickedCards)
      memoryGame.pickedCards.push(cardName)
      //console.log(`nlanla`,memoryGame.pickedCards)
      let card1 = memoryGame.pickedCards[0];
      let card2 = memoryGame.pickedCards[1];
      //console.log(memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1]))
      if(memoryGame.pickedCards.length === 2){
      if (memoryGame.checkIfPair(card1, card2) === true){
        console.log(`it is a match !`)
        let pairsGuessed = document.getElementById("pairs-guessed")
        pairsGuessed.innerHTML++;
        let pairsClicked = document.getElementById("pairs-clicked") ;
        pairsClicked.innerHTML++;
        memoryGame.pickedCards.splice(0, memoryGame.pickedCards.length);
        //memoryGame.pickedCards =[];
      }else if (memoryGame.checkIfPair(card1, card2) === false){
        let pairsClicked = document.getElementById("pairs-clicked") ;
        pairsClicked.innerHTML++;
        memoryGame.pickedCards.splice(0, memoryGame.pickedCards.length);
        console.log(memoryGame.pickedCards);
          // Compare the two values in the array (memoryGame.picked)
          // If the two cards aren"t a match, clean the array and toggle class name to "back"
          // If the are a match, use class blocked on them... clean the array
        }
      }
    });
  });
});