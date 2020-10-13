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
  { name: 'thor', img: 'thor.jpg' },
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
  pairsGuessedHTML = document.querySelector('#pairs-guessed')
  pairsClickedHTML = document.querySelector('#pairs-clicked')
  


  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      if(memoryGame.pickedCards.length<2){
        card.querySelectorAll('.card > div').forEach((div) => {
          div.classList.toggle('front')
          div.classList.toggle('back')
        });
        memoryGame.pickedCards.push(card)
        if(memoryGame.pickedCards.length==2){
          if(memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute('data-card-name'),memoryGame.pickedCards[1].getAttribute('data-card-name'))){
            console.log('successful match')
            pairsGuessedHTML.textContent = memoryGame.pairsGuessed
            pairsClickedHTML.textContent = memoryGame.pairsClicked
            if(memoryGame.isFinished() === true ){
              alert("You've won the game!")
              setTimeout(function(){
                document.querySelectorAll('.card > div').forEach(div=>{
                  div.classList.toggle('front')
                  div.classList.toggle('back')
                })
                memoryGame.pairsGuessed = 0
                memoryGame.pairsClicked = 0
                pairsGuessedHTML.textContent = 0
                pairsClickedHTML.textContent = 0
              },1000)
              
            }
            memoryGame.pickedCards = [];
          }else{
            console.log('unsuccessful match')
            pairsClickedHTML.textContent = memoryGame.pairsClicked
            setTimeout(function(){
              memoryGame.pickedCards.forEach(card => {
                card.querySelectorAll('.card > div').forEach(div =>{
                  div.classList.toggle('front')
                  div.classList.toggle('back')
                })
              });
              memoryGame.pickedCards = [];
            },1000)
          }
        }
      }
    })
  })
})