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
  console.log(memoryGame.cards)
  
  memoryGame.cards = memoryGame.shuffleCard(memoryGame.cards);
  console.log(memoryGame.card);
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
  console.log(memoryGame);
  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function
  $('.back').on('click', function () {
    $(this).css("display", "none");
    $(this).siblings().addClass("back");
    memoryGame.pickedCards.push($(this).attr("name"));
    if (memoryGame.pickedCards.length ===2){

      var first = memoryGame.pickedCards[0];
      var second = memoryGame.pickedCards[1];
      memoryGame.checkIfPair(first,second);
      if (first!=second){
        console.log("yay")
        console.log(memoryGame.pickedCards);
        setTimeout(
          function() 
          {
            $(".back[name='"+first+"'").siblings().removeClass("back");
            $(".back[name='"+first+"'").css("display", "block");
            $(".back[name='"+second+"'").siblings().removeClass("back");
            $(".back[name='"+second+"'").css("display", "block");
          }, 500);
        } else{
          
        }
      memoryGame.pickedCards=[];
      $("#pairs_clicked").text(memoryGame.pairsClicked);
      $("#pairs_guessed").text(memoryGame.pairsGuessed);
      if (memoryGame.finished()){
        setTimeout(
          function() 
          {
        alert("You won! It took you " + memoryGame.pairsClicked);
      }, 500);
      }
    }
  });
});


