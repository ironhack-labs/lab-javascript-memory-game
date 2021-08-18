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

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', (event) => {
      // TODO: write some code here

      let pairsGuessedHTML = document.querySelector("#pairs-guessed")
      let pairsClickedHTML = document.querySelector("#pairs-clicked")
      
      //Condicional
      if(memoryGame.pickedCards.length < 2){
      //event.target.parentNode
      card.classList.toggle("turned")
      memoryGame.pickedCards.push(card)
      }
     

      if(memoryGame.pickedCards.length === 2){
        card.classList.add("turned")
        memoryGame.pickedCards.push(card)

        let element1 = memoryGame.pickedCards[0]
        let element2 = memoryGame.pickedCards[1]

        let name1 = element1.getAttribute("data-card-name")
        let name2 = element2.getAttribute("data-card-name")
              
        const esParIgual= memoryGame.checkIfPair(name1,name2)
        pairsClickedHTML.textContent = memoryGame.pairsClicked
        
        let finishedGame = memoryGame.checkIfFinished()

        //if(finishedGame)alert("YOU WIN!")
          
          if(esParIgual === true){
            pairsGuessedHTML.textContent = memoryGame.pairsGuessed

            memoryGame.pickedCards = []
            
          }else{
           setTimeout( () => {element1.classList.remove("turned");element2.classList.remove("turned")}, 1000)
            memoryGame.pickedCards = []
          }
          if(finishedGame)alert("YOU WIN!")
        }      
      console.log(memoryGame.pairsGuessed)
      
    

      });

  
})

})
