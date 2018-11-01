
$(function(){
  let memoryGame = new MemoryGame(cards);
  
  memoryGame.shuffleCards();

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
    memoryGame.pickedCards.push($(this).parent(".card")); 
    $(this).removeClass('back').addClass('front');
    $(this).siblings().removeClass('front').addClass('back');
    
    if(memoryGame.pickedCards.length === 2){
      memoryGame.checkIfPair(memoryGame.pickedCards[0].attr('data-card-name'), memoryGame.pickedCards[1].attr('data-card-name'));
    }                 
  })

})
 
  



