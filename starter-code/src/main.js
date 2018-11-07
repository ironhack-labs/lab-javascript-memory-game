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

  // On click change classes front/back
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

    // push selected card to pickedCards-array
    memoryGame.pickedCards.push($(this))

  
  if (memoryGame.pickedCards.length === 2 && $(memoryGame.pickedCards[0]).attr("data-card-name") === $(memoryGame.pickedCards[1]).attr("data-card-name")) {

    memoryGame.pairsGuessed += 1;
    $("#pairs_guessed").html(memoryGame.pairsGuessed)
    $(memoryGame.pickedCards[0].children().addClass("blocked"));
    $(memoryGame.pickedCards[1].children().addClass("blocked"));
    memoryGame.pickedCards.splice(0,2)

  } else if (memoryGame.pickedCards.length === 2 && $(memoryGame.pickedCards[0]).attr("data-card-name") !== $(memoryGame.pickedCards[1]).attr("data-card-name")) {

    setTimeout(function() {

      $(memoryGame.pickedCards[0]).children().toggleClass("front").toggleClass("back")
      $(memoryGame.pickedCards[1]).children().toggleClass("front").toggleClass("back")
      memoryGame.pickedCards.splice(0,2)
      

    }, 2000)};
    
    if ($("#pairs_guessed").html() === "12") {
    
      alert("DONE!!!")
    }
    

});


  
});