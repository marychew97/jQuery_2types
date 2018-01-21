$(document).ready(function(){
  $("#portfolio img").click(function(){
    var src = $(this).attr("src");
    $("#frame img").attr("src",src);  //"src" should be equal with the src variable
    $("#frame").fadeIn();
    $("#overlay").fadeIn();
  });
});
