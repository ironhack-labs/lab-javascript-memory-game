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
  let html = '';
  memoryGame.shuffleCards().forEach(pic => { // se baraja con sufflecards()
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
      
      const cardNode= card.parentNode
      const items = cardNode.querySelectorAll('div')
      items[0].classList.toggle('back')
      items[0].classList.toggle('front')
      items[1].classList.toggle('back')
      items[1].classList.toggle('front')
      
      
      const checkCard = memoryGame.pickedCards
      checkCard.push(card)

        setTimeout(() => {
          if(checkCard.length===2){
            if(memoryGame.checkIfPair(checkCard[0].getAttribute("name"),checkCard[1].getAttribute("name"))){
              document.querySelector('#pairs_guessed').innerHTML = memoryGame.pairsGuessed
              if(memoryGame.isFinished()){
                alert('Congratulations')
              }
            
          
          }else{
            checkCard.forEach(card =>{
              const cardSelelcted = card.parentNode
              const itemSelected = cardSelelcted.querySelectorAll('div')
              itemSelected[0].classList.toggle('back')
              itemSelected[0].classList.toggle('front')
              itemSelected[1].classList.toggle('back')
              itemSelected[1].classList.toggle('front')
            })
          }
            document.querySelector('#pairs_clicked').innerHTML = memoryGame.pairsClicked
            checkCard.splice(0,2)
          
          }   
               
          
          }, 1000);
    };
  });
});


