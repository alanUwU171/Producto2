console.log('Hola, mundo desde un archivo externo!');

$('#boton1').click(cambiar);
        
function cambiar(){
    $.get(
        "demo.php", // Cambia la URL a tu archivo HTML con la tabla comparativa
        function(dato, estado){
            $('#contenido').html(dato);
        }
    );
}
$('#boton2').click(cambiar2);

function cambiar2(){
    $.get(
        "demo2.php", // Cambia la URL a tu archivo HTML con la tabla comparativa
        function(dato, estado){
            $('#contenido').html(dato);
        }
    );
}
$('#boton3').click(cambiar3);

function cambiar3(){
    $.get(
        "demo3.php", // Cambia la URL a tu archivo HTML con la tabla comparativa
        function(dato, estado){
            $('#contenido').html(dato);
        }
    );
}