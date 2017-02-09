
$(document).ready(function(){

  var board = $('#memory-board');//Playing area
  var cards = $('.card');//All cards

   cards.flip();//Make cards flippable
  $('.back').css({opacity:1});//Show all cards

  //Shuffle
  while (cards.length) {
        board.append(cards.splice(Math.floor(Math.random() * cards.length), 1)[0]);
    }

  //GameLogic
  var score = 0 ;//Number of tries
  var winScore = 0;//get to 12 to win the game
  var scoreText = $('#scoreText');//Score Text on Dom
  var firstCard, secondCard;//Current opened cards(card selector)

  $('.card').click(function(){//Click on any card
    if(!$(this).hasClass('disabled')){ //Check if card is still in the game

    score++;
    scoreText.html(score);//Update score on DOM

    if(!firstCard){ //Check if it is first opened card or not
      firstCard = this;

    }else if(firstCard == this){ //Check for click on the same card twice
      firstCard = undefined;

    }else {
      secondCard = this;

      if(cardsMatch(firstCard,secondCard)){ //Check if cards are matching
        $(firstCard).off(".flip");//Disable flip feature
        $(secondCard).off(".flip");
        $(firstCard).addClass('disabled');//Disable cards
        $(secondCard).addClass('disabled');
        winScore ++;
        if(winScore == 12){ win(); }//Check if you won the game
        firstCard = undefined;//Reset card selector
        secondCard = undefined;
      }else{//Mismatch -> hide cards
        var c1 = firstCard;//copy values for async function
        var c2 = secondCard;
        firstCard = undefined;//Reset card selector
        secondCard = undefined;
        setTimeout(function(){$(c1).flip(false);},600);//Flip back
        setTimeout(function(){$(c2).flip(false);},600);
      }
    }
  }
  });

});

function cardsMatch(card1 , card2){
  if(card1)
  return ($(card1).find('img').attr('src') === $(card2).find('img').attr('src'));//comparing sources
}

function win(){
    $('h1').html('CONGRATULATIONS !!! YOU ARE THE WINNER');
}
