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

/*Barajar las cartas*/
memoryGame.shuffleCards();
let score = document.getElementById("pairs_guessed") ;
let clicks =  document.getElementById("pairs_clicked");

document.addEventListener("DOMContentLoaded", function (event) {
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach(card => {
    card.onclick = function () {
      // TODO: write some code here

      console.log('Card clicked: ', card);
      /*Dar la vuelta a las cartas*/

      flipCard(card);
      pickCard(card);  
      clicks.innerText = memoryGame.pairsClicked;
      score.innerText = memoryGame.pairsGuessed;
      
    };
  });

  function flipCard(card) {

    const cardParent = card.parentNode;
    const frontCard = cardParent.querySelector(".front")
    frontCard.removeAttribute("class", "front")
    frontCard.setAttribute("class", "back")
    card.removeAttribute("class", "back")
    card.setAttribute("class", "front")
  }

  /*Esconde la cartas */
  function hideCard(card) {
    
    const cardParent = card.parentNode;
    const frontCard = cardParent.querySelector(".back")
    frontCard.removeAttribute("class", "back")
    frontCard.setAttribute("class", "front")
    card.removeAttribute("class", "front")
    card.setAttribute("class", "back")

  }

  function pickCard(card) {

    memoryGame.pickedCards.push(card)

    if (memoryGame.pickedCards.length === 2) {
      if (memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute("name"), memoryGame.pickedCards[1].getAttribute("name"))) {
      
      memoryGame.pickedCards.pop();
      memoryGame.pickedCards.pop();
      
      if(memoryGame.isFinished()){
        setTimeout(()=>{
          const newGame = confirm("Quieres jugar de nuevo?")
          
          if(newGame){
            window.location.reload()
          }
        },500);
      }

      } else {

        setTimeout(() => {
          
          hideCard(memoryGame.pickedCards[0]);
          hideCard(memoryGame.pickedCards[1]);
          memoryGame.pickedCards.pop();
          memoryGame.pickedCards.pop();       
        }, 400);

      }
    }
  }

  function reset(){
    
    window.location.reload()
  }

});


