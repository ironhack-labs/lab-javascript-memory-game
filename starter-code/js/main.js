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
//!!COMMENT NEXT LINE TO GET INITIAL ORDER
memoryGame.shuffleCards(); //each time the page is refreshed the cards are shuffled

window.addEventListener("load", event => {
  let html = "";
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory_board").innerHTML = html;


  // Bind the click event of each element to a function

  var selectedCards = []; // stores the two selected cards to compare them

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      
      console.log(`Card clicked: ${card}`);

      card.setAttribute("class","card turned");   //turn clicked card
      selectedCards.push(card);                   //add to selectedCards array
      if (selectedCards.length==2) {              //after selecting card no.2, compare them
        let card1 = selectedCards[0].getAttribute("data-card-name"); 
        let card2 = selectedCards[1].getAttribute("data-card-name");
        let result = memoryGame.checkIfPair(card1,card2);
        if (result == false) {                    //if there is no match, turn the cards after 1.5s
          setTimeout(()=>{selectedCards.forEach(e => {e.setAttribute("class","card")});
          selectedCards =[];},1000);              //clear selectedCards array
        } else {                                  //if there is match, leave the cards turned
          selectedCards =[];                      //clear selectedCards array
        }
      }

      //refresh displayed counters after each click
      document.getElementById("pairs_clicked").textContent=memoryGame.pairsClicked;
      document.getElementById("pairs_guessed").textContent=memoryGame.pairsGuessed;

      //check if game is finished
      if (memoryGame.isFinished()){
        document.getElementById("win").style.display = "flex";
      };

      


    });
  });
});
