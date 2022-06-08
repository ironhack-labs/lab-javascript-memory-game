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

function removeCards(){
  const cards = document.querySelectorAll(".card");
  cards.forEach(card=>{
    card.remove();
  });
}

function setCards(){
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

}

window.addEventListener('load', (event) => {
  memoryGame.shuffleCards();
  
  setCards();
  bindCards();
  function updateInfo (){
    const pairsClicked = document.querySelector("#pairs-clicked");
    const pairsGuessed = document.querySelector("#pairs-guessed");
    pairsGuessed.innerText = memoryGame.pairsGuessed;
    pairsClicked.innerText = memoryGame.pairsClicked;
  }

  function checkWin(){
    if(memoryGame.checkIfFinished()){
      const cards = document.querySelectorAll(".card");

      setTimeout(()=>{
        cards.forEach(card=>{
          card.classList.remove("turned");          
        })
        
        
        memoryGame.pickedCards = [];

        alert(`YOU WON WITH ${memoryGame.pairsClicked - memoryGame.pairsGuessed} MISSES :D`);

        memoryGame.pairsClicked = 0;
        memoryGame.pairsGuessed = 0;
        memoryGame.upsideCard = 0;

        
        
        setTimeout(()=>{
          removeCards();
          memoryGame.shuffleCards();
          setCards();
          bindCards();
          updateInfo();
        },1000);
        
      },500);
    }
  }
  function bindCards(){
    // Bind the click event of each element to a function
    document.querySelectorAll('.card').forEach((card) => {
      card.addEventListener('click', () => {
        // TODO: write some code here

        console.log(memoryGame.pairsClicked);

        if (!card.className.includes("turned")) {
          card.classList.add("turned");

          if (memoryGame.upsideCard === 1) {

            memoryGame.upsideCard = 0;
            const wasPair = memoryGame.checkIfPair(memoryGame.pickedCards[0], card.dataset.cardName);
            //const wasPair = memoryGame.pickedCards[0] == card.dataset.cardName;

            if (wasPair) {
              //memoryGame.pairsGuessed++;
            } else {
              const unturnedCard1 = document.querySelector(`.turned[data-card-name='${card.dataset.cardName}']`);
              const unturnedCard2 = document.querySelector(`.turned[data-card-name='${memoryGame.pickedCards[0]}']`);
              memoryGame.pickedCards.shift();


              setTimeout(() => {
                unturnedCard1.classList.remove("turned");
                unturnedCard2.classList.remove("turned");
              }, 500);



            }

          } else if (memoryGame.upsideCard === 0) {
            memoryGame.pickedCards.unshift(card.dataset.cardName);
            memoryGame.upsideCard++;
          }

          updateInfo();
          checkWin();
        }


      });
    });
  }
  
});
// nodo.onClick(setTimout(console.log("popino"), 5000))
// nodo.onClick(()=>setTimout(console.log("popino"),5000))