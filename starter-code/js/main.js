const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

let memoryGame = new MemoryGame(cards);

function reset(){
  document.querySelectorAll('.card').forEach(card =>{
    
  })
}

document.addEventListener("DOMContentLoaded", function (event) {
  let html = '';
  memoryGame.shuffleCards();
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory_board').innerHTML = html;
  let name = [];
  let div1 = [];
  let name1, name2;
  name1 = name[0];
  name2 = name[1];


  let card1 = null;
  let card2 = null;
  let card1Tudo, card2Tudo;

  // Bind the click event of each element to a function

  document.querySelectorAll('.back').forEach(card => {
    card.onclick = function () {
      // TODO: write some code here
      // document.querySelectorAll('.card')[1].getAttribute('data-card-name')

      if (card1 == null) {
        card1 = card;
        console.log('carta1',card1);
        console.log(card1.getAttribute('name'));
        card1Tudo = card.parentNode;
        card1.classList.toggle('front');
        card1.classList.toggle('back');
        card1.nextSibling.classList.toggle('front');
        card1.nextSibling.classList.toggle('back');
      } else if (card2 == null) {
        card2 = card;
        console.log('carta2',card2);
        console.log(card2.getAttribute('name'));
        card2Tudo = card.parentNode;
        card2.classList.toggle('front');
        card2.classList.toggle('back');
        card2.nextSibling.classList.toggle('back');
        card2.nextSibling.classList.toggle('front');
      }

      if (card1 != null && card2 != null) {
        if (memoryGame.checkIfPair(card1.getAttribute('name'), card2.getAttribute('name'))) {
          console.log("foiiii");
          card1 = null;
          card2 = null;
          card1Tudo = null;
          card2Tudo = null;
        } else {
          setTimeout(() =>  {console.log("Não");
          card1.classList.toggle('back');
          card1.classList.toggle('front');
          card1.nextSibling.classList.toggle('front');
          card1.nextSibling.classList.toggle('back');
          
          card2.classList.toggle('back');
          card2.classList.toggle('front');
          card2.nextSibling.classList.toggle('front');
          card2.nextSibling.classList.toggle('back');

          card1 = null;
          card2 = null;
          card1Tudo = null;
          card2Tudo = null;
        },1200)
        }
        document.getElementById('pairs_clicked').innerText = memoryGame.pairsClicked;
        document.getElementById('pairs_guessed').innerText = memoryGame.pairsGuessed;

      }



    };
  });

  /*
    document.querySelectorAll('.back').forEach( card => {
      card.onclick = function() {
        // TODO: write some code here
        // document.querySelectorAll('.card')[1].getAttribute('data-card-name')
        name.push(card.getAttribute('name'));
        console.log("000",name);
        
        name1 =card.getAttribute('name');
        console.log("111111111",name1);
  
        let getClass = card.nextSibling;
        card.setAttribute("class", "front");
        getClass.setAttribute("class", "back");
        console.log('Card clicked: ', card);
        console.log('Card front: ', getClass);
  
        
      };
    });
  document.querySelectorAll('.card').forEach( card => {
    card.onclick = function() {
      // TODO: write some code here
      // document.querySelectorAll('.card')[1].getAttribute('data-card-name')


      
      let backs = card.getElementsByClassName('back')[0];
      backs.setAttribute("class","front")
      let getClass = backs.nextSibling;
      getClass.setAttribute("class", "back");
      console.log('Card clicked: ', backs);
      console.log('Card front: ', getClass);

      name.push(backs.getAttribute('name'));
      console.log("000",name);
      div1.push(backs);
      div1.push(getClass);

      console.log("div",div1);

      if(name.length == 2){
        console.log('foiiiiii',memoryGame.checkIfPair(name[0],name[1]));
        console.log(name.length);
        if(memoryGame.checkIfPair(name[0],name[1])){
          name.pop();
          name.pop();

        }else {
          name.pop();
          name.pop();

          function change(){
          backs.setAttribute("class","back")
          getClass.setAttribute("class", "front");}
          setTimeout(change,1000);

        }
      }else {
        console.log("Ainda não");
        console.log(name.length);
        console.log(name[0]);
        console.log(name[1]);
      } 
      
    
    });
   */

});


