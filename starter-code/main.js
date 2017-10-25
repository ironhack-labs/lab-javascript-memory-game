
// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;
var cont=0;
var click= true;
$(document).ready(function(){

  var card1,card2;

  memoryGame = new MemoryGame();

  console.log(memoryGame);

  var html = '';

//llamada a funciones prototipadas del constructuror
  memoryGame.shuffleCards();


  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

   html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    name="'       + pic.name +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  $(".card").on("click",function(){
    //controlamos los click y asignamos card1 y card2 a variables
    if(click == true){
    card1 = $(this).attr("name");
    console.log("card1-->", card1);
    $(this).prev().removeClass("back");
    $(this).prev().addClass("front");
    $(this).prev(".back").css("display","none");


    click = false;
  }else{
    card2 = $(this).attr("name");
    $(this).children().addClass("back");
    $(this).prev().css("display","none");
      $(this).prev(".back").removeClass("back");
    //$(this).prev().css("display","auto");
    $(this).prev(".back").removeClass("front");
    console.log("card2-->",card2);
    click = true;
  }
  //
    if (card1 == card2){
      //las tarjetas se quedan front y se añaden a array completados
      console.log("es pareja!!! ", card1+ "--"+ card2);
    }else{
      //las tarjetas back
      console.log("noooo es pareja", card1+ "--"+ card2);
    }
    console.log(click);
  });

});
