const cards = [
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

//Cards are being suffled and positioned randomly

const memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards()

document.addEventListener("DOMContentLoaded", function(event) { 
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach( card => {
    card.onclick = function() {
      checkingPairs(card) 
      flip(card)
      
      clickScore.innerText = memoryGame.pairsClicked
      guessedScore.innerText = memoryGame.pairsGuessed




      console.log('Card clicked: ', card);
    };
  });
});

// The following function will flip the following card changing its native class
const clickScore = document.querySelector("#pairs_clicked")
const guessedScore = document.querySelector("#pairs_guessed")
function flip(card){
  
  const parentCard = card.parentElement
  
  let hiddenCard = parentCard.querySelector(".front")
  hiddenCard.removeAttribute("class")
  hiddenCard.setAttribute("class", "back")
  card.removeAttribute("class")
  card.setAttribute("class", "front")
  
  
  

}


// The following function will flip the card once again to hide it

function hide(card){

  const parentCard = card.parentElement
  let shownCard = parentCard.querySelector(".back")
  shownCard.removeAttribute("class")
  shownCard.setAttribute("class", "front")
  card.removeAttribute("class")
  card.setAttribute("class", "back")
}



// Checking if cards are equal and execute a hide function if they are not. 




function checkingPairs(card){

  memoryGame.pickedCards.push(card)

  if (memoryGame.pickedCards.length === 2){
    if (memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute("name"), memoryGame.pickedCards[1].getAttribute("name"))){
      
        memoryGame.pickedCards.splice(0, 2)
            
      }
      
    }
    if (memoryGame.isFinished()){
      
      setTimeout(() => {
        window.location.reload()
      }, 300)
    }

    
    else {

      setTimeout(() => {

        hide(memoryGame.pickedCards[0])
        hide(memoryGame.pickedCards[1])
        memoryGame.pickedCards.splice(0, 2)
      },800)
      
      
      
    }
    
    
    
  }