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
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('turned');
        setTimeout(function(){
          if(card.classList.contains('turned')){
            memoryGame.pickedCards.push(card.getAttribute('data-card-name'));
          }else{
            memoryGame.pickedCards.slice(memoryGame.pickedCards.indexOf(card.getAttribute('data-card-name')), 1);
          }
          const allTurned = document.querySelectorAll('.card.turned')
          if(memoryGame.length > 2){
            for(let i = 0; i < turned.length; i++){
              allTurned[i].classList.remmove('turned');
            }
          }else if(memoryGame.pickedCards.length == 2){
            if(!memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])){
              allTurned[0].classList.remove('turned');
              allTurned[1].classList.remove('turned');
            }else{
              allTurned[0].classList.add('blocked');
              allTurned[1].classList.add('blocked');
            }
          }
          if(memoryGame.checkIfFinished()){
            alert('You won !');
          }
        }, 1000);
        
    });
  });
});
