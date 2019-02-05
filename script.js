"use strict"

$(document).ready(function(){ 
    $('.reservation').hide();
    $(".middle").click(function() { 
      $(".reservation").fadeIn("slow");
    });
  });