$(document).on('ready', function(){ //cuando el documento este listo        
        /*Cargar las imagenes y mostrar su contenido*/
        
        function handleFileSelect(evento) {
            evento.stopPropagation();
            evento.preventDefault();

            var files = evento.dataTransfer.files; // objeto FileList.

            // files es arreglo de objetos tipo file.
            var metadata = [];
            for (var i = 0, f; f = files[i]; i++) {
                
            // Only process image files.
             if (!f.type.match('image.*')) {
                continue;
             }

             var reader = new FileReader();
            
            // Closure to capture the file information.
            reader.onload = (function(theFile) {
                return function(e) {
                    // Render thumbnail.

                    var imagen = ['<img  src="', e.target.result, '" title="', encodeURI(theFile.name), '"/>'].join('');
                    $('#show').html(imagen); 
                };
              })(f);
                
            // Read in the image file as a data URL.
            reader.readAsDataURL(f);
                
                
            metadata.push('<br><strong>', encodeURI(f.name), '<br></strong> (', f.type || 'n/a', ') - ', 
                          f.size, ' bytes <br> last modified: ',
                          f.lastModifiedDate.toLocaleDateString());
            }            
            $('#ingresar-imagen span').html(metadata.join('')); //en la etiqueta span
        }

        function handleDragOver(evento) {
            evento.stopPropagation();
            evento.preventDefault();
            evento.dataTransfer.dropEffect = 'copy'; 
        }

        // 'Escuchadores' y manejadores de eventos.
        var dropZone = document.getElementById('ingresar-imagen');
        dropZone.addEventListener('dragover', handleDragOver, false);
        dropZone.addEventListener('drop', handleFileSelect, false);
    
    });//del $('document').on('ready')