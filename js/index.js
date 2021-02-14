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

window.addEventListener('load', event => {
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
 
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click',() => {

      if (memoryGame.pickedCards.length < 2 && card.classList.contains("turned") === false){
            card.classList.add("turned");
            let cardName = card.getAttribute("data-card-name");
            memoryGame.pickedCards.push(cardName);
            
          if (memoryGame.pickedCards.length === 2){
            if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) { 
              let pickedC = document.querySelectorAll(`[data-card-name="${cardName}"]`);
              pickedC.forEach(card => card.classList.add("blocked"));
              memoryGame.pickedCards = [];

                if (memoryGame.isFinished()){
                  window.alert("You won!!!");
                }
            } else {
              let cardT = document.querySelectorAll(".turned:not(.blocked)");
              cardT.forEach(card => card.classList.remove("turned"))
              memoryGame.pickedCards = [];

            }
          }

      } else if (card.classList.contains("turned") === true ) {
            card.classList.remove("turned");
          
      };
        
    console.log(`Card clicked: ${card}`);


    });
  }); 
}); 
