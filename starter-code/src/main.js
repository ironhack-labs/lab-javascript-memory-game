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
function flipCard(name){

}
/*
function resetBoard(cards){
  var html = '';
  cards.forEach(function(pic){
    html += 'div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });
  $('#mamory_board').html(html);
}

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.back').click(function () {
    // TODO: write some code here
  });
});*/


function resetBoard(cards){
  var html = '';
  cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });
  $('#memory_board').html(html);

}
$(document).ready(()=>{
  var memoryGame = new MemoryGame(cards);
  resetBoard(memoryGame.cards)
  // Add all the div's to the HTML

  // Bind the click event of each element to a function
  $('.back').click(function (event) {
    if(memoryGame.pickedCards.length<2){
      memoryGame.pickedCards.push($(this))
      $(this).toggleClass("front back").next().toggleClass("front back")
    }else{
      return
    }
    if(memoryGame.pickedCards.length>1){
      if(memoryGame.checkIfPair(memoryGame.pickedCards[0].attr('name'),memoryGame.pickedCards[1].attr('name'))){
        memoryGame.pickedCards=[]
        if(memoryGame.isFinished()){
          setTimeout(()=>{          

              memoryGame.reset()
              resetBoard(memoryGame.cards)            
          })
        }
      }else{
        setTimeout(()=>{
          memoryGame.pickedCards[0].toggleClass("back front").next().toggleClass("back front")
          memoryGame.pickedCards[1].toggleClass("back front").next().toggleClass("back front")
          memoryGame.pickedCards=[]
        },1000)

      }
    }
    $('#pairs_clicked')[0].innerHTML=memoryGame.pairsClicked
    $('#pairs_guessed')[0].innerHTML=memoryGame.pairsGuessed 
  });
});

