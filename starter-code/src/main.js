var cards = [
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
let memoryGame = new MemoryGame(cards);
// console.log(memoryGame.shuffleCards());
memoryGame.shuffleCards()

function flipCard(card) {
  let clickedCard = card.children[0]
  let divBack = clickedCard.classList[0]
  let divFront = card.children[1].classList[0]
   
   clickedCard.classList  = divFront
   card.children[1].classList = divBack  

}


document.addEventListener("DOMContentLoaded", function(event) {
  let html = "";
  memoryGame.cards.forEach(function(pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html +=
      '  <div class="front" style="background: url(img/' +
      pic.img +
      ') no-repeat"></div>';
    html += "</div>";
  });

  // Add all the div's to the HTML
  document.querySelector("#memory_board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(function(card) {
    card.onclick = (action) => {
        // let divClass = action.children[0]
        // let divFront = divClass.className[0]
        // let divBack = divClass.nextSibling.className[0]
        // divBack.style.display == `none`;

        memoryGame.pairsClicked++
        flipCard(card)
        // let cardDivs = [...action.currentTarget.children]
        // cardDivs.forEach(div => flipCard(div))
  
        // setTimeout(() => {
        //   if (!memoryGame.checkIfPair(flippedCards[0], flippedCards[1] !== true))
        //     cardDivs.forEach(div => flipCard(div))
        // }, 2000)
       
        let cardIdentifier = action.currentTarget.parentNode.getAttribute("data-card-name")
        console.log(cardIdentifier)
        document.querySelector(`#pairs_clicked`).innerHTML  = memoryGame.pairsClicked
        document.querySelector(`#pairs_guessed`).innerHTML = memoryGame.pairsGuessed
        memoryGame.pickedCards.push(cardIdentifier)
        console.log(memoryGame.pickedCards[0])
        console.log(memoryGame.pickedCards[1])
        memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])
              

        



        // memoryGame.checkIfPair(divFront, divBack)

      // TODO: write some code here


      console.log("Card clicked");
    };
  });
});
