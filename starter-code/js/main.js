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
      // TODO: write some code here
      
      console.log('Card clicked: ', card);
      const parent = card.parentNode
      const items = parent.querySelectorAll('div')
      items[0].classList.toggle('back')
      items[0].classList.toggle('front')
      items[1].classList.toggle('back')
      items[1].classList.toggle('front')

      const selected = memoryGame.pickedCards
      selected.push(card)

      setTimeout(()=>{
        if (selected.length === 2){
          
          if(memoryGame.checkIfPair(selected[0].getAttribute("name"), selected[1].getAttribute("name"))){
            document.querySelector('#pairs_guessed').innerHTML = memoryGame.pairsGuessed
            
            if(memoryGame.isFinished()){
              alert('Congratulations')
            }
          }else{
            selected.forEach(card =>{
              const cardSelelcted = card.parentNode
              const itemSelected = cardSelelcted.querySelectorAll('div')
              itemSelected[0].classList.toggle('back')
              itemSelected[0].classList.toggle('front')
              itemSelected[1].classList.toggle('back')
              itemSelected[1].classList.toggle('front')
            })
          }
          document.querySelector('#pairs_clicked').innerHTML = memoryGame.pairsClicked
          selected.splice(0,2)
        }
      },2000)
      
      
    };
  });
});


