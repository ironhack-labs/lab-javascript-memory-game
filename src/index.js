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

  //adds event for each card on 'onclick'
  document.querySelectorAll(".card, .card turned").forEach((card) => {
    card.addEventListener('click', () => {
      //condition if we DO NOT have picked 2 cards yet, add class 'turned' to the card and store the card name in the pickedcards array

      if (memoryGame.pickedCards.length < 2) {
        card.classList.toggle("turned");
        memoryGame.pickedCards.push(card.getAttribute("data-card-name"));
        console.log(memoryGame.pickedCards);
      }

      //if we do have picked 2 cards
      if (memoryGame.pickedCards.length === 2) {
        //check if they are matching pairs
        let pairCheck = memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]);
        //updates the number of pairs clicked on the top right
        document.getElementById('pairs-clicked').innerText = memoryGame.pairsClicked;

        if (pairCheck) {
          // if pairs match, we keep them blocked
          document.querySelectorAll(`[data-card-name='${memoryGame.pickedCards[0]}']`).forEach(element => {
            element.classList.add('blocked');
            document.getElementById('pairs-guessed').innerText = memoryGame.pairsGuessed;
          })
        }
        else {
          // if pairs don't match, flip them back after some delay
          setTimeout(() => document.querySelectorAll(".card:not(.blocked)").forEach(element => element.classList.remove('turned')), 1000
          )
        };

        //clear the picked cards array to start again
        memoryGame.pickedCards = [];

        //check if game is finished
        const isGameFinished = memoryGame.checkIfFinished();
        if (isGameFinished) {
          console.log("Finished!");


          // OPTIONAL: The following is just adding the finished button - ugly and should be done differently i.e. using classes but for today it's okay... 
          let finishedDiv = document.createElement("div");
          finishedDiv.innerText = "FINISHED!";
          finishedDiv.style.backgroundColor = 'red';
          finishedDiv.style.textAlign = 'center';
          finishedDiv.style.color = 'white';
          finishedDiv.style.backgroundColor = 'orange';
          finishedDiv.style.border = '2px solid red';
          finishedDiv.style.fontSize = '10rem';
          finishedDiv.style.position = 'fixed';
          finishedDiv.style.top = '300px';
          document.getElementById('memory-board').appendChild(finishedDiv);

        }
      }
    })
  });
});




