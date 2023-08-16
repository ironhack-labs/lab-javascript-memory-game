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

//option 1


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
 });
  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  //option 1
  /*
  <div class="card-turned" data-card-name="${pic.name}">
          <div class="back" name="${pic.img}"></div>
          <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
        </div>
  */


  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => { // --> forEach start
    card.addEventListener('click', () => { // --> click Event start
      card.querySelector('.back').classList.toggle("front"); //swiping
      card.querySelector('.front').classList.toggle("back"); 


      const twoTurned = document.querySelectorAll(".card.front"); // card->front
      if (twoTurned.length === 2) {
        const card1 = twoTurned[0];
        const card2 = twoTurned[1];
      }
     

    // method pre-defined  = if true...
    if (MemoryGame.checkIfPair(card1, card2)) {  // --> if-statement for flipping check end
      card1.classList.add("blocked");
      card2.classList.add("blocked");   // but what does "blocked" do here????

    if (MemoryGame.checkIfFinished()) { // I kind of add some variations, lol!!!(not sure 100% if this is correct.)
      setTimeout ( () => {
        const firstAlert = alert ("Yayi! You Won!");
    
      setTimeout ( () => {
        firstAlert.close();
      }, 2500)

      setTimeout ( ()=> {
        alert ("But sorry for my bad code. Bye!");
      }, 3000)
      
    }, 0);
 } // --> last if-statement end
  } // -> if-statement for flipping check end
  console.log(`Card clicked: ${card}`);
  }); // --> click Event end
}); // --> forEach end
