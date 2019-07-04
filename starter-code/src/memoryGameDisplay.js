$(document).ready(function(){

  // -------------------------------------------------------------------------------------------
  // Set up all cards
  // -------------------------------------------------------------------------------------------

  // Create the html for all cards
  var html = '';
  memoryGame.cards.forEach((pic) => {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add in the card html
  $("#memory_board").html(html);

  // Add click events to each "back" class

  $(".back").on("click", () => {     // Don't need to iterate in jquery - can add events to all elements in array at once
      $(event.target).toggleClass("back front");   // Change back to front on the div clicked
      $(event.target).siblings().toggleClass("back front");   // Change front to back of the sibling div
    
      console.log('Card clicked');
    
      if(memoryGame.cardsTurned === 0) {
        memoryGame.cardTurned1 = $(event.target).attr("name");
        memoryGame.cardsTurned +=1;
      } else {
        memoryGame.cardTurned2 = $(event.target).attr("name");
        console.log(memoryGame.checkIfPair(memoryGame.cardTurned1, memoryGame.cardTurned2));
        memoryGame.cardsTurned = 0;
      };
    
    })

});

