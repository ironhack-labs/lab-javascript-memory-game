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
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
 
  // Bind the click event of each element to a function
  
  

$('.back').on('click', function () {
   //front to become back

  if(memoryGame.pairsClicked<2){
    $(this).toggleClass('back');
    $(this).toggleClass('front');
  
    $(this).next().toggleClass('front');
    $(this).next().toggleClass('back');

    //if((memoryGame.pickedCards.length)<2){
      memoryGame.pickedCards.push($(this).parent().prop('id'));
      //console.log("size",memoryGame.pickedCards.length);
   // }
  }
  console.log(memoryGame.pickedCards);

//check if pair
    var result=memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]);
  if(memoryGame.pairsClicked>=2){
    
    if(result===false){
      console.log("u're there");
      console.log("arr", memoryGame.pickedCards[0]);
      setTimeout(function(){
       // $('#'+memoryGame.pickedCards[0]+':first-child').removeClass('front');
       // $('#'+memoryGame.pickedCards[0]+':first-child').addClass('back');
        //$('#'+memoryGame.pickedCards[0]+':first-child').next().removeClass('back');
        //$('#'+memoryGame.pickedCards[0]+':first-child').next().addClass('back');
        $('#'+memoryGame.pickedCards[0]+':nth-child(1)').toggleClass('front');
        $('#'+memoryGame.pickedCards[0]+':nth-child(1)').toggleClass('back');
        $('#'+memoryGame.pickedCards[0]+':nth-child(2)').toggleClass('back');
        $('#'+memoryGame.pickedCards[0]+':nth-child(2)').toggleClass('front');


        $('#'+memoryGame.pickedCards[1]+':nth-child(1)').removeClass('front');
        $('#'+memoryGame.pickedCards[1]+':nth-child(1)').addClass('back');
        $('#'+memoryGame.pickedCards[1]+':nth-child(2)').next().removeClass('back');
        $('#'+memoryGame.pickedCards[1]+':nth-child(2)').next().addClass('back');
      }, 2000);
      console.log('now here');
     
    }
    
      
    

  }
  

});

  

});

/*if(result==false){
    var count=0;
    $('.front').on('click', function () {
      
        $(this).toggleClass('front');
        $(this).toggleClass('back');
        $(this).next().toggleClass('back');
        $(this).next().toggleClass('front');
      
     
     });*/

