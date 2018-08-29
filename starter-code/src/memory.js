<!DOCTYPE html>.html</div>
<html>
    <head>
       <title>Superhero Memory Game</title>
       <link type="text/css" rel="stylesheet" href="stylesheets/memory.css" media="screen">
      <title>Superhero Memory Game</title>
      <link type="text/css" rel="stylesheet" href="stylesheets/memory.css" media="screen">
    </head>
    <body>
        <div>
        $('#memory_board').html(html);
   // Bind the click event of each element to a function
  $('.back').click(function () {
    // TODO: write some code here
  var wait = false;
  var lastCard;
  $('.back').on('click',function() {
  
    if (wait === true) {
      return 0
    }
     var name = $(this).attr("name")
    var thisCard = $(this)
     memoryGame.pickedCards.push(name)
     $(thisCard).removeClass('back')
    $(thisCard).addClass('front')
    $(thisCard).next().removeClass('front')
    $(thisCard).next().addClass('back')
     if (memoryGame.pickedCards.length == 2) {
      wait = true
       var result = memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])
      memoryGame.pickedCards=[];
      $('#pairs_guessed').text(memoryGame.pairsGuessed)
      $('#pairs_clicked').text(memoryGame.pairsClicked)
      if (memoryGame.isFinished()) {
        setTimeout(()=>{
          alert('FInish the game')
        },100)
      }
       if (result === false) {
        setTimeout(()=>{
          $(thisCard).removeClass('back')
          $(thisCard).addClass('front')
          $(thisCard).next().removeClass('front')
          $(thisCard).next().addClass('back')
           $(lastCard).removeClass('front')
          $(lastCard).addClass('back')
          $(lastCard).next().removeClass('back')
          $(lastCard).next().addClass('front')
          wait=false
         },100)
      }else{
        wait=false
      }
     }else{
      lastCard = $(thisCard)
    }
   });
});
var MemoryGame = function (cards) {
  this.cards = cards;
  this.cards = this.shuffleCards(cards);
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};
 MemoryGame.prototype.shuffleCards = function () {
MemoryGame.prototype.shuffleCards = function (cardsArr) {
   for (let i = cardsArr.length - 1; i > 0; i--) {
      
      var j = Math.floor(Math.random()*(i + 1))
      var temporal = cardsArr[i]
      cardsArr[i] = cardsArr[j]
      cardsArr[j] = temporal 
  }
   return cardsArr
 };
 MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
   this.pairsClicked++
  if (firstCard == secondCard) {
    this.pairsGuessed++
    return true
  }else{
    return false
  }
 }
 MemoryGame.prototype.isFinished = function () {
   if (this.pairsGuessed == cards.length/2) {
    return true
  }else{
    return false
  }
 }; 