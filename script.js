$(document).ready(function(){

  var current_li;

  $("#portfolio img").click(function(){
    var src = $(this).attr("src");

    //get the parent of the images, which is the current image
    current_li = $(this).parent();

    //"src" should be equal with the src variable
    $("#main").attr("src",src);
    $("#frame").fadeIn();
    $("#overlay").fadeIn();
  });

  $("#overlay").click(function(){
    $(this).fadeOut();
    $("#frame").fadeOut();
  });

  $("#right").click(function(){

    var next_li;

    //if the image is the last one, go back to the first image
    if(current_li.is(":last-child")){
      next_li = $("#portfolio li").first();
    }else{
      //the next image of the parent image
      next_li = current_li.next();
    }

    //get the children of next image, which is img and fetch the src using attribute
    var next_src = next_li.children("img").attr("src");
    $("#main").attr("src",next_src);
    current_li = next_li;
  });

  $("#left").click(function(){

    var prev_li;

    if(current_li.is(":first-child")){
      prev_li = $("#portfolio li").last();
    }else{
      //the previous image of the parent image
      prev_li = current_li.prev();
    }

    //get the children of previous image, which is img and fetch the src using attribute
    var prev_src = prev_li.children("img").attr("src");
    $("#main").attr("src",prev_src);
    current_li = prev_li;
  });

  $("#right, #left").mouseover(function(){
    $(this).css("opacity","1.0");
  });

  $("#right, #left").mouseleave(function(){
    $(this).css("opacity","0.75");
  });
});
