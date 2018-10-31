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

 
  var firstCardCliked = "";
  var secondCardCliked = "";
  var cont = 0;

  function setFirstCard(elementCard) {
    
    firstCardCliked = elementCard;
    memoryGame.pickedCards[0] =  firstCardCliked.currentTarget.parentNode.getAttribute("data-card-name");

  }

  function setSecondCard(elementCard) {
    secondCardCliked = elementCard;
    memoryGame.pickedCards[1] =  secondCardCliked.currentTarget.parentNode.getAttribute("data-card-name");
    
  }

  function getFirstCardName(){
    return memoryGame.pickedCards[0];
  }


  function getSecondCardName(){
    return  memoryGame.pickedCards[1];
  }

  function changeBackToFront(cardBack, cardFront) {
    if (cardBack === "Block") {
      //show superHero

      var tags = cardFront.currentTarget.parentNode.childNodes;
      tags[1].classList.toggle("front");
      tags[1].classList.toggle("back");

      tags[3].classList.toggle("back");
      tags[3].classList.toggle("front");
    } else {
      //hide supeHero
      
      var tags = cardBack.currentTarget.parentNode.childNodes;
    
      tags[1].classList.toggle("back");
      tags[1].classList.toggle("front");

      tags[3].classList.toggle("front");
      tags[3].classList.toggle("back");

    }
  }


  function checkCards(){
    var card1 = getFirstCardName()
    var card2 = getSecondCardName();
   var result = memoryGame.checkIfPair(card1, card2);
    updateScore();
    return result;
  }

  function updateScore(){
    $("#pairs_clicked").text(memoryGame.pairsClicked);
    $("#pairs_guessed").text(memoryGame.pairsGuessed);
    lookIsFinish();
  }

  function lookIsFinish(){
   if(memoryGame.isFinished()){
     
    setTimeout(function() {
      alert("YOU WIN!!!");
      window.location.reload();
    }, 500);
    
   }
  }

  function playGame(element) {
    console.log(memoryGame.cards);
    if (cont === 0) {
      changeBackToFront("Block", element);
      setFirstCard(element);
      cont++;
    } else {
      changeBackToFront("Block", element);
      setSecondCard(element);
      cont = 0;
      
      var same = checkCards();
      if (!same) {
        setTimeout(function() {
          changeBackToFront(firstCardCliked, "Block");
          changeBackToFront(secondCardCliked, "Block");
        }, 500);
      }else{
        console.log("iguales");
        updateScore();
      }
    }
  }

  // Bind the click event of each element to a function
  $(".back").click(function(element) {

    // TODO: write some code here
    playGame(element);

   
  });
});
