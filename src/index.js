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
      <div class="card " data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  // function flipCard() {
  //   this.classList.toggle("turned");
  // }
  
  const card = document.querySelectorAll(".cards");

  function turned() {
    this.classList.toggle("turned");
  }
  cards.forEach((card) => card.addEventListener("click", turned));




  // document.querySelectorAll('.card').forEach((card) => {
  //   card.addEventListener('click', () => {
  //     // TODO: write some code here
  //     console.log(`Card clicked: ${card}`);
  //   }

      const clickedCard = memoryGame.pickedCards.push(card)

      if(memoryGame.pickedCards.length == 2) {
        console.log(clickedCard)
      }
 
      // }
      card.classList.toggle("turned")
      // setTimeout(() => {
      //   card.classList.remove('turned')
      //   // this.pickedCards = [];
      // }, 0);
      if(memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {

        card.classList.add('blocked')
      } else {
        card.classList.remove('blocked')
      }



      // if(card.classList.contains("turned")) {
      //   card.classList.remove("turned")
      // } else {
      //   card.classList.add("turned")
      // }
    

    });




