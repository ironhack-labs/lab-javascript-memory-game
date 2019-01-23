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

  // Para hacer el shuffle del array
  //var shuffledArray = memoryGame.shuffleCards(cards)
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

    //Verificar si son dos cartas
    if (memoryGame.pickedCards.length < 2){
      var nameCard = $(this).attr('name')
      memoryGame.pickedCards.push(nameCard)
      console.log(memoryGame.pickedCards)
      //Voltear cartas
      $(this).toggleClass('back')
      $(this).next().toggleClass('back')
    }


    //Ya que son dos cartas
    if(memoryGame.pickedCards.length == 2){
      var evaluation = memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])
      if (evaluation) {
        //Reset array
        memoryGame.pickedCards.splice(0,2)
        console.log(memoryGame.pairsGuessed)
      } else {
        //Reset array, voltear cartas

        memoryGame.pickedCards.splice(0,2)
       // setTimeout(function(){ 
        $(this).next().toggleClass('back')
        $(this).toggleClass('back')
        

        console.log("false desde if")
     // },700)
      }
  
    }


    //Actualizar score
    $("#pairs_clicked").text(memoryGame.pairsClicked)
    $("#pairs_guessed").text(memoryGame.pairsGuessed)

    //Revisar si gano

    if(memoryGame.isFinished()){
      alert("Ganaste!")
      //$('.card').addClass("back front")
      $('.card').next().toggleClass('back')
      $('.card').toggleClass('back')


    }
    

    
    // TODO: write some code here
  });
});


