// import {memoryGame} from "./memory.js";

var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

var memoryGame = new MemoryGame(cards);
var cardsinMemory=[];
var modale = document.querySelector(".modal");


function gameFinished(){
  document.querySelector("active-modal").addEventListener("click",function(){
    activeModale.classList.remove ("active-modal");
    activeModale.classList.add ("modal");
    lunchGame();
  });
}

function lunchGame(){
  // shuffle the cards when we start over 
  memoryGame.shuffleCards();
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  const board = document.querySelector('#memory_board');
  if (!board) return;
  // Add all the div's to the HTML
  //----------------------------------
  console.log(document.querySelectorAll("*"))
  board.innerHTML = html;

  let selectedCard =[];
  const pairsClicked = document.getElementById("pairs_clicked");
  const pairsGuessed = document.getElementById("pairs_guessed");
  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach(function(card) {
    card.onclick = function() {
      selectedCard.push(card.parentNode.getAttribute('data-card-name'));
      const frontCard = card.parentNode.querySelector(".front");
      card.classList.toggle("back");
      card.classList.toggle("front");
      frontCard.classList.toggle("back");
      frontCard.classList.toggle("front");
      cardsinMemory.push(card, frontCard);
      if (selectedCard.length==2){
        console.log("selected cards");
        console.log(selectedCard);
        if (memoryGame.checkIfPair(selectedCard[0], selectedCard[1])==false){
          setTimeout(function(){
            console.log("cards in memory");  
            console.log(cardsinMemory);
            for (let i=0;i<cardsinMemory.length; i ++){
              cardsinMemory[i].classList.toggle("front");
              cardsinMemory[i].classList.toggle("back");
            }  
          },1500);
        } else {
          for (let i=0;i<cardsinMemory.length; i ++){
            cardsinMemory[i].classList.add("blocked");
          }
          if (memoryGame.isFinished()){
            gameFinished(); 
          }
        }
        console.log("on revide");
        setTimeout(function(){
          cardsinMemory=[];
          selectedCard = [];
          pairsClicked.innerHTML = memoryGame.pairsClicked;
          pairsGuessed.innerHTML = memoryGame.pairsGuessed;
        },1700);
      }
      console.log('Card clicked')
    }
  });
}

window.addEventListener("DOMContentLoaded", function(event) { 
  console.log(event);
  lunchGame();
  gameFinished();
});




