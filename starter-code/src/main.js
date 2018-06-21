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
  var c = memoryGame.shuffleCard(cards);
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.name +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(\'img/' + pic.img + '\') no-repeat">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function
  $('.back').on('click', function () {
    var es = $(this);
    $(this).removeClass('back');
    $(this).addClass('front');
    $(this).siblings().removeClass('front');
    $(this).siblings().addClass('back');
    var nameCard = $(this).attr('name');
    var cardObjIndex = memoryGame.cards.findIndex(function(ca){
      if (ca.name == nameCard){
        return true;
      }
      return false;
    });

    memoryGame.pickedCards.push(cardObjIndex);

    if (memoryGame.pickedCards.length == 2){
      

      if (memoryGame.checkIfPair(memoryGame.cards[memoryGame.pickedCards[0]], memoryGame.cards[memoryGame.pickedCards[1]])){
        $(".back").addClass("blocked");
        setTimeout(function(){
         // alert('Tarjetas iguales, bien hecho');
          var addDiv = $('<div></div>');
          var car = $("div[name='" + memoryGame.cards[memoryGame.pickedCards[0]].name + "']").parent();
          car.prepend(addDiv);
          memoryGame.pickedCards = [];

          $('#pairs_clicked').text(memoryGame.pairsClicked);
          $('#pairs_guessed').text(memoryGame.pairsGuessed);
          console.log(memoryGame.pairsClicked);
          console.log(memoryGame.pairsGuessed);
          //$("span").removeClass("blocked");
          $(".back").removeClass("blocked");
          
        
        }, 100);

      } else {

        $(".back").addClass("blocked");
        setTimeout(function(){
          var resetCard = $('.front:first-child');
          resetCard.removeClass('front');
          resetCard.addClass('back');
          resetCard.siblings().removeClass('back');
          resetCard.siblings().addClass('front');
          memoryGame.pickedCards = [];

          $('#pairs_clicked').text(memoryGame.pairsClicked);
          $('#pairs_guessed').text(memoryGame.pairsGuessed);
          console.log(memoryGame.pairsClicked);
          console.log(memoryGame.pairsGuessed);
          //$("span").removeClass("blocked");
          $(".back").removeClass("blocked");
        }, 2000);
        
      }

    }
  });
});