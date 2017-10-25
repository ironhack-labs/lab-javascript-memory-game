$(document).ready(function () {
  $("#menu ul li:first").addClass("selected");
  $(".container article:nth-child(2n)").addClass("middle");
  $("#list-container .list-item:odd").addClass("highlighted");
  $("#list-container .list-item:last").css({"border": "1px solid #eee"});
  $("#form-container input").focus(function() {
    $(this).css("border-color", "blue")
  })

});
