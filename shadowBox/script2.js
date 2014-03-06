$(document).on('ready', function(){ //cuando el documento este listo
    $('#shadow-box').hide();
        
    $('#pestaña3').click(function(){
            $('#shadow-box').fadeIn();    
    });
    
    $('#boton-cerrar').click(function(){
            $('#shadow-box').fadeOut();    
    });
        
});