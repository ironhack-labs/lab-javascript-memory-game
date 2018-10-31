var cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

$(function () {
  var contClick = 0;
  var isPair
  
  var memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCards();
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
    html += '</div>';
  });
  

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.back').on("click", function () {

    $(this).toggleClass("front back");
    $(this).siblings().toggleClass("back front");
    contClick++;

    if (contClick == 2) {
      $(".card div:first-child").each(function () {
        if ($(this).hasClass('front') && !$(this).hasClass("isPair")) {
          memoryGame.pickedCards.push($(this).attr("name"));

        }
      });
      isPair = memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]);

      $('#pairs_clicked').text(memoryGame.pairsClicked);
      $('#pairs_guessed').text(memoryGame.pairsGuessed);

      if (isPair) {
        $("div [name='" + memoryGame.pickedCards[0] + "']").each(function () {
          $(this).addClass("isPair");

          if (memoryGame.isFinished()) {
            setTimeout(function () {
              alert('Has ganado');
            }, 1000)

          }
        })
        memoryGame.pickedCards.length = 0;
      } else {
        voltear();
      }
      contClick = 0;

    }




  });
  function voltear() {
    setTimeout(function () {



      if ($("div [name='" + memoryGame.pickedCards[0] + "']:first-child").hasClass("front")) {
        ;

        $("div [name='" + memoryGame.pickedCards[0] + "']:first-child").removeClass("front").addClass("back");
        $("div [name='" + memoryGame.pickedCards[0] + "']:first-child").siblings().removeClass("back").addClass("front");

      }
      if ($("div [name='" + memoryGame.pickedCards[1] + "']:first-child").hasClass("front")) {


        $("div [name='" + memoryGame.pickedCards[1] + "']:first-child").removeClass("front").addClass("back");
        $("div [name='" + memoryGame.pickedCards[1] + "']:first-child").siblings().removeClass("back").addClass("front");
      }
      memoryGame.pickedCards.length = 0;
    }, 2000);
  }

});


