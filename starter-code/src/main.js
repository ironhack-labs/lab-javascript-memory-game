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
  memoryGame.cards = memoryGame.shuffleCard(memoryGame.cards);
  var html = "";
  memoryGame.cards.forEach(function(pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="' + pic.img + '">';
    html += "</div>";
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += "</div>";
    html += "</div>";
  });

  // Add all the div's to the HTML
  document.getElementById("memory_board").innerHTML = html;
  // Bind the click event of each element to a function
  var chosenCards = 0;
  var arr = [];
  $(".back").on("click", function() {
    chosenCards++;
    var hermano = $(this).next();
    $(this).toggleClass("front");
    $(this).toggleClass("back");
    hermano.toggleClass("back");
    hermano.toggleClass("front");
    arr.push($(this));
    if (chosenCards == 2) {
      chosenCards = 0;
      $("#memory_board").addClass("block");
      if (memoryGame.checkIfPair(arr[0].attr("name"), arr[1].attr("name"))) {
          $("#pairs_clicked").text(memoryGame.pairsClicked);
          $("#pairs_guessed").text(memoryGame.pairsGuessed);
          $("#memory_board").removeClass("block");
          arr = [];
      } else {
        setTimeout(function() {
          for(var i = 0; i<arr.length; i++){
            $(arr[i]).toggleClass("back");
            $(arr[i]).toggleClass("front");
            $(arr[i]).next().toggleClass("front");
            $(arr[i]).next().toggleClass("back");
          }
          $("#pairs_clicked").text(memoryGame.pairsClicked);
          $("#pairs_guessed").text(memoryGame.pairsGuessed);
          $("#memory_board").removeClass("block");
          arr = [];
        }, 1000);
      }
      if(memoryGame.finished()){
        alert("Congratulations you win! \nYou need: "+memoryGame.pairsClicked + " clicks!!!")
        location.reload();
      }
    }
  });
});
