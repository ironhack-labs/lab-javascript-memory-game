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
memoryGame.shuffleCards()
console.log(cards)

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

      if(memoryGame.pickedCards.length<2){
        memoryGame.pickedCards.push(card)
        card.classList.toggle("turned")
      }
      if(memoryGame.pickedCards.length===2){
      document.getElementById('pairs-clicked').innerText= memoryGame.pairsClicked+=1
      const card1= memoryGame.pickedCards[0]
      const card2= memoryGame.pickedCards[1]
      const card1dataName= card1.getAttribute("data-card-name")
      const card2dataName= card2.getAttribute("data-card-name")
      memoryGame.checkIfPair(card1dataName,card2dataName)
      if(card1dataName===card2dataName){
        document.getElementById('pairs-guessed').innerText=memoryGame.pairsGuessed+=1
        card1.classList.toggle("blocked")
        card2.classList.toggle("blocked")
        
      } 
      if(card1dataName!==card2dataName) {
        setTimeout(()=>{
          card1.classList.toggle("turned")
          card2.classList.toggle("turned")
        },1000)
      }
    }
      memoryGame.checkIfFinished()

      console.log(`Card clicked: ${card}`);
    });
  });
});



