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


var memoryGame = new MemoryGame(cards);
$(document).ready(function() {
 // var arrayCards = memoryGame.shuffleCard(cards);
  var html = "";
  html += "<div class ='front' style='background: url(img/thor.jpg')> </div>";
  cards.forEach(function(pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="' + pic.img + '">';
    html += "</div>";
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ')" no-repeat">';
    html += "</div>";
    html += "</div>";
  });
  
 
  // Add all the div's to the HTML
  document.getElementById("memory_board").innerHTML = html;
  // Bind the click event of each element to a function
  $(".back").on("click", function() {
    
      $(this).addClass("active");
      var atributo = $(this).attr("name");
      var prueba = "url(img/" + atributo + ")";
      $(this).css("background", prueba);
      $(this).addClass("blocked");

      memoryGame.pickedCards.push(atributo);

      if (memoryGame.pickedCards.length <= 2) {
        if (memoryGame.pickedCards.length == 2) {
          var primera = memoryGame.pickedCards[0];
          var segunda = memoryGame.pickedCards[1];
          if (memoryGame.checkIfPair(primera, segunda)) {
          //  alert("son iguales");
            $('.active').removeClass("active");

          } else {
          }
        } else {
        }
      } else {
       // alert("entra")
       // $(this).removeAttr("background");
        $('.active').removeAttr("style");
        $('.active').removeClass("blocked");
        
        memoryGame.pickedCards = [];
      }


  if( memoryGame.finished()){
    alert("YOU WIN!!!!")
  }
  score();
    
  });
});


function score(){
 
$("#pairs_clicked").html(memoryGame.pairsClicked);
$("#pairs_guessed").html(memoryGame.pairsGuessed);

}