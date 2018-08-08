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

$(document).ready(function() {
    var memoryGame = new MemoryGame(cards);
    var html = "";
    memoryGame.cards.forEach(function(pic, index) {
        html += '<div class= "card" id="card_' + pic.name + '">';
        html += '<div class="back"';
        html += '    name="' + pic.img + '">';
        html += "</div>";
        html += '<div class="front" ';
        html += 'style="background: url(img/' + pic.img + ') no-repeat">';
        html += "</div>";
        html += "</div>";
    });

    // set counter
    var click = 0;
    var firstCard = "";
    var secondCard = "";
    // Add all the div's to the HTML
    document.getElementById("memory_board").innerHTML = html;
    // Bind the click event of each element to a function
    $(".back").on("click", function() {
        $(this).removeClass();
        $(this).addClass("front");
        $(this)
            .siblings()
            .removeClass();
        $(this)
            .siblings()
            .addClass("back");

        // restrict user to click only two cards

        // if first Card === 0;
        // assign value of first card to it
        // click++

        if (click === 0) {
            click++;
            console.log("ClickCount is now " + click);
            firstCard = $(this).attr("name");
            console.log("First Card is " + firstCard);
            // if click === 1;
            // assign value of second card to it
        } else if (click === 1) {
            click++;
            console.log("ClickCount2 is now " + click);
            secondCard = $(this).attr("name");
            console.log("Second Card is " + secondCard);
            checkIfPair(firstCard, secondCard);
        }
    });
});
