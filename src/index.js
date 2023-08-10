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
    { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);

window.addEventListener("load", (event) => {
    let html = "";
    memoryGame.cards.forEach((pic) => {
        html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
    });

    // Add all the divs to the HTML
    document.querySelector("#memory-board").innerHTML = html;

    // Bind the click event of each element to a function
    let pickedArr = [];

    document.querySelectorAll(".card").forEach((card) => {
        card.addEventListener("click", () => {
            if (pickedArr.length < 1 && !pickedArr.includes(card)) {
                card.classList.toggle("flipped");
                pickedArr.push(card);
            } else if (pickedArr.length === 1 && !pickedArr.includes(card)) {
                card.classList.toggle("flipped");
                pickedArr.push(card);

                const timerId = setTimeout(() => {
                    if (checkIfPair) {
                        clearTimeout(timerId);
                    }
                    pickedArr.forEach((pickedCard) => {
                        pickedCard.classList.remove("flipped");
                    });
                    pickedArr = [];
                }, 1000);
            }
            console.log(`Card clicked: ${card}`);
        });
    });
});
