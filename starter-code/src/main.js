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
  var html = "";
  memoryGame.cards.forEach(function(pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html +=
      '  <div class="front" style="background: url(img/' +
      pic.img +
      ') no-repeat"></div>';
    html += "</div>";
  });

  // Add all the div's to the HTML
  $("#memory_board").html(html);

  // Bind the click event of each element to a function
  $(".back").click(function() {
    // TODO: write some code here

    $(this)
      .parent()
      .find(":nth-child(1)")
      .removeClass("back");
    $(this)
      .parent()
      .find(":nth-child(1)")
      .addClass("front");
    $(this)
      .parent()
      .find(":nth-child(2)")
      .removeClass("front");
    $(this)
      .parent()
      .find(":nth-child(2)")
      .addClass("back");

    if (memoryGame.pickedCards.length === 0) {
      //console.log($(this).parent().attr("data-card-name"));
      memoryGame.pickedCards.push(
        $(this)
          .parent()
          .attr("data-card-name")
      );
    } else {
      memoryGame.pickedCards.push(
        $(this)
          .parent()
          .attr("data-card-name")
      );
      setTimeout(function() {
        //console.log(memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1]));
        if (
          memoryGame.checkIfPair(
            memoryGame.pickedCards[0],
            memoryGame.pickedCards[1]
          )
        ) {
          //console.log(memoryGame.pairsClicked+","+memoryGame.pairsGuessed);
        } else {
          //turn the cards back
          $("[data-card-name|='" + memoryGame.pickedCards[0] + "']")
            .find(":nth-child(1)")
            .removeClass("front");
          $("[data-card-name|='" + memoryGame.pickedCards[0] + "']")
            .find(":nth-child(1)")
            .addClass("back");
          $("[data-card-name|='" + memoryGame.pickedCards[0] + "']")
            .find(":nth-child(2)")
            .removeClass("back");
          $("[data-card-name|='" + memoryGame.pickedCards[0] + "']")
            .find(":nth-child(2)")
            .addClass("front");

          $("[data-card-name|='" + memoryGame.pickedCards[1] + "']")
            .find(":nth-child(1)")
            .removeClass("front");
          $("[data-card-name|='" + memoryGame.pickedCards[1] + "']")
            .find(":nth-child(1)")
            .addClass("back");
          $("[data-card-name|='" + memoryGame.pickedCards[1] + "']")
            .find(":nth-child(2)")
            .removeClass("back");
          $("[data-card-name|='" + memoryGame.pickedCards[1] + "']")
            .find(":nth-child(2)")
            .addClass("front");
        }
        //console.log(memoryGame.pickedCards);
        $("#pairs_clicked").text(memoryGame.pairsClicked);
        $("#pairs_guessed").text(memoryGame.pairsGuessed);
        memoryGame.pickedCards = [];

        if (memoryGame.isFinished()) alert("Finished!");
      }, 500);
    }
  });
});
