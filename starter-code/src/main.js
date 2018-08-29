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
  memoryGame.shuffleCard(cards);
  var html = '';
  memoryGame.cards.forEach(function (picture) {
    html += '<div class= "card" id="card_' + picture.name + '">';
    html += '<div class="back"';
    html += '    name="'       + picture.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + picture.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $("#memory_board").html(html);

  document.getElementById("memory_board").innerHTML = html;


  // Bind the click event of each element to a function
  $(".back").click(function () {
    // TODO: write some code here
    $(".back").on("click", function () {
       $(this).toggle();
       $(this).parent().find(".front").toggle();
    
       memoryGame.currentPair.push($(this));

       if (memoryGame.currentPair.length === 2){
        var result = memoryGame.checkIfPair(memoryGame.currentPair[0], memoryGame.currentPair[1]);
        $("#pairs_clicked").text(memoryGame.pairsClicked);
        $("#pairs_guessed").text(memoryGame.pairsGuessed);
   
        $(".back").addClass("blocked");
        
        if(!result){
          setTimeout(function(){
            theGame.currentPair[0].toggle();
            theGame.currentPair[0].parent().find(".front").toggle();
            theGame.currentPair[1].toggle();
            theGame.currentPair[1].parent().find(".front").toggle();
            theGame.currentPair = [];
            $(".back").removeClass("blocked");
           },1000);
         } else{
           memoryGame.currentPair = [];
           $(".back").removeClass("blocked");
         }
         
      }
   
      /*if(memoryGame.finished()){
        setTimeout(function(){   
        }, 100);
      }*/
   
  });
});


