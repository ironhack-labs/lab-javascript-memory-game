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
 
 
  $('.front').toggle();// default picture hidding state
 

  var firstCard;

  // Bind the click event of each element to a function
  var clickCounter = 0;
  var clickSuccess = 0;

  $('.back').click(function () {
    // TODO: write some code here
  $(this).toggle();
  $(this).siblings().toggle();  
  clickCounter += 1;
  

  if (clickCounter === 1 || clickCounter%2 === 1){
    firstCard = $(this);

  }
    
  else if(clickCounter%2 ===0){
    // console.log('hey');
    
    
    $('.back').addClass("blocked");

    $("#pairs_clicked").text(clickCounter/2);

    if (! (firstCard.attr('name') === $(this).attr('name')) ){
  
      setTimeout(()=>{
        $(this).toggle();
        $(this).siblings().toggle();

        firstCard.toggle();
        firstCard.siblings().toggle();
        $('.back').removeClass("blocked");
        

      }, 500)

    }

    else{
      clickSuccess += 1;
      console.log(clickSuccess)
      $("#pairs_guessed").text(clickSuccess);
      $('.back').removeClass("blocked");

      
    }

  }

  if(clickSuccess === 12){
      
   setTimeout(()=>{
   alert("Congratulations!!");
   window.location.reload();

  },1000) 
}
  
  
  





  return firstCard;

  });
 }); // end function click
