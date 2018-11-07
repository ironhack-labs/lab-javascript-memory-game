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
var pickedObj = [];
var bandera = true;

$(document).ready(function(){
  console.log('chuffle');
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

  // Bind the click event of each element to a function
  $('.back').click(function () {
    console.log('boltear');
    var nameImg = $(this).attr('name');
    var nameSolo = nameImg.slice(0,nameImg.length-4);
    if(!bandera){
        pickedObj[0].toggleClass('back front');
        pickedObj[1].toggleClass('back front');
        pickedObj = [];
        memoryGame.pickedCards = [];
    }

    $(this).toggleClass('back front');
    $(this).siblings().toggleClass('back front');
      pickedObj.push($(this));

    memoryGame.pickedCards.push({
        name : nameSolo,
        img : nameImg
    });
    if(memoryGame.pickedCards.length === 2){
      //console.log(memoryGame.checkIfPair(memoryGame.pickedCards[0].attr('name'),memoryGame.pickedCards[1].attr('name')))
      if(memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])){
        console.log('par');
        bandera = true
        //dont turn
          //$(this).addClass('dont');
          //$(this).siblings.addClass('dont');
      }else{
        console.log('impar');
        bandera = false;
        /*
        pickedObj[0].removeClass('front');        ;
        pickedObj[0].toggleClass('back front');        ;
        pickedObj[1].removeClass('front');
        pickedObj[1].toggleClass('back front');
        console.log(pickedObj[0].attr('name'));
        console.log(pickedObj[1].attr('name'));*/
      }//*/
        /*memoryGame.pickedCards = [];
        pickedObj = [];*/
    }
      console.log(memoryGame.pickedCards);
    //$(this).toggleClass('front');
    //$('.front').toggleClass('back');
    // TODO: write some code here
  });
});


