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

![Memory Game Board](https://i.imgur.com/H6GLZGQ.jpg =300)

When the game starts, all tiles are turned face down. The player then flips over two cards, selecting them by clicking on them. If the two tiles have the same image, they remain face up. Otherwise, the tiles flip back over after a small period of time.

The goal of the game is to get all the tiles flipped face up in the least number of tries. That means that lower number of tries are better scores.

**[Let's do this in JavaScript!](https://github.com/ironhack/lab-javascript-memory-game)**

## Plan your Game

To code the game, on one hand we will need to re-create the physical parts of the game (the layout). On the other hand, we will implement the rules of the game (the logic). We will make a single-player version of the game, which will simplify some of the logic.

Remember: organization is the key. Keep the JavaScript related to your layout and your user interface in one section of your file and the JavaScript related to the code in another section.

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

Take a look at the `src/main.js` and `src/memory.js` starter file. You already have one file for the logic and one file for the HTML/CSS interactions.

### The Game Logic

We will test our game logic using Jasmine (at this point you shold be **Jasmine Masters!**). Actually, for this game the game logic is pretty simple, we only going to need a `MemoryGame` constructor, and some methods to shuffle and compare cards, and one to check when the game finishes.

- First things first: Create a `MemoryGame` constructor that will receive an array of cards as a parameter and set this array to a `this.cards` property. We also need a `this.pickedCards` array, where we will be storing the cards the user have clicked so we can compare them. Finally a `this.pairsClicked` and `this.pairsGuessed` properties where will be adding every time a user choose and guess a pair.

- Create a method to shuffle the cards, so every time you create a new game, the order or the card changes. **Hint:** It would be a good idea to implement something like a [Fisher-Yates Shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).

```javascript
MemoryGame.prototype._shuffleCard = function() {
};
```
- When a user pick 2 cards, we will need to check if they are the same. Let's create a method `checkIfPair`, that will receive two parameters (both cards selected by the user). The method will add 1 to our `pairsClicked` property, and if the cards are the same also add 1 to `pairsGuessed`.

Finally it will return `true` or `false` depending on the result of comparing both cards.

```javascript
MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {

};
```

- As Memory doesn't have a 'Game Over', we just need a 'Win' function, where we need to check if our property `pairsGuessed` reach the numbers of pairs the game has.

```javascript
MemoryGame.prototype.finished = function() {
};
```

### HTML/CSS Interactions

Think about the interactions your user and the game will have: basically the user will click on elements of the page and receive a result - whether he guessed the pair or not.

- The first thing we need to do is use the information to dynamically fill the tiles in the board element. As we want this behavior to be trigged as soon as the page loads, we need to wrap it under a `document.ready` method. Use jQuery to change the elements dynamically.

```javascript
$(document).ready(function(){
});
```

- The other important interaction is the click listener. Remember to add the listeners when the document is loaded.

```javascript
$('.back').on('click', function(){
});
```

## Summary

In this Learning Unit, you were able to separate the logic of the game from the logic of the user interaction. You used jQuery to listen to events and trigger the game. Also, learned a new useful shuffle algorithm and got 

## Extra Resources

- [jQuery](https://jquery.com/)
- [Fisher-Yates Shuffle](https://bost.ocks.org/mike/shuffle/)


