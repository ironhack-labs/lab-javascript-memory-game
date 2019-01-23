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

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  var html = '';
  let newCards =  memoryGame.shuffleCards(cards)
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);
console.log($('.card > div:nth-child(2)'))
  let cartaArriba = ""
  let cartaNode
  let cartaNode2
 
  // Bind the click event of each element to a function
  $('.back').click(function () {
  if(cartaArriba === "") {
    $(this).toggleClass('front')
    $(this).toggleClass('back')
    $(this).next().toggleClass('back')
    $(this).next().toggleClass('front')
    cartaArriba = $(this).parent().attr("data-card-name")
    cartaNode = $(this)
  } else {
    $(this).toggleClass('front')
    $(this).toggleClass('back')
    $(this).next().toggleClass('back')
    $(this).next().toggleClass('front')
    if(memoryGame.checkIfPair($(this).parent().attr("data-card-name"),cartaArriba) === true) {
      cartaArriba = ""
      if(memoryGame.isFinished() ===  true) {
        alert("You made it! Well done!")
        $('.card > div:first-child').removeClass('front')
        $('.card > div:first-child').addClass('back')
        $('.card > div:nth-child(2)').removeClass('back')
        $('.card > div:nth-child(2)').addClass('front')
        memoryGame.pairsClicked = 0
        memoryGame.pairsGuessed = 0
        memoryGame.shuffleCards(memoryGame.cards)
      }
    } else {
      cartaNode2 = $(this)
      setTimeout(delay, 200);
      function delay(){
        cartaNode2.removeClass('front')
        cartaNode2.addClass('back')
        cartaNode2.next().removeClass('back')
        cartaNode2.next().addClass('front')
        cartaNode.removeClass('front')
        cartaNode.addClass('back')
        cartaNode.next().removeClass('back')
        cartaNode.next().addClass('front')
      }
      cartaArriba = ""
    }
   
  }
$('#pairs_clicked').text(memoryGame.pairsClicked)
$('#pairs_guessed').text(memoryGame.pairsGuessed)
  });
});


