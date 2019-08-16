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

memoryGame.shuffleCards()

document.addEventListener("DOMContentLoaded", function(event) { 
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;
  
  let oneTwo = []
  
  document.querySelectorAll('.back').forEach(function (card) {
    card.onclick = function() {

      let name = card.parentNode.getAttribute('data-card-name')
      let front = card.parentNode.querySelector('.front')
        card.classList.toggle("front")
        card.classList.toggle("back")
        front.classList.toggle("back")
        front.classList.toggle("front")

      if (oneTwo.length == 0){
        
        oneTwo[0]=name;
      }
      
      else if (oneTwo.length == 1){
        let front = card.parentNode.querySelector('.front')
        card.classList.toggle("front")
        card.classList.toggle("back")
        front.classList.toggle("back")
        front.classList.toggle("front")
        oneTwo[1] = name;
        check(card,front);

      }
      console.log(oneTwo)

  
    }});
  

  function check(card,front){

    if (memoryGame.checkIfPair(oneTwo[0],oneTwo[1]) == true){
          
      console.log("It's a pair")
      console.log(`${memoryGame.pairsGuessed} pairs guessed!`)
      
    }
    card.classList.toggle("front")
    card.classList.toggle("back")
    front.classList.toggle("back")
    front.classList.toggle("front")
        
  }
  

});
      


      
      

