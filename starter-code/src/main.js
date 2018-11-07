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

var tarjetas = []

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCards()
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
  //var backi = $('.front')
  
  $('.back').click(function (e) {
    //$(this).siblings().attr('class','back')
    var pares = this.pairGuessed = 0
    var superH = $(this).parent().attr("data-card-name")
    $(this).removeClass('back')
    $(this).addClass('front')

    $(this).next().removeClass('front')
    $(this).next().addClass('back')
    console.log("back")
    console.log(e)
    console.log(e.target)
    console.log(superH)

    tarjetas.push(superH)

    console.log(tarjetas)

    memoryGame.checkIfPair(tarjetas[0], tarjetas[1])

    console.log(this.pairGuessed)

    if(tarjetas.length == 2){
      tarjetas=[]
    }
    //console.log(tarjetas)


  /*else{
    $(this).next().removeClass('front')
    $(this).next().addClass('back')

    $(this).removeClass('back')
    $(this).addClass('front')
  }*/
    //$('back').siblings(".back").css(".front")
    // TODO: write some code here
  })
  
})


