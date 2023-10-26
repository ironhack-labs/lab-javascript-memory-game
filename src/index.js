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

let pickedCards = memoryGame.pickedCards;

window.addEventListener('load', (event) => {
  //event.preventDefault(); 
  //memoryGame.shuffleCards(cards);
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
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      // TODO: write some code here
  // add turned class after click;
  card.classList.add("turned");
  pickedCards.push(card);

  let pairsClicked = document.getElementById("pairs-clicked");
  pairsClicked.innerHTML++;

  if(pickedCards.length === 2){
    const dataNameFirst = pickedCards[0].getAttribute("data-card-name");
    const dataNameSecond = pickedCards[1].getAttribute("data-card-name");

    if(memoryGame.checkIfPair(dataNameFirst, dataNameSecond)){
      memoryGame.checkIfPair(dataNameFirst, dataNameSecond);
      pickedCards = [];

      let pairsGuessed = document.getElementById("pairs-guessed");
      pairsGuessed.innerHTML++;

      console.log(
        "Check if correct =>",
        typeof pairsGuessed.innerHTML
      );
    if(cards.length/2 === +(pairsGuessed.innerHTML)){
      console.log("You won!");
      const header = document.getElementById("header");
      header.style.color = "green";
      header.innerHTML = "You won!";
    }
    }else{
      setTimeout(() => {
        if(pickedCards[0].classList.contains("turned")){
          pickedCards[0].classList.remove("turned");
        }
        if(pickedCards[1].classList.contains("turned")){
          pickedCards[1].classList.remove("turned");
        }
        pickedCards = [];
      } , 1200);
    }
  }
});
});
});

