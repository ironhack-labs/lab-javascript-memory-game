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

const memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards();

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
      let parentCard = card.parentNode
      let front = parentCard.querySelector(".front")
      
      flipCard(card, front);  
      console.log('Card clicked: ', card);
      
      memoryGame.pickedCards.push(card)

      if (memoryGame.pickedCards.length === 2 ) {
        const isPair = memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute("name"),memoryGame.pickedCards[1].getAttribute("name"))

        if(!isPair){

          ifNotPair();
          
        }
        memoryGame.pickedCards.splice(0,2);

        document.getElementById("pairs_clicked").innerText = memoryGame.pairsClicked;
        document.getElementById("pairs_guessed").innerText = memoryGame.pairsGuessed;

        if(memoryGame.isFinished()){
          setTimeout(()=>{
            const newGame = confirm("Congratulations!! Would you like to play again?")
            
            if(newGame){
              window.location.reload()
            }

          },500);
        }

      }  
    
    };
  });

  function flipCard(cardBack, cardFront) {
    cardBack.classList.toggle("back")
    cardBack.classList.toggle("front")   
    cardFront.classList.toggle("back") 
    cardFront.classList.toggle("front") 
  }

  function delayedFlipCard(cardBack, cardFront) {
    setTimeout(function(){
        cardBack.classList.toggle("back")
        cardBack.classList.toggle("front")   
        cardFront.classList.toggle("back") 
        cardFront.classList.toggle("front") 
    },1500)
  }

  function ifNotPair(){
    const card1Father = memoryGame.pickedCards[0].parentNode;
    const card2Father = memoryGame.pickedCards[1].parentNode;
    const frontCard1 = card1Father.querySelector(".front");
    const backCard1 = card1Father.querySelector(".back");
    const frontCard2 = card2Father.querySelector(".front");
    const backCard2 = card2Father.querySelector(".back");
    
    //setTimeout((backcard1,frontCard1)=>flipCard(backcard1,frontCard1),2000);
    //setTimeout((backcard2,frontCard2)=>flipCard(backcard2,frontCard2),2000);
    delayedFlipCard(backCard1, frontCard1);
    delayedFlipCard(backCard2, frontCard2);
  }



});


