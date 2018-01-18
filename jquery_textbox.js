$(function(){
  $("#submit").click(function(){
    var txt = $("#textbox").val();
    $("#display").html(txt);
    $("#textbox").val("");
  });
});
