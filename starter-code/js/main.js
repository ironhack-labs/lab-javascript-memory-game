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
  { name: "thor", img: "thor.jpg" }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener("load", event => {
  let html = "";
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory_board").innerHTML = html;
  let clickedCards = [];
  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach(card => {
    
    card.addEventListener("click", () => {
      
      clickedCards.push(card)
      card.classList.toggle("turned");
      console.log(clickedCards)
      if(clickedCards.length===2){
        
        if(memoryGame.checkIfPair(clickedCards[0].attributes[1].value,clickedCards[1].attributes[1].value)){
          clickedCards = [];
          
        } else {const timeoutId = setTimeout(() => {
                clickedCards[0].classList.toggle("turned");
                clickedCards[1].classList.toggle("turned"); 
                clickedCards = [];
                console.log('1 seconds delay');
                }, 1000);
                            
                
                }
      
        
      }
      
      let pairsClicked = document.querySelector('#pairs_clicked');
      let pairsGuessed = document.querySelector('#pairs_guessed');

      pairsClicked.innerText = memoryGame.pairsClicked;
      pairsGuessed.innerText = memoryGame.pairsGuessed;

      

      
      if (memoryGame.isFinished()){
        console.log('You won!');
      }
    });
  });
});
