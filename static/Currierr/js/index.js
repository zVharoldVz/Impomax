

function cotizar(){

     // Obtener los valores del formulario y aplicar validaciones
    var peso = parseFloat(document.getElementById("pesotex").value) || 0;
    var precio = parseFloat(document.getElementById("costotext").value) || 0;

    var ValorPeso = parseInt(10);
    var ValorAdun =  parseInt(10);

    // Aplicar las condiciones
    peso = Math.max(peso, 1);

    preciopeso = (peso*ValorPeso);
    precioguia = preciopeso + ValorAdun;

    if (precio < 200) {
        mensaje= "Ahora sumaremos el costo del producto y el costo del servicio"
        total = precioguia + precio;
        texto = "$ "+ precio + " + $ "+ precioguia + " = $" +total;
    } else {
        mensaje = "Ahora sumaremos el costo del producto, el costo del servicio y los impuestos"
        impuesto = Math.max(precio * 0.24,1);
        total = precio + impuesto + precioguia;
        texto = "$ "+ precio + " + $ "+ precioguia +" + $ "+ Number(impuesto.toFixed(2)) + " = $" + Number(total.toFixed(2));
    }

    mensajetotal =  '<p class="h6 mb-4">Al peso de '+peso+'KG se le multiplica $10 y se le suma $10 de trámites aduaneros</p>'+
                    '<p class="h4 mb-4">$'+ ValorPeso +" X " + peso  + "KG = $" + preciopeso +'</p>'+
                    '<p class="h4 mb-4">$ '+preciopeso + " + $ " + ValorAdun  + " = $" + precioguia+'</p>'+
                    '<p class="h4 mb-4">Total Servicio USA - Perú: $'+precioguia+'</p>'+
                    '<p class="h6 mb-4">'+mensaje+'</p>'+
                    '<p class="h4 mb-4">'+texto+'</p>'+
                    '<p class="h4 mb-4">Total Inversión: $'+Number(total.toFixed(2))+'</p>';

    document.getElementById('cotizacion').innerHTML = mensajetotal;

}


function Cotizarproducto() {
    // Obtener el valor del input
    var nuevaURL = document.getElementById('inputUrl').value;
    // Número de teléfono (incluyendo el código de país)
     var numeroTelefono = "+51950563587";

    // Mensaje predeterminado (puedes dejarlo vacío si no quieres un mensaje inicial)
    var mensaje = "Hola, me interesa realizar la cotización de este producto: " + nuevaURL;

    // Generar el enlace de WhatsApp
    var enlaceWhatsApp = "https://wa.me/" + numeroTelefono + "?text=" + encodeURIComponent(mensaje);

    // Cambiar la URL actual
    window.open(enlaceWhatsApp, '_blank');
}

