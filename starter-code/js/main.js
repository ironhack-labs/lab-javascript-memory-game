const cards = [
  { name: "aquaman", img: "aquaman.jpg", id:"A1"},
  { name: "batman", img: "batman.jpg", id:"B1"},
  { name: "captain america", img: "captain-america.jpg", id:"C1" },
  { name: "fantastic four", img: "fantastic-four.jpg", id:"D1" },
  { name: "flash", img: "flash.jpg",id:"E1" },
  { name: "green arrow", img: "green-arrow.jpg",id:"F1" },
  { name: "green lantern", img: "green-lantern.jpg",id:"G1" },
  { name: "ironman", img: "ironman.jpg", id:"H1" },
  { name: "spiderman", img: "spiderman.jpg", id:"I1" },
  { name: "superman", img: "superman.jpg", id:"J1" },
  { name: "the avengers", img: "the-avengers.jpg", id:"K1" },
  { name: "thor", img: "thor.jpg", id:"L1" },
  { name: "aquaman", img: "aquaman.jpg", id:"A2" },
  { name: "batman", img: "batman.jpg", id:"B2" },
  { name: "captain america", img: "captain-america.jpg",id:"C2" },
  { name: "fantastic four", img: "fantastic-four.jpg",id:"D2" },
  { name: "flash", img: "flash.jpg",id:"E2" },
  { name: "green arrow", img: "green-arrow.jpg",id:"F2" },
  { name: "green lantern", img: "green-lantern.jpg",id:"G2" },
  { name: "ironman", img: "ironman.jpg", id:"H2" },
  { name: "spiderman", img: "spiderman.jpg", id:"I2" },
  { name: "superman", img: "superman.jpg", id:"J2" },
  { name: "the avengers", img: "the-avengers.jpg", id:"K2" },
  { name: "thor", img: "thor.jpg",id:"L2" }
];

// MDH: create MemoryGame instance
const memoryGame = new MemoryGame(cards);

var turnbackCardsId;
function turnbackCards(card1,card2){
  card1.classList.remove("turned");
  card2.classList.remove("turned");
  turnbackCardsId=null;
}

function updateResult(){
  switch(memoryGame.state){
    case ACTIVE:
      {
        document.getElementById("pairs_clicked").innerHTML=String(memoryGame.pairsClicked);
        document.getElementById("pairs_guessed").innerHTML=String(memoryGame.pairsGuessed);
      }
      break;
    case CANTRUN:
      alert("Still can't play! Your cards are bad!");
      break;
    case IDLE:
      if(confirm("Play again?"))startANewGame();
      break;
    case FINISHED:
      for(let card of document.querySelectorAll(".card"))
        card.classList.remove("turned");
      if(confirm("The game is over. Play again?"))startANewGame();
      break;
  }
}

function beep() { // doesn't seem to work!!
  var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
  snd.play();
}

function updateCards(){

  document.getElementById("pairs_clicked").innerHTML="0";
  document.getElementById("pairs_guessed").innerHTML="0";

  // shows the cards in the current order (typically called after a new game starts)
  let html = "";
  memoryGame.cards.forEach(pic => {
    // MDH: adding the unique id
    html += `<div class="card" data-card-name="${pic.name}" data-card-id="${pic.id}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });
  // Add all the divs to the HTML
  document.querySelector("#memory_board").innerHTML = html;

  // Bind the click event of each element to a function
  console.log("Card order:");
  document.querySelectorAll(".card").forEach(card => {
    let cardName=card.getAttribute("data-card-name");
    let cardId=card.getAttribute("data-card-id");
    console.log("\t"+cardName+":"+cardId);
    card.addEventListener("click", (event) => {
      // test if the card is showing!!!
      // user is NOT allowed to 'turn' a card
      if(!card.classList.contains("turned")){ // not turned yet
        if(!turnbackCardsId){
          card.classList.add("turned");
          let firstCard=memoryGame.getNotMatchingCard(card);
          if(firstCard){ // apparently no match, so turn both cards back
            console.log("No match!");
            turnbackCardsId=setTimeout(function(){turnbackCards(firstCard,card);},1500);
            ////console.log(card.getAttribute("data-card-name")+" and "+firstCard.getAttribute("data-card-name")+" turned back!");
          }
          updateResult();
        }else
          beep(); // replacing: alert("Still turning the cards back!");
      /* replacing (what wasn't working and not completed yet):
      let ontop=event.currentTarget.children[0];
      let behind=event.currentTarget.children[1];
      console.log("Front image: ",front.style.background);
      console.log("Back style: ",back.style.visibility);
      if(!back.style.visibility||back.style.visibility=="visible"){ // back of card visible
        console.log(`Card with name "${cardName}" and id "${cardId}" clicked.`);
        // let's show the card first
        back.style.visibility="hidden"; // hide the cover
        */
      }else
        console.log("Can't do that!");
    });
  });

}

function startANewGame(){
  let startResult=memoryGame.getStartResult();
  if(startResult)alert(startResult);else updateCards();
}

// MDH: onload event handler
window.addEventListener("load", event => {

  startANewGame();

});
