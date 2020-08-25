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

const memoryGame = new MemoryGame(cards)

window.addEventListener('load', event => {
  let html = ''
  memoryGame.shuffleCards(cards).forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`
    html += `<div class="back" name="${pic.img}"></div>`
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`
    html += `</div>`
  })

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      //console.log(`Card clicked: ${card}`)


      // Add class to the card when clicked
      card.classList.toggle('turned')
      
      // Add the card in the array of picked cards
      memoryGame.pickedCards.push(card)
      //console.log(memoryGame.pickedCards)

      // When click on two cards
      if (memoryGame.pickedCards.length === 2) {

       //Update pairs clicked --> ARREGLAR PORQUE NO CUENTA EL PRIMER PAR
       document.querySelector("#pairs-clicked").innerText = memoryGame.pairsClicked

        const firstCardClicked = memoryGame.pickedCards[0].getAttribute('data-card-name')
        const secondCardClicked = memoryGame.pickedCards[1].getAttribute('data-card-name')
        
        
        if (memoryGame.checkIfPair(firstCardClicked, secondCardClicked)) {
          
          // Update pairs guessed
         
          document.querySelector('#pairs-guessed').innerText = memoryGame.pairsGuessed
          
          // Empty the array to compare the next two clicked cards
          memoryGame.pickedCards = []
        
        } else {

          // Remove the class to flip the cards again

          // setTimeout(function() {
          //   memoryGame.pickedCards.forEach(function(element) {
          //     element.classList.toggle('turned')
              
          //     memoryGame.pickedCards = []
          //   })
          // }, 600)
          

          setTimeout(() => {
            memoryGame.pickedCards.forEach(element => element.classList.toggle('turned'))
            
            // Empty the array
            
            memoryGame.pickedCards = []
          }, 600)
          //console.log(memoryGame.pickedCards)
        }
        
        // Alert finish
        if (memoryGame.isFinished()) {
            alert('You won but I am exhausted!!! Start again!!!')
        }
      }  
    })  
    
  })
    
  
    
})
