var cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" }
];

$(document).ready(function() {
  var memoryGame = new MemoryGame(cards);

  //  shuffle
  memoryGame.shuffleCard(cards);
  // var counter = 0;
  var html = "";
  memoryGame.cards.forEach(function(pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back check1"';
    html += '    name="' + pic.img + '">';
    html += "</div>";
    html += '<div class="front check2" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += "</div>";
    html += "</div>";
  });

  // Add all the div's to the HTML
  $("#memory_board").html(html);
  // Bind the click event of each element to a function

  $(".back").on("click", function() {
    if (memoryGame.pickedCards.length !== 2) {
      $(this).toggleClass("back");
      $(this).toggleClass("front");
      $(this)
        .next()
        .toggleClass("back");
      $(this)
        .next()
        .toggleClass("front");
      // counter += 1;
      // console.log(counter);
      memoryGame.pickedCards.push($(this).attr("name"));
      // console.log(memoryGame.pickedCards.length);
      setTimeout(function() {
        if (memoryGame.pickedCards.length === 2) {
          var check = memoryGame.checkIfPair(
            memoryGame.pickedCards[0],
            memoryGame.pickedCards[1]
          );
          var finish = memoryGame.finished();
          // console.log(check);
          if (check === false) {
            $(".front.check1").toggleClass("back");
            $(".front.check1").toggleClass("front");
            // $(this).toggleClass("back");
            // $(this).toggleClass("front");
            $(".back.check2").toggleClass("front");
            $(".back.check2").toggleClass("back");

            // $(".back.check")
            //   .next()
            //   .toggleClass("back");
            // $(".back.check")
            //   .next()
            //   .toggleClass("front");
          } else {
            $(".front.check1").toggleClass("check1");
            $(".back.check2").toggleClass("check2");
          }

          memoryGame.pickedCards = [];
          $("#pairs_clicked").html(memoryGame.pairsClicked);
          $("#pairs_guessed").html(memoryGame.pairsGuessed);
          if (finish === true) {
            $("#memory_board").append(
              '<div id="congrats">Congratulations! You won!!!!</div>'
            );

            console.log("YOU WON!!!!!");
          }
        }
      }, 3000);
    }
  });

  // END
});
