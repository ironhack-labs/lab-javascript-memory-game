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


document.addEventListener("DOMContentLoaded", function(event) { 
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-name="'+ pic.name +'">';
    html += '  <div class="card-front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '  <div class="card-back"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function

  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

 const cards= document.querySelectorAll('.card').forEach(function(card) {

    card.onclick = function flipCard() {
      if(lockBoard)return;
      if(this === firstCard) return;

      this.classList.add('flip');
      
      if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

      } else{
        
        secondCard = this;
        
        checkForMatch();
        //console.log('function was executed');
      }
      
      function checkForMatch(){
        let isMatch = firstCard.dataset.name === secondCard.dataset.name;
         isMatch ?  disableCards() : unflipCards();
        }
      

      function disableCards(){
        
        firstCard.removeEventListener('click', flipCard);
        firstCard.removeEventListener("click", flipCard);

        resetBorad();
      }

      function unflipCards(){
        lockBoard= true;

        setTimeout(()=>{
          firstCard.classList.remove('flip');
          secondCard.classList.remove('flip');
          
         resetBorad();
        }, 1500);
        
      }

      function resetBorad(){
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null]
      }

      (function shuffle(){
        cards.forEach(card =>{
          let randomPos = Math.floor(Math.random()* 24);
          card.style.order = randomPos;
        });
      })();
    }
  });
});



