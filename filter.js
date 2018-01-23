$(document).ready(function(){
  $("#filter li").click(function(){

    var category = $(this).html();

    $("#filter li").removeClass("active");

    $(this).addClass("active");

    $("#portfolio li").fadeOut();

    //to loop through each image
    $("#portfolio li").each(function(){
      //to check if the image has the class category
      if($(this).hasClass(category)){
        $(this).fadeIn();
      }
    });
  });

  $("#filter li").mouseover(function(){
    $(this).css("cursor","pointer");
  });
});
