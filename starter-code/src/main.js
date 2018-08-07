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
  //take advantage of constructor function we just built

  var theGame = new MemoryGame(cards);
  theGame.shuffleCard(); //now the shuffled card modified the game.cards;
  var html = '';
  theGame.cards.forEach(function (pic) {
    //^ theGame above is the more object oriented way, and will respond to change in 
    // MemoryGame constructor function
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
    $('#memory_board').html(html);
  });
  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function


$('.back').on('click', function () { //targeting back of card
 $(this).toggle();//makes back display none. 
//  Still in memory, but doesn't take room on screen. front doesn't have a width
//modified CSS< copied back class to front, display  none to it, removed blue back from front class
$(this).parent().find(".front").toggle(); //changed back div to display none and 

theGame.currentPair.push($(this));
console.log(theGame.currentPair);
  if (theGame.currentPair.length === 2){
   var result = theGame.checkIfPair(theGame.currentPair[0],theGame.currentPair[1]);
    //check if pair manipulates the value of current pair
    //checking spans with id's of pairs clicked and pairs guessed in DOM
    $('#pairs_clicked').text(theGame.pairsClicked);
    $('#pairs_guessed').text(theGame.pairsGuessed);
// Pairs clicked work, !!!!!!!!!!!!!pairs guessed no.
  

$('.back').addClass('blocked');

    if(!result){
      setTimeout(function(){ //he googled javascript set timer or set timeout
        theGame.currentPair[0].toggle();
        theGame.currentPair[0].parent().find(".front").toggle();
        theGame.currentPair[1].toggle();
        theGame.currentPair[1].parent().find(".front").toggle();
        theGame.currentPair = [];
        $('.back').removeClass('blocked');
      },1000);
     
    }else{
      theGame.currentPair = [];
      $('.back').removeClass('blocked');
    }
    
  }

     
    //javascript is asynchronous. Set time out gets called
    //first, but theGame.currentPair is not waiting for theGame.currentPair[0].
    //we'll fix this by putting the current pair array reset inside to occur twice.
    //one time inside an else
    //!!!!!!MOVE/DELETE   theGame.currentPair = [];  Two AROUND TO MESS WITH THE
    //RESET TIMING

    // if(theGame.finished());{
    //   setTimeout(function(){

    //   });
    // }

  

});
});



//original attempt

// let imgName = $(this).attr('name');

// $(this).css('background','url(img/'+imgName+')');


// //create  a limit for 2 seconds
// // array for limit for 2 cards to hit 0.
// //if two cards are the same, set the class block on them so they can't go back under.

// });
// });