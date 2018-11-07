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
  var countClicks = 0
  var elemento, elemento2
  var memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCards()
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
  
    $('.card').click(function () {  
      // TODO: write some code here	  
      

      if(countClicks === 3){
        countClicks = 0    
      elementoCompleto.children()
        .first()
        .toggleClass('back')
        .toggleClass('front'); 
      elementoCompleto.children(':nth-child(2)')
        .toggleClass('back')
        .toggleClass('front');
      elementoCompleto2.children()
        .first()
        .toggleClass('back')
        .toggleClass('front'); 
      elementoCompleto2.children(':nth-child(2)')
        .toggleClass('back')
        .toggleClass('front');
      
      }
      
      $(this)
        .children()
        .first()
        .toggleClass('back')
        .toggleClass('front'); 
        
      
      $(this)
        .children(':nth-child(2)')
        .toggleClass('back')
        .toggleClass('front');
        
        
        countClicks ++

        if(countClicks === 1){
          elementoCompleto = $(this)
          elemento = $(this).attr("data-card-name")  
        }

        if(countClicks === 2){
          countClicks = 3
          elementoCompleto2 = $(this)
          elemento2 = $(this).attr("data-card-name")
          console.log(elemento,elemento2)
          if(memoryGame.checkIfPair(elemento,elemento2)){
            elementoCompleto.remove()
            elementoCompleto2.remove()
          } 
          
        }

        $("#pairs_clicked").text(memoryGame.pairsClicked)  
        $("#pairs_guessed").text(memoryGame.pairsGuessed)  

        if(memoryGame.isFinished()){
          alert("YA GANASTE :D")
          location.reload()
        }
    
  }
  

  )

});


