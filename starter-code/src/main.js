$(document).ready(function(){

// -------------------------------------------------------------------------------------------
// Set up new game
// -------------------------------------------------------------------------------------------

var memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards();

// -------------------------------------------------------------------------------------------
// Set up all cards
// -------------------------------------------------------------------------------------------

// Create the html for all cards
var html = '';// Run things

memoryGame.cards.forEach((pic) => {
  html += '<div class="card" data-card-name="'+ pic.name +'">';
  html += '  <div class="back" name="'+ pic.img +'"></div>';
  html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
  html += '</div>';
});

// Add in the card html
$("#memory_board").html(html);

// Add click events to each card - on the "back" class
$(".back").on("click", () => {     // Don't need to iterate in jquery - can add events to all elements in array at once

    $(event.target).toggleClass("back front");   // Change back to front on the div clicked
    $(event.target).siblings().toggleClass("back front");   // Change front to back of the sibling div
  
    // Turning cards
    if(memoryGame.cardsTurned === 0) {
      // First card turned
      memoryGame.turnCard();
      memoryGame.saveCardOne();
      memoryGame.$card1Node = $(event.target);
    } else if(memoryGame.cardsTurned === 1) {
      // Second card turned
      memoryGame.turnCard();
      memoryGame.saveCardTwo();
      memoryGame.$card2Node = $(event.target);
      memoryGame.addToPairsClicked();

      if(memoryGame.isPair()) {   // Check if we have a pair - (if false, it waits 1s before returning false) 
        // If a pair is found
        memoryGame.addToPairsFound();
        console.log(`Pair found! Num of pairs found is: ${memoryGame.pairsFound}`);
        } else {
        // If a pair is not found - flip the TWO CARDS SELECTED back (but wait a bit)
        console.log("Pair not found");
        setTimeout( () => {
          memoryGame.$card1Node.toggleClass("back front");
          memoryGame.$card1Node.siblings().toggleClass("back front");
          memoryGame.$card2Node.toggleClass("back front");
          memoryGame.$card2Node.siblings().toggleClass("back front");
        }, 600);
      };
      memoryGame.cardsTurned = 0; // Reset
    };


    // Update counters
    $("#pairs_clicked").html(memoryGame.pairsClicked);
    $("#pairs_found").html(memoryGame.pairsFound);

    // Check if finished each click - bit wasteful but keeps logic simpler
    
      // Define reset game function
      
    
    if(memoryGame.isFinished()) {
      console.log("Finished!");
        setTimeout( () => {alert(`Well done - you won in ${memoryGame.pairsClicked} guesses!`);}, 500);
    }; 

  });



});

