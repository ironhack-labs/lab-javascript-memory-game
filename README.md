![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)
# JS | Memory Game

## Learning Goals

After this learning unit, you will be able to:

- Dynamically change the look of an HTML element
- Use jQuery to select and trigger changes in your page
- Understand the logic behind the Memory game
- Show off a little bit for the first time with your recently acquired front-end abilities :wink: 

## Introduction

Do you remember that game called Memory that you used to play in with actual paper tiles? To win, you needed to remember the position of tiles. 

The game consists of an even number of tiles with images on one side and a generic back. Each image appears on precisely two tiles.

![Memory Game Boar](https://i.imgur.com/H6GLZGQ.jpg)

When the game starts, all tiles are turned face down. The player then flips over two cards, selecting them by clicking on them. If the two tiles have the same image, they remain face up. Otherwise, the tiles flip back over after a small period of time.

The goal of the game is to get all the tiles flipped face up in the least number of tries. That means that lower number of tries are better scores.

**[Let's do this in JavaScript!](https://github.com/ironhack/lab-javascript-memory-game)**

## Plan your Game

To code the game, on one hand we will need to re-create the physical parts of the game (the layout). On the other hand, we will implement the rules of the game (the logic). We will make a single-player version of the game, which will simplify some of the logic.

Remember: organization is the key. Keep the JavaScript related to your layout and your user interface in one section of your file and the JavaScript related to the code in another section.

For this exercise, it won't be necessary to create several files.

### Think about the layout

- Add to your html the parts you'll game will have. The board, the tiles and the score.

```htmlmixed=
<!DOCTYPE html>
<html>
  <head>
    <title>Superhero Memory Game</title>
    <link type="text/css" rel="stylesheet" href="memory.css" media="screen">
  </head>
  <body>
  </body>
</html>
```

Take a look above. We are not adding a **Start** button. If you think about it, we don't need it. We can render the tiles and create a listener to begin the game when the user clicks on an element. 

### Add your jQuery library

- At the bottom of your `body` element, you can already add the CDN for your jQuery library:

```htmlmixed
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
```
Also, link your `js` file. We already know how to do it :wink:.

### Add your styles

- In the `header` section, remember to add the link to your CSS file.

```htmlmixed
<link type="text/css" rel="stylesheet" href="memory.css" media="screen">
```


### The Logic

Take a look at the `js` starter file. You already have a section for the logic and one section for the HTML/CSS interactions.

##### Game Logic

- First things first: we need somewhere to get the info about our tiles. We are providing the images for your game in the `img` directory. Use the proper element in your `memory.js` file to fill up the required info.

```javascript=
  this.Cards = [];
```

- Create a method to shuffle the cards, so every time you create a new game, the order or the card changes. **Hint:** It would be a good idea to implement something like a [Fisher-Yates Shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle). Be sure you understand it.


MemoryGame.prototype.selectCard = function(card) {

  if (this.picked_cards.length === 0) {
    this.picked_cards.push(card);
  }
  else if (this.picked_cards.length == 1) {
    $('.front,.back').addClass('blocked');
    this.pairs_clicked++;
    this.picked_cards.push(card);

    if (this.picked_cards[0].id == this.picked_cards[1].id) {
      this.picked_cards = [];
      this.pairs_guessed++;
      $('.front,.back').removeClass('blocked');
    } else {
      this.pairsClicked++;
      var self = this;
      setTimeout(function () {
        self.picked_cards[0].style.background = '#456783';
        self.picked_cards[1].style.background = '#456783';
        self.picked_cards = [];
        $('.front,.back').removeClass('blocked');
      }, 1000);
    }
  }

};

MemoryGame.prototype.finished = function() {
  return (this.pairs_guessed == '12');
};

//******************************************************************
// HTML/CSS Interactions
//******************************************************************

var memoryGame;
$(document).ready(function(){
  memoryGame = new MemoryGame();
    var html = '';

    memoryGame.Cards.forEach(function(pic, index) {
      html += '<div class= "card" id="card_' + pic.name + '">';
      html += '<div class="back"';
      html += '    name="img/' + pic.name + '"';
      html += '    id="'       + pic.img +  '">';
      html += '</div>';
      html += '<div class="front" ';
      html += 'style="background: url(img/' + pic.img + '") no-repeat"';
      html += '    id="'       + pic.img +  '">';
      html += '</div>';
      html += '</div>';
    });

    // Add all the div's to the HTML
    document.getElementById('memory_board').innerHTML = html;
    // Bind the click event of each element to a function

    $('.back').on('click', function(){
      memoryGame.selectCard(this);
      this.style.background = 'url(img/' + this.id + ') no-repeat';
      document.getElementById('pairs_clicked').innerHTML = memoryGame.pairs_clicked;
      document.getElementById('pairs_guessed').innerHTML = memoryGame.pairs_guessed;
      if (memoryGame.finished()) {alert("You wooon!!!");}
    });
});

```



- Think about the interactions your user and the game will have: basically the user will click on elements of the page and receive a result - whether he guessed the pair or not.





## Summary


## Extra Resources


