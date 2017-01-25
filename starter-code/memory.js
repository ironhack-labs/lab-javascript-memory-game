//******************************************************************
// Game Logic
//******************************************************************

// this.Cards

console.log("linked")
var cards = [
  {name: "aquaman",
  img: "img/aquaman.jpg"},
  {name: "batman",
  img: "img/batman.jpg"},
  {name: "flash",
  img: "img/flash.jpg"},
  {name: "ironman",
  img: "img/ironman.jpg"},
  {name: "superman",
  img: "img/superman.jpg"},
  {name: "thor",
  img: "img/thor.jpg"},
  {name: "aquaman",
  img: "img/aquaman.jpg"},
  {name: "batman",
  img: "img/batman.jpg"},
  {name: "flash",
  img: "img/flash.jpg"},
  {name: "ironman",
  img: "img/ironman.jpg"},
  {name: "superman",
  img: "img/superman.jpg"},
  {name: "thor",
  img: "img/thor.jpg"},
  {name: "the-avengers",
  img: "img/the-avengers.jpg"},
  {name: "spiderman",
  img: "img/spiderman.jpg"},
  {name: "green-lantern",
  img: "img/green-lantern.jpg"},
  {name: "green-arrow",
  img: "img/green-arrow.jpg"},
  {name: "fantastic-four",
  img: "img/fantastic-four.jpg"},
  {name: "captain-america",
  img: "img/captain-america.jpg"},
  {name: "the-avengers",
  img: "img/the-avengers.jpg"},
  {name: "spiderman",
  img: "img/spiderman.jpg"},
  {name: "green-lantern",
  img: "img/green-lantern.jpg"},
  {name: "green-arrow",
  img: "img/green-arrow.jpg"},
  {name: "fantastic-four",
  img: "img/fantastic-four.jpg"},
  {name: "captain-america",
  img: "img/captain-america.jpg"},
];

var shuffleCards = _.shuffle(cards);

firstPick = "";//lo que haga click primero
secondPick = "";//lo que haga click dps
paired = 0;

function checkIfPair(firstPick, secondPick){
  // document.getElementById('clicked').text = clickCounter;
  if (firstPick === secondPick){
    var clicked = document.getElementsByClassName('clicked');
    clicked[0].className = "pic winner";
    clicked[0].className = "pic winner";
    paired++;
    document.getElementById('discovered').innerHTML = "Discovered: "+paired;
    if (paired === 12) {
      alert("YOU ARE AWEOSME");
    }
  } else {
    var timeoutId = setTimeout(function () {
      turnCardsAgain(firstPick, secondPick);
    }, 500);
  }
};

function turnCardsAgain(firstPick, secondPick){
  // var x = document.querySelectorAll("div[name]");
  // var y = document.querySelectorAll("div[name]");
  var clicked = document.getElementsByClassName('clicked');
  clicked[0].style.backgroundImage = "";
  clicked[1].style.backgroundImage = "";
  clicked[0].className = "pic";
  clicked[0].className = "pic";
}




// MemoryGame.prototype._shuffleCard = function() {
//   // var shuffleCards = _.shuffle(cards);
// };
//
// MemoryGame.prototype.selectCard = function(card)
//
// };
//
// MemoryGame.prototype.finished = function() {
// };




//******************************************************************
// HTML/CSS Interactions
//******************************************************************


$(document).ready(function(){
  for (var i=0; i<shuffleCards.length;i++){
    $("#memory_board div:nth-child("+(i+1)+")").attr("name", shuffleCards[i].name);
  }
  var clickCounter = 0;
  var lastSuperHero = "";

  $('.pic').on('click', function(){
    clickCounter++;
    console.log($('#click').text("Clicks: "+clickCounter));
    var superHero = $(this).attr('name');
    $(this).addClass("clicked");
    $(this).css("background-image", "url('img/"+superHero+".jpg')");

    if (clickCounter % 2 === 0) {
      checkIfPair(lastSuperHero, superHero);
    } else {
      lastSuperHero = superHero;
    }
  });

//   $('.back').on('click', function(){
//
//   });
//   $('.pic').on('click', function(){
//
//   });
//
});
