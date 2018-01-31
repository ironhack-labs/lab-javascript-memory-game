

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
  var randomCards = memoryGame.shuffleCard(cards)
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });

  

  var selectedCards = [];
  var counter = 0;
 
  
  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;

  
//function para girar las cras
  $('.back').on('click', function () {
    $(this).css('display','none');
    $(this).siblings().addClass("back");
    counter++
    selectedCards.push($(this).attr("name"))
 
   

    // función para que se giren las 2 cartas si No son iguales
    if (counter===2){
      var first=selectedCards[0];
      var second=selectedCards[1];
      if (memoryGame.checkIfPair(first, second)===false){
        
        setTimeout(function(){
        $(".back[name='"+first+"']").css('display','block');
        $(".back[name='"+first+"']").siblings().removeClass("back");
        $(".back[name='"+second+"']").css('display','block');
        $(".back[name='"+second+"']").siblings().removeClass("back");
        }, 500)
       
      }
      counter=0;
      selectedCards=[];
      
    }
    //contador de los pair Guessed
    $("#pairs_guessed").text(memoryGame.pairsGuessed); 

    //contador de los pair Clicked
    $("#pairs_clicked").text(memoryGame.pairsClicked); 

    if(memoryGame.pairsGuessed === 12){
      alert("you win! you are the best! Refresh the page to start again")
    }
    

});

});