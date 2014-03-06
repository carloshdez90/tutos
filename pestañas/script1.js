$(document).on('ready', function(){ //cuando el documento este listo
        
        $('#show2').hide();
        $('#pestaña1').css({'background-color': 'rgba(102, 64, 131, 0.86)'});
    
        /*Ajustamos el tamaño de los diferentes elementos*/
        $('#show1').css({ //accesamos a todos los elementos div del documento
            'height': ($(document).outerHeight(true) - 160  ) //la altura del documento - 60px de la barra - los margenes
        });
    
        $('#show2').css({ //accesamos a todos los elementos div del documento
            'height': ($(document).outerHeight(true) - 160  ) //la altura del documento - 60px de la barra - los margenes
        });
    
        /*************************************************/
        
        $('#pestaña1').click(function(){
            $('#show2').fadeOut(function(){
                $('#pestaña2').css({'background-color': '#6ad5f5'});
                $('#pestaña1').css({'background-color': 'rgba(102, 64, 131, 0.86)'});
                $('#show1').fadeIn();
            });    
        });
    
         $('#pestaña2').click(function(){
            $('#show1').fadeOut(function() {
                $('#pestaña1').css({'background-color': '#6ad5f5'});
                $('#show2').fadeIn();
                $('#pestaña2').css({'background-color': 'rgba(102, 64, 131, 0.86)'});
            });                   
        });
        
        
        
});//del $('document').on('ready')