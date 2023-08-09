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

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  let pickedCards=[]
  document.querySelectorAll(".card, .card turned").forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      console.log(card);
      console.log(`Card clicked: ${card}`);



      if(pickedCards.length<2){
        card.classList.toggle("turned");
        pickedCards.push(card.getAttribute("data-card-name"));
        console.log(pickedCards);
      }




      if(pickedCards.length===2){
        let pairCheck = memoryGame.checkIfPair(pickedCards[0],pickedCards[1]);
        document.getElementById('pairs-clicked').innerText=memoryGame.pairsClicked;

        if(pairCheck) 
        {
          console.log(`[data-card-name='${pickedCards[0]}]'`);
          document.querySelectorAll(`[data-card-name='${pickedCards[0]}']`).forEach(element => {
            element.classList.add('blocked');
            document.getElementById('pairs-guessed').innerText=memoryGame.pairsGuessed;
          })
        }
        else {
          setTimeout(() => document.querySelectorAll(".card:not(.blocked)").forEach(element => element.classList.remove('turned')),1000
            )
        };
      
        pickedCards=[];
        



        if (memoryGame.checkIfFinished()) {
          console.log("Finished!");
          let finishedDiv = document.createElement("div");
          
          finishedDiv.innerText="FINISHED!";

          finishedDiv.style.backgroundColor = 'red'; 
          finishedDiv.style.textAlign = 'center'; 
          finishedDiv.style.color = 'white'; 
          finishedDiv.style.backgroundColor = 'orange'; 
          finishedDiv.style.border = '2px solid red'; 
          finishedDiv.style.fontSize = '10rem'; 
          finishedDiv.style.position = 'fixed'; 
          finishedDiv.style.top = '300px'; 




          document.getElementById('memory-board').appendChild(finishedDiv);
        
        }


        
      }
      })
    });
  });



  
