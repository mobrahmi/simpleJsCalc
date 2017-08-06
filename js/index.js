$(document).ready(function(){
  
   $('.top').children('.clear').on('click', function(){
    // empty the input field when click C
 $(".input").empty();
    
  });
  
  $('.buttons').children('span').on('click', function(){
// append the numbers
    var clicked = $(this).html();
     $(".input").append(clicked);
    });
  
   $('.results').children('span').on('click', function(){
     // get the results
    var op = $('.input').html();
    
    $('.input').html(eval(op));
   
    
  });
  
  
});