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
var cont = 0;

$(document).ready(function() {
  var memoryGame = new MemoryGame(cards);
  var html = "";
  memoryGame.cards = memoryGame.shuffleCard(cards);
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
  $(".back").on("click", function(e) {
    
    if (cont === 0) {
      $(this).addClass("primera front");
      $(this).removeClass("back");
      
      // console.log($(this).next);
      memoryGame.pickedCards.push($(".primera")[0].parentNode.id);
      $(($(".primera")[0]).parentNode.lastChild).removeClass("front");
      $(($(".primera")[0]).parentNode.lastChild).addClass("back");
      cont++;
    } else if (cont === 1) {
      $(this).addClass("segundo front");
      $(this).removeClass("back");
      memoryGame.pickedCards.push($(".segundo")[0].parentNode.id);
      $(($(".segundo")[0]).parentNode.lastChild).removeClass("front");
      $(($(".segundo")[0]).parentNode.lastChild).addClass("back");
      if (memoryGame.checkIfPair($(".primera")[0].parentNode.id, $(".segundo")[0].parentNode.id)){
        $("#pairs_guessed").text(memoryGame.pairsGuessed);
        // $(($(".primera")[0]).css("visivility", "collapse"));
        // $(($(".segundo")[0]).css("visivility", "collapse"));
      }
      cont --
      // $(".card").children().attr("disabled","disabled");
      
       setTimeout(function(){ 
         console.log("pepe");
         
          let carta = ($(".primera")[0]);
          let hermano = carta.parentNode.lastChild;
          if ($(".primera")[0].parentNode.id === $(".segundo")[0].parentNode.id){
            $(carta).css("visibility", "hidden");
            $(hermano).css("visibility", "hidden");
          }           
          $(hermano).removeClass("back");
          $(hermano).addClass("front");
          $(carta).removeClass("front");
          $(carta).addClass("back");
          carta = ($(".segundo")[0]);
          hermano = carta.parentNode.lastChild;
          if ($(".primera")[0].parentNode.id === $(".segundo")[0].parentNode.id){
            $(carta).css("visibility", "hidden");
            $(hermano).css("visibility", "hideen");
          }            
          $(hermano).removeClass("back");
          $(hermano).addClass("front");
          $(carta).removeClass("front");
          $(carta).addClass("back");           
         
         $(".primera").removeClass("primera");
         $(".segundo").removeClass("segundo");
         
      }, 1000);
      $("#pairs_clicked").text(memoryGame.pairsClicked);
    }
    
    // $("#pairs_clicked").text(memoryGame.pairsClicked());
  });
});
