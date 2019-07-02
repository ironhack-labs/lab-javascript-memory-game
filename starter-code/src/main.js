var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' , flipped:false },
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
memoryGame.shuffleCards();

  $('.back').click (
    function(){
      let picture = $(this).siblings();
      picture.removeClass("front");
      picture.addClass("back");
      $(this).removeClass("back")
      $(this).addClass("front")
  
      memoryGame.pickedCards.push($(this).attr("name"))
       if(memoryGame.pickedCards.length == 2){
         if(!memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])){
          let picture1= $('[name="'+memoryGame.pickedCards[0]+'"].front').siblings();
          let picture2=$('[name="'+memoryGame.pickedCards[0]+'"].front');
          let picture3= $('[name="'+memoryGame.pickedCards[1]+'"].front').siblings();
          let picture4=$('[name="'+memoryGame.pickedCards[1]+'"].front');
        
          setTimeout(function(){
             picture1.removeClass("back")
             picture1.addClass("front")
             picture2.addClass("back")
             picture2.removeClass("front")
             picture3.removeClass("back")
             picture3.addClass("front")
             picture4.addClass("back")
             picture4.removeClass("front")
          
          },1000); 
           
         }
          $("#score p:nth-child(2)>span").text(memoryGame.pairsClicked)
          $("#score p:nth-child(3)>span").text(memoryGame.pairsGuessed)
          empty(memoryGame.pickedCards);  
        }  
    }    
  )

});


function empty(arrayCards){
 arrayCards.length = 0;
}
