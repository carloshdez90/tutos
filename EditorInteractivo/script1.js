$(document).on('ready', function(){ //cuando el documento este listo
        
        /*Ajustamos el tamaño de los diferentes elementos*/
        $('#show').css({ //accesamos a todos los elementos div del documento
            'height': ($(document).outerHeight(true) - 90  ) //la altura del documento - 60px de la barra - los margenes
        });
        
        $('#ingresar-texto').css({ //accesamos a todos los elementos div del documento
            'height': ($(document).outerHeight(true)/2  ) // 50% del alto
        });
        
        $('#ingresar-imagen').css({ //accesamos a todos los elementos div del documento
            'height': ( ($(document).outerHeight(true)/2) - 140  ) // 50% del alto - los margenes 
        });
        
        /*Formato sobre editor de texto*/
        $('#ingresar-texto').on('keyup', function(evento){
            $("#show").html("");
            $("#show").html("<p>"+$(this).text()+"</p>");
            //console.log(evento.which); permite identificar la tecla presionada
        });
        
        $('#ingresar-texto').focus();  //auto foco en el editor
        
});//del $('document').on('ready')