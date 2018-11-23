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
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);
  //las barajeo
  memoryGame.shuffleCards();
  // Bind the click event of each element to a function
  $('.back').click(function() {
    //coge la carta hemos pinchado y la da la vuelta
    $(this).addClass('front');
    $(this).removeClass('back');
    $(this).siblings().addClass('back');
    $(this).siblings().removeClass('front');
    //meto la carta en el array de cartgas cogidas
    memoryGame.pickedCards.push($(this).parent());
    
    if (memoryGame.pickedCards.length === 2){
      setTimeout(function(){

        //compruebo si son iguales
        if (!memoryGame.checkIfPair(memoryGame.pickedCards[0].html(), memoryGame.pickedCards[1].html())){
          //sumo una al contador de pares vistos
          console.log(memoryGame.pairsClicked,'clicked');
          console.log($('.pairs_clicked'));
          //$('pairs_clicked').text(memoryGame.pairsClicked);
          document.querySelector('#pairs_clicked').innerText=memoryGame.pairsClicked;
          //si son distintas las vuelvo a dar la vuelta al segundo
          var card = memoryGame.pickedCards[0].children();
          card[0].className ='back';
          card[1].className ='front';
                   
          var card1 = memoryGame.pickedCards[1].children();
          card1[0].className ='back';
          card1[1].className = 'front';
                           
        } else {
        //si son iguales
        //aumento el contador de pares adivinados y los dejo dados la vuelta
          document.querySelector('#pairs_guessed').innerText=memoryGame.pairsGuessed;
          document.querySelector('#pairs_clicked').innerText=memoryGame.pairsClicked;
          //$('.pairs_guessed').append(memoryGame.pairsGuessed);
        }
        //vacío el array para empezar de nuevo
        memoryGame.pickedCards = [];
        
      },500);  
    }
    if (memoryGame.isFinished()){
      prompt('You win!!');
    }
  });
  
  
});


