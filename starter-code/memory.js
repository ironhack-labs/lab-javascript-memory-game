//******************************************************************
// Game Logic
//******************************************************************

//******************************************************************
// HTML/CSS Interactions
//******************************************************************


$(document).ready(function() {

    // $('img').attr("src"  , 'http://imgh.us/flipflop.jpg');
    // var origSource = $('img').attr("src");

    // $('img').click(function(){
    // $(this).next().show();
    // $(this).hide();


    $('img').click(function() {
        if ($(this).hasClass('imgFlop')) {
            $(this).toggle();
            $(this).next().toggle();
        } else {
            $(this).toggle();
            $(this).prev().toggle();
        }
    });

    var imgArray = [
      'img/aquaman.jpg',
      'img/batman.jpg',
      'img/captain-america.jpg',
       'img/fantastic-four.jpg',
       'img/flash.jpg',
       'img/green-arrow.jpg',
       'img/ironman.jpg',
       'img/spiderman.jpg',
       'img/superman.jpg',
       'img/the-avengers.jpg',
       'img/thor.jpg'
     ];

    var rand0mImg = imgArray[Math.floor(Math.random() * imgArray.length)];

    console.log(rand0mImg);

    // $('.img').attr('src').forEach().replaceWith('rand0mArray');
//     $('img').each(function () {
//    $(this).attr('src').replaceWith(rand0mArray);
//
// });

$('img').each(function() {
    // let's say we only want to alter the src
    // for images of ponies
    if ($(this).attr('src') == 'img/aquaman.jpg') {
        $(this).attr('src').replaceWith(rand0mImg);
      }
    else {

    }
});
});
