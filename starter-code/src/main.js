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
  memoryGame.shuffleCards ();
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
    // TODO: write some code here

     if (memoryGame.pickedCards.length === 2) {
       
        memoryGame.pickedCards = [];
         $(this).removeClass('front');
         //$(this).addClass('back');
         $(this).siblings().addClass('back');
         $(this).siblings().addClass('front');
        
      
      } else {
              //sumamos 1 carta al array
              memoryGame.pickedCards.push(this);

              //Sumamos y mostramos en pantalla el numero de cartas seleccionas
              memoryGame.pairsClicked++;
              $(".pairs_clicked").html ("<span id=" + "pairs_clicked>" + memoryGame.pickedCards + "</span></p>"); //(revisar si esta bien hecho)
            
              //voltear la carta seleccionada
              $(this).addClass('front');
              $(this).removeClass('back');
              $(this).siblings().addClass('back');
              $(this).siblings().addClass('front');

              
          
               //sumamos 1 carta al array
              // memoryGame.pickedCards = memoryGame.pickedCards.push($(this).parent());
               
               //Sumamos y mostramos en pantalla el numero de cartas seleccionas
               memoryGame.pairsClicked++;
               $(".pairs_clicked").html ("<p>Pairs Clicked: <span id=" + "pairs_clicked>" + memoryGame.pickedCards + "</span></p>"); //(revisar si esta bien hecho)

               //voltear la carta seleccionada
               $(this).addClass('front');
               $(this).removeClass('back');
               $(this).siblings().addClass('back');
               $(this).siblings().addClass('front');
            

          if (memoryGame.checkIfPair){

            //bloquear las cartas levantadas, cambiar la clase de la carta a .card .back.blocked
            //$(".pairs_guessed").text
            //sumamos una pareja acertada y la pintamos en pantalla
            memoryGame.pairsGuessed++;
            
            }
        }
      });
});

