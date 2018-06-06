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
$(document).ready(function () {
  var memoryGame = new MemoryGame(cards);
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="' + pic.img + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });


  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function
  $('.back').on('click', function () {

    if (!memoryGame.finished()) {
      if (memoryGame.pickedCards.length < 2) {
        memoryGame.pickedCards.push($(this));
        $(this).parent().toggleClass('selected'); //mark div card as selected
        $(this).toggleClass('front back');        //change div front to back
        $(this).next().toggleClass('front back'); //change div back to front

        if (memoryGame.pickedCards.length === 2) { //two cards selected. Compare id text
          if (memoryGame.checkIfPair(memoryGame.pickedCards[0].parent().attr("id"), memoryGame.pickedCards[1].parent().attr("id"))) {
            //alert("dos cartas e iguales");
            $(memoryGame.pickedCards[0]).toggleClass('.blocked');
          } else {
          for(var i=0;i<memoryGame.pickedCards.length;i++){  //alert('dos cartas y diferents');
            memoryGame.pickedCards[i].toggleClass('front back'); //change div front to back
            memoryGame.pickedCards[i].next().toggleClass('front back');
            memoryGame.pickedCards[i].toggleClass('selected');} //mark div card as selected
          }
          $(".pairs_guessed").innerHTML = memoryGame.pairsGuessed;
          $(".pairs_clicked").innerHTML = memoryGame.pairsClicked;
          memoryGame.pickedCards.length = 0; //Clear pair
        }
      }
    }
  });
});