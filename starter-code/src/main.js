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
  var html = '';
  memoryGame.shuffleCards()
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.card').click(function () {
   
  //turn the card
    $.each($(this).children(),function(idx, value){
      $(value).toggleClass('back')
      $(value).toggleClass('front')
    })
    
    //push object with name and div card turned
    memoryGame.pickedCards.push({name:$(this).children(":first").attr("name"), div:$(this)})
    
    //2 cards picked
    if(memoryGame.pickedCards.length===2){
      
      
      
     //pair guessed
     if(memoryGame.checkIfPair(memoryGame.pickedCards[0].name,memoryGame.pickedCards[1].name)){
       
       
       

       $("#pairs_guessed").text(""+memoryGame.pairsGuessed)
       $("#pairs_clicked").text(""+memoryGame.pairsClicked)
       if(memoryGame.isFinished()){alert("YOU WIN")}
       memoryGame.pickedCards=[]
       
     } 
     else
     //if NOT pair guessed
     {$("#pairs_clicked").text(""+memoryGame.pairsClicked)
       var that = memoryGame.pickedCards
      timerid = setTimeout(() => {
        
        
        
        
        $.each(that[0].div.children(),function(idx, value){
          $(value).toggleClass('front')
          $(value).toggleClass('back')
          
        })
        
        
        $.each(that[1].div.children(),function(idx, value){
          $(value).toggleClass('front')
          $(value).toggleClass('back')
          
        })
      }, 300);
   
      memoryGame.pickedCards=[]


      
     
     }
    }
    
  });


  
});




