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
  //$(".front").addClass("imagen").hide()
  /*$.fn.checkMatch = function(e) {
    this.each(function(e) {
      
      if($(this).parent().children(".back").attr("name")==e.attr("name"))
        memoryGame.pairsGuessed++;
        console.log(memoryGame.pairsGuessed)
    });
  };*/

  $(".front").click(function() {
    $(this).removeClass("imagen");
    $(this)
      .parent()
      .children(".back")
      .show();
  });
  $(".back").click(function(e) {
    var back = $(this);
    var comprueba = 0;
    var front;
    var saltar=0;
    $(".card > .imagen").each(function() {
      if (
        memoryGame.checkIfPair(
          $(this)
            .parent()
            .children(".back")
            .attr("name"),
          back.attr("name")
        )
      ) {
        $("#pairs_guessed").text(memoryGame.pairsGuessed);
        

        $(this)
          .parent()
          .children()
          .unbind("click");
        $(this)
          .parent()
          .children(".back").hide()
        $(this)
        .addClass("imagenSet")
        .removeClass("imagen")
          
        
        back
          .parent()
          .children()
          .unbind("click");
        back
          .parent()
          .children(".front")
          .addClass("imagenSet")
          .removeClass("imagen")
          ;
        comprueba = 0;
        back.hide();
        saltar=1;
        return;
      } else {
        comprueba = 1;
        front = $(this);
      }
      
      console.log(
        memoryGame.pairsGuessed +
          $(this)
            .parent()
            .children(".back")
            .attr("name") +
          back.attr("name")
      );
    });
    $("#pairs_clicked").text(memoryGame.pairsClicked);
    if(memoryGame.finished()){
      alert("Congratulations! You win! \n Your score: "+" clicked pairs "+memoryGame.pairsClicked)
      location.reload();
    }
    if(saltar==1)
      return;
    back.hide();
    back
      .parent()
      .children(".front")
      .addClass("imagen");
    if (comprueba == 1) {
      setTimeout(function() {
        front.removeClass("imagen");
        front
          .parent()
          .children(".back")
          .show();
        back.show();
        back
          .parent()
          .children(".front")
          .removeClass("imagen");
      }, 500);
    }
  });
});
