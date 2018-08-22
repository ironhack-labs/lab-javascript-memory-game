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

  shuffleCards(cards);

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


  $('.front').toggle();// default picture hidding state

  //====================== virables for function click
  let previusCard;
  let counterClicked = 0;
  let counterGuessed = 0;
  let counterTurn = 0; // counter for toggleing back two cards

  // Bind the click event of each element to a function
  $('.back').click(function () {

     $(this).toggle();
     $(this).siblings().toggle();
     counterTurn++;

     if (counterTurn === 1 ) {
      previusCard = $(this);
     }

  if (counterTurn === 2) {

    counterClicked++;
    console.log(`counterClicked ${counterClicked}`);
    $("#pairs_clicked").html(counterClicked);

    // must Not toggle until second back is displayed
    $(".back").addClass("blocked");

            if (previusCard.attr('name') ===  $(this).attr('name') ) {
                  
                  counterGuessed++;
                  console.log(`counterGuessed ${counterGuessed}`);
                  $("#pairs_guessed").html(counterGuessed);

                  //must Not toggle until second back is displayed
                  $(".back").removeClass("blocked");
            
            } else {
                setTimeout(()=>{
                // toggle back after 1 second
                $(this).toggle();
                $(this).siblings().toggle();
          
                previusCard.toggle();
                previusCard.siblings().toggle();

                //must Not toggle until second back is displayed
                $(".back").removeClass("blocked");

                },500);  
            }
    
    counterTurn = 0;
  }

  if (counterGuessed === 12) {
    endGame();
  }

  }); // end function click

}); // end ready function 

///////// shuffle function 
function shuffleCards(theCards) {
  for (let i = theCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [theCards[i], theCards[j]] = [theCards[j], theCards[i]]; // eslint-disable-line no-param-reassign
  }
  return theCards; 
}


// function shuffleCards(theCards) {

//       var currentIndex = theCards.length, temporaryValue, randomIndex;

//       // While there remain elements to shuffle...
//       while (0 !== currentIndex) {

//         // Pick a remaining element...
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;

//         // And swap it with the current element.
//         temporaryValue = theCards[currentIndex];
//         theCards[currentIndex] = theCards[randomIndex];
//         theCards[randomIndex] = temporaryValue;
//       }

//       return theCards; 

// }

// function that restard everything on end 
function endGame() { 

  setTimeout(()=>{
  alert("YAY YOU ONE");

  window.location.reload();
  },500);

}


