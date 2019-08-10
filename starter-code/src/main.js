var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];
var memoryGame = new MemoryGame(cards);
let clickedBack = [];
let clickedFront = [];
let compare = [];
let intervalId = 0;

$(document).ready(function(){
  memoryGame.shuffleCards();
  var html = '';
  $.each(memoryGame.cards, function(){
    html += '<div class="card" data-card-name="'+ this.name +'">';
    html += '  <div class="back" name="'+ this.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ this.img +') no-repeat"></div>';
    html += '</div>';
  })
  $("#memory_board").html(html);

  $(".card").click(function() {
    const characterName = $(this).data("card-name");
    const back = $(this).find(".back");
    const front = $(this).find(".front");
    back.toggleClass("back front");
    front.toggleClass("front back");
    clickedBack.push(back);
    clickedFront.push(front);
    compare.push(characterName);
    if(compare.length % 2 === 0){
      memoryGame.checkIfPair(compare[0],compare[1]);
      memoryGame.isFinished();
      if(compare[0] === compare[1]){
        console.log("match");
        clickedBack = [];
        clickedFront = [];
      }else if(compare[0] !== compare[1]){
        console.log("these don't match");
        setTimeout(function() { 
          $(clickedBack).toggleClass("front back");
          $(clickedFront).toggleClass("back front");
          clickedBack = [];
          clickedFront = [];
        }.bind(this), 500);
      }
      compare = [];
    }
  });
  // $(".back").on("click",function(){
  //     console.log('back clicked');
  //     clicked.push(this);
  //     $(this).toggleClass("back front");
  //     $(this).siblings().toggleClass("front back");
  //     console.log(clicked[0]);
  //   })
  // $(".front").on("click",function(){
  //     console.log('Front clicked');
  //       $(this).toggleClass("front back");
  //       $(this).siblings().toggleClass("back front");
  //   })

  // function changeBack (element) {
  //   $(element).toggleClass("back front");
  //   $(element).siblings().toggleClass("front back");
  // }
    
});