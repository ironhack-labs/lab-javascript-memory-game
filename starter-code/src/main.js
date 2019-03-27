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
var arr = [];



document.addEventListener("DOMContentLoaded", function(event) { 
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '<div class="back" name="'+ pic.img +'"></div>';
    html += '<div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Variables


  

  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach(function(card) {
    card.onclick = function() {
     card.className = "front"
     card.nextSibling.className = "back"
      // TODO: write some code here
    
      
      arr.push(card.parentElement);
    
      console.log(arr[0].getAttribute("data-card-name"));
      console.log(arr[1].getAttribute("data-card-name"))
      var card1 = (arr[0].getAttribute("data-card-name"));
      var card2 = (arr[1].getAttribute("data-card-name"));

      if(arr.length === 2) {
        
        if(memoryGame.checkIfPair(card1,card2)) {
          document.querySelector("#pairs_clicked").innerHTML = memoryGame.pairsClicked;

          console.log("array lleno")
         
          document.querySelector("#pairs_guessed").innerHTML = memoryGame.pairsGuessed;
          
        
          
        } else {
          document.querySelector("#pairs_clicked").innerHTML = memoryGame.pairsClicked;
          
          console.log("no coinciden")
          arr= [];
          console.log(arr)
        }
      }
    }
  });
});

