//const comparingArr = []
let selected = document.getElementsByClassName("selected")
let div = document.getElementsByTagName("div")

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
  //first shuffle of the cards
  memoryGame.shuffleCards()

document.addEventListener("DOMContentLoaded", function(event) { 
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
    console.log("clicked on doc")
  });
  //memoryGame.shuffleCards()
  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;
    
  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach(function(card, i) {
    card.onclick = function(e) {
     
      // TODO: write some code here
      // back and front of the card event selectors
      let front = e.currentTarget.parentElement.children[1]
      let back = e.currentTarget.parentElement.children[0]
      // fliping of the card
      back.classList.toggle("back")
      front.classList.toggle("front")
      back.classList.toggle("front")
      front.classList.toggle("back")
      // add identificator
      back.classList.add("selected");
      front.classList.add("selected")
      // saving the clicks to the global scope array for comparing
      if(memoryGame.pairsClicked < 2){
        memoryGame.pickedCards.push(front.outerHTML)
      }
      //all cards go back to flipped and reset pairs clicked
      if(memoryGame.pairsClicked === 2){
       //check if cards are equal 
        if(memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]) === true){
          memoryGame.pairsGuessed += 2
          memoryGame.pickedCards = []
          memoryGame.pairsClicked = 0
        }
        else{
          for(i=0; i<selected.length; i++){
            selected[i].classList.toggle("front")
            selected[i].classList.toggle("back")
          }
          for(i=0; i<div.length; i++){
            div[i].classList.remove("selected")
          }
          memoryGame.pairsClicked = -1
          memoryGame.pickedCards = []
        }

      }
    
      

      //console.log('selected class' + document.getElementsByClassName("selected"))
      // logic for comparing the elements in array
      memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])
     
      
      console.log(e.target.parentElement.children[1])
      console.log('Card clicked')
     

      
    }
  });
});


