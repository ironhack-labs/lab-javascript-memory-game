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

let memoryGame = new MemoryGame(cards);
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

  let waitCardTurn = false;
  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach( card => {
    card.onclick = function() {
      // TODO: write some code here
      //turn card
   
      if(waitCardTurn) continue;
      for(let i=0; i<2;i++){
        card.parentNode.children[i].classList.toggle('front')
        card.parentNode.children[i].classList.toggle('back')
      }
      // add card
      memoryGame.pickedCards.push(card.attributes.name.value);
      if(memoryGame.pickedCards.length === 2){
        if(memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])){
          memoryGame.pickedCards = [];
          document.querySelector("#pairs_guessed").innerHTML = memoryGame.pairsGuessed;
          waitCardTurn = false;
         // memoryGame.pickedCards.forEach(e=> e.parentNode.removeClass("card"))
        }else{
          memoryGame.pickedCards.forEach(e=>{
            setTimeout(function () {
              const wrongCard = document.querySelector('.card .front[name="'+e+'"]');
              for(let i=0; i<2;i++){
                wrongCard.parentNode.children[i].classList.toggle('front')
                wrongCard.parentNode.children[i].classList.toggle('back')
              }
              waitCardTurn = false;
            }, 500);
            memoryGame.pickedCards = [];
          } );
        }

        document.querySelector("#pairs_clicked").innerHTML = memoryGame.pairsClicked;
      }


      console.log('Card clicked: ', card);
    };
  });
});


