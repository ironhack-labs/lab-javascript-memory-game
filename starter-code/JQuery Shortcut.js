
<!DOCTYPE html>
<html>
  <head>
     <title>Superhero Memory Game</title>
     <link type="text/css" rel="stylesheet" href="memory.css" media="screen">
     <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
     <script type="text/javascript" src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.16.4/lodash.js"></script>
  </head>
    <body>
    </body>
</html>




//Start of a jQuery .JS file
$(document).ready(function(){
});


// All selector: Select all the elements from the page
$("*");

// Element selector: Select all the paragraphs
$("p");

// Class selector: Select all the elements with the class "main"
$(".main");

// Id selector: Select the element with the id "main-section"
$("#main-section")

Selector	Description	Syntax
Child	Selects all direct child elements specified by “child” within “parent”	$("parent > child")
Descendant	Selects all elements that are descendants of a given ancestor	$("ancestor descendant")
Next Adjacent	Selects all next elements matching “next” that are immediately preceded by a sibling “prev”	$("prev + next")
Next Siblings	Selects all sibling elements that follow after the “prev” element, have the same parent, and match the filtering “siblings” selector	$("prev ~ siblings")

// Child selector: Select all the paragraphs inside the body
$("body > p");

// Descendant selector: Select all the .selected-item elements from the .main-nav
$(".main-nav .selected-item");

// Next Adjacent selector: Select all the label inside a form
$("form + label");


Selector	Description	Syntax
First	Selects the first matched element	$(".selector:first")
Last	Selects the last matched element	$(".selector:last")
Odd	Selects odd elements, zero-indexed	$(".selector:odd")
Even	Selects even elements, zero-indexed	$(".selector:even")
Not	Selects all elements that do not match the given selector	$(":not(selector)")


// First selector: Select the first paragraph of the body
$("body p:first");

// Last selector: Select the last element in a nav section
$("nav ul li:last");

// Even selector: Select the even elements from a <ul> menu
$("#main-menu li:last")

// Not selector: Select all the paragraphs <p> without the class "ironhack"
$("p:not(.ironhack)")

Selector	Description	Syntax
Contains	Selects all elements that contain the specific text	$(.selector:contains(text))
Empty	Selects all elements that have no children (including text nodes)	$(.selector:empty)
Has	Selects elements which contain at least one element that matches the specified selector	$(.selector:has(selector))
Parent	Select all elements that have at least one child node (either an element or text)	$(.selector:parent)

// Contains selector: Select all the elements in the DOM that contains "Ironhack"
$("*:contains('ironhack')");

// Has selector: Select all the elements in the DOM that has a paragraph <p>
$("*:has(p)");


Selector	Description	Syntax
Hidden	Selects all elements that are hidden	$(.selector:hidden)
Visible	Selects all elements that are visible	$(.selector:visible)

// Hidden selector: Select all the hidden elements in a <form>
$("form *:hidden");

// Visible selector: Select all the visible elements from a <ul> menu
$("ul#menu li:visible")

Selector	Description	Syntax
Has Attribute	Selects elements that have the specified attribute, with any value	$("[attribute]")
Attribute Contains	Selects elements that have the specified attribute with a value containing a given substring	$("[attribute*='value']")
Attribute Contains Word	Selects elements that have the specified attribute with a value containing a given word, delimited by spaces	$("[attribute~='value']")
Attribute Not Equal	Selects elements that either don’t have the specified attribute, or do have the specified attribute but not with a certain value	$([attribute!='value'])
Attribute Starts With	Selects elements that have the specified attribute with a value beginning exactly with a given string	$([attribute^='value'])

// Has Attribute Selector: Select all the links <a> with an href
$("a[href]");

// Attribute Contains Word Selector: Select all the links <a> that contains
// "ironhack" in the href
$("a[href~='ironhack']");


Selector	Description	Syntax
First Child	Selects all elements that are the first child of their parent	$(.selector:first-child)
Last Child	Selects all elements that are the last child of their parent	$(.selector:last-child)
Nth Child	Selects all elements that are the nth-child of their parent	$(:nth-child(index/even/odd/equation))



// First Child Selector: Select the first element of a menu
$("#menu:first-child");

// Last Child Selector: Select the last element of a menu
$("#menu:last-child");

// Nth Child Selector: Select all the odd elements from a list
$("#list:nth-child(odd)");


Selector	Description	Syntax
Button	Selects all button elements and elements of type button	$(":button")
Checkbox	Selects all elements of type checkbox	$(":checkbox")
File	Selects all elements of type file	$(":file")
Image	Selects all elements of type image	$(":image")
Input	Selects all input, textarea, select, and button elements	$(":input")
Password	Selects all elements of type password	$(":password")
Radio	Selects all elements of type radio	$(":radio")
Reset	Selects all elements of type reset	$(":reset")
Submit	Selects all elements of type submit	$(":submit")
Text	Selects all input elements of type text	$(":text")
Checked	Selects all checked or selected elements	$(":checked")
Disabled	Selects all disabled elements	$(":disabled")
Enabled	Selects all enabled elements	$(":enabled")
Focus	Selects all focused elements	$(":focus")
Selected	Selects all selected elements	$(":selected")

// Control Selectors: Select an input, a button, and an image element
$("form *:input");
$("form *:button");
$("form *:image");

// Enabled Selector: Select all the enabled controls in a form
$("form input:enabled");

