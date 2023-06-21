const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);

window.addEventListener("load", () => {
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
    memoryGame.shuffleCards();
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;
  
  
  let pairsGuess = document.getElementById("pairs-guessed");
  let pairsClick = document.getElementById("pairs-clicked");
  let pGuess = 0;
  let pClick = 0;
  

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      // TODO: write some code here
      
      card.classList.toggle('turned');
     
      memoryGame.pickedCards.push(card);
  
      if ( memoryGame.pickedCards.length === 2 ) {
        let firstCard = memoryGame.pickedCards[0];
        let secondCard = memoryGame.pickedCards[1];
        let firstCardName = firstCard.getAttribute('data-card-name');
        let secondCardName = secondCard.getAttribute('data-card-name')
        pClick++
        pairsClick.innerText = pClick
        
        let result = memoryGame.checkIfPair( firstCardName, secondCardName );
  
        if( result ) {
          firstCard.classList.add("blocked");
          secondCard.classList.add("blocked");
          pGuess++
          pairsGuess.innerText = pGuess

          setTimeout(() => {
          
          if (memoryGame.checkIfFinished() ) {
            alert('You win!');
            
          }
        }, 1000);

        } else {
          
          setTimeout( () => {
            firstCard.classList.remove("turned");
            secondCard.classList.remove("turned");
          }, 1000);
        }
        
        memoryGame.pickedCards = [];
        
        
      }
    })
  })
})
