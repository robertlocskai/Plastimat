$(window).scroll(function() {
  var scrollTop = $(window).scrollTop();
  console.log("scrollTop>>>" + scrollTop);
    if (scrollTop == 0) {

        $("#headerImages").css({"margin-top": -($(window).scrollTop()) + "px"});    
  
    } 
  
  else {

    if(scrollTop < 400) {

        $("#headerImages").css({"margin-top": -($(window).scrollTop())/5 + "px"});   

    }
    
  }
});