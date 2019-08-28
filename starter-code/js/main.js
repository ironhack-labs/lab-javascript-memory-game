const cards = [
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

let memoryGame = new MemoryGame(cards);

document.addEventListener("DOMContentLoaded", function(event) { 
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach( card => {
    card.onclick = function() {
      ++memoryGame.pickedCards;
      card.nextSibling.className= "back";
      card.className = "MyClass";
      let cardA= document.querySelectorAll(".MyClass")[0];
      let cardB= document.querySelectorAll(".MyClass")[1];
      if(memoryGame.pickedCards == 2) {
        ++memoryGame.pairsClicked;
        document.querySelector("#pairs_clicked").innerText= memoryGame.pairsClicked;

        if(memoryGame.checkIfPair(cardA, cardB)) {
          ++memoryGame.pairsGuessed;
          document.querySelector("#pairs_guessed").innerText= memoryGame.pairsGuessed;
        }
      



        setTimeout(() => {
            
          document.querySelectorAll(".MyClass")[0].className = "back";
          document.querySelectorAll(".MyClass")[0].nextElementSibling.className= "front";
          document.querySelectorAll(".MyClass")[1].className = "back";
          document.querySelectorAll(".MyClass")[1].nextElementSibling.className= "front";
        }, 1000);
        





      }
      
     
  //     card.nextSibling.className= "front";
  //     // else {
  //     //   if (memoryGame.isFinished(cardA, cardB)){
          
  //     //   }
  //     // }
       
    };
  });
});


// card.className = "MyClass"
// let cardA= document.querySelectorAll(".MyClass")[0];
// let cardB= document.querySelectorAll(".MyClass")[1];
// if(document.querySelectorAll("MyClass").length==2 && cardA.getAttribute("name")==cardB.getAttribute("name")) {
//   memoryGame.pairsClicked++;
//   memoryGame.pairsGuessed++;
//   

// }

// card.nextSibling.className= "back";
// let cardName= card.getAttribute("name").substring(0, card.getAttribute("name").length-4);
// let cardObj = [memoryGame.cards.filter(x=> x.name==cardName.replace("-", " "))];

// console.log('Card clicked: ', cardObj, card);
// cardObj.forEach(card=>memoryGame.pickedCards.push(card))
