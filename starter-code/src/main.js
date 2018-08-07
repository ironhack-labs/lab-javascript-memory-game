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
    var theGame = new MemoryGame(cards);
    theGame.newCardArray();
    var html = '';
    theGame.cards.forEach(function (pic) {
      
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
    
    $('.back').on('click', function () {
      $(this).toggle();
      $(this).parent().find(".front").toggle();

      theGame.pickedCards.push($(this));

      if(theGame.pickedCards.length === 2){
        var result = theGame.checkIfPair(theGame.pickedCards[0], theGame.pickedCards[1]);
        $('#pairs_Clicked').text(theGame.pairsClicked);
        $('#pairs_Clicked').text(theGame.pairsGuessed);
        
          $('.back').addClass('blocked');

        if(!result){
          setTimeout (function(){
            theGame.pickedCards[0].toggle();
            theGame.pickedCards[0].parent().find('.front').toggle();
            theGame.pickedCards[1].toggle();
            theGame.pickedCards[1].parent().find('.front').toggle();
            theGame.pickedCards = [];
        $('.back').removeClass('blocked');
      },1000);
    }else{
      theGame.pickedCards=[];
      $('.back').removeClass('blocked');
    } 
  } 
      
if (theGame.finished()){
  setTimeout(function(){
    alert('You did it');
  },100);
  }  
  });



    });