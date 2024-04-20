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

  memoryGame.shuffleCards();

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

    if (memoryGame.pairsGuessed === 12) { // it should be checked first before each click
      const youWonBox = document.createElement("div") // where is this div created?? 
      youWonBox.className = "you-won"
      const boxParagraph = document.createElement("p")
      boxParagraph.innerHTML = "You won!"
      youWonBox.appendChild(boxParagraph)
      document.body.appendChild(youWonBox)

      return  
    }

    else {

      if (memoryGame.pickedCards.length < 2){
        card.classList.add("turned")

        memoryGame.pickedCards.push(card) 
      }
     if (memoryGame.pickedCards.length === 2) {

        if (!memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])){ // here is sth wrong - in debbugger the two identical cards return value false
          
          /* memoryGame.pickedCards[0].classList.remove("turned");
          memoryGame.pickedCards[1].classList.remove("turned"); */
          const card1 = memoryGame.pickedCards[0]
          const card2 = memoryGame.pickedCards[1]
          setTimeout(() => {    //it doeasn't work on the first two cards, then starts working             
          card1.classList.remove("turned");
           card2.classList.remove("turned");
          }, 1000) 
        
        } 

        memoryGame.pickedCards = []
      } 
      
    }
})

    });


  })
  
      

   






