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

  $("#memory_board").html(html);

  // Bind the click event of each element to a function
  $(".card").on("click", function() {
    var front = $(this).children(".front");
    $(this)
      .children(".back")
      .addClass("front")
      .removeClass("back");
    front.addClass("back").removeClass("front");

    //update pairs-clicked counter
    memoryGame.pairsClicked += 1;
    $("#pairs_clicked").html(memoryGame.pairsClicked)

    // in order to identify open cards
    $(this).addClass("open")

    // does not work - trying to turn the cards around if it's not a match

    var number = parseFloat($("#pairs_clicked").text())

    if (number != 0 && number % 2 === 0 && $(".open").first().attr("data-card-name") != $(".open").last().attr("data-card-name")) {
  
      var firstOpen =  $(".open").first().children(".back");
      $(".open").first().children(".front").removeClass("front").addClass("back");
      firstOpen.removeClass("back").addClass("front");
  
      var secOpen = $(".open").last().children(".back");
      $(".open").last().children(".front").removeClass("front").addClass("back");
      secOpen.removeClass("back").addClass("front");
  
      $(".open").first().removeClass("open");
      $(".open").last().removeClass("open");
  
      } 
  }
  

  
  );

  



});