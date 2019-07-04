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

  console.log($(".back"));

  // Give each div with a "back" class an event on click
  $(".back").on("click", () => {     // Don't need to iterate in jquery - can add events to all elements in array at once
      $(event.target).toggleClass("back front");   // Change back to front on the div clicked
      $(event.target).siblings().toggleClass("back front");   // Change front to back of the sibling div
      console.log('Card clicked')
    })

});

