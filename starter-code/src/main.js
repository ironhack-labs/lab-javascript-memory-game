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
  //Here we could shuffle our cards but we already did it in our constructor

  //html var set to empty string
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {//for every card add the whole html text for that card
    //The issue here is that every identical 2 cards will get the same id name ..
    //html += '<div class= "card" id="card_' + pic.name + '">';
    //so we change id to data-name:
    html += '<div class= "card" data-name="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
 
  // Bind the click event of each element to a function
  $('.back').on('click', function () {

    if(memoryGame.pickedCards.length < 2){
    //$(this).toggleClass('back').toggleClass('front'); => equivalent to the next 2 lines
    //or again (this).toggleClass('back front');

    $(this).toggleClass('back');
    $(this).toggleClass('front');
  
    $(this).next().toggleClass('front');
    $(this).next().toggleClass('back');

    //For us to recognize which card we are accessing out of the two identical
    $(this).parent().addClass('picked');

      memoryGame.pickedCards.push($(this).parent().data().name);
  }

  //check if pair
if(memoryGame.pickedCards.length===2){
      var isMatch=memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]);
  
    updateScore();
   

    if(!isMatch){
      setTimeout(function(){
  //$(this).toggleClass('front'); //the this refers to the last card that was selected , so you loose any information on the previous one so DO NOT USE
          $('.picked').children().toggleClass('front back');
          memoryGame.pickedCards=[];
          $('.picked').removeClass('picked');
        }, 2000);
        }
        else{
          memoryGame.pickedCards=[];
          $('.picked').removeClass('picked');
        }

        if(memoryGame.finished()){
          $('.card').fadeOut(5000, function(){
            $('#memory_board').html('<h1>GAME OVER</h1>');
          });
        }
      }
});
function updateScore(){
  $('#pairs_clicked').text(memoryGame.pairsClicked);
  $('#pairs_guessed').text(memoryGame.pairsGuessed);
}
});
 //if stmt to make sure we are on the turned up card 
      //  if('#'+memoryGame.pickedCards[0]+'.card.')
       // $('#'+memoryGame.pickedCards[0]+':first-child').removeClass('front');
       // $('#'+memoryGame.pickedCards[0]+':first-child').addClass('back');
        //$('#'+memoryGame.pickedCards[0]+':first-child').next().removeClass('back');
        //$('#'+memoryGame.pickedCards[0]+':first-child').next().addClass('back');
        
       /* $('#'+memoryGame.pickedCards[0]+'.card.front').children(1).toggleClass('front');
        $('#'+memoryGame.pickedCards[0]+'.card.back').children(1).toggleClass('back');
        $('#'+memoryGame.pickedCards[0]+'.card.front').children(1).next().toggleClass('back');
        $('#'+memoryGame.pickedCards[0]+'.card.back').children(1).next().toggleClass('front');

        $('#'+memoryGame.pickedCards[1]+':nth-child(1)').removeClass('front');
        $('#'+memoryGame.pickedCards[1]+':nth-child(1)').addClass('back');
        $('#'+memoryGame.pickedCards[1]+':nth-child(2)').next().removeClass('back');
        $('#'+memoryGame.pickedCards[1]+':nth-child(2)').next().addClass('back');
*/    

  //update the score boards
  //reset pickedCards
      