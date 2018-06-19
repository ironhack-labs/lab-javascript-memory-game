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
  //memoryGame.pairsClicked[0]
  // Add all the div's to the HTML
  document.getElementById("memory_board").innerHTML = html;
  // Bind the click event of each element to a function

  function faceUpCard(card){
  card.removeClass("back");
  card.addClass("front");
  card.next().removeClass("front");
  card.next().addClass("back");
}
function faceDownCard(card){
    card.removeClass("front");
    card.addClass("back");
    card.next().removeClass("back");
    card.next().addClass("front");
  }

  $(".back").on("click", function() {
      var that = this;      
      if (!memoryGame.finished()){
      if (memoryGame.pickedCards.length == 0){
          memoryGame.pickedCards.push($(this));
          faceUpCard($(this)); 
        } else if (memoryGame.pickedCards.length == 1){
            memoryGame.pickedCards.push($(this));
            faceUpCard($(this));
            if (memoryGame.checkIfPair(memoryGame.pickedCards[0].attr("name"), memoryGame.pickedCards[1].attr("name"))){
                memoryGame.pickedCards=[];
                $("#pairs_clicked").html(memoryGame.pairsClicked.toString());  
                $("#pairs_guessed").html(memoryGame.pairsGuessed.toString());            
            }
            else {
                var intID=setTimeout(function() {
                    $("#pairs_clicked").html(memoryGame.pairsClicked.toString());  
                    faceDownCard($(memoryGame.pickedCards[0]));
                    faceDownCard($(memoryGame.pickedCards[1]));
                    memoryGame.pickedCards=[];
              }, 3000);         
            }
        }
    }
    });
})