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

document.addEventListener("DOMContentLoaded", function(event) { 
  // memoryGame.shuffleCards()
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
    card.onclick = function(e) {
      // TODO: write some code here
      console.log('Card clicked: ', card);
      console.log(e);

      
      card.classList.toggle('back')
      card.classList.toggle('front')
      e.target.nextSibling.classList.toggle('front')
      e.target.nextSibling.classList.toggle('back')

      
      memoryGame.pickedCards.push(card)

      if (memoryGame.pickedCards.length === 2){

        if ( !memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])){
          
          console.log('cheguei');
          setTimeout(()=>{
            var pai = memoryGame.pickedCards[0].parentNode
            var pai2 = memoryGame.pickedCards[1].parentNode
  
            pai.childNodes.forEach((elem)=> {
              elem.classList.toggle('back')
              elem.classList.toggle('front')
            })
            
            pai2.childNodes.forEach((elem)=> {
              elem.classList.toggle('back')
              elem.classList.toggle('front')
            })
          }, 2000)

      
          

        }

      }

    };
  });
});


