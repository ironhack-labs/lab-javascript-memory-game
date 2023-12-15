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



  
  // Lets check if the are a match
  
  function checkMatch(){
    if(memoryGame.pickedCards.length===2){
      memoryGame.pairsClicked++
      const match =memoryGame.checkIfPair(
        memoryGame.pickedCards[0].getAttribute(`data-card-name`),
        memoryGame.pickedCards[1].getAttribute(`data-card-name`),
      )
      if(match){
        memoryGame.pickedCards.shift()
        memoryGame.pickedCards.shift()
        memoryGame.pairsGuessed++
        document.querySelector(`#pairs-guessed`).innerHTML =
         memoryGame.pairsGuessed/2
         document.querySelector(`#pairs-clicked`).innerHTML = memoryGame.pairsClicked/4
      }else{
        memoryGame.pickedCards.forEach((card)=>{
          card.setAttribute(`class`,`card`)
          memoryGame.pickedCards = []
          document.querySelector(`#pairs-clicked`).innerHTML = memoryGame.pairsClicked/4
        })
      }
    }
  }
  const gameFinished = () =>{if(memoryGame.pairsGuessed/2===12)
console.log(`You won!`)}

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      if(memoryGame.pickedCards.length<2){
       
        memoryGame.pickedCards.push(card)

        card.setAttribute(`class`,`card turned`)
        memoryGame.pairsClicked++
       
      }

    setTimeout(checkMatch,2000)
    setTimeout(gameFinished,1000)
    });
  });
});
     // TODO: write some code here
//      console.log(`Card clicked: ${card}`);
//     });
//   });
// });