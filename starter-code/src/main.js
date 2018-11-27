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

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCards(cards);
 // console.log(memoryGame);
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });
 

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.back').click(function () {
     const newCardPicked = this; 
     console.log(newCardPicked);
     const nameofImage = $(newCardPicked).attr("name");
     console.log("imagen",nameofImage);
     
     //add class block to clicked elements
     $(newCardPicked).addClass("blocked");
     //add class "justclicked" to clicked
     $(newCardPicked).addClass("justClicked");
     //change background of clickedcard using css method
     $(newCardPicked).css("background" , "url(img/" + nameofImage + ")");
     memoryGame.pickedCards.push(nameofImage) ;
   
    if(memoryGame.pickedCards.length === 2)
    {
      const firstCard= memoryGame.pickedCards[0];
      const secondCard= memoryGame.pickedCards[1];
      memoryGame.checkIfPair(firstCard, secondCard);
      
      /*if (validation){
        console.log("igual");
      }else {
        console.log("differnete");
        $(newCardPicked).css("backgroundColor" , "green");
        
      } */
    }

  
  });
});


