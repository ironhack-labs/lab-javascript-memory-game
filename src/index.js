


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

let isProcessing= false;

window.addEventListener("load", (event) => {
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

  const pairsClicked=document.querySelector("#pairs-clicked")
  const pairsGuessed=document.querySelector("#pairs-guessed")

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      if (isProcessing){
        return;
      }
      //we turn the card and push it into the empty pickedCards array
      card.classList.add("turned")
      memoryGame.pickedCards.push(card)

      //Adds 1 to the pairsClicked and adds it in the HTML
      memoryGame.pairsClicked++;
      pairsClicked.innerHTML=memoryGame.pairsClicked;

      //to check if the person has clicked 2 cards
      if (memoryGame.pickedCards.length===2){
        isProcessing=true;

      const check =memoryGame.checkIfPair(
        memoryGame.pickedCards[0].getAttribute("data-card-name"),
        memoryGame.pickedCards[1].getAttribute("data-card-name")
      );

      if (check){
        const finish=memoryGame.checkIfFinished();
        if (finish){
          window.alert("Woooo-hoooooo!!!!! You won!👏👏👏👏👏👏👏👏");
          setTimeout(()=>{
            memoryGame.pairsClicked=0;
            pairsClicked.innerHTML=memoryGame.pairsClicked;

            memoryGame.pairsGuessed=0;
            pairsGuessed.innerHTML=memoryGame.pairsGuessed;

            document.querySelectorAll(".card").forEach((card) => {
              card.classList.remove("turned")
            })
          },1000)

        }

        pairsGuessed.innerHTML = memoryGame.pairsGuessed;
        memoryGame.pickedCards=[]

        isProcessing=false;


      }
      else {
        setTimeout(()=>{
          memoryGame.pickedCards[0].classList.remove("turned");
          memoryGame.pickedCards[1].classList.remove("turned");
          memoryGame.pickedCards= [];

          isProcessing=false;
        }, 1000);
      }
      }

      //console.log(`Card clicked: ${card}`);
    });
    
  });
  
});







