const cards = [{
        name: 'aquaman',
        img: 'aquaman.jpg'
    },
    {
        name: 'batman',
        img: 'batman.jpg'
    },
    {
        name: 'captain america',
        img: 'captain-america.jpg'
    },
    {
        name: 'fantastic four',
        img: 'fantastic-four.jpg'
    },
    {
        name: 'flash',
        img: 'flash.jpg'
    },
    {
        name: 'green arrow',
        img: 'green-arrow.jpg'
    },
    {
        name: 'green lantern',
        img: 'green-lantern.jpg'
    },
    {
        name: 'ironman',
        img: 'ironman.jpg'
    },
    {
        name: 'spiderman',
        img: 'spiderman.jpg'
    },
    {
        name: 'superman',
        img: 'superman.jpg'
    },
    {
        name: 'the avengers',
        img: 'the-avengers.jpg'
    },
    {
        name: 'thor',
        img: 'thor.jpg'
    },
    {
        name: 'aquaman',
        img: 'aquaman.jpg'
    },
    {
        name: 'batman',
        img: 'batman.jpg'
    },
    {
        name: 'captain america',
        img: 'captain-america.jpg'
    },
    {
        name: 'fantastic four',
        img: 'fantastic-four.jpg'
    },
    {
        name: 'flash',
        img: 'flash.jpg'
    },
    {
        name: 'green arrow',
        img: 'green-arrow.jpg'
    },
    {
        name: 'green lantern',
        img: 'green-lantern.jpg'
    },
    {
        name: 'ironman',
        img: 'ironman.jpg'
    },
    {
        name: 'spiderman',
        img: 'spiderman.jpg'
    },
    {
        name: 'superman',
        img: 'superman.jpg'
    },
    {
        name: 'the avengers',
        img: 'the-avengers.jpg'
    },
    {
        name: 'thor',
        img: 'thor.jpg'
    }
];

const memoryGame = new MemoryGame(cards);

//Shuffles cards everytime they are excuted:

memoryGame.shuffleCards();

//Loads cards
window.addEventListener('load', event => {
    let html = '';
    memoryGame.cards.forEach(pic => {
        html += `<div class="card" data-card-name="${pic.name}">`;
        html += `<div class="back" name="${pic.img}"></div>`;
        html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
        html += `</div>`;
    });

    // Add all the divs to the HTML
    document.querySelector('#memory-board').innerHTML = html;

    //New Winner Gif
    const gif = document.querySelector(".gif")

    let cardsArr = [];

    // Bind the click event of each element to a function 
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (cardsArr.length > 1) return
            e.target.parentNode.classList.add("turned");
            cardsArr.push(e.target.parentNode)
            if (cardsArr.length === 2) {
                setTimeout(() => {
                    if (!memoryGame.checkIfPair(cardsArr[0].getAttribute("data-card-name"), cardsArr[1].getAttribute("data-card-name"))) {
                        cardsArr[0].classList.remove("turned");
                        cardsArr[1].classList.remove("turned");
                    }
                    cardsArr = []
                    document.querySelector("#pairs-clicked").innerHTML = memoryGame.pairsClicked;
                    document.querySelector("#pairs-guessed").innerHTML = memoryGame.pairsGuessed;
                    if (memoryGame.isFinished()) gif.style.display = "block";
                }, 500)
            }
        });
    });
});