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
      //copiado de un stackoverflow. leido y entendido.
        if ((memoryGame.pickedCards.length<2)&&(this.parentNode.firstChild.className=="back")){ 
            this.parentNode.firstChild.style.background=this.parentNode.lastChild.style.background; //levantar carta
            this.parentNode.firstChild.className="front";
            this.parentNode.lastChild.className="back";    
            memoryGame.pickedCards.push(this);
            if (memoryGame.pickedCards.length==2){
              memoryGame.pairsClicked++;
              $("#pairs_clicked").html(memoryGame.pairsClicked.toString());
              if (memoryGame.pickedCards[0].parentNode.id==memoryGame.pickedCards[1].parentNode.id){
                memoryGame.pairsGuessed++;
                $("#pairs_guessed").html(memoryGame.pairsGuessed.toString());
    
                memoryGame.pickedCards=[];
              }else {
                setTimeout(function(){
                memoryGame.pickedCards[0].parentNode.firstChild.style.background=""; //darles la vuelta
                memoryGame.pickedCards[1].parentNode.firstChild.style.background="";
                memoryGame.pickedCards[0].parentNode.firstChild.className="back";
                memoryGame.pickedCards[0].parentNode.lastChild.className="front";
                memoryGame.pickedCards[1].parentNode.firstChild.className="back";
                memoryGame.pickedCards[1].parentNode.lastChild.className="front";
                memoryGame.pickedCards=[];
                
                },1500 );
              }
              
              
            } 
            
        }
    });
    }); 