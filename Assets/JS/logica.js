$(document).ready(function() {
// Display de los Formularios
    $("#com").click(function(){
        $("#comuniquemonos").css("display", "block");
    })
    $("#res").click(function(){
        $("#reserva").css("display", "block");
    })
// Datos de los Formularios
// Formulario Comuniquemonos
    $("#boton").click(function() {
        var nombre = $("#nombre").val();
        var correo = $("#correo").val();
        var motivo = $("#motivo").val();
        var telefono = $("#telefono").val();
        var textarea = $("#motivo-text").val();

        if (nombre == "") {
            alert("El campo Nombre es obligatorio")
            $("#nombre").focus();
        }else if (correo == "") {
            alert("El campo Correo es obligatorio")
            $("#correo").focus();
        }else if (motivo == "") {
            alert("El campo Motivo es obligatorio")
            $("#motivo").focus();
        }else if (telefono == "") {
            alert("El campo Telefono es obligatorio")
            $("#telefono").focus();
        }else if (textarea == "") {
            alert("Debe enviarnos un Mensaje en relación a su Motivo");
            $("#motivo-text").focus(); 
        }else{
            $("#form1").onsubmit = alert("Muchas gracias " + nombre + " hemos recibido sus " + motivo + " y enviaremos una pronta respuesta al correo " + correo); 
        }
        
        
    })
// Formulario Reservas
    $("#boton2").click(function() {
        var nombre2 = $("#nombre-2").val();
        var correo2 = $("#correo-2").val();
        var telefono2 = $("#telefono-2").val();
        var fecha = $("#fecha").val();
        var hora = $('#hora').val();
        var asistentes = $("#asistentes").val();
        
        if (nombre2 == "") {
            alert("El campo Nombre es obligatorio")
            $("#nombre-2").focus();
        }else if (correo2 == "") {
            alert("El campo Correo es obligatorio")
            $("#correo-2").focus();
        }else if (telefono2 == "") {
            alert("El campo Telefono es obligatorio")
            $("#telefono-2").focus();
        }else if (fecha == "") {
            alert("Debe indicar una fecha");
            $("#fecha").focus(); 
        }else if (hora == "") {
            alert("Debe indicar una hora");
            $("#hora").focus();
        }else if (asistentes == "") {
            alert("Debe indicar la cantidad de Asistentes");
            $("#asistentes").focus();
        }else {
            $("#form2").onsubmit = alert("Estimado(a): " + nombre2 + " agradecemos por reservar con nosotros. Hemos registrado " + asistentes + " asistentes. Se ha enviado el código de confirmación al correo " + correo2 + " Gracias por preferirnos");
        }
        
        
    })

    // Desplegando las targetas en grande
    $(".card1").click(function() {
        var agrandar = '<div class="targetas col-12"><div class="card targeta col-8"><div data-bs-theme="dark" class="p-0 m-0"><button type="button" class="btn-close" aria-label="Close"></button> </div>'
        + '<div class="card-body text-center m-0"><h5 class="card-title h1 p-0 m-0">GASEOSAS</h5><p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> </div>'
        + '<img src="./Assets/IMG/bebidas.jpg" class="imagen-grande" alt="bebidas"></div></div>';

        $("body").append(agrandar);
        $(".btn-close").click(function() {
            $(".targetas").remove();
        })
        

    })
    $(".card2").click(function() {
        var agrandar = '<div class="targetas col-12"><div class="card targeta col-8"><div data-bs-theme="dark" class="p-0 m-0"><button type="button" class="btn-close" aria-label="Close"></button> </div>'
        + '<div class="card-body text-center m-0"><h5 class="card-title h1 p-0 m-0">TABLAS</h5><p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> </div>'
        + '<img src="./Assets/IMG/tablas.jpg" class="imagen-grande" alt="tablas"></div></div>';

        $("body").append(agrandar);
        $(".btn-close").click(function() {
            $(".targetas").remove();
        })

    })
    $(".card3").click(function() {
        var agrandar = '<div class="targetas col-12"><div class="card targeta col-8"><div data-bs-theme="dark" class="p-0 m-0"><button type="button" class="btn-close" aria-label="Close"></button> </div>'
        + '<div class="card-body text-center m-0"><h5 class="card-title h1 p-0 m-0">SHOP CERVESA</h5><p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> </div>'
        + '<img src="./Assets/IMG/shop.jpeg" class="imagen-grande" alt="shop"></div></div>';

        $("body").append(agrandar);
        $(".btn-close").click(function() {
            $(".targetas").remove();
        })

    })

    // Desplegando el sobre nosotros
    
    $(".sobre").click(function() {
        $(".historia-pub").css("display", "block");
        
        })

    $(".btn-close").click(function() {
        $(".historia-pub").css("display", "none");

})

})