let cards = [
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
// console.log(memoryGame.cards)
// memoryGame.shuffleCards();
// console.log(memoryGame.cards)





document.addEventListener("DOMContentLoaded", function(event) {
  let html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // let cardsFlipped = [];
  let pairsClicked = $('#pairs_clicked');
  let pairsGuessed = $('#pairs_guessed');

    //flip a card
    $('.card').click( function(){
      //flips the car when it's clicked
      $(this).children(":first").toggleClass("back front");
      $(this).children(":nth-child(2)").toggleClass("front back");
      
      //adds the card to the list of picked cards
      memoryGame.pickedCards.push($(this));
      console.log(memoryGame.pickedCards)

      setTimeout(function(){
        //stores each one of the selected cards in a variable
        let card1 = memoryGame.pickedCards[0];
        console.log(card1)
        let card2 = memoryGame.pairsClicked[1];
        //.children(":first").attr("name")
        console.log(card2)
        
        if(memoryGame.pickedCards.length === 2){
          console.log(memoryGame.pickedCards.length)
          //compairs to cards to see if they match
          let pair = memoryGame.checkIfPair(card1,card2)
          if(pair){
            memoryGame.pickedCards.forEach((card, index) => {
                $(memoryGame.pickedCards[index]).children(":first").toggle()
              })  
        } else if(!pair) {
            memoryGame.pickedCards.forEach(card => {
              $(card).children(":first").toggleClass("back front");
              $(card).children(":nth-child(2)").toggleClass("front back"); 
            })
          }
    
        }   
    }, 1000)
    

    if(memoryGame.isFinished()){
      alert("Game Over. All the cards have been matched!")
    }
   
  })
 
});

