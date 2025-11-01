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
const pairsClicked = document.getElementById("pairs-clicked");
const pairsGuessed = document.getElementById("pairs-guessed");

window.addEventListener('load', (event) => {
  
  //Shuffle
  console.log("Cards pre-shuffle:", memoryGame.cards);
  
  memoryGame.shuffleCards();

  console.log("Cards post-shuffle:", memoryGame.cards);

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

      //Toggle styles
      card.classList.toggle("turned");

      //Add clicked card to array
      memoryGame.pickedCards.push(card);
      
      //Check the array
      if (memoryGame.pickedCards.length === 2) {
        const card1 = memoryGame.pickedCards[0];
        const card2 = memoryGame.pickedCards[1];
        pairsClicked.textContent = memoryGame.pairsClicked;
        
        //Check pair
        if (memoryGame.checkIfPair(card1.dataset.cardName, card2.dataset.cardName)) {
          //Update counter
          pairsGuessed.textContent = memoryGame.pairsGuessed;
          
          //Check if finished
          if (memoryGame.checkIfFinished()) {
            setTimeout(() => {
              alert("You've won!");
              const restart = confirm("Do you want to try again?");
              if(restart){
                window.location.reload();
              }
            })
          }
          
        } else {

          //Toggle styles after 1s
          setTimeout(() => {
            card1.classList.toggle("turned");
            card2.classList.toggle("turned");
          }, 1000);
        }

        //Set array to []
        memoryGame.pickedCards = [];
      }

    });
  });
});


// document.querySelectorAll(".card").forEach((card) => card.classList.toggle("turned"));