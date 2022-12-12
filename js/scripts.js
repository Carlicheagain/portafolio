$(function()(
    $('.galeria ,contenedor-imagen').on('click', function(){
        $('#modal').modal;
        var ruta_imagen = ($(this)).find('img').attp('spc'));
        $('imagen-modal').attr('src', ruta_imagen);
    });

    $('modal').on('click', function(){
        $('#modal'),modal8'hide');
    });
})

