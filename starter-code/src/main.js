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
  memoryGame.shuffleCard(cards);

  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });
  console.log(memoryGame.cards);
  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function
  var objs = [];
  $('.back').on('click', function () {
      objs.push(this);
      $(this).css('pointer-events','none');
      var pictureName = $(this).attr('name');
      memoryGame.pair.push(pictureName);
      $(this).css('background', "url(img/" + pictureName);

      setTimeout(function (){
          if(memoryGame.pair.length === 2){
            if (memoryGame.checkIfPair()) {
                $('#pairs_guessed').text(Number($('#pairs_guessed').text()) + 1);
                memoryGame.finished();
            }
            else{
                $(objs[0]).css("background", '#456783');
                $(objs[1]).css("background", '#456783');
                $(objs[0]).css('pointer-events','');
                $(objs[1]).css('pointer-events','');
            }
            objs = [];
            memoryGame.pair = [];
            $('#pairs_clicked').text(Number($('#pairs_clicked').text()) + 1);
          }
      }, 1000);
  });
});


