$(document).ready(function(){

  var current_li;

  //use ajax
  function setImg(src,id){
    //"src" should be equal with the src variable
    $("#main").attr("src",src);

    //folder path
    var path = "text/"+id;
    //ask server to provide contents and are stored in variable path
    $.get(path,function(data){
      console.log(data);
      $("#description p").html(data);
    });
  }

  $("#portfolio img").click(function(){
    var src = $(this).attr("src");
    var id = $(this).attr("id");
    //get the parent of the images, which is the current image
    current_li = $(this).parent();
    setImg(src,id);
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
    var id = next_li.children("img").attr("id");
    $("#main").attr("src",next_src);
    setImg(next_src,id);
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
    var id = prev_li.children("img").attr("id");
    //$("#main").attr("src",prev_src);
    setImg(prev_src,id);
    current_li = prev_li;
  });

  $("#right, #left").mouseover(function(){
    $(this).css("opacity","1.0");
  });

  $("#right, #left").mouseleave(function(){
    $(this).css("opacity","0.75");
  });
});
