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

memoryGame.shuffleCards(cards)

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
    card.addEventListener('click', () => {
      
    
      card.classList.add("turned")

      //memoryGame.pickedCards.push(card.dataset.cardName)
      memoryGame.pickedCards.push(card)



      if (memoryGame.pickedCards.length === 2) { 

        let nameCard1 = memoryGame.pickedCards[0].dataset.cardName
        let nameCard2 = memoryGame.pickedCards[1].dataset.cardName

        const result = memoryGame.checkIfPair(nameCard1,nameCard2)
        //console.log(result)
        if (!result) {

          memoryGame.pickedCards.forEach((eachCard) => {
          
            
            setTimeout(() => {
              eachCard.classList.remove("turned")
            }, 1000)
            
            

          })
          document.querySelector('#pairs-clicked').textContent =  memoryGame.pairsClicked
          memoryGame.pickedCards.length = 0
          //console.log(document.querySelector('#pairs-guessed'))
          

        } else {
          memoryGame.pickedCards.length = 0
        
          

        document.querySelector('#pairs-guessed').textContent = memoryGame.pairsGuessed
        
          if (memoryGame.checkIfFinished()) {

            alert('YOU WON!!!')


             setTimeout(() => {
              document.querySelectorAll('.card').forEach((card) => {
                card.classList.remove("turned")
                

            

             }) 
             }, 2000)
           
           }
        memoryGame.shuffleCards(cards)
        }
      }


      //console.log(`Card clicked: ${card}`);
    });
  });
});

