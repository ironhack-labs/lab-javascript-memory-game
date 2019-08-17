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

memoryGame.shuffleCards(cards)

document.addEventListener("DOMContentLoaded", function(event) { 
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div  class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach(function(card) {
    card.onclick = function(e) {
    console.log('Card clicked')
    let cardBack = e.target;
    let cardName = cardBack.parentNode;

      cardBack.classList.toggle("front")
      cardBack.nextElementSibling.classList.toggle("front");
      cardBack.classList.toggle("back")
      cardBack.nextElementSibling.classList.toggle("back");
      memoryGame.pickedCards.push(cardName);
      console.log(memoryGame.pickedCards)

      if(memoryGame.pickedCards.length===2){
        let pairOfCards = memoryGame.checkIfPair(memoryGame.pickedCards[0].innerHTML, memoryGame.pickedCards[1].innerHTML);
        // cardName.childrenNode.classList.add("blocked")
        if(pairOfCards === true){
          memoryGame.pickedCards.forEach((card)=>{
            card.lastChild.classList.add("blocked");
          })
          document.querySelector("h2").nextElementSibling.nextElementSibling.innerHTML = `Pairs Guessed: ${memoryGame.pairsGuessed}`;
          memoryGame.pickedCards.splice(0,2)
        }
        document.querySelector("h2").nextElementSibling.innerHTML = `Pairs Clicked: ${memoryGame.pairsClicked}`;
        let finishGame = memoryGame.isFinished()
        if(finishGame === true){
          window.alert(`You finish the game!`)
          document.location.reload(true)
        }
      }
    }
  });
  
  document.querySelectorAll('.card :last-child').forEach(function(card) {
    card.onclick = function(e) {
    console.log('Card returned')
    let cardFront = e.target;
  
    cardFront.classList.toggle("back");
    cardFront.previousElementSibling.classList.toggle("front")
    cardFront.classList.toggle("front");
    cardFront.previousElementSibling.classList.toggle("back");
    memoryGame.pickedCards.pop();
    console.log(memoryGame.pickedCards)
  }

  });

  // function play(){
  //   if(memoryGame.pickedCards.length===2){
  //     let pairOfCards = memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])
  //   }
  // }


      // let cardspicked = document.querySelectorAll(".card :first-child(.front)").forEach(function(card){
      // if(cardspicked.length > 2){
      //   document.querySelectorAll(".back").forEach(function(card){
      //     card.onclick=function(e){
      //       let cardBlocked = e.target;
      //       cardBlocked.classList.add("blocked");
      //     };
      //   });
      // }
      // });
    
  });

