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
// memoryGame.shuffleCards();

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

      //memoryGame.pickedClicked = 0; 
      if(memoryGame.pickedCards.length<2){
        card.classList.add('turned');
        memoryGame.pickedCards.push(card);
      }
      let card1 = memoryGame.pickedCards[0].attributes[1].value;
      let card2 = memoryGame.pickedCards[1].attributes[1].value;
      let score = document.getElementsByTagName('h2')
       
      console.log(document.getElementsByTagName('h2'))
      if(memoryGame.checkIfPair(card1, card2) === true && memoryGame.pickedCards.length ===2){
          setTimeout(() => { 
          memoryGame.pickedCards = [];   
          document.getElementById('pairs-guessed').innerText = memoryGame.pairsGuessed/2;
          
          }, 1000);
      document.getElementById('pairs-clicked').innerText = memoryGame.pairsClicked/2;    
      }
      if(memoryGame.checkIfPair(card1, card2) === false && memoryGame.pickedCards.length ===2 ){
          setTimeout(() => { 
          memoryGame.pickedCards[0].classList.remove('turned');
          memoryGame.pickedCards[1].classList.remove('turned');
          memoryGame.pickedCards = [];  
          }, 2000); 
      document.getElementById('pairs-clicked').innerText = memoryGame.pairsClicked/2;    
      }
     
      console.log(memoryGame.pairsGuessed)
      console.log(document.querySelectorAll('.card').length)
      
      if (memoryGame.checkIfFinished()){
        console.log(score.innerText)
      score[0].innerText =  'YOU WON';
      }

      //memoryGame.pickedCards.push(card);
     
      
     
      // TODO: write some code here
      
    });
  });
});




// console.log(card1)
// console.log(card2)
// console.log(memoryGame.pickedCards.length)
// console.log(memoryGame.checkIfPair(card1,card2))
// if(memoryGame.pickedCards.length === 2 && memoryGame.checkIfPair(card1, card2) === true){
// memoryGame.pairsGuessed +=1;
// memoryGame.pickedCards = [];
// }
// if(memoryGame.pickedCards.length === 2 && memoryGame.checkIfPair(card1, card2) === false){
// card.classList.remove('turned');
// memoryGame.pickedCards = [];
// console.log('hi i am the second if')
// }
