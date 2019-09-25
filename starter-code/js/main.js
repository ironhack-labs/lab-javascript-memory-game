const cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquçaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards); 

document.addEventListener("DOMContentLoaded", function(event) { 
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
  document.querySelectorAll('.back').forEach( card => {
    card.onclick = function(event) {
      
      let cardClicked = event.target;
      
      //damos vuelta on click
      flipCard(card);

      if (memoryGame.pickedCards.length < 2) {
        //add to array new items
        memoryGame.pickedCards.push(card);
        cardClicked.classList.toggle('active');

        //console.log(memoryGame.pickedCards.length);

        if (memoryGame.pickedCards.length === 1) {
          firstGuess = cardClicked.getAttribute('name');
          cardClicked.classList.toggle('active');
          console.log(firstGuess);

        } else {
          secondGuess = cardClicked.getAttribute('name');
          cardClicked.classList.toggle('active');
          console.log(secondGuess);
        }
      }

      matchCard(card);

      //contamos los pairs 
      const clickedCount = document.getElementById("pairs_clicked").innerHTML = memoryGame.pairsClicked;
      
      console.log(memoryGame.pickedCards.length);
    };
  });

  firstGuess = "";
  secondGuess = "";
  count = 0;

  //Volteamos las cartas
  function flipCard(card) {
    const cardParent = card.parentNode;
    const frontCard = cardParent.querySelector(".back");
    const backCard = cardParent.querySelector(".front");
    
    frontCard.classList.toggle("front");
    frontCard.classList.remove("back");
    backCard.classList.toggle("back");
    backCard.classList.remove("front");
  }

  function matchCard(card){

    if(memoryGame.pickedCards.length === 2){
      if(memoryGame.checkIfPair(firstGuess, secondGuess)){
        console.log('iguales');
        const score = document.getElementById("pairs_guessed").innerHTML = memoryGame.pairsGuessed;
        reset(card);
      } else {
        console.log('no iguales');
        setTimeout(function(){
          memoryGame.pickedCards.forEach(card => flipCardReverse(card));
          reset(card);
        }, 1000); 
      }
    }

    //juego terminado
    if(memoryGame.isFinished()){
      setTimeout(function(){
        alert(`Felicidades!! Juego terminado`);
        window.location.reload();
      }, 1000); 
    }
  }

  //original position - classes
  function flipCardReverse(card) {
    const cardParent = card.parentNode;
    const frontCard = cardParent.querySelector(".front");
    const backCard = cardParent.querySelector(".back");

    frontCard.classList.toggle("back");
    frontCard.classList.remove("front");
    backCard.classList.toggle("front");
    backCard.classList.remove("back");

  }

  function reset(card) {
    firstGuess = "";
    secondGuess = "";
    memoryGame.pickedCards = [];
  }    
});