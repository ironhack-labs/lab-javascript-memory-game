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
  let cont = 0;
  //memoryGame.shuffleCard(cards);
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
  $(".back").on("click", function() {
    memoryGame.pickedCards[cont] = $(this).parent().attr('id');
    
    //console.log( memoryGame.pickedCards[cont]);
    $(this).next().addClass("back");
    $(this).next().hide(2000);
    $(this).next().show();
    $(this).hide();
    
    if (cont == 1) {
      
      let uno="[id='"+ memoryGame.pickedCards[0].toString()+"']";
      let dos="[id='"+ memoryGame.pickedCards[1].toString()+"']";
      if (memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])){
        
        $(uno).remove();
        $(dos).remove();
        $("#pairs_guessed").prop('innerHTML',memoryGame.pairsGuessed);
      } else {
        
        $(".front").removeClass("back");
        $(".back").show();
                
      }
      $("#pairs_clicked").prop('innerHTML',memoryGame.pairsClicked);
    }
    cont == 1 ? (cont = 0) : cont++;
    
  });
});
