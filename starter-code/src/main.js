var cardsArray = [
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
  var memoryGame1 = new MemoryGame(cardsArray);
  var html = '';
  memoryGame1.cards.forEach(function (element) {
    html += '<div class="card" data-card-name="'+ element.name +'">';
    html += ' <div class="back" name="'+ element.img +'"></div>';
    html += ' <div class="front" style="background: url(img/'+ element.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  
  $('.back').click(function() {
    //change class to front
   
    if (memoryGame1.pickedCards.length == 2) {
      
    } else {
    $(this).attr("class", "front")
    $(this).siblings().attr("class", "back")
    //var dash represents the name of the parent element that we clicked on.
    var dataDash = $(this).parent().data("card-name")

    //we call the picked method for memorygame1 to track what we clicked.
    memoryGame1.picked(dataDash)
    }
  })


//   // Bind the click event of each element to a function
//  var $sibl = $('.back').siblings();
//  $sibl.on('click', () => {
//    //$(selector).attr(attribute,value)
//    (this).attr('background',"url(img/'+ pic.img +')" )
 
//  })

//   //  $('.back').click(function () {
//   //     $(this).siblings(function(){
//   //           if('class == "back"'){
//   //             $(this).removeClass("back").addClass("front");
//   //           } else if ('class== front'){
//   //             $(this).removeClass("front").addClass("back");
//   //           }
//   // });
  



});