Method	Description	Syntax
Value	Gets the current value of the first matched element or sets the value of all the matched elements	$(".selector").val([value])
Attribute	Gets the value of an attribute for the first matched element or sets one or more attributes for every matched element	$(".selector").attr(attributeName[, value])
Remove Attribute	Remove an attribute from each element in the set of matched elements	$(".selector").removeAttr(attributeName)
Property	Get the value of a property for the first matched element or sets one or more properties for every matched element	$(".selector").prop(propertyName[, value])
Remove Property	Removes a property for the set of matched elements	$(".selector").removeProp(propertyName)

<input type="text" value="test" id="test" />
console.log($("#test").attr("value")); // => test
console.log($("#test").prop("value")); // => test
console.log($("#test").attr("value")); // => test
console.log($("#test").prop("value")); // => Ironhack

// Value: Get the value of the first input inside a form
$("form .user-name").val();

// Property: Set the property Checked of a CheckBox with the class .checkbox
$(".checkbox").prop("checked", true);

Method	Description	Syntax
CSS	Gets the value of a computed style property for the first matched element or sets one or more CSS properties for all the matched elements	$(".selector").css(propertyName[, value])
Add class	Adds the specified class(es) to all the matched elements	$(".selector").addClass(className)
Remove class	Remove a single class, multiple classes or all classes from the matched elements	$(".selector").removeClass([className])
Has class	Returns true if any of the matched elements have assigned the indicated class	$(".selector").hasClass(className)
Toggle class	Add or remove one or more classes to all the matched elements, depending on the class presence	$(".selector").toggleClass(className)

$( "p" ).removeClass("clicked moved");

<button id="btn-send" class="disabled">
$("#btn-send").toggleClass("disabled");
  // => <button id="btn-send" class="">

$("#btn-send").toggleClass("disabled");
  // => <button id="btn-send" class="disabled">


  if ($(".element").hasClas("visible")) {
    $(".element").removeClass("visible");
  } else {
    $(".element").addClass("visible");
  }

  $(".element").toggleClass("visible");

  // Change the text color of an element if it's parent has the class .disabled
  if ($(".parent").hasClass("disabled")) {
    $(".parent .element").addClass("white-color");
  }

  // Remove all the classes from all the elements of the website
  $("*").removeClass();

  Method	Description	Syntax
Height	Get the current computed height for the first element in the set of matched elements	$(".selector").height([value])
Width	Get the current computed width for the first element in the set of matched elements or set the width of every matched element	$(".selector").width([value])


// Get the HTML document width
$(document).width();

// Remove the width from all the elements in a website
$("*").width(0);

$('.heart').click(function(){
   $(this).addClass('on');
});

//Previous all
$('.heart').click(function(){
  $(this).addClass('on');
  $(this).prevAll().addClass('on');
});

Method	Description	Example
.children([selector])	Get the children of each element in the set of matched elements, optionally filtered by a selector.	$("body").children()
.closest(selector)	For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.	$("li.item").closest("ul")
.find(selector)	Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.	$("ul.list").find("li")
.next([selector])	Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.	$(this).next()
.parent([selector])	Get the parent of each element in the current set of matched elements, optionally filtered by a selector.	$("li").parent()
.prevUntil([selector][,filter])	Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object.	$("this").prevUntil("ul")
.siblings([selector])	Get the siblings of each element in the set of matched elements, optionally filtered by a selector.	$(this).siblings(".on")



$(".fa").on("click", function() {
  // the action will be implemented here
});

$(".fa").on("click", function() {
  $(this).parent().remove();
});

$(".btn").on("click", function() {
  //the action will be implemented here
});

$(".btn").on("click", function() {
  var newTask = prompt("Add new task");
  var formattedTask = ("<li><span>" + newTask + "</span><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> </li>");
  $( "#tasks" ).append( formattedTask );
});

Method	Description	Example
.append(content [,content])	Insert content, specified by the parameter, to the end of each element in the set of matched elements.	$("h1").append("Hello")
.html()	Get or set the HTML contents	$('.footer').html('<p>This is a new text</p>');
.prepend()	Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.	$(".inner").prepend("<p>Test</p>");
.empty()	Remove all child nodes of the set of matched elements but keeps the element that calls it.	$(this).parent().empty();

$(selector).hide([duration][,complete]);

$('#element').hide();

$(selector).show([duration][,complete]);


// fadeIn
$(selector).fadeIn([duration][,complete]);

// fadeOut
$(selector).fadeOut([duration][,complete]);

$('#element').fadeOut();
$('#element').fadeIn(1000);


$(selector).toggle([duration][,complete]);

if($("#element").attr("display") === "none"){
  $("#element").show();
} else {
  $("#element").hide();
}

$(selector).fadeToggle([duration][,easing][,complete]);

if($("#element").attr("display") === "none"){
  $("#element").fadeIn();
} else {
  $("#element").fadeOut();
}
//Toggle Fade Reduced
$("#element").toggleFade();

$("li").click(function(e){
  console.log(e.currentTarget.innerHTML);
});

$("li").click(function(e){
  console.log(this.innerHTML);
});

$("button").click(function(){
  console.log("You clicked the button!");
})

$("li").click(function(e){
  console.log($(this).html());
});

$("input, select").change(function(){
  console.log($(this).val());
})

$("input, select").on("change", function(){
  console.log("Change event");
})

$("input, select").on("focus", function(){
  console.log("Focus event");
})
