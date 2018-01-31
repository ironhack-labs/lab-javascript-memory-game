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

$(".btn-again").on("click", function(){

  $(".btn-again").text("Reiniciar");

  $(document).ready(function(){

    var memoryGame = new MemoryGame(cards);
    var html = '';
    var random = memoryGame.shuffleCard(memoryGame.cards);
    console.log(random);
    console.log(memoryGame.cards);
    random.forEach(function (pic, index) {
      html += '<div class= "card" id="card_' + pic.name + '">';
      html += '<div class="back"';
      html += '    name="'       + pic.img +  '">';
      html += '</div>';
      html += '<div class="front" ';
      html += 'style="background: url(img/' + pic.img + ') no-repeat">';
      html += '</div>';
      html += '</div>';
    });
  
    // Añade todos los div's al HTML
    document.getElementById('memory_board').innerHTML = html;
    
  
    //Inicializa el contador de clicks
    var clickCount= 0;
  
    //Inicializa el arreglo que va a contener las cartas mostradas
    var cardsClicked = [];
  
  
  $('.back').on('click', function () {
    
    //Cambia a no visible la clase .back
     $(this).css("display", "none");
     $(this).siblings().addClass("back");
  
     //Pushea el arreglo, el nombre de la carta. .attr("name") me da el valor del atributo name del selector(en este caso.back)
     cardsClicked.push($(this).attr("name"));
  
     //Aumenta el contador de clicks
     clickCount++;
  
     //Si ya se voltearon dos cartas
     if (clickCount === 2){
       //Guardamos los valores del arreglo, pues JS al ser asincrono va a reiniciar el arreglo antes de que se corra el codigo para voltear la carta
       var first = cardsClicked[0];
       var second = cardsClicked[1];
  
       //Checa si la pareja de cartas es diferente
       if (memoryGame.checkIfPair(first, second) === false){
  
         //Hace una pausa para que de tiempo de voltear ambas cartas
       setTimeout(function(){
  
        //Voltea la carta 1
        $(".back[name='"+first+"']").siblings().removeClass("back");
        $(".back[name='"+first+"']").css("display", "block");
  
        //Voltea la carta 2
        $(".back[name='"+second+"']").siblings().removeClass("back");
        $(".back[name='"+second+"']").css("display", "block"); 
       }, 500);
  
       //Si las cartas son iguales
       } else {
         //Actualiza en el score board los pares adivinados
        $("#pairs_guessed").text(memoryGame.pairsGuessed);
  
        //Checa si ya se adivinaron todos los pares
        if(memoryGame.finished()){
          
          $(".btn-again").text("Jugar de nuevo");

          //Hace una pausa para que se muestre el mensaje de alerta despues de voltear todas las cartas
          setTimeout(function(){
  
            //Manda el mensaje de alerta
            alert("Ganaste");
            
           }, 500);
          
        }
       }
  
       //Actualiza en el score board el numero de pares clickeados
       $("#pairs_clicked").text(memoryGame.pairsClicked);
  
       //Reinicia el contador de clicks y el arreglo con las cartas
       clickCount = 0;
       cardsClicked = [];
     }
  });
   
  });
 
})
