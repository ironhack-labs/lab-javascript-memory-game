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

memoryGame.cards = memoryGame.shuffleCard(memoryGame.cards); // en memoryGame.cards, hemos guardado todas las cartas, llamamos la Function(metodo del objeto, propiedad del objeto) de shuffleCard, cual necesita un argumento que son las cartas a mezclar).
  memoryGame.cards.forEach(function (pic, index) { // aqui es donde se van a agreagar las cartas al HTML
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });


  var selectedCards = [];
  var counter = 0;

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function
$('.back').on('click', function () {
  $(this).css('display','none');
  $(this).siblings().addClass("back");// sibling = hermano de la tarjeta cual quitamos el display y hermano al cual lo agregamos un clase back :  back = classes que estan en el CSS
  counter++;
  selectedCards.push($(this).attr("name"))
  console.log(selectedCards);
  if (counter===2){
    var first =selectedCards[0];
    var second =selectedCards[1]
    if (memoryGame.checkIfPair(first, second)===false){
      setTimeout(function(){
      $(".back[name='"+first+"']").css('display','block');
      $(".back[name='"+first+"']").siblings().removeClass("back");
      $(".back[name='"+second+"']").css('display','block');
      $(".back[name='"+second+"']").siblings().removeClass("back")
      }, 500)
    } 
    $('#pairs_clicked').text(memoryGame.pairsClicked); 
    $('#pairs_guessed').text(memoryGame.pairsGuessed);
    // aqui, modificamos el HTML para reflejar el valor de las variables que creamos (memoryGame= nueve instancia de la CLASSE MemoryGame)
    setTimeout(function(){
    if(memoryGame.finished() === true){
      alert("Ganaste !!!")
    }
  },500)
    counter=0
  selectedCards=[]
    
  }


});
});


