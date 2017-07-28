![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)
# JS | Memory Game

## Learning Goals

After this learning unit, you will be able to:

- Dynamically change the look of an HTML element
- Use jQuery to select and trigger changes in your page
- Understand the logic behind the Memory game
- Show off a little bit for the first time with your recently acquired front-end abilities :wink:

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`

## Submission

Upon completion, run the following commands
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull request name, add your name and last names separated by a dash "-"

## Deliverables

The starter-code provides every resource you need to style your game. Please, push every thing you need to make it work properly on GitHub before creating the pull request.

## Introduction

Do you remember that game called Memory that you used to play in with actual paper tiles? To win, you needed to remember the position of tiles.

The game consists of an even number of tiles with images on one side and a generic back. Each image appears on precisely two tiles.

![Memory Game Board](https://i.imgur.com/H6GLZGQ.jpg)

When the game starts, all tiles are turned face down. The player then flips over two cards, selecting them by clicking on them. If the two tiles have the same image, they remain face up. Otherwise, the tiles flip back over after a small period of time.

The goal of the game is to get all the tiles flipped face up in the least number of tries. That means that lower number of tries are better scores.

**Let's do this in JavaScript!**

## Plan your Game

To code the game, on one hand we will need to re-create the physical parts of the game (the layout). On the other hand, we will implement the rules of the game (the logic). We will make a single-player version of the game, which will simplify some of the logic.

Remember: organization is the key. Keep the JavaScript related to your layout and your user interface in one section of your file and the JavaScript related to the code in another section.

For this exercise, it won't be necessary to create several files.

### Import the Stylesheet

Included is a Stylesheet with all of the necessary styles. Since we want you to focus most of your energy on the game logic, we've given the stylesheet to you already. You need to make sure you code your HTML and JavaScript with the same selectors as the CSS though.

In addition, **include the stylesheet in your HTML**.

### Adding jQuery & Personal JS

- At the bottom of your `body` element, add the CDN for your jQuery library:

```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
```
Also, link the included `memory.js` file. We already know how to do it :wink:.

### Adding Styles

- In the `header` section, remember to add the link to your CSS file.

```html
<link type="text/css" rel="stylesheet" href="memory.css" media="screen">
```

### The Logic

Take a look at the `js` starter file. You already have a section for the logic and one section for the HTML/CSS interactions.

### The Game

#### Game State Attributes

When starting our memory game, we have to keep track of 3 different attributes:


- **Selected Cards**: A user can only select two cards at a time. When the user has selected a second card, we need to compare it to the first. If the first card and the second card are of the same time, then it's a match. This array can only have 0, 1, or 2 elements at any given time.
- **Pairs Clicked** - This is a counter which keeps track of the total number of pairs that a user has guessed.
- **Correct Pairs** - This is an attribute that holds the total number of pairs the user has guessed correctly.

#### Cards

First things first: we need somewhere to get the info about our tiles. We are providing the images for your game in the `img` directory. In `memory.js`, we've provided a constructor function for a `MemoryGame`, and populated its array of cards. Each one is an object with a key for the card's `name` and image(`img`).

```javascript
// memory.js
// ...other code
this.cards = [
    { name: "aquaman",         img: "aquaman.jpg" },
    { name: "batman",          img: "batman.jpg" },
    { name: "captain america", img: "captain-america.jpg" },
    { name: "fantastic four",  img: "fantastic-four.jpg" },
    { name: "flash",           img: "flash.jpg" },
    { name: "green arrow",     img: "green-arrow.jpg" },
    { name: "green lantern",   img: "green-lantern.jpg" },
    { name: "ironman",         img: "ironman.jpg" },
    { name: "spiderman",       img: "spiderman.jpg" },
    { name: "superman",        img: "superman.jpg" },
    { name: "the avengers",    img: "the-avengers.jpg" },
    { name: "thor",            img: "thor.jpg" },
    { name: "aquaman",         img: "aquaman.jpg" },
    { name: "batman",          img: "batman.jpg" },
    { name: "captain america", img: "captain-america.jpg" },
    { name: "fantastic four",  img: "fantastic-four.jpg" },
    { name: "flash",           img: "flash.jpg" },
    { name: "green arrow",     img: "green-arrow.jpg" },
    { name: "green lantern",   img: "green-lantern.jpg" },
    { name: "ironman",         img: "ironman.jpg" },
    { name: "spiderman",       img: "spiderman.jpg" },
    { name: "superman",        img: "superman.jpg" },
    { name: "the avengers",    img: "the-avengers.jpg" },
    { name: "thor",            img: "thor.jpg" },
  ];
// ...other code
```

In addition, we've written code to render the board whenever the document loads:

```javascript
// memory.js
// ...other code
$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" id="card_' + sanitizedName + '">';
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

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;
});
// ...other code
```

#### Shuffling

Create a method to shuffle the cards, so every time you create a new game, the order or the card changes. **Hint:** It would be a good idea to implement something like a [Fisher-Yates Shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).

```javascript
MemoryGame.prototype._shuffleCards = function() {
};
```

#### Selecting a Card

When the tiles are rendered, the user will select a card and all of the game logic will be executed. This method will receive a reference to a DOM element which will be a card.

```javascript
MemoryGame.prototype.selectCard = function(card)
};
```
**Logic needed to complete this method**

- If *the user has selected a card in the last turn*
  - Increase the `pairsClicked` attribute of the memoryGame and update the DOM
  - Compare the newly selected card to the previously selected card. Are they of the same type?
    - If *yes*
      - Empty out the `selectedCards` array for the next round
      - Increase the `correctPairs` attribute by one
      - "Flip" the card
    - If *no*
      - Possibly add some styling to tell the user "Wrong Guess"
      - Flip both cards back to the "back side"
- If *the user has **not** selected a card in the last turn*
  - Add the card to the `selectedCards` array and move on

#### Ending the Game

As Memory doesn't have a 'Game Over', we just need a 'Win' function.

```javascript
MemoryGame.prototype.finished = function() {
};
```

### HTML/CSS Interactions

We have to add a click listener for when the user selects a card. We currently have a method in our memoryGame class, but nothing to call it with. Add some code to call the method whenever a user selects a face-down card.

```javascript
$('.back').on('click', function(){
});
```

## Summary

In this Learning Unit, you were able to separate the logic of the game from the logic of the user interaction. You used jQuery to listen to events and trigger the game. Also, learned a new useful shuffle algorithm and got

## Extra Resources

- [jQuery](https://jquery.com/)
- [Fisher-Yates Shuffle](https://bost.ocks.org/mike/shuffle/)
