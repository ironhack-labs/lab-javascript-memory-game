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
  console.log("memory game has loaded")
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
    card.addEventListener('click', (event) => {//this event is referred above
      // TODO: write some code here
      console.log(`Card clicked: ${card}`);
      if (memoryGame.pickedCards.length <= 2){event.currentTarget.classList.toggle("turned")//toggle the class, we don't need an IF statement. classList is a string in here.the object
      memoryGame.pickedCards.push(event.currentTarget);
      //we don't acces this.pickedCards instead of memoryGame because the eventlistener is called by the browser, not 
      }else{
        console.log(`You cannot pick more than two cards`)
      }
      if (memoryGame.pickedCards.length === 2) {
        const card1 = memoryGame.pickedCards[0].getAttribute("data-card-name");
        const card2 = memoryGame.pickedCards[1].getAttribute("data-card-name");
        const pairGuessed = memoryGame.checkIfPair(card1, card2);
        if (pairGuessed) {
          // they are a pair
          memoryGame.pickedCards.forEach(
            (card) => (card.style.pointerEvents = "none")
          );
        } else {
          setTimeout(() =>{ 
            memoryGame.pickedCards.forEach((card) =>
                card.classList.toggle('turned')
              );
              memoryGame.pickedCards = [];
          },1000);
        }
      }
    });
  });
});
