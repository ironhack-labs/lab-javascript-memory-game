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
      const frontCard=cardNode.querySelector(".front")
      const backCard=cardNode.querySelector(".back")
      
      frontCard.classList.remove("front")
      frontCard.classList.toggle("back")
      backCard.classList.remove("back")
      backCard.classList.toggle("front")

                
        
        setTimeout(() => {
          frontCard.classList.remove("back")
          frontCard.classList.toggle("front")
          backCard.classList.remove("front")
          backCard.classList.toggle("back")    
               
          debugger
          console.log(`card1${card1}, card2${card2}`)  
          }, 2000);
    
      

      memoryGame.checkIfPair(card1,card2)



          
      
      

      //console.log(cardNode)
      //console.log(frontCard)
      //console.log(backCard)
      
       

      
      
      console.log('Card clicked: ', card);
    };
  });
});


