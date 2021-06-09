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

// const formerCards = memoryGame.cards.map((card) => card.name).toString();
// memoryGame.shuffleCards(); //I thought .shuffledCards() had to have an argument
// const newCards = memoryGame.cards.map((card) => card.name).toString();
// console.log("HEEEEEEEEEEEEIIIIIIIIIII: ",formerCards === newCards);





// memoryGame.shuffleCards(memoryGame.cards)


function turnCardAndPlay(card){
  turnCard(card)
  const name = card.getAttribute("data-card-name")  
  memoryGame.pickedCards.push(name);

  if(memoryGame.pickedCards.length == 2){
    checkPair()
  }  
}

function turnCard(card){

  card.classList.toggle("turned")
  card.id = card.getAttribute("data-card-name") //for easier selection
  console.log(memoryGame.pickedCards)
}

function checkPair(){
  
    if(memoryGame.checkIfPair( memoryGame.pickedCards[0], memoryGame.pickedCards[1] )){
      console.log("Pana acum am ghicit ", memoryGame.pairsGuessed)
      refreshScore()
      eraseTracks( memoryGame.pickedCards[0], memoryGame.pickedCards[1] )

      if( memoryGame.checkIfFinished()){
        finish()
      }
    }else{
      setTimeout(hidePickedCards, 1000);
    }    

}

function finish(){
  const scorePanel = document.getElementById('score')
  scorePanel.classList.add('winner')

  const memoryBoard = document.getElementById('memory-board')
  memoryBoard.classList.add('winner')

  const winnerMessage = document.querySelector('h1')
  winnerMessage.classList.add('winner')
  winnerMessage.textContent = "You Won, You Buy!"
}

function eraseTracks(card1, card2){  
  let div1 = document.getElementById(card1)
  let div2 = document.getElementById(card2)
  div1.removeAttribute('id')
  div2.removeAttribute('id')
  memoryGame.pickedCards=[]

}

function hidePickedCards(){
  const card1 = document.getElementById(memoryGame.pickedCards[0])
  const card2 = document.getElementById(memoryGame.pickedCards[1])
  console.log(card1)
  console.log(card2)
  card1.classList.toggle("turned")
  card2.classList.toggle("turned")
  refreshScore()
  eraseTracks(memoryGame.pickedCards[0], memoryGame.pickedCards[1])

  console.log(card1)
  console.log(card2)
}

function refreshScore(){
  const pairsClickedInfo = document.getElementById('pairs-clicked')
  const pairsGuessedInfo = document.getElementById('pairs-guessed')
  pairsClickedInfo.textContent = memoryGame.pairsClicked
  pairsGuessedInfo.textContent = memoryGame.pairsGuessed
}

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}" >
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });


  document.querySelector('#memory-board').innerHTML = html;


  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      console.log(`Card clicked: ${card}`);
      turnCardAndPlay(card)
    });
  });


});