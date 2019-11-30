const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener("load", event => {
  let html = "";
  memoryGame.shuffleCards()
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory_board").innerHTML = html;
  
  
  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {

      let parsCardsClick = document.getElementById('pairs_clicked')
      let parsCardsClickGessed = document.getElementById('pairs_guessed')
      card.classList.toggle('turned');

      memoryGame.pickedCards.push(card)

      console.log(memoryGame.pickedCards)


      if(memoryGame.pickedCards.length%2 === 0){

        let cardA = memoryGame.pickedCards[memoryGame.pickedCards.length-1];
        let cardB = memoryGame.pickedCards[memoryGame.pickedCards.length-2];

        let cardDataA = cardA.getAttribute('data-card-name');
        let cardDataB = cardB.getAttribute('data-card-name');
      
        let memoryResult = memoryGame.checkIfPair(cardDataA,cardDataB);

        //console.log('cardA', cardA, 'cardDataA', cardDataA )
        //console.log('cardB', cardB, 'cardDataB', cardDataB)
        //console.log('memoryResult', memoryResult)

        parsCardsClick.innerText = memoryGame.pairsClicked

        setTimeout(function(){
          if(memoryResult === false){
            cardA.classList.toggle('turned')        
            cardB.classList.toggle('turned')   
          } else {
            parsCardsClickGessed.innerText = memoryGame.pairsGuessed
          }

          let finish = memoryGame.isFinished();
          if(finish === true){
            alert('YOU WON!')
            location.reload();
          }

        }, 500)
        
      }

    });




  });
});
