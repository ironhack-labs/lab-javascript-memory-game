
function init(){
  $("#menu ul li:first").addClass("selected");
  $(".container article:nth-child(2)").addClass("middle");
  $("#list-container:odd").addClass("highlighted");
  $("#list-container div:last").css({border: "1px solid #eee"});
  $("#form-container input").focus(function(){
    $(this).css("border-color", "red");
  });
  $("#form-container input").blur(function(){
    $(this).css("border-color", "white");
  });
}

$(document).ready(init);
