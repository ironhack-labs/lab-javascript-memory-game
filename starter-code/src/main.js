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

firstCard = "";
secondCard = "";
cardsSelected = 0;

$(document).ready(function() {
  var memoryGame = new MemoryGame(cards);
  var html = "";
  memoryGame.shuffleCards();
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
    $(this).parent().children().toggleClass("front").toggleClass("back");
    var oneCard = $(this).closest(".card").attr("data-card-name");
    if (cardsSelected === 0) {
      firstCard = oneCard;
      memoryGame.pickedCards.push($(this).parent()[0]);
      
      cardsSelected++;
    } else {
      secondCard = oneCard;
      memoryGame.pickedCards.push($(this).parent()[0]);
      console.log(secondCard)
      if (!memoryGame.checkIfPair(firstCard, secondCard)) {
        that = this;
        setTimeout(function(){
          $(memoryGame.pickedCards[1]).children().toggleClass("back").toggleClass("front");
          $(memoryGame.pickedCards[0]).children().toggleClass("back").toggleClass("front");
          firstCard = "";
      secondCard = "";
      cardsSelected = 0;
      memoryGame.pickedCards = [];
        },1000)
        
        //$(`.card .front:first-child`).parent().children().toggleClass("back").toggleClass("front");
        console.log($(".card .front:first-child")[0]);
       // cardsSelected = 0;
      }else{
        firstCard = "";
      secondCard = "";
      cardsSelected = 0;
      memoryGame.pickedCards = [];
      }
      
    }

    // $(this).parent().children().toggleClass("front").toggleClass("back");
    // memoryGame.pickedCards.push($(this).parent());
    // if(memoryGame.pickedCards.length === 2){
    // memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[0])
    // memoryGame.pickedCards = [];
    // $(memoryGame.pickedCards[0]).children().toggleClass("front").toggleClass("back");
    // $(memoryGame.pickedCards[1]).children().toggleClass("front").toggleClass("back");

    // }
  });
});
