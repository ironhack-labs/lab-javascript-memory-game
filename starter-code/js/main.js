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
  memoryGame.shuffleCards();
  let html = "";
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory_board").innerHTML = html;
  
  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach(card => {
    
    card.addEventListener("click", () => {
      console.log(memoryGame.pickedCards.length)
      if(memoryGame.pickedCards.length>2){
        
        memoryGame.pickedCards = [];
        
       }
      
      memoryGame.pickedCards.push(card);
      card.classList.toggle("turned");
      if(memoryGame.pickedCards.length>2){
        
        memoryGame.pickedCards = [];
        
       }

      if(memoryGame.pickedCards.length===2){
        
        if(memoryGame.checkIfPair(memoryGame.pickedCards[0].attributes[1].value, memoryGame.pickedCards[1].attributes[1].value)){
          memoryGame.pickedCards = [];
          
        } else {
          const body = document.querySelector('body');
          const blockCards = document.createElement('div');
          body.appendChild(blockCards);
          blockCards.setAttribute('class', 'block-field')
          setTimeout(() => {
            memoryGame.pickedCards[0].classList.toggle("turned");
            memoryGame.pickedCards[1].classList.toggle("turned"); 
            memoryGame.pickedCards = [];
            blockCards.remove();
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
