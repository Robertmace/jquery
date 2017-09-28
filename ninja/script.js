$(document).ready(function(){

    var nin = "";
    for(var i = 0; i < 8; i++){
        nin += '<img id="ninja" src="ninja.jpeg" alt="ninja">'
        $("#ninj").html(nin);
    }
$('img').click(function() {
    $(this).css( "visibility", "hidden");    
    });
    $('button').click(function(){
    $('img').css( "visibility", "visible");    

    });
  });








    
