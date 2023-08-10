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
    `
  });
  
  
  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
  
  // Bind the click event of each element to a function
  
  
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', (event) => {

      console.log(card)
      card.classList.add("turned")
      //console.log(event.target.parent.classList)

      //card.children[0].classList.add("front")
      //card.children[0].classList.remove("back")
      //card.children[1].classList.add("back")
      // card.children[1].classList.remove("front")

      console.log(event.target)
      //event.target.innerText = "Unicorns are amazing"

      // event.target.classList.toggle ("front")
      // card.target.innerText = "unicorns are amazing"



      if (memoryGame.pickedCards.length < 2) {
        memoryGame.pickedCards.push(card)
      }



      if (memoryGame.pickedCards.length === 2) {
        const isPair = memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute("data-card-name"), 
        memoryGame.pickedCards[1].getAttribute("data-card-name"))

        if (!isPair) {

          card.classList.remove("turned")

        }

        memoryGame.pickedCards = []

      }



      //once clicked, add card to pickedCards
      //once pickedCards has 2 cards, call checkIfPair, mind the value for the argument
      //if true, don't flipt it back, if false, flip it back
      //make sure to empty pickedCards
      // TODO: write some code here =>checkifpair() - if false return cards back
      console.log(`Card clicked: ${card}`);
    });
    memoryGame.checkIfPair()
  });
});

    