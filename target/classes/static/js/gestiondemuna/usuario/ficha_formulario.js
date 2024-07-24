
var requestContextPath = window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2));
var urlx = requestContextPath + "/demuna/ficha/formulario";


$(document).ready(function () {

    $.ajaxSetup({
        statusCode: {
            401: function () {
                window.location = requestContextPath + '/406';
            }
        }
    });

    $('#cod_unico').css('pointer-events', 'none');

    iniciar_fecha();
    mostrar_modal_info();
    aplicarExpresionRegularTexto();
    aplicarExpresionRegular();
    validar_aplicar_ficha();
    //valida_p9_7();
    valida_p4_35();
    valida_p4_25_1();
    valida_p4_26_noaplica();
    valida_p4_36_noaplica();
    valida_p4_36_otro();
    valida_p4_35_2_otro();
    valida_p4_2_si();
    valida_p4_3x();
    valida_p4_4x();
    valida_p4_9x();
    //valida_p4_5();
    valida_p4_18x();
    valida_p4_18_1();
    valida_p4_15_1();
    valida_p4_15_2();
    valida_p4_16_otro();
    valida_p4_15_3_otro();
    valida_p4_20_1_si();
    valida_p4_20_2_otro();
    valida_p4_21_noaplica();
    valida_p4_21_otro();
    valida_p4_25_2_otro();
    valida_p4_26_otro();
    valida_p4_27_si();
    valida_2_4();

    valida_p11_2_otro();
    //valida_p4_4_noaplicax();
    valida_p10_1_4x();

    valida_p6_5_otros();
    valida_p6_5_e();

    valida_p6_1_3_noaplica();
    valida_p6_1_4_noaplica();
    valida_p6_1_5_noaplica();


    aplicarFormatoFecha();
    aplicarFormatoFecha2();

   

    $(document).on('change', '#cod_unico', function () {
        buscar_establecimiento_demuna();
    });


    $(document).on('change', '#codi_depa_dpt', function () {
        buscar_municipalidades();
    });



    if ($("#p4_11_si").val() === 'S')
    {
        $("#demuna_ficha_s4_p4_profesion").val("A");
        cerrarCuadro2();
    }

    setTimeout(function ()
    {
        if ($("#p4_18_si").val() === 'S')
        {
            $("#demuna_ficha_s4_p4_profesion").val("B");
            cerrarCuadro2();
        }
    }, 2000);

    setTimeout(function ()
    {
        if ($("#p4_22_si").val() === 'S')
        {
            $("#demuna_ficha_s4_p4_profesion").val("C");
            cerrarCuadro2();
        }
    }, 3000);


 setTimeout(function ()
    {
        if ($("#p4_27_si").val() === 'S')
        {
            $("#demuna_ficha_s4_p4_profesion").val("D");
            cerrarCuadro2();
        }
    }, 4000);





    setTimeout(function ()
    {
        if ($("#p4_32_si").val() === 'S')
        {
            $("#demuna_ficha_s4_p4_profesion").val("E");
            cerrarCuadro2();
        }
    }, 4000);


//
//if ( $("#p4_22_si").val()  === 'S' )
//{
//    $("#demuna_ficha_s4_p4_profesion").val("C");
//    cerrarCuadro2();
//}
//if ( $("#p4_32_si").val()  === 'S' )
//{
//    $("#demuna_ficha_s4_p4_profesion").val("D");
//    cerrarCuadro2();
//}
});

$(document).on('change', '#no_implementado, #no_funciona', function () {
    validar_aplicar_ficha();

//     $(".no_aplicar_ficha :input").val("");
//    $(".no_aplicar_ficha :input[type=radio]").prop("checked", false);
//    $(".no_aplicar_ficha :input[type=checkbox]").prop("checked", false);
//    $(".no_aplicar_ficha select").val("");
//    $(".no_aplicar_ficha textarea").val("");
});

//$(document).on('change', '#no_implementado', function () {
//
//    validar_aplicar_ficha();
//
//    $(".no_aplicar_ficha :input").val("");
//    $(".no_aplicar_ficha :input[type=radio]").prop("checked", false);
//    $(".no_aplicar_ficha :input[type=checkbox]").prop("checked", false);
//    $(".no_aplicar_ficha select").val("");
//    $(".no_aplicar_ficha textarea").val("");
//
//});



function iniciar_fecha() {

    var rol_usuario = $("#rol_usuario").val();
    var id_ficha = $("#id_ficha").val();

   





    if (id_ficha !== "") {
        
        

//        const fecha_hora = new tempusDominus.TempusDominus(document.getElementById('fch_supervision'), {
//            display: {
//                components: {
//                    clock: false
//                },
//                theme: 'dark'
//            },
//            localization: {
//                dayViewHeaderFormat: {month: 'long', year: 'numeric'},
//                locale: 'es-ES',
//                format: 'dd/MM/yyyy'
//            },
//            restrictions: {
//                maxDate: new Date()
//            }
//        });
    

        const p9_6_2_fecha = new tempusDominus.TempusDominus(document.getElementById('p9_6_2_fecha'), {
            display: {
                components: {
                    clock: false
                },
                theme: 'dark'
            },
            localization: {
                dayViewHeaderFormat: {month: 'long', year: 'numeric'},
                locale: 'es-ES',
                format: 'dd/MM/yyyy'
            },
            restrictions: {
                maxDate: new Date()
            }
        });

        const p2_1_2_fecha_emi = new tempusDominus.TempusDominus(document.getElementById('p2_1_2_fecha_emi'), {
            display: {
                components: {
                    clock: false
                },
                theme: 'dark'
            },
            localization: {
                dayViewHeaderFormat: {month: 'long', year: 'numeric'},
                locale: 'es-ES',
                format: 'dd/MM/yyyy'
            },
            restrictions: {
                maxDate: new Date()
            }
        });

        const p2_1_2_fecha_public = new tempusDominus.TempusDominus(document.getElementById('p2_1_2_fecha_public'), {
            display: {
                components: {
                    clock: false
                },
                theme: 'dark'
            },
            localization: {
                dayViewHeaderFormat: {month: 'long', year: 'numeric'},
                locale: 'es-ES',
                format: 'dd/MM/yyyy'
            },
            restrictions: {
                maxDate: new Date()
            }
        });

        const p2_5_2_fecha_emi = new tempusDominus.TempusDominus(document.getElementById('p2_5_2_fecha_emi'), {
            display: {
                components: {
                    clock: false
                },
                theme: 'dark'
            },
            localization: {
                dayViewHeaderFormat: {month: 'long', year: 'numeric'},
                locale: 'es-ES',
                format: 'dd/MM/yyyy'
            },
            restrictions: {
                maxDate: new Date()
            }
        });

        const p4_7_3_fecha = new tempusDominus.TempusDominus(document.getElementById('p4_7_3_fecha'), {
            display: {
                components: {
                    clock: false
                },
                theme: 'dark'
            },
            localization: {
                dayViewHeaderFormat: {month: 'long', year: 'numeric'},
                locale: 'es-ES',
                format: 'dd/MM/yyyy'
            },
            restrictions: {
                maxDate: new Date()
            }
        });

        ///////////////////HORAS////////////////////////////

        const horaInput = document.querySelector('.hora-input');
        const p2_6_lv_hora_inicio = new tempusDominus.TempusDominus(horaInput, {
            display: {
                components: {
                    calendar: false,
                    date: false,
                    month: false,
                    year: false,
                    decades: false,
                    clock: true,
                    hours: true,
                    minutes: true,
                    seconds: false,
                    useTwentyfourHour: false
                },
                theme: 'dark'
            },
            localization: {
                locale: 'es-ES',
                format: 'HH:mm'
            }
        });

        horaInput.addEventListener('change', function () {
            const value = horaInput.value;
            const isValidFormat = /^(0[0-9]|1[0-1]):[0-5][0-9]$/.test(value);
            if (!isValidFormat) {

                Swal.fire({
                    text: 'Hora no válida. Por favor ingrese una hora entre 00:00 y 11:59.'
                });
                horaInput.value = '';
            }
        });



        const horaCierre = document.querySelector('.hora-cierre');
        const p2_6_lv_hora_cierre = new tempusDominus.TempusDominus(horaCierre, {
            display: {
                components: {
                    calendar: false,
                    date: false,
                    month: false,
                    year: false,
                    decades: false,
                    clock: true,
                    hours: true,
                    minutes: true,
                    seconds: false,
                    useTwentyfourHour: true
                },
                theme: 'dark'
            },
            localization: {
                //dayViewHeaderFormat: {month: 'long', year: 'numeric'},
                locale: 'es-ES',
                format: 'HH:mm'
            }
//             restrictions: {
//                minTime: '12:00'  
//            }
        });


    }
}
//
function validar_aplicar_ficha() {
    var radioNo = document.getElementById("no_implementado");
    var radioSi = document.getElementById("si_implementado");
    var no_funciona = document.getElementById("no_funciona");

    if (radioNo && radioNo.checked) {
        console.log("elejiste no");
        $(".no_aplicar_ficha").hide();
        $(".no_aplicar_ficha :input").prop("required", false).val("");
        $(".no_aplicar_ficha :input[type=radio], .no_aplicar_ficha :input[type=checkbox]").prop("checked", false);
        $(".no_aplicar_ficha select, .no_aplicar_ficha textarea").val("");

    } else if (no_funciona && no_funciona.checked) {
        console.log("elejiste no funciona");
        $(".no_aplicar_fichax").hide();
        $(".p2_2_1_boton_muestra").show();
        $(".no_aplicar_fichax :input").prop("required", false).val("");
        $(".no_aplicar_fichax :input[type=radio], .no_aplicar_fichax :input[type=checkbox]").prop("checked", false);
        $(".no_aplicar_fichax select, .no_aplicar_fichax textarea").val("");

    } else if (radioSi && radioSi.checked) {
        console.log("elejiste SI");
        $(".no_aplicar_ficha").show();
        $(".p2_2_1_boton_muestra").hide();
        // $(".p2_2_1_boton_muestra").show();
    } else {
        console.log("no elejiste nada");
        $(".no_aplicar_ficha").hide();
        $(".no_aplicar_fichax").hide();
        $(".p2_2_1_boton_muestra").hide();
    }
}


function validar_aplicar_ficha_extra() {
    var radioNo = document.getElementById("no_implementado");
    var radioSi = document.getElementById("si_implementado");
    var no_funciona = document.getElementById("no_funciona");

    if (radioNo && radioNo.checked) {
        console.log("elejiste no");
        $(".no_aplicar_ficha").hide();
        $(".no_aplicar_ficha :input").prop("required", false).val("");
        $(".no_aplicar_ficha :input[type=radio], .no_aplicar_ficha :input[type=checkbox]").prop("checked", false);
        $(".no_aplicar_ficha select, .no_aplicar_ficha textarea").val("");

    } else if (no_funciona && no_funciona.checked) {
        console.log("elejiste no funciona");
        $(".no_aplicar_fichax").hide();
        $(".p2_2_1_boton_muestra").show();
        $(".no_aplicar_fichax :input").prop("required", false).val("");
        $(".no_aplicar_fichax :input[type=radio], .no_aplicar_fichax :input[type=checkbox]").prop("checked", false);
        $(".no_aplicar_fichax select, .no_aplicar_fichax textarea").val("");

    } else if (radioSi && radioSi.checked) {
        console.log("elejiste SI");
        $(".no_aplicar_ficha").show();
        $(".p2_2_1_boton_muestra").hide();
    } else {
        console.log("no elejiste nada");
        $(".no_aplicar_ficha").hide();
        $(".no_aplicar_fichax").hide();
        $(".p2_2_1_boton_muestra").hide();
    }

    document.getElementById("btn_guardar_sec_2").click();

}
//function validar_aplicar_ficha() {
////    var radioNo = document.getElementById("no_implementado");
//    var p2_2_si = document.getElementById("p2_2_si");
//    var no_funciona = document.getElementById("no_funciona");
//
//
//if (no_funciona && no_funciona.checked) {
//        console.log("elejiste no funciona");
//        $(".no_aplicar_fichax").hide();
//        $(".p2_2_1_boton_muestra").show();
//        $(".no_aplicar_fichax :input").prop("required", false).val("");
//        $(".no_aplicar_fichax :input[type=radio], .no_aplicar_fichax :input[type=checkbox]").prop("checked", false);
//        $(".no_aplicar_fichax select, .no_aplicar_fichax textarea").val("");
//
//    } else if (p2_2_si.checked) {
//       
//        console.log("elejiste SI");
//         $(".no_aplicar_fichax").show();
//        $(".no_aplicar_ficha").show();
//        $(".p2_2_1_boton_muestra").hide();
//    } else {
//        console.log("no elejiste nada");
//        $(".no_aplicar_ficha").hide();
//        $(".no_aplicar_fichax").hide();
//        $(".p2_2_1_boton_muestra").hide();
//    }
//}




function validar_aplicar_ficha_extra2() {
    var radioNo = document.getElementById("no_implementado");
    var radioSi = document.getElementById("si_implementado");
    var no_funciona = document.getElementById("no_funciona");

    if (radioNo && radioNo.checked) {
       // console.log("elejiste no");
        $(".no_aplicar_ficha").hide();
        $(".no_aplicar_ficha :input").prop("required", false).val("");
        $(".no_aplicar_ficha :input[type=radio], .no_aplicar_ficha :input[type=checkbox]").prop("checked", false);
        $(".no_aplicar_ficha select, .no_aplicar_ficha textarea").val("");

    } else if (no_funciona && no_funciona.checked) {
       // console.log("elejiste no funciona");
        $(".no_aplicar_fichax").hide();
        $(".p2_2_1_boton_muestra").show();
        $(".no_aplicar_fichax :input").prop("required", false).val("");
        $(".no_aplicar_fichax :input[type=radio], .no_aplicar_fichax :input[type=checkbox]").prop("checked", false);
        $(".no_aplicar_fichax select, .no_aplicar_fichax textarea").val("");

    } else if (radioSi && radioSi.checked) {
       // console.log("elejiste SI");
        $(".no_aplicar_ficha").show();
        $(".p2_2_1_boton_muestra").hide();
    } else {
        console.log("no elejiste nada");
        $(".no_aplicar_ficha").hide();
        $(".no_aplicar_fichax").hide();
        $(".p2_2_1_boton_muestra").hide();
    }

   

} 



function mostrar_modal_info() {

    var flag_modal = $("#flag_modal").val();

    if (flag_modal === "S") {
        $("#mdl_info_ficha").modal("show");
        
        setTimeout(function() {
            $("#mdl_info_ficha").modal("hide");
        }, 2000);

    
        
        
    }
}



function guardar_total() {

    $(".accordion-button").removeClass("collapsed");
    $(".accordion-collapse").removeClass("show").addClass("show");

}

function validacion_final() {

    $("#btn_guardar").prop("disabled", true);
    $("#btn_guardar").text('');
    $("#btn_guardar").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    $(".btn_guardar_parcial").prop("disabled", true);
    $(".btn_guardar_parcial").text('');
    $(".btn_guardar_parcial").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

}


//
//
//function guardar_parcial(elem) {
//
//    var btn_guardado_parcial = elem.id;
//
//    $(".btn_guardar_parcial").prop("disabled", true);
//    $(".btn_guardar_parcial").text('');
//    $(".btn_guardar_parcial").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');
//
//    $("#btn_guardar").prop("disabled", true);
//    $("#btn_guardar").text('');
//    $("#btn_guardar").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');
//
//    $("#btn_guardar_final").prop("disabled", true);
//    $("#btn_guardar_final").text('');
//    $("#btn_guardar_final").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');
//
//    var estado = $("#estado").val();
//
//    if (estado === 'C') {
//        estado = "C";
//    } else {
//        estado = "I";
//    }
//
//    $("#estado").val(estado);
//    $("#txt_btn_guardado_parcial").val(btn_guardado_parcial);
//    $("#flag_guardado_parcial").val(true);
//
//    $("#frm_fichas").submit();
//}


function guardar_parcial_1(elem) {
    
    var btn_guardado_parcial = elem.id;

    $(".btn_guardar_parcial").prop("disabled", true);
    $(".btn_guardar_parcial").text('');
    $(".btn_guardar_parcial").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    $("#btn_guardar").prop("disabled", true);
    $("#btn_guardar").text('');
    $("#btn_guardar").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    $("#btn_guardar_final").prop("disabled", true);
    $("#btn_guardar_final").text('');
    $("#btn_guardar_final").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');
//////////////////////////////////////////////////////////
    var estado = $("#estado").val();
    var no_pudo_aplicar_ficha = $("#no_implementado").is(":checked");
    if (no_pudo_aplicar_ficha) {
        // Si está marcado, establecer el estado como completo
        estado = "C";
    } else {
        // Si no está marcado, mantener el estado actual
        estado = estado === 'C' ? "C" : "I";
    }
/////////////////////////////////////////////////////////
    $("#estado").val(estado);
    $("#txt_btn_guardado_parcial").val(btn_guardado_parcial);
    $("#flag_guardado_parcial").val(true);
   
    try {
        // Verificar y mostrar los datos antes de enviar el formulario
        var formData = $("#frm_fichas").serializeArray();    
        $("#frm_fichas").submit();
    } catch (error) {
       
    }

    $("#frm_fichas").submit();
}


function guardar_parcial_2(elem) {
    
    var btn_guardado_parcial = elem.id;
console.log("btn_guardado_parcial" + btn_guardado_parcial);
    $(".btn_guardar_parcial").prop("disabled", true);
    $(".btn_guardar_parcial").text('');
    $(".btn_guardar_parcial").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    $("#btn_guardar").prop("disabled", true);
    $("#btn_guardar").text('');
    $("#btn_guardar").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    $("#btn_guardar_final").prop("disabled", true);
    $("#btn_guardar_final").text('');
    $("#btn_guardar_final").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');
//////////////////////////////////////////////////////////
    var estado = $("#estado").val();
    console.log("estado1"+ estado);
      var no_pudo_aplicar_ficha = $('#no_funciona').is(':checked');
    alert(no_pudo_aplicar_ficha);
    if (no_pudo_aplicar_ficha) {
        // Si está marcado, establecer el estado como completo
        estado = "C";
        
        alert( estado);
    } else {
        // Si no está marcado, mantener el estado actual
        estado = estado === 'C' ? "C" : "I";
        
          console.log("estado3"+ estado);
    }
/////////////////////////////////////////////////////////
    $("#estado").val(estado);
    $("#txt_btn_guardado_parcial").val(btn_guardado_parcial);
    $("#flag_guardado_parcial").val(true);
   
    try {
        // Verificar y mostrar los datos antes de enviar el formulario
        var formData = $("#frm_fichas").serializeArray();    
        $("#frm_fichas").submit();
    } catch (error) {
       
    }

    $("#frm_fichas").submit();
}
//
//function guardar_parcial(elem) {
//console.log("llego aqui guardar parcial");
////    if (!$('input[name="implementado"]:checked').val()) {
////        alert("Por favor, Contestar la pregunta 1.8. ¿Tiene implementado Demuna?");
////        return; // Evita que continúe si no hay selección
////    }
// //var id_ficha = $("#id_ficha").val();
//    var btn_guardado_parcial = elem.id;
//
//    $(".btn_guardar_parcial").prop("disabled", true);
//    $(".btn_guardar_parcial").text('');
//    $(".btn_guardar_parcial").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');
//    $("#btn_guardar").prop("disabled", true);
//    $("#btn_guardar").text('');
//    $("#btn_guardar").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');
//    $("#btn_guardar_final").prop("disabled", true);
//    $("#btn_guardar_final").text('');
//    $("#btn_guardar_final").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');
//    
//    var estado = $("#estado").val();
//    var no_pudo_aplicar_ficha = $("#no_implementado").is(":checked");
//    if (no_pudo_aplicar_ficha) {
//        estado = "C";
//    } else {
//        estado = estado === 'C' ? "C" : "I";
//    }
//    $("#estado").val(estado);
//    $("#txt_btn_guardado_parcial").val(btn_guardado_parcial);
//    $("#flag_guardado_parcial").val(true);
//     try {
//        var formData = $("#frm_fichas").serializeArray();
//        console.log("Datos del formulario:", formData);
//
//        $("#frm_fichas").submit();
//    } catch (error) {
//        console.error("Error al guardar parcialmente:", error);
//        alert("Ocurrió un error al guardar parcialmente. Por favor, inténtalo de nuevo.");
//    }
//    $("#frm_fichas").submit();
//}
function enableValidateButton() {
        const validateButton = document.getElementById('btn_validar_sec_1');
        validateButton.disabled = false;
    }
    
function guardar_parcial(elem) {
    
    var btn_guardado_parcial = elem.id;

    $(".btn_guardar_parcial").prop("disabled", true);
    $(".btn_guardar_parcial").text('');
    $(".btn_guardar_parcial").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');
    $("#btn_guardar").prop("disabled", true);
    $("#btn_guardar").text('');
    $("#btn_guardar").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');
    $("#btn_guardar_final").prop("disabled", true);
    $("#btn_guardar_final").text('');
    $("#btn_guardar_final").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');
    
    var estado = $("#estado").val();

    var no_pudo_aplicar_ficha = $("#no_implementado").is(":checked");
     var no_funciona = $("#no_funciona").is(":checked");

    if (no_pudo_aplicar_ficha) {
        estado = "C";
    } else if(no_funciona) {
        estado = "C";
       
    }else{
         estado = estado === 'C' ? "C" : "I";
    }
    $("#estado").val(estado);
    $("#txt_btn_guardado_parcial").val(btn_guardado_parcial);
    $("#flag_guardado_parcial").val(true);

    try {
        var formData = $("#frm_fichas").serializeArray();

        $("#frm_fichas").submit();
        
    } catch (error) {
        console.error("Error al guardar parcialmente:", error);
        alert("Ocurrió un error al guardar parcialmente. Por favor, inténtalo de nuevo.");
    }
}
function buscar_establecimiento_demuna() {
    console.log("entro a la funcion");

    var cod_unicox = $("#cod_unicox").val();

    console.log("codigo :" + cod_unicox);

    if (cod_unicox !== "") {
        $("#btn_buscar").prop("disabled", true);
        $("#btn_buscar").text('');
        $("#btn_buscar").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Buscando...');

        $(".search_ie").prop("disabled", true);

        $.ajax({
            url: urlx + "/ajaxBuscarEESS",
            type: 'POST',
            data: {cod_unico: cod_unicox},
            success: function (data, textStatus, jqXHR) {

                console.log("Datos recibidos", data);
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        console.log("Nombre del campo: " + key); // Imprime el nombre del campo
                        console.log("Valor del campo " + key + ": " + data[key]); // Imprime el valor del campo
                    }
                }
                $("#id_sestablecmnt").val(data.id_sestablecmnt);
                $("#nom_alcalde").val(data.nom_alcalde);
                $("#num_celular").val(data.num_celular);
                $("#correo_demuna").val(data.correo_demuna);
                $("#departamento_demuna").val(data.departamento_demuna);
                $("#provincia_demuna").val(data.provincia_demuna);
                $("#distrito_demuna").val(data.distrito_demuna);
                $("#nom_entidad").val(data.nom_entidad);
                $("#ndocumento").val(data.ndocumento);

                $(".search_ie").prop("disabled", false);

                $("#btn_buscar").prop("disabled", false);
                $("#btn_buscar").text('');
                $("#btn_buscar").wrapInner('<i class="fa-solid fa-magnifying-glass"></i> Buscar');

//                mostrar_modal_info_ie();

            }, error: function (jqXHR, textStatus, errorThrown) {

                $(".search_ie").prop("disabled", false);
                $("#btn_buscar").prop("disabled", false);
                $("#btn_buscar").text('');
                $("#btn_buscar").wrapInner('<i class="fa-solid fa-magnifying-glass"></i> Buscar');

                if (jqXHR.status == 401) {
                    alert("Su sesi\u00F3n ha finalizado");
                } else {
                    alert("Ocurrio un error al cargar");
                }

            }
        });
    } else {
        alert("Ingresar el c\u00F3digo del establecimiento");
    }
}


//
//function buscar_provincias() {
//
//    $("#codi_prov_tpr").prop("disabled", true);
//    $("#codi_dist_tdi").prop("disabled", true);
//    console.log("entro aqui");
//
//    var codi_depa_dpt = $("#codi_depa_dpt").val();
//
//    $.ajax({
//        url: urlx + "/ajaxBuscarProvincias",
//        type: 'POST',
//        data: {codi_depa_dpt: codi_depa_dpt},
//        success: function (data, textStatus, jqXHR) {
//            console.log("entro aqui" + codi_depa_dpt);
//            $("#codi_prov_tpr").prop("disabled", false);
//            $("#codi_dist_tdi").prop("disabled", false);
//            $("#codi_prov_tpr").html(data);
//
//
//            buscar_distritos();
//
//        }, error: function (jqXHR, textStatus, errorThrown) {
//
//            if (jqXHR.status == 401) {
//                alert("Su sesi\u00F3n ha finalizado");
//            } else {
//                alert("Ocurrio un error al cargar");
//            }
//
//        }
//    });
//}
//

function buscar_distritos() {
    $("#codi_dist_tdi").prop("disabled", true);

    var codi_depa_dpt = $("#codi_depa_dpt").val();
    var codi_prov_tpr = $("#codi_prov_tpr").val();
    var coddistx = $("#codi_municipalidad option:selected").data("coddistx");

    console.log("codi_depa_dpt: " + codi_depa_dpt);
    console.log("codi_prov_tpr: " + codi_prov_tpr);
    console.log("coddistx: " + coddistx);

    $.ajax({
        url: urlx + "/ajaxBuscarDistritos",
        type: 'POST',
        data: {
            codi_depa_dpt: codi_depa_dpt,
            codi_prov_tpr: codi_prov_tpr,
            coddistx: coddistx
        },
        success: function (data, textStatus, jqXHR) {
            $("#codi_dist_tdi").prop("disabled", false);
            $("#codi_dist_tdi").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}



function actualizarDistritos() {
    var selectMunicipalidad = document.getElementById("codi_municipalidad");
    var selectDistrito = document.getElementById("codi_dist_tdi");

    console.log("aD");
    // Obtener el texto completo de la opción seleccionada en el primer select
    var selectedOptionText = selectMunicipalidad.options[selectMunicipalidad.selectedIndex].text;

    // Si el texto completo de la opción seleccionada contiene "MUNICIPALIDAD PROVINCIAL", deshabilitar el segundo select
    if (selectedOptionText.indexOf("MUNICIPALIDAD PROVINCIAL") !== -1) {
        selectDistrito.disabled = true;
        selectDistrito.value = "";
    } else {
        selectDistrito.disabled = false;
    }
}
//    
//function buscar_municipalidades() {
//    // Obtener los valores seleccionados
//    var codi_depa_dpt = $("#codi_depa_dpt").val();
//    var codi_prov_tpr = $("#codi_prov_tpr").val();
//    var codi_dist_tdi = $("#codi_dist_tdi").val();
//    // Verificar si se han seleccionado tanto el departamento como la provincia
//    if (codi_depa_dpt && codi_prov_tpr) {
//        // Ambos valores están seleccionados, proceder con la búsqueda
//        $("#codi_municipalidad").prop("disabled", true);
//        console.log("Código de departamento seleccionado: ", codi_depa_dpt);
//        console.log("Código de provincia seleccionado: ", codi_prov_tpr);
//
//        $.ajax({
//            url: urlx + "/ajaxBuscarMunicipalidades",
//            type: 'POST',
//            data: {codi_depa_dpt: codi_depa_dpt, codi_prov_tpr: codi_prov_tpr},
//            success: function (data, textStatus, jqXHR) {
//                $("#codi_municipalidad").prop("disabled", false);
//                $("#codi_municipalidad").html(data);
//            },
//            error: function (jqXHR, textStatus, errorThrown) {
//                if (jqXHR.status == 401) {
//                    alert("Su sesión ha finalizado");
//                } else {
//                    alert("Ocurrió un error al cargar");
//                }
//            }
//        });
//    } else {
//        // Mostrar un mensaje de error o realizar alguna acción cuando no se hayan seleccionado ambos valores
//        console.log("Por favor seleccione tanto el departamento como la provincia");
//    }
//}

function buscar_municipalidades() {
    // Obtener los valores seleccionados
    var codi_depa_dpt = $("#codi_depa_dpt").val();
    var codi_prov_tpr = $("#codi_prov_tpr").val();
    var codi_dist_tdi = $("#codi_dist_tdi").val();

    // Verificar si se han seleccionado tanto el departamento como la provincia
    if (codi_depa_dpt && codi_prov_tpr) {
        // Ambos valores están seleccionados, proceder con la búsqueda
        $("#codi_municipalidad").prop("disabled", true);
        console.log("Código de departamento seleccionado: ", codi_depa_dpt);
        console.log("Código de provincia seleccionado: ", codi_prov_tpr);
        console.log("Código de distrito seleccionado: ", codi_dist_tdi);

        // Crear el objeto de datos a enviar
        var requestData = {
            codi_depa_dpt: codi_depa_dpt,
            codi_prov_tpr: codi_prov_tpr
        };

        // Verificar si se ha seleccionado el distrito y agregarlo a los datos
        if (codi_dist_tdi) {
            requestData.codi_dist_tdi = codi_dist_tdi;
        }

        $.ajax({
            url: urlx + "/ajaxBuscarMunicipalidades",
            type: 'POST',
            data: requestData,
            success: function (data, textStatus, jqXHR) {
                $("#codi_municipalidad").prop("disabled", false);
                $("#codi_municipalidad").html(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.status == 401) {
                    alert("Su sesión ha finalizado");
                } else {
                    alert("Ocurrió un error al cargar");
                }
            }
        });
    } else {
        // Mostrar un mensaje de error o realizar alguna acción cuando no se hayan seleccionado ambos valores
        console.log("Por favor seleccione tanto el departamento como la provincia");
    }
}


//function buscar_municipalidades() {
//    
//    $("#codi_municipalidad").prop("disabled", true);
//    // Obtener los valores seleccionados
//    var codi_depa_dpt = $("#codi_depa_dpt").val();
//    var codi_prov_tpr = $("#codi_prov_tpr").val();
//
//    
//    if (codi_depa_dpt && codi_prov_tpr) {
//   
//        $("#codi_municipalidad").prop("disabled", true);
//        console.log("Código de departamento seleccionado: ", codi_depa_dpt);
//        console.log("Código de provincia seleccionado: ", codi_prov_tpr);
//
//        $.ajax({
//            url: urlx + "/ajaxBuscarMunicipalidades",
//            type: 'POST',
//            data: {codi_depa_dpt: codi_depa_dpt, codi_prov_tpr: codi_prov_tpr},
//            success: function (data, textStatus, jqXHR) {
//                $("#codi_municipalidad").prop("disabled", false);
//                $("#codi_municipalidad").html(data);
//            },
//            error: function (jqXHR, textStatus, errorThrown) {
//                if (jqXHR.status == 401) {
//                    alert("Su sesión ha finalizado");
//                } else {
//                    alert("Ocurrió un error al cargar");
//                }
//            }
//        });
//    } else {
//        // Mostrar un mensaje de error o realizar alguna acción cuando no se hayan seleccionado ambos valores
//        console.log("Por favor seleccione tanto el departamento como la provincia");
//    }
//}

//function actualizarCampos() {
//    var selectMunicipalidad = document.getElementById("codi_municipalidad");
//    var selectedIndex = selectMunicipalidad.selectedIndex;
//    
//    if (selectedIndex > 0) {
//        var selectedOption = selectMunicipalidad.options[selectedIndex];
//        var optionValue = selectedOption.value;
//        var optionValues = optionValue.split('_');
//        
//        // Obtener los valores individuales de la opción seleccionada
//        var ubigeo = optionValues[0];
//        var nomEntidad = optionValues[1];
//        var codUnico = optionValues[2];
//        var nomAutoridad = optionValues[3];
//        var telefono = optionValues[4];
//        var correo = optionValues[5];
//        var nresolu = optionValues[6];
//        console.log("valor"+ nomAutoridad);
//        // Establecer los valores en los campos correspondientes
//        //document.getElementById("nom_entidad").value = nomEntidad;
//        document.getElementById("cod_unicox").value = codUnico;
//        document.getElementById("nom_alcalde").value = nomAutoridad;
//        document.getElementById("num_celular").value = telefono;
//        document.getElementById("correo_demuna").value = correo;
//        document.getElementById("ndocumento").value = nresolu;
//    } else {
//        // Si no se selecciona ninguna municipalidad, limpiar los campos
//       // document.getElementById("nom_entidad").value = "";
//        document.getElementById("cod_unicox").value = "";
//        document.getElementById("nom_alcalde").value = "";
//        document.getElementById("num_celular").value = "";
//        document.getElementById("correo_demuna").value = "";
//        document.getElementById("ndocumento").value = "";
//    }
//}

//function actualizarCampos() {
//    var selectMunicipalidad = document.getElementById("codi_municipalidad");
//    var selectedIndex = selectMunicipalidad.selectedIndex;
//    
//    if (selectedIndex > 0) {
//        var selectedOption = selectMunicipalidad.options[selectedIndex];
//        var nomEntidad = selectedOption.getAttribute("data-nom-entidad");
//        var codUnico = selectedOption.getAttribute("data-cod-unico");
//        var nomAutoridad = selectedOption.getAttribute("data-nom-autoridad");
//        var telefono = selectedOption.getAttribute("data-telefono");
//        var correo = selectedOption.getAttribute("data-correo");
//        var nresolu = selectedOption.getAttribute("data-nresolu");
//
//        // Establecer los valores en los campos correspondientes
//        // document.getElementById("nom_entidad").value = nomEntidad;
//        document.getElementById("cod_unicox").value = codUnico;
//        document.getElementById("nom_alcalde").value = nomAutoridad;
//        document.getElementById("num_celular").value = telefono;
//        document.getElementById("correo_demuna").value = correo;
//        document.getElementById("ndocumento").value = nresolu;
//    } else {
//        // Si no se selecciona ninguna municipalidad, limpiar los campos
//        // document.getElementById("nom_entidad").value = "";
//        document.getElementById("cod_unicox").value = "";
//        document.getElementById("nom_alcalde").value = "";
//        document.getElementById("num_celular").value = "";
//        document.getElementById("correo_demuna").value = "";
//        document.getElementById("ndocumento").value = "";
//    }
//}
function actualizarCampos() {
    var selectMunicipalidad = document.getElementById("codi_municipalidad");
    var selectedIndex = selectMunicipalidad.selectedIndex;

    if (selectedIndex > 0) {
        var selectedOption = selectMunicipalidad.options[selectedIndex];
        var codUnico = selectedOption.getAttribute("data-cod-unico");

        console.log("codigo :" + codUnico);
        console.log("Código único enviado al servidor:", codUnico);

        $.ajax({
//            url: urlx + "/ajaxBuscarCodUnico", 
//            type: 'POST',
            url: urlx + "/ajaxBuscarCodUnico",
            type: 'GET',
            data: {cod_unico: codUnico},
            success: function (response) {

                if (response.existe) {
                    // Si el código único existe, mostrar una alerta con SweetAlert
                    Swal.fire({
                        icon: 'warning',
                        title: 'Atención',
                        text: 'Ya se encuentra registrada; Por favor, elija otra Municipalidad.'
                    });
                    limpiarCampos();
                } else {
                    // Si el código único no existe, completar los campos
                    //  completarCampos(selectedOption);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // Si hay un error en la petición AJAX, completar los campos como lo hacías antes
                completarCampos(selectedOption);
            }
        });
    } else {
        // Si no se selecciona ninguna municipalidad, limpiar los campos
        limpiarCampos();
    }
}

//function completarCampos(selectedOption) {
//    var codUnico = selectedOption.getAttribute("data-cod-unico");
//    var nomAutoridad = selectedOption.getAttribute("data-nom-autoridad");
//    var telefono = selectedOption.getAttribute("data-telefono");
//    var correo = selectedOption.getAttribute("data-correo");
//    var nresolu = selectedOption.getAttribute("data-nresolu");
//
//    document.getElementById("cod_unicox").value = codUnico;
//    document.getElementById("nom_alcalde").value = nomAutoridad;
//    document.getElementById("num_celular").value = telefono;
//    document.getElementById("correo_demuna").value = correo;
//    document.getElementById("ndocumento").value = nresolu;
//}

function limpiarCampos() {
    document.getElementById("codi_depa_dpt").value = "";
    document.getElementById("codi_prov_tpr").value = "";
    document.getElementById("codi_dist_tdi").value = "";
    document.getElementById("codi_municipalidad").value = "";
}


function mayus(e) {
    e.value = e.value.toUpperCase();
}

////////////////VALIDACION GENERAL PARA NUMEROS////////////
function aplicarExpresionRegular() {
    var sopInputs = document.querySelectorAll('.sop');

    sopInputs.forEach(function (input) {
        input.addEventListener('input', function () {
            // Limitar el ingreso a igual o menos de 9 caracteres
            if (this.value.length > 9) {
                this.value = this.value.slice(0, 9);
            }
            // Aplicar expresión regular para permitir solo números
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    });
}

function aplicarExpresionRegular_decimal() {
    var sopInputs = document.querySelectorAll('.decimal');

    sopInputs.forEach(function (input) {
        input.addEventListener('input', function () {
            
            if (this.value.length > 9) {
                this.value = this.value.slice(0, 9);
            }
           
            this.value = this.value.replace(/[^0-9.]/g, '');

            
            var parts = this.value.split('.');
            if (parts.length > 2) {
                this.value = parts[0] + '.' + parts.slice(1).join('');
            }
        });
    });
}

function aplicarExpresionRegularTexto() {
    var textInputs = document.querySelectorAll('.only-text');

    textInputs.forEach(function (input) {
        input.addEventListener('input', function () {
            // Limitar el ingreso a igual o menos de 90 caracteres
            if (this.value.length > 90) {
                this.value = this.value.slice(0, 90);
            }
            // Aplicar expresión regular para permitir solo letras y espacios
            this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
        });
    });
}


function aplicarFormatoFecha() {
    var sopInputs = document.querySelectorAll('.fechax');

    sopInputs.forEach(function (input) {
        input.addEventListener('input', function () {
            // Remover cualquier caracter que no sea un número
            let inputValue = this.value.replace(/[^0-9]/g, '');

            // Agregar las barras en las posiciones adecuadas
            if (inputValue.length > 2 && inputValue.length <= 4) {
                inputValue = inputValue.slice(0, 2) + '/' + inputValue.slice(2);
            } else if (inputValue.length > 4) {
                inputValue = inputValue.slice(0, 2) + '/' + inputValue.slice(2, 4) + '/' + inputValue.slice(4, 8);
            }

            // Limitar el ingreso a igual o menos de 10 caracteres (incluyendo las barras "/")
            this.value = inputValue.slice(0, 10);
        });

        // Validar el ingreso cuando el input pierde el foco
        input.addEventListener('blur', function () {
            var regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
            if (!regex.test(this.value)) {

                Swal.fire({
                    title: 'Atención',
                    text: 'Por favor, ingrese una fecha válida en el formato DD/MM/AAAA.'
                });
                this.value = '';
            }
        });
    });
}
function aplicarFormatoFecha2() {
    var sopInputs = document.querySelectorAll('.fechay');

    sopInputs.forEach(function (input) {
        input.addEventListener('input', function () {
            // Remover cualquier caracter que no sea un número
            let inputValue = this.value.replace(/[^0-9]/g, '');

            // Agregar las barras en las posiciones adecuadas
            if (inputValue.length > 2 && inputValue.length <= 4) {
                inputValue = inputValue.slice(0, 2) + '/' + inputValue.slice(2);
            } else if (inputValue.length > 4) {
                inputValue = inputValue.slice(0, 2) + '/' + inputValue.slice(2, 4) + '/' + inputValue.slice(4, 8);
            }

            // Limitar el ingreso a igual o menos de 10 caracteres (incluyendo las barras "/")
            this.value = inputValue.slice(0, 10);
        });

        // Validar el ingreso cuando el input pierde el foco
        input.addEventListener('blur', function () {
            var regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
            if (!regex.test(this.value)) {

                Swal.fire({
                    title: 'Atención',
                    text: 'Por favor, ingrese una fecha válida en el formato DD/MM/AAAA.'
                });
                this.value = '';
            }
        });
    });
}
////////////////////FIN VALIDACION NUMÉRICA//////////////// 
//
//
//



///////////SECCION 2///////////


function validarFechaEmision() {
    var fechaEmision = document.getElementById("d_p2_1_2_fecha_emi").value;
    var fechaPublicacion = document.getElementById("d_p2_1_2_fecha_public").value;
    if (fechaPublicacion === "") {
        // Permitir colocar fecha en la fecha de emisión
        return;
    }
    if (fechaEmision > fechaPublicacion) {
        Swal.fire({
//            icon: 'error',
//            title: 'Error',
            text: 'La fecha de emisión no puede ser posterior a la fecha de publicación.'
        });
        document.getElementById("d_p2_1_2_fecha_emi").value = "";
    }
}

function validarFechaPublicacion() {
    var fechaEmision = document.getElementById("d_p2_1_2_fecha_emi").value;
    var fechaPublicacion = document.getElementById("d_p2_1_2_fecha_public").value;

    if (fechaEmision === "") {
        Swal.fire({
            text: 'Por favor, coloque la fecha de emisión.',
            timer: 3000,
            timerProgressBar: true,
            allowOutsideClick: false
        }).then(function () {
            document.getElementById("d_p2_1_2_fecha_emi").focus();
        });
        return;
    }

    if (fechaPublicacion !== "") {
        if (fechaPublicacion < fechaEmision) {
            Swal.fire({
                text: 'La fecha de publicación no puede ser anterior a la fecha de emisión.',
                timer: 3000,
                timerProgressBar: true,
                allowOutsideClick: false
            }).then(function () {
                var fechaPublicInput = document.getElementById("d_p2_1_2_fecha_public");
                fechaPublicInput.value = "";
                fechaPublicInput.focus();
            });
            return;
        }
    }
}



function p2_2(value, p2_2_1)
{
    //console.log("p2_2", value);
    if (value === "S") {
        $("#" + p2_2_1).prop("disabled", true);
        $("#" + p2_2_1).prop("required", false);
        $("#" + p2_2_1).prop("value", '');
    } else {
        $("#" + p2_2_1).val("");
        $("#" + p2_2_1).prop("disabled", false);
        $("#" + p2_2_1).prop("required", true);
    }
}

function p2_7_virtual_fn(p2_7_virtual, p2_7_1_correo, p2_7_1_chat, p2_7_1_redes)
{

    if ($("#" + p2_7_virtual).is(':checked')) {
        $("#" + p2_7_1_correo).prop("disabled", false);
        $("#" + p2_7_1_chat).prop("disabled", false);
        $("#" + p2_7_1_redes).prop("disabled", false);
    } else {
        $("#" + p2_7_1_correo).prop("disabled", true);
        $("#" + p2_7_1_correo).prop("checked", false);

        $("#" + p2_7_1_chat).prop("disabled", true);
        $("#" + p2_7_1_chat).prop("checked", false);

        $("#" + p2_7_1_redes).prop("disabled", true);
        $("#" + p2_7_1_redes).prop("checked", false);
    }
}

function p2_8(value, p2_8_1)
{
    //console.log("p2_2", value);
    if (value === "S") {
        $("#" + p2_8_1).val("");
        $("#" + p2_8_1).prop("disabled", true);
        $("#" + p2_8_1).prop("required", false);
    } else {

        $("#" + p2_8_1).prop("disabled", false);
        $("#" + p2_8_1).prop("required", true);
    }
}

function p2_3(value, p2_3_1) {
    var textarea = document.getElementById(p2_3_1);
    var siRadio = document.getElementById('p2_3_si');

    if (siRadio.checked) {
        textarea.disabled = false;
        textarea.required = true;
    } else if (value === 'N') {
        textarea.disabled = true;
        textarea.value = '';
        textarea.required = false;
    } else if (value === 'X') {
        textarea.disabled = true;
        textarea.value = '';
        textarea.required = false;
    }
}

function valida_p2_7_noaplica() {
    var noAplicaCheckbox = document.getElementById("p2_7_noaplicax");


    var p2_7_presencial = document.getElementById('p2_7_presencial');
    var p2_7_virtual = document.getElementById('p2_7_virtual');
    var p2_7_tel = document.getElementById('p2_7_tel');
    var p2_7_emergencia = document.getElementById('p2_7_emergencia');
    var p2_7_otra = document.getElementById('p2_7_otra');
    var p2_7_otra_desc = document.getElementById('p2_7_otra_desc');
    var p2_7_1_correo = document.getElementById('p2_7_1_correo');
    var p2_7_1_chat = document.getElementById('p2_7_1_chat');
    var p2_7_1_redes = document.getElementById('p2_7_1_redes');
    if (noAplicaCheckbox.checked) {

        p2_7_presencial.disabled = true;
        p2_7_presencial.checked = false;

        p2_7_virtual.disabled = true;
        p2_7_virtual.checked = false;
        p2_7_tel.disabled = true;
        p2_7_tel.checked = false;
        p2_7_emergencia.disabled = true;
        p2_7_emergencia.checked = false;
        p2_7_otra.disabled = true;
        p2_7_otra.checked = false;
        p2_7_otra_desc.disabled = true;
        p2_7_otra_desc.value = "";

        p2_7_1_correo.disabled = true;
        p2_7_1_correo.checked = false;
        p2_7_1_chat.disabled = true;
        p2_7_1_chat.checked = false;
        p2_7_1_redes.disabled = true;
        p2_7_1_redes.checked = false;

    } else {

        p2_7_presencial.disabled = false;
        p2_7_virtual.disabled = false;
        p2_7_tel.disabled = false;
        p2_7_emergencia.disabled = false;
        p2_7_otra.disabled = false;

//     p2_7_1_correo.disabled = true;
//        p2_7_1_chat.disabled = true;
//        p2_7_1_redes.disabled = true;


    }
}


function p2_3(value, p2_3_1) {
    var textarea = document.getElementById(p2_3_1);
    var siRadio = document.getElementById('p2_3_si');

    if (siRadio.checked) {
        textarea.disabled = false;
        textarea.required = true;
    } else if (value === 'N') {
        textarea.disabled = true;
        textarea.value = '';
        textarea.required = false;
    }
}


function validar_p2_7_presencial() {


    if ($("#p2_7_otra").is(":checked")) {


        $("#p2_7_otra_desc").prop("disabled", false);

    } else {

        $("#p2_7_otra_desc").val("");
        $("#p2_7_otra_desc").prop("disabled", true);

    }

}
validar_p2_7_presencial();
$(document).on("change", "#p2_7_presencial,#p2_7_virtual,#p2_7_tel,#p2_7_emergencia,#p2_7_otra", function () {
    validar_p2_7_presencial();
});




function manejarModoVirtual() {

    var esVirtual = document.getElementById("p2_7_virtual").checked;

    var checkboxesModalidades = document.querySelectorAll("#p2_7_1_correo, #p2_7_1_chat, #p2_7_1_redes, #p2_7_1_mesa");

    checkboxesModalidades.forEach(function (checkbox) {
        checkbox.disabled = !esVirtual;
    });

    if (!esVirtual) {
        checkboxesModalidades.forEach(function (checkbox) {
            checkbox.checked = false;
        });

        document.getElementById("p2_7_otra_desc").value = "";
    }
}



//
//   FIN SECCION 2/////////  
//   
//   
//  
//  
//   

function valida_p3_6() {

    p3_6_si = document.getElementById("p3_6_si");
    p3_6_1_a = document.getElementById("p3_6_1_a");
    p3_6_1_b = document.getElementById("p3_6_1_b");

    if (p3_6_si.checked) {
        p3_6_1_a.disabled = false;
        p3_6_1_b.disabled = false;
    } else {

        p3_6_1_a.disabled = true;
        p3_6_1_b.disabled = true;

        p3_6_1_a.checked = false;
        p3_6_1_b.checked = false;


    }
}


///////// INICIO SECCION 4 /////////////////////
function p4_17(value, p4_17_1) {
    var textarea = document.getElementById(p2_17_1);
    var siRadio = document.getElementById('p4_17_si');

    if (siRadio.checked) {
        textarea.disabled = false;
        textarea.required = true;
    } else if (value === 'N') {
        textarea.disabled = true;
        textarea.value = '';
        textarea.required = false;
    }
}







//
//
//
//function valida_p4_3_abogado() {
//    var checkbox = document.getElementById("p4_3_abogado");
//    var input = document.getElementById("p4_3_abogado_cantidad");
//
//    if (checkbox.checked) {
//        input.disabled = false;
//        input.value = "";
//    } else {
//
//        input.disabled = true;
//        input.value = "0";
//    }
//}
//
//
//function valida_p4_3_psicologo() {
//    var checkbox = document.getElementById("p4_3_psicologo");
//    var input = document.getElementById("p4_3_psicologo_cantidad");
//
//    if (checkbox.checked) {
//        input.disabled = false;
//        input.value = "";
//    } else {
//        input.disabled = true;
//        input.value = "0";
//    }
//}
//
//function valida_p4_3_tsocial() {
//    var checkbox = document.getElementById("p4_3_tsocial");
//    var input = document.getElementById("p4_3_tsocial_cantidad");
//
//    if (checkbox.checked) {
//        input.disabled = false;
//        input.value = "";
//    } else {
//        input.disabled = true;
//        input.value = "0";
//    }
//}

//
//function valida_p4_3_educador() {
//    var checkbox = document.getElementById("p4_3_educador");
//    var input = document.getElementById("p4_3_educador_cantidad");
//
//    if (checkbox.checked) {
//        input.disabled = false;
//        input.value = "";
//    } else {
//        input.disabled = true;
//        input.value = "0";
//    }
//}




function valida_p4_3_otro() {
    var checkbox = document.getElementById("p4_3_otro");

    var p4_3_otro_desc = document.getElementById("p4_3_otro_desc");

    if (checkbox.checked) {

        p4_3_otro_desc.disabled = false;
    } else {

        p4_3_otro_desc.disabled = true;
        p4_3_otro_desc.value = "";
    }
}
////////////////////////////////




function valida_p4_4_abogado() {
    var checkbox = document.getElementById("p4_4_abogado");
    var input = document.getElementById("p4_4_abogado_cantidad");
    var p4_4_abogado_lengua = document.getElementById("p4_4_abogado_lengua");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";

        p4_4_abogado_lengua.disabled = false;
    } else {
        p4_4_abogado_lengua.disabled = true;
        p4_4_abogado_lengua.value = '';
        input.disabled = true;
        input.value = "0";
    }
}


function valida_p4_4_psicologo() {
    var checkbox = document.getElementById("p4_4_psicologo");
    var input = document.getElementById("p4_4_psicologo_cantidad");
    var p4_4_psicologo_lengua = document.getElementById("p4_4_psicologo_lengua");


    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
        p4_4_psicologo_lengua.disabled = false;

    } else {

        p4_4_psicologo_lengua.disabled = true;
        p4_4_psicologo_lengua.value = '';

        input.disabled = true;
        input.value = "0";
    }
}


function valida_p4_4_tsocial() {
    var checkbox = document.getElementById("p4_4_tsocial");
    var input = document.getElementById("p4_4_tsocial_cantidad");
    var p4_4_tsocial_lengua = document.getElementById("p4_4_tsocial_lengua");


    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
        p4_4_tsocial_lengua.disabled = false;

    } else {

        p4_4_tsocial_lengua.disabled = true;
        p4_4_tsocial_lengua.value = '';

        input.disabled = true;
        input.value = "0";
    }
}


function valida_p4_4_educador() {
    var checkbox = document.getElementById("p4_4_educador");
    var input = document.getElementById("p4_4_educador_cantidad");
    var p4_4_educador_lengua = document.getElementById("p4_4_educador_lengua");


    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
        p4_4_educador_lengua.disabled = false;

    } else {

        p4_4_educador_lengua.disabled = true;
        p4_4_educador_lengua.value = '';

        input.disabled = true;
        input.value = "0";
    }
}




function valida_p4_4_otro() {
    var checkbox = document.getElementById("p4_4_otro");
    var input = document.getElementById("p4_4_otro_cantidad");
    var p4_4_otro_lengua = document.getElementById("p4_4_otro_lengua");
    var p4_4_otro_desc = document.getElementById("p4_4_otro_desc");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
        p4_4_otro_lengua.disabled = false;
        p4_4_otro_desc.disabled = false;
    } else {

        p4_4_otro_lengua.disabled = true;
        p4_4_otro_lengua.value = '';

        input.disabled = true;
        input.value = "0";

        p4_4_otro_desc.disabled = true;
        p4_4_otro_desc.value = "";
    }
}


function valida_p4_1() {
    var siRadioButton = document.getElementById('p4_1_si');
    var noRadioButton = document.getElementById('p4_1_no');
    var inputField = document.getElementById('p4_1_1');
    var p4_1_2 = document.getElementById('p4_1_2');

    if (siRadioButton.checked) {
        inputField.disabled = false; // Activar el campo de entrada
        inputField.value = '';

        p4_1_2.disabled = false; // Activar el campo de entrada
        p4_1_2.value = '';
    } else if (noRadioButton.checked) {
        inputField.disabled = true; // Desactivar el campo de entrada
        inputField.value = 0;

        p4_1_2.disabled = true; // Desactivar el campo de entrada
        p4_1_2.value = 0;
    }
}

function valida_p4_2() {
    var radioSi = document.getElementById("p4_2_si");
    var checkboxes = document.querySelectorAll('[id^="p4_3_"]');
    //var inputsNumber = document.querySelectorAll('[id^="p4_3_"][type="number"]');
//    var p4_3_psicologo_cantidad = document.getElementById("p4_3_psicologo_cantidad");
//    var p4_3_abogado_cantidad = document.getElementById("p4_3_abogado_cantidad");
//    var p4_3_tsocial_cantidad = document.getElementById("p4_3_tsocial_cantidad");
//    var p4_3_educador_cantidad = document.getElementById("p4_3_educador_cantidad");
//    var p4_3_otro_cantidad = document.getElementById("p4_3_otro_cantidad");
//    var  p4_3_otro_desc = document.getElementById("p4_3_otro_desc");
    if (radioSi.checked) {
        checkboxes.forEach(function (checkbox) {
            checkbox.disabled = false;
        });
    } else {
        checkboxes.forEach(function (checkbox) {
            checkbox.disabled = true;
            checkbox.checked = false;
        });
//        p4_3_otro_desc.disabled = true;
//        p4_3_otro_desc.value = '';

    }
}

//
//function valida_p4_5() {
//    var radioSi = document.getElementById("p4_5_si");
//    var radioAbogado = document.getElementById("p4_6_profesion_a");
//    var radioPsicologo = document.getElementById("p4_6_profesion_b");
//    var radioSocial = document.getElementById("p4_6_profesion_c");
//    var radioProfesor = document.getElementById("p4_6_profesion_d");
//    var radioOtro = document.getElementById("p4_6_otro");
//    var otroDescTextarea = document.getElementById("p4_6_otro_desc");
//
//    if (radioSi.checked) {
//        radioAbogado.disabled = false;
//        radioPsicologo.disabled = false;
//        radioSocial.disabled = false;
//        radioProfesor.disabled = false;
//        radioOtro.disabled = false;
//
//        radioAbogado.required = true;
//        radioPsicologo.required = true;
//        radioSocial.required = true;
//        radioProfesor.required = true;
//        radioOtro.required = true;
//
//        otroDescTextarea.disabled = true;
//        otroDescTextarea.value = '';
//
//        var radios = document.getElementById('row_p4_8').querySelectorAll('input[type="radio"]');
//        radios.forEach(function (radio) {
//            radio.disabled = false;
//            radio.required = true;
//        });
//    } else {
//        radioAbogado.required = false;
//        radioPsicologo.required = false;
//        radioSocial.required = false;
//        radioProfesor.required = false;
//        radioOtro.required = false;
//
//        radioAbogado.disabled = true;
//        radioPsicologo.disabled = true;
//        radioSocial.disabled = true;
//        radioProfesor.disabled = true;
//        radioOtro.disabled = true;
//        otroDescTextarea.disabled = true;
//        radioAbogado.checked = false;
//        radioPsicologo.checked = false;
//        radioSocial.checked = false;
//        radioProfesor.checked = false;
//        radioOtro.checked = false;
//        otroDescTextarea.value = '';
//
//        var radios = document.getElementById('row_p4_8').querySelectorAll('input[type="radio"]');
//        radios.forEach(function (radio) {
//            radio.disabled = true;
//            radio.checked = false;
//            radio.required = false;
//        });
//    }
//}

function valida_p4_6() {
    var radioOtro = document.getElementById("p4_6_otro");
    var otroDescTextarea = document.getElementById("p4_6_otro_desc");

    if (radioOtro.checked) {
        otroDescTextarea.disabled = false;
    } else {
        otroDescTextarea.disabled = true;
        otroDescTextarea.value = '';
    }
}





function valida_p4_9_si() {

    var p4_9_lengua = document.getElementById('p4_9_lengua');
    var siRadio = document.getElementById('p4_9_si');

    if (siRadio.checked) {
        p4_9_lengua.disabled = false;
        p4_9_lengua.required = true;

    } else {
        p4_9_lengua.disabled = true;
        p4_9_lengua.value = '';
        p4_9_lengua.required = false;

    }

}



//
//function valida_p4_10_1_2() {
//    var p4_10_1_2_si = document.getElementById('p4_10_1_2_si');
//    var p4_10_1_3_a = document.getElementById('p4_10_1_3_a');
//    var p4_10_1_3_b = document.getElementById('p4_10_1_3_b');
//    var p4_10_1_3_c = document.getElementById('p4_10_1_3_c');
//    var p4_10_1_3_d = document.getElementById('p4_10_1_3_d');
//    var p4_10_1_3_e = document.getElementById('p4_10_1_3_e');
//    var p4_10_1_3_f = document.getElementById('p4_10_1_3_f');
//    var p4_10_1_3_g = document.getElementById('p4_10_1_3_g');
//    var p4_10_1_3_otra = document.getElementById('p4_10_1_3_otra');
//    var p4_10_1_3_otra_detalle = document.getElementById('p4_10_1_3_otra_detalle');
//
//    if (p4_10_1_2_si.checked) {
//        p4_10_1_3_a.disabled = false;
//        p4_10_1_3_b.disabled = false;
//        p4_10_1_3_c.disabled = false;
//        p4_10_1_3_d.disabled = false;
//        p4_10_1_3_e.disabled = false;
//        p4_10_1_3_f.disabled = false;
//        p4_10_1_3_g.disabled = false;
//        p4_10_1_3_otra.disabled = false;
//
//    } else {
//        p4_10_1_3_a.disabled = true;
//        p4_10_1_3_a.checked = false;
//
//        p4_10_1_3_b.disabled = true;
//        p4_10_1_3_b.checked = false;
//        p4_10_1_3_c.disabled = true;
//        p4_10_1_3_c.checked = false;
//        p4_10_1_3_d.disabled = true;
//        p4_10_1_3_d.checked = false;
//        p4_10_1_3_e.disabled = true;
//        p4_10_1_3_e.checked = false;
//        p4_10_1_3_f.disabled = true;
//        p4_10_1_3_f.checked = false;
//        p4_10_1_3_g.disabled = true;
//        p4_10_1_3_g.checked = false;
//        p4_10_1_3_otra.disabled = true;
//        p4_10_1_3_otra.checked = false;
//
//        p4_10_1_3_otra_detalle.disabled = true;
//        p4_10_1_3_otra_detalle.value = "";
//    }
//
//
//}


//
//function valida_p4_10_si() {
//
//    var p4_10_si = document.getElementById('p4_10_si');
//    var p4_10_2_a = document.getElementById('p4_10_2_a');
//    var p4_10_2_b = document.getElementById('p4_10_2_b');
//    var p4_10_2_c = document.getElementById('p4_10_2_c');
//    var p4_10_2_d = document.getElementById('p4_10_2_d');
//    var p4_10_2_otro = document.getElementById('p4_10_2_otro');
//    var p4_10_2_otro_desc = document.getElementById('p4_10_2_otro_desc');
//
//
//
//    var p4_10_1_3_a = document.getElementById('p4_10_1_3_a');
//    var p4_10_1_3_b = document.getElementById('p4_10_1_3_b');
//    var p4_10_1_3_c = document.getElementById('p4_10_1_3_c');
//    var p4_10_1_3_d = document.getElementById('p4_10_1_3_d');
//    var p4_10_1_3_e = document.getElementById('p4_10_1_3_e');
//    var p4_10_1_3_f = document.getElementById('p4_10_1_3_f');
//    var p4_10_1_3_g = document.getElementById('p4_10_1_3_g');
//    var p4_10_1_3_otra = document.getElementById('p4_10_1_3_otra');
//    var p4_10_1_3_otra_detalle = document.getElementById('p4_10_1_3_otra_detalle');
//
//    var p4_10_1_2_si = document.getElementById('p4_10_1_2_si');
//    var p4_10_1_2_no = document.getElementById('p4_10_1_2_no');
//    var p4_10_1_1_noaplica = document.getElementById('p4_10_1_1_noaplica');
//    var p4_10_2_noaplica = document.getElementById('p4_10_2_noaplica');
//    var p4_10_noaplica_x = document.getElementById('p4_10_noaplica_x');
//
//    if (p4_10_si.checked) {
//        p4_10_2_a.disabled = true;
//        p4_10_2_a.checked = false;
//
//        p4_10_2_b.disabled = true;
//        p4_10_2_b.checked = false;
//
//        p4_10_2_c.disabled = true;
//        p4_10_2_c.checked = false;
//
//        p4_10_2_d.disabled = true;
//        p4_10_2_d.checked = false;
//
//        p4_10_2_otro.disabled = true;
//        p4_10_2_otro.checked = false;
//
//        p4_10_2_otro_desc.disabled = true;
//        p4_10_2_otro_desc.value = '';
//
//        p4_10_1_2_si.disabled = false;
//        p4_10_1_2_no.disabled = false;
//
//        p4_10_2_noaplica.checked = false;
//        p4_10_2_noaplica.disabled = true;
//
//        p4_10_1_1_noaplica.disabled = false;
//    } else if (p4_10_noaplica_x.checked) {
//        p4_10_2_a.disabled = true;
//        p4_10_2_a.checked = false;
//
//        p4_10_2_b.disabled = true;
//        p4_10_2_b.checked = false;
//
//        p4_10_2_c.disabled = true;
//        p4_10_2_c.checked = false;
//
//        p4_10_2_d.disabled = true;
//        p4_10_2_d.checked = false;
//
//        p4_10_2_otro.disabled = true;
//        p4_10_2_otro.checked = false;
//
//        p4_10_2_otro_desc.disabled = true;
//        p4_10_2_otro_desc.value = '';
//
//
//
//
//        p4_10_1_3_a.disabled = true;
//        p4_10_1_3_b.disabled = true;
//        p4_10_1_3_c.disabled = true;
//        p4_10_1_3_d.disabled = true;
//        p4_10_1_3_e.disabled = true;
//        p4_10_1_3_f.disabled = true;
//        p4_10_1_3_g.disabled = true;
//        p4_10_1_3_otra.disabled = true;
//        p4_10_1_3_otra_detalle.disabled = true;
//        p4_10_1_3_a.checked = false;
//        p4_10_1_3_b.checked = false;
//        p4_10_1_3_c.checked = false;
//        p4_10_1_3_d.checked = false;
//        p4_10_1_3_e.checked = false;
//        p4_10_1_3_f.checked = false;
//        p4_10_1_3_g.checked = false;
//        p4_10_1_3_otra.checked = false;
//        p4_10_1_3_otra_detalle.value = "";
//
//
//
//        p4_10_1_2_si.disabled = true;
//        p4_10_1_2_si.checked = false;
//        p4_10_1_2_no.disabled = true;
//        p4_10_1_2_no.checked = false;
//
//        p4_10_2_noaplica.checked = false;
//        p4_10_2_noaplica.disabled = true;
//
//        p4_10_1_1_noaplica.disabled = true;
//        p4_10_1_1_noaplica.checked = false;
//    } else {
//        p4_10_2_a.disabled = false;
//        p4_10_2_b.disabled = false;
//        p4_10_2_c.disabled = false;
//        p4_10_2_d.disabled = false;
//        p4_10_2_otro.disabled = false;
//
//        p4_10_1_2_si.disabled = true;
//        p4_10_1_2_no.disabled = true;
//
//        p4_10_1_2_si.checked = false;
//        p4_10_1_2_no.checked = false;
//
//        p4_10_1_1_noaplica.disabled = true;
//        p4_10_1_1_noaplica.checked = false;
//
//        p4_10_2_noaplica.disabled = false;
//
//        p4_10_1_3_a.disabled = true;
//        p4_10_1_3_b.disabled = true;
//        p4_10_1_3_c.disabled = true;
//        p4_10_1_3_d.disabled = true;
//        p4_10_1_3_e.disabled = true;
//        p4_10_1_3_f.disabled = true;
//        p4_10_1_3_g.disabled = true;
//        p4_10_1_3_otra.disabled = true;
//        p4_10_1_3_otra_detalle.disabled = true;
//        p4_10_1_3_a.checked = false;
//        p4_10_1_3_b.checked = false;
//        p4_10_1_3_c.checked = false;
//        p4_10_1_3_d.checked = false;
//        p4_10_1_3_e.checked = false;
//        p4_10_1_3_f.checked = false;
//        p4_10_1_3_g.checked = false;
//        p4_10_1_3_otra.checked = false;
//        p4_10_1_3_otra_detalle.value = "";
//    }
//}


function valida_p4_10_2_otro() {
    var p4_10_2_otro = document.getElementById('p4_10_2_otro');
    var p4_10_2_otro_desc = document.getElementById('p4_10_2_otro_desc');

    if (p4_10_2_otro.checked) {

        p4_10_2_otro_desc.disabled = false;
        p4_10_2_otro_desc.required = true;
    } else {

        p4_10_2_otro_desc.disabled = true;
        p4_10_2_otro_desc.value = '';
        p4_10_2_otro_desc.required = false;

    }
}

function valida_p4_10_1_3_otra() {
    var p4_10_1_3_otra = document.getElementById('p4_10_1_3_otra');
    var p4_10_1_3_otra_detalle = document.getElementById('p4_10_1_3_otra_detalle');

    if (p4_10_1_3_otra.checked) {

        p4_10_1_3_otra_detalle.disabled = false;
        p4_10_1_3_otra_detalle.required = true;
    } else {

        p4_10_1_3_otra_detalle.disabled = true;
        p4_10_1_3_otra_detalle.value = '';
        p4_10_1_3_otra_detalle.required = false;

    }
}
//
//function valida_p4_10_1_1_noaplica() {
//    var noAplicaCheckbox = document.getElementById("p4_10_1_1_noaplica");
//    var siRadio = document.getElementById("p4_10_1_2_si");
//    var noRadio = document.getElementById("p4_10_1_2_no");
//
//    var p4_10_1_3_a = document.getElementById('p4_10_1_3_a');
//    var p4_10_1_3_b = document.getElementById('p4_10_1_3_b');
//    var p4_10_1_3_c = document.getElementById('p4_10_1_3_c');
//    var p4_10_1_3_d = document.getElementById('p4_10_1_3_d');
//    var p4_10_1_3_e = document.getElementById('p4_10_1_3_e');
//    var p4_10_1_3_f = document.getElementById('p4_10_1_3_f');
//    var p4_10_1_3_g = document.getElementById('p4_10_1_3_g');
//
//    var p4_10_1_3_otra = document.getElementById('p4_10_1_3_otra');
//    var p4_10_1_3_otra_detalle = document.getElementById('p4_10_1_3_otra_detalle');
//
//    if (noAplicaCheckbox.checked) {
//
//        p4_10_1_3_a.disabled = true;
//        p4_10_1_3_a.checked = false;
//
//        p4_10_1_3_b.disabled = true;
//        p4_10_1_3_b.checked = false;
//        p4_10_1_3_c.disabled = true;
//        p4_10_1_3_c.checked = false;
//        p4_10_1_3_d.disabled = true;
//        p4_10_1_3_d.checked = false;
//        p4_10_1_3_e.disabled = true;
//        p4_10_1_3_e.checked = false;
//        p4_10_1_3_f.disabled = true;
//        p4_10_1_3_f.checked = false;
//        p4_10_1_3_g.disabled = true;
//        p4_10_1_3_g.checked = false;
//        p4_10_1_3_otra.disabled = true;
//        p4_10_1_3_otra.checked = false;
//        p4_10_1_3_otra_detalle.disabled = true;
//        p4_10_1_3_otra_detalle.value = "";
//        siRadio.disabled = true;
//        noRadio.disabled = true;
//
//        siRadio.checked = false;
//        noRadio.checked = false;
//
//    } else {
//
//        siRadio.disabled = false;
//        noRadio.disabled = false;
//
//
//    }
//}


//function valida_p4_10_2_noaplica() {
//    var p4_10_2_a = document.getElementById('p4_10_2_a');
//    var p4_10_2_b = document.getElementById('p4_10_2_b');
//    var p4_10_2_c = document.getElementById('p4_10_2_c');
//    var p4_10_2_d = document.getElementById('p4_10_2_d');
//    var p4_10_2_otro = document.getElementById('p4_10_2_otro');
//    var p4_10_2_otro_desc = document.getElementById('p4_10_2_otro_desc');
//
//    var p4_10_2_noaplica = document.getElementById("p4_10_2_noaplica");
//
//
//    if (p4_10_2_noaplica.checked) {
//
//        p4_10_2_a.disabled = true;
//        p4_10_2_a.checked = false;
//
//        p4_10_2_b.disabled = true;
//        p4_10_2_b.checked = false;
//
//        p4_10_2_c.disabled = true;
//        p4_10_2_c.checked = false;
//
//        p4_10_2_d.disabled = true;
//        p4_10_2_d.checked = false;
//
//        p4_10_2_otro.disabled = true;
//        p4_10_2_otro.checked = false;
//
//        p4_10_2_otro_desc.disabled = true;
//        p4_10_2_otro_desc.value = '';
//
//    } else {
//
//        p4_10_2_a.disabled = false;
//        p4_10_2_b.disabled = false;
//        p4_10_2_c.disabled = false;
//        p4_10_2_d.disabled = false;
//        p4_10_2_otro.disabled = false;
//
//
//    }
//
//
//
//
//}
//
//function valida_p4_11_si() {
//    var p4_11_si = document.getElementById('p4_11_si');
//    var p4_12 = document.getElementById('p4_12');
//    var p4_13_f = document.getElementById('p4_13_f');
//    var p4_13_m = document.getElementById('p4_13_m');
//    var insertar_A = document.getElementById('insertar_A');
//
//
//    if (p4_11_si.checked) {
//
//        p4_12.disabled = false;
//        p4_13_f.disabled = false;
//        p4_13_m.disabled = false;
//        insertar_A.disabled = false;
//    } else {
//
//        p4_12.disabled = true;
//        p4_12.value = '';
//
//        p4_13_f.disabled = true;
//        p4_13_f.value = '';
//
//        p4_13_m.disabled = true;
//        p4_13_m.value = '';
//        insertar_A.disabled = true;
//        
//        
//       var profesion =  $("#demuna_ficha_s4_p4_profesion").val("A");
//        var id_ficha = $("#demuna_ficha_s4_p4_id_ficha").val(id_ficha);
//      
//        console.log("aqui");
//        console.log("aqui"+ profesion);
//        console.log("aqui"+ id_ficha);
//       
//        eliminar_registrox(id_ficha, profesion);
//    }
//
//}
//
//
//function eliminar_registrox(id_ficha, profesion)
//{
//    var loc = window.location;
//    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 0);
//    var url = loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
//    var newurl = url + '/eliminarRegistro/';
//    newurl = newurl.replace("a//e", 'a/e');
//
//    if (confirm("¿Está seguro de eliminar este registro?") == true) {
//        $("#demuna_ficha_s4_p4_profesion").val(profesion);
//        $("#demuna_ficha_s4_p4_id_ficha").val(id_ficha);
//
//        $.ajax({
//            url: newurl,
//            type: "POST",
//            data: {id_ficha: id_ficha,               
//                p4_profesion: profesion},
//            success: function (respuesta) {
//            }, error: (jqXHR) => {
//                if (jqXHR.status === 403) {
//                    alert("Timeout fuera: " + location);
//                    location.replace("/login");
//                }
//            },
//            complete: function (xhr, status) {
//                cerrarCuadro();
//            }
//        });
//    }
//}


function p4_17(value, p4_17_1) {
    var textarea = document.getElementById(p4_17_1);
    var siRadio = document.getElementById('p4_17_si');

    if (siRadio.checked) {
        textarea.disabled = false;
        textarea.required = true;
    } else if (value === 'N') {
        textarea.disabled = true;
        textarea.value = '';
        textarea.required = false;
    }
}

function p4_22(value, p4_22_1) {
    var textarea = document.getElementById(p4_22_1);
    var siRadio = document.getElementById('p4_22_si');

    if (siRadio.checked) {
        textarea.disabled = false;
        textarea.required = true;
    } else if (value === 'N') {
        textarea.disabled = true;
        textarea.value = '';
        textarea.required = false;
    }
}









//
//function valida_p4_4_noaplicax() {
//    var id_ficha = $("#id_ficha").val();
//    if (id_ficha !== "") {
//        var CheckedSi = document.getElementById("p4_4_noaplica");
//        var table_none = document.getElementById("table_none");
//
//        if (CheckedSi.checked) {
//            table_none.style.display = "none";
//
//            var inputs = document.querySelectorAll("#table_none input[type='number']");
//            inputs.forEach(function (input) {
//                input.value = "0";
//                input.disabled = true;
//            });
//
//            var inputs = document.querySelectorAll("#table_none input[type='text']");
//            inputs.forEach(function (input) {
//                input.value = "";
//                input.disabled = true;
//            });
//
//
//            var radios = document.querySelectorAll("#table_none input[type='checkbox']");
//            radios.forEach(function (checkbox) {
//                checkbox.checked = false;
//            });
//
//
//            var textarea = document.getElementById("p4_4_otro_desc");
//            textarea.value = "";
//        } else {
//            table_none.style.display = "block";
//
//
//
//        }
//    }
//}









function valida_p4_16() {

    var p4_16 = document.getElementById('p4_16');
    var p4_16_otro_desc = document.getElementById('p4_16_otro_desc');
    if (p4_16.checked) {

        var checkboxes = document.querySelectorAll('.check_p4_16');
        checkboxes.forEach(function (checkbox) {
            checkbox.disabled = true;
            checkbox.checked = false;

        });
        p4_16_otro_desc.disabled = true;
        p4_16_otro_desc.value = "";

    } else {
        var checkboxes = document.querySelectorAll('.check_p4_16');
        checkboxes.forEach(function (checkbox) {
            checkbox.disabled = false;

        });
    }
}


function valida_p2_3_nosabe() {
    var p2_3_x = document.getElementById('p2_3_x');
    var textarea = document.getElementById('p2_3_1');
    if (p2_3_x.checked) {


        textarea.disabled = true;
        textarea.value = "";

    } else {
        textarea.disabled = false;

    }
}

///////////////////////////////
function valida_p4_30_1_si() {
    var p4_30_1_si = document.getElementById('p4_30_1_si');
    var p4_30_a = document.getElementById('p4_30_a');
    var p4_30_b = document.getElementById('p4_30_b');
    var p4_30_c = document.getElementById('p4_30_c');
    var p4_30_d = document.getElementById('p4_30_d');
    var p4_30_e = document.getElementById('p4_30_e');
    var p4_30_f = document.getElementById('p4_30_f');
    var p4_30_g = document.getElementById('p4_30_g');
    var p4_30_otro = document.getElementById('p4_30_otro');
    var p4_31_desc = document.getElementById('p4_31_desc');

    var p4_31_noaplica = document.getElementById('p4_31_noaplica');

    var p4_30_otro_desc = document.getElementById('p4_30_otro_desc');

    if (p4_30_1_si.checked) {
        p4_30_a.disabled = false;
        p4_30_b.disabled = false;
        p4_30_c.disabled = false;
        p4_30_d.disabled = false;
        p4_30_e.disabled = false;
        p4_30_f.disabled = false;
        p4_30_g.disabled = false;
        p4_30_otro.disabled = false;
        p4_31_noaplica.disabled = true;
        p4_31_noaplica.checked = false;

        p4_31_desc.disabled = true;
        p4_31_desc.value = "";
        var checkboxes = document.querySelectorAll('.check_p4_31');
        checkboxes.forEach(function (checkbox) {
            checkbox.disabled = true;
            checkbox.checked = false;

        });

    } else {
        p4_30_a.disabled = true;
        p4_30_a.checked = false;

        p4_30_b.disabled = true;
        p4_30_b.checked = false;
        p4_30_c.disabled = true;
        p4_30_c.checked = false;
        p4_30_d.disabled = true;
        p4_30_d.checked = false;
        p4_30_e.disabled = true;
        p4_30_e.checked = false;
        p4_30_f.disabled = true;
        p4_30_f.checked = false;
        p4_30_g.disabled = true;
        p4_30_g.checked = false;
        p4_30_otro.disabled = true;
        p4_30_otro.checked = false;
        p4_31_noaplica.disabled = false;

        var checkboxes = document.querySelectorAll('.check_p4_31');
        checkboxes.forEach(function (checkbox) {
            checkbox.disabled = false;
        });


        p4_30_otro_desc.disabled = true;
        p4_30_otro_desc.value = '';
    }


}


function valida_p4_21_noaplica() {
    var p4_21_noaplica = document.getElementById('p4_21_noaplica');
    var p4_21_otro_desc = document.getElementById('p4_21_otro_desc');
    if (p4_21_noaplica.checked) {
        var checkboxes = document.querySelectorAll('.check_p4_21x');
        checkboxes.forEach(function (checkbox) {
            checkbox.disabled = true;
            checkbox.checked = false;
        });

        p4_21_otro_desc.disabled = true;
        p4_21_otro_desc.value = '';


    } else {

        var checkboxes = document.querySelectorAll('.check_p4_21x');
        checkboxes.forEach(function (checkbox) {
            checkbox.disabled = false;
        });

    }
}
function valida_p4_31_noaplica() {
    var p4_31_a = document.getElementById('p4_31_a');
    var p4_31_b = document.getElementById('p4_31_b');
    var p4_31_c = document.getElementById('p4_31_c');
    var p4_31_d = document.getElementById('p4_31_d');
    var p4_31_otro = document.getElementById('p4_31_otro');
    var p4_31_noaplica = document.getElementById('p4_31_noaplica');
    var p4_31_desc = document.getElementById('p4_31_desc');


    if (p4_31_noaplica.checked) {

        p4_31_a.disabled = true;
        p4_31_a.checked = false;

        p4_31_b.disabled = true;
        p4_31_b.checked = false;

        p4_31_c.disabled = true;
        p4_31_c.checked = false;

        p4_31_d.disabled = true;
        p4_31_d.checked = false;

        p4_31_otro.disabled = true;
        p4_31_otro.checked = false;

        p4_31_desc.disabled = true;
        p4_31_desc.value = '';

    } else {

        p4_31_a.disabled = false;
        p4_31_b.disabled = false;
        p4_31_c.disabled = false;
        p4_31_d.disabled = false;
        p4_31_otro.disabled = false;


    }




}

function valida_p4_30_otro() {
    var p4_30_otro = document.getElementById('p4_30_otro');


    var p4_30_otro_desc = document.getElementById('p4_30_otro_desc');

    if (p4_30_otro.checked) {
        p4_30_otro_desc.disabled = false;
    } else {
        p4_30_otro_desc.disabled = true;
        p4_30_otro_desc.value = '';
    }

}

function valida_p4_31_otro() {
    var p4_31_otro = document.getElementById('p4_31_otro');


    var p4_31_desc = document.getElementById('p4_31_desc');

    if (p4_31_otro.checked) {
        p4_31_desc.disabled = false;
    } else {
        p4_31_desc.disabled = true;
        p4_31_desc.value = '';
    }

}
//4.35    
function valida_p4_35() {
    $("#p4_35_1_si, #p4_35_1_no").on("change", function ()
    {
        if (this.value === 'S')
        {
            $('.check_p4_35_2').each(function ()
            {
                $('.check_p4_35_2').prop("disabled", false);
            });

            $('.check_p4_36').each(function () {
                $('.check_p4_36').prop("disabled", true);
                $('.check_p4_36').prop("checked", false);
            });
            $('#p4_36_otro_desc').prop("disabled", true);
            $('#p4_36_otro_desc').prop("value", "");

            $('#p4_36_noaplica').prop("disabled", true);
            $('#p4_36_noaplica').prop("checked", false);
        } else {
            $('.check_p4_35_2').each(function () {
                $('.check_p4_35_2').prop("disabled", true);
                $('.check_p4_35_2').prop("checked", false);
            });

            $('#p4_35_2_otro_detalle').prop("disabled", true);
            $('#p4_35_2_otro_detalle').val(null);

            $('.check_p4_36').each(function () {
                $('.check_p4_36').prop("disabled", false);
            });

            $('#p4_36_noaplica').prop("disabled", false);



        }
    });
}

function valida_p4_35_2_otro() {
    $("#p4_35_2_otro").on("change", function ()
    {
        if (this.checked)
        {
            $('#p4_35_2_otro_detalle').prop("disabled", false);
            $('#p4_35_2_otro_detalle').focus();
        } else {
            $('#p4_35_2_otro_detalle').val(null);
            $('#p4_35_2_otro_detalle').prop("disabled", true);
        }
    });
}
//4.36
function valida_p4_36_noaplica() {
    $("#p4_36_noaplica").on("change", function ()
    {
        if (this.checked)
        {
            $('.check_p4_36').each(function ()
            {
                $('.check_p4_36').prop("disabled", true);
                $('.check_p4_36').prop("checked", false);
            });
            $('#p4_36_otro_desc').val(null);
            $('#p4_36_otro_desc').prop("disabled", true);
        } else {
            $('.check_p4_36').each(function ()
            {
                $('.check_p4_36').prop("disabled", false);
            });
        }
    });
}

function valida_p4_36_otro() {
    $("#p4_36_otro").on("change", function ()
    {
        if (this.checked)
        {
            $('#p4_36_otro_desc').prop("disabled", false);
            $('#p4_36_otro_desc').focus();
        } else {
            $('#p4_36_otro_desc').val(null);
            $('#p4_36_otro_desc').prop("disabled", true);
        }
    });

}


//4.2  
function valida_p4_2_si() {
    $("#p4_2_si, #p4_2_no").on("change", function ()
    {
        if (this.value === 'S')
        {
            $('.check_p4_3').each(function ()
            {
                $('.check_p4_3').prop("disabled", false);
            });
        } else {
            $('.check_p4_3').each(function () {
                $('.check_p4_3').prop("disabled", true);
                $('.check_p4_3').prop("checked", false);
                $('.check_p4_3_cantidad').val(0);
                $('.check_p4_3_cantidad').prop("disabled", true);
            });
        }
    });
}
// Fin 4.2

// 4.3
function valida_p4_3x() {
    $("#p4_3_abogado, #p4_3_psicologo, #p4_3_tsocial, #p4_3_educador, #p4_3_otro").on("change", function ()
    {
        if (this.checked)
        {
            $("#" + this.id + "_cantidad").prop("disabled", false);
        } else {
            $("#" + this.id + "_cantidad").prop("disabled", true);
        }
        if (this.id === "p4_3_otro")
        {
            if (this.checked)
            {
                $("#p4_3_otro_desc").prop("disabled", false);
            } else {
                $("#p4_3_otro_desc").prop("disabled", true);
            }
        }
    });
}
// Fin 4.3

// 4.4
function valida_p4_4x() {
    $("#p4_4_abogado, #p4_4_psicologo, #p4_4_tsocial, #p4_4_educador, #p4_4_otro").on("change", function ()
    {
        if (this.checked)
        {
            $("#" + this.id + "_cantidad").prop("disabled", false);
        } else {
            $("#" + this.id + "_cantidad").prop("disabled", true);
        }
        if (this.id === "p4_4_otro")
        {
            if (this.checked)
            {
                $("#p4_4_otro_desc").prop("disabled", false);
            } else {
                $("#p4_4_otro_desc").prop("disabled", true);
            }
        }
    });
}
// fin 4.4


//Mantenimiento
function insertar(objeto)
{
    const $select = document.querySelector("#p4_selecc_num");
    var array_4_29 = ["SELECCIONE", "EDUCADOR", "SOCIOLOGO/A", "ANTROPÓLOGO/A", "ENFERMERA/O", "OTROS"];
    var array_4_34 = ["SELECCIONE", "CON FORMACION SUPERIOR TECNICA COMPLETA", "FORMACION SUPERIOR TECNICA INCOMPLETA", "SIN FORMACION SUPERIOR"];
    for (let i = $select.options.length; i >= 0; i--) {
        $select.remove(i);
    }

    switch (objeto.id) {
        case 'insertar_A':
            document.querySelector('#label_titulo').innerText = 'Profesional - Función';
            $("#demuna_ficha_s4_p4_profesion").val("A");
            document.querySelector('#label_popup').innerText = 'Abogado';
            var option = document.createElement('option');
            option.value = 0;
            option.text = "Seleccione";
            option.defaultSelected = true;
            $select.appendChild(option);
            $("#grupo_condicion").hide();
            break;
        case 'insertar_B':
            document.querySelector('#label_titulo').innerText = 'Profesional - Función';
            $("#demuna_ficha_s4_p4_profesion").val("B");
            document.querySelector('#label_popup').innerText = 'Psicólogo';
            document.getElementById("p4_selecc_num").required = false;
            var option = document.createElement('option');
            option.value = 0;
            option.text = "Seleccione";
            option.defaultSelected = true;
            $select.appendChild(option);
            $("#grupo_condicion").hide();
            break;
        case 'insertar_C':
            document.querySelector('#label_titulo').innerText = 'Profesional / Función';
            $("#demuna_ficha_s4_p4_profesion").val("C");
            document.querySelector('#label_popup').innerText = 'Trabajador Social';
            document.getElementById("p4_selecc_num").required = false;
            var option = document.createElement('option');
            option.value = 0;
            option.text = "Seleccione";
            option.defaultSelected = true;
            $select.appendChild(option);
            $("#grupo_condicion").hide();
            break;
        case 'insertar_D':
            document.querySelector('#label_titulo').innerText = 'Profesional - Función';
            $("#demuna_ficha_s4_p4_profesion").val("D");
            document.querySelector('#label_popup').innerText = 'Profesional';
            $("#grupo_condicion").show();

            for (let step = 0; step <= 5; step++) {
                var option = document.createElement('option');
                if (step == 0) {
                    option.value = "";
                    option.defaultSelected = true;
                } else {
                    option.value = step;
                }
                option.text = array_4_29[step];
                $select.appendChild(option);
            }
            document.getElementById("p4_selecc_num").required = true;
            break;
        case 'insertar_E':
            document.querySelector('#label_titulo').innerText = 'Personal / Función';
            $("#demuna_ficha_s4_p4_profesion").val("E");
            document.querySelector('#label_popup').innerText = 'Personal';
            $("#grupo_condicion").show();

            for (let step = 0; step <= 3; step++) {
                var option = document.createElement('option');
                if (step == 0) {
                    option.value = "";
                    option.defaultSelected = true;
                } else {
                    option.value = step;
                }
                option.text = array_4_34[step];
                $select.appendChild(option);
            }
            document.getElementById("p4_selecc_num").required = true;
            break;
    }

    $("#demuna_ficha_s4_p4_id_ficha_s4").val($("#id_sec_4").val());
    $("#demuna_ficha_s4_p4_id_ficha").val($("#demuna_ficha_s4_id_ficha").val());
    $("#demuna_ficha_s4_p4_usu_registro").val($("#demuna_ficha_s4_usu_registro").val());
    $("#demuna_ficha_s4_p4_fch_registro").val($("#demuna_ficha_s4_fch_registro").val());
    $("#demuna_ficha_s4_p4_usu_actualiza").val($("#demuna_ficha_s4_usu_actualiza").val());
    $("#demuna_ficha_s4_p4_fch_actualiza").val($("#demuna_ficha_s4_fch_actualiza").val());

    $("#demuna_ficha_s4_p4_usu_valida").val($("#demuna_ficha_s4_p4_usu_valida").val());
    $("#demuna_ficha_s4_p4_fch_valida").val($("#demuna_ficha_s4_p4_fch_valida").val());
    limpiarCuadro();
    $('#ModalInsertar').modal('show');
}

function guardarCuadro()
{
    var loc = window.location;
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 0);
    var url = loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
    var newurl = url + '/guardarCuadro/';
    newurl = newurl.replace("a//g", 'a/g');


    $.ajax({
        url: newurl,
        type: "POST",
        data: {

            id_ficha: $("#demuna_ficha_s4_p4_id_ficha").val(),
            id_ficha_s4: $("#demuna_ficha_s4_p4_id_ficha_s4").val(),
            fch_registro: $("#demuna_ficha_s4_p4_fch_registro").val(),
            fch_actualiza: $("#demuna_ficha_s4_p4_fch_actualiza").val(),
            usu_registro: $("#demuna_ficha_s4_p4_usu_registro").val(),
            usu_actualiza: $("#demuna_ficha_s4_p4_usu_actualiza").val(),

            usu_valida: $("#demuna_ficha_s4_p4_usu_valida").val(),
            fch_valida: $("#demuna_ficha_s4_p4_fch_valida").val(),

            profesion: $("#demuna_ficha_s4_p4_profesion").val(),
            seleccion: $("#p4_seleccion").val(),
            txt_otros: $("#p4_txt_otros").val(),
            selecc_num: $("#p4_selecc_num").val(),
            anno: $("#p4_anno").val(),
            meses: $("#p4_meses").val(),
            tc: $("#p4_tipo_contrato").val(),
            capa: $("#p4_capa").val(),

            p4_14_1_a: $('input[name="p4_14_1_a"]:checked').val(),
            p4_14_1_b: $('input[name="p4_14_1_b"]:checked').val(),
            p4_14_1_c: $('input[name="p4_14_1_c"]:checked').val(),
            p4_14_1_d: $('input[name="p4_14_1_d"]:checked').val(),
            p4_14_1_e: $('input[name="p4_14_1_e"]:checked').val(),
            p4_14_1_f: $('input[name="p4_14_1_f"]:checked').val(),

            p4_14_2_a: $('input[name="p4_14_2_a"]:checked').val(),
            p4_14_2_b: $('input[name="p4_14_2_b"]:checked').val(),
            p4_14_2_c: $('input[name="p4_14_2_c"]:checked').val(),
            p4_14_2_d: $('input[name="p4_14_2_d"]:checked').val(),
            p4_14_2_e: $('input[name="p4_14_2_e"]:checked').val(),
            p4_14_2_e_otro: $("#p4_14_2_e_otro").val(),
            equipo: $("#p4_equipo").val()},

        success: function (respuesta) {
        }, error: (jqXHR) => {
            if (jqXHR.status === 403) {
                alert("Timeout fuera: " + location);
                location.replace("/login");
            }
        },
        complete: function (xhr, status) {
//alert('Se guardó satisfactoriamente');
//$('#guardar_cuadro').prop("disabled", true);
            cerrarCuadro();
            $('#ModalInsertar').modal('hide');
        }
    });
}

//
//function cerrarCuadro() {
//    var loc = window.location;
//    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 0);
//    var url = loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
//    var newurl = url + '/cargaCuadro/';
//    newurl = newurl.replace("a//c", 'a/c');
//    switch ($("#demuna_ficha_s4_p4_profesion").val()) {
//        case "A":
//            $("#table_4_14 tr>td").remove();
//            break;
//        case "B":
//            $("#table_4_20 tr>td").remove();
//            break;
//        case "C":
//            $("#table_4_24 tr>td").remove();
//            break;
//        case "D":
//            $("#table_4_29 tr>td").remove();
//            break;
//        case "E":
//            $("#table_4_34 tr>td").remove();
//            break;
//    }
//    $.ajax({
//        url: newurl,
//        type: "POST",
//        data: {id_ficha: $("#demuna_ficha_s4_p4_id_ficha").val(), profesion: $("#demuna_ficha_s4_p4_profesion").val()},
//        success: function (respuesta) {
//            switch ($("#demuna_ficha_s4_p4_profesion").val()) {
//                case "A":
//                    $("#table_4_14").html(respuesta);
//                    break;
//                case "B":
//                    $("#table_4_20").html(respuesta);
//                    break;
//                case "C":
//                    $("#table_4_24").html(respuesta);
//                    break;
//                case "D":
//                    $("#table_4_29").html(respuesta);
//                    break;
//                case "E":
//                    $("#table_4_34").html(respuesta);
//                    break;
//            }
//        }, error: (jqXHR) => {
//            if (jqXHR.status === 403) {
//                alert("Timeout fuera: " + location);
//                location.replace("/login");
//            }
//        }
//    });
//}
//function limpiarCuadro()
//{
//    $("#p4_seleccion").val(null),
//            $("#p4_txt_otros").val(null),
//            $("#p4_anno").val(null),
//            $("#p4_meses").val(null),
//            $("#p4_tipo_contrato").val(null),
//            $("#p4_capa").val(null),
//            $("#p4_equipo").val(null);
//
//
//    document.getElementById("p4_14_Bloque_No").style.display = "none";
//    document.getElementById("p4_14_Bloque").style.display = "none";
//
//    document.getElementById("p4_14_1_a").checked = null;
//    document.getElementById("p4_14_1_b").checked = null;
//
//    document.getElementById("p4_14_1_c").checked = null;
//    document.getElementById("p4_14_1_d").checked = null;
//    document.getElementById("p4_14_1_e").checked = null;
//
//    document.getElementById("p4_14_2_a").checked = null;
//    document.getElementById("p4_14_2_b").checked = null;
//    document.getElementById("p4_14_2_c").checked = null;
//    document.getElementById("p4_14_2_d").checked = null;
//    document.getElementById("p4_14_2_e").checked = null;
//    $("#p4_14_2_e_otro").val(null);
//
//}
function limpiarCuadro() {
    $("#p4_seleccion").val(null);
    $("#p4_txt_otros").val(null);
    $("#p4_anno").val(null);
    $("#p4_meses").val(null);
    $("#p4_tipo_contrato").val(null);
    $("#p4_capa").val(null);
    $("#p4_equipo").val(null);

    document.getElementById("p4_14_Bloque_No").style.display = "none";
    document.getElementById("p4_14_Bloque").style.display = "none";

    document.getElementById("p4_14_1_a").checked = false;
    document.getElementById("p4_14_1_b").checked = false;
    document.getElementById("p4_14_1_c").checked = false;
    document.getElementById("p4_14_1_d").checked = false;
    document.getElementById("p4_14_1_e").checked = false;

    document.getElementById("p4_14_2_a").checked = false;
    document.getElementById("p4_14_2_b").checked = false;
    document.getElementById("p4_14_2_c").checked = false;
    document.getElementById("p4_14_2_d").checked = false;
    document.getElementById("p4_14_2_e").checked = false;
    $("#p4_14_2_e_otro").val(null);
}

function cerrarCuadro() {
    limpiarCuadro(); 

    var loc = window.location;
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 0);
    var url = loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
    var newurl = url + '/cargaCuadro/';
    newurl = newurl.replace("a//c", 'a/c');

    $.ajax({
        url: newurl,
        type: "POST",
        data: {id_ficha: $("#demuna_ficha_s4_p4_id_ficha").val(), profesion: $("#demuna_ficha_s4_p4_profesion").val()},
        success: function (respuesta) {
            switch ($("#demuna_ficha_s4_p4_profesion").val()) {
                case "A":
                    $("#table_4_14").html(respuesta);
                    break;
                case "B":
                    $("#table_4_20").html(respuesta);
                    break;
                case "C":
                    $("#table_4_24").html(respuesta);
                    break;
                case "D":
                    $("#table_4_29").html(respuesta);
                    break;
                case "E":
                    $("#table_4_34").html(respuesta);
                    break;
            }
        }, error: function (jqXHR) {
            if (jqXHR.status === 403) {
                alert("Timeout fuera: " + location);
                location.replace("/login");
            }
        }
    });
}

$("#p4_selecc_num").on("change", function ()
{
    if (this.value == 5)
    {
        $('#p4_txt_otros').prop("disabled", false);
        $('#p4_txt_otros').focus();
    } else {
        $('#p4_txt_otros').val(null);
        $('#p4_txt_otros').prop("disabled", true);
    }
});

function eliminar_registro(id_ficha, id_secuencia, profesion)
{
    var loc = window.location;
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 0);
    var url = loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
    var newurl = url + '/eliminarRegistro/';
    newurl = newurl.replace("a//e", 'a/e');

    if (confirm("¿Está seguro de eliminar este registro?") == true) {
        $("#demuna_ficha_s4_p4_profesion").val(profesion);
        $("#demuna_ficha_s4_p4_id_ficha").val(id_ficha);

        $.ajax({
            url: newurl,
            type: "POST",
            data: {id_ficha: id_ficha,
                id_secuencia: id_secuencia,
                p4_profesion: profesion},
            success: function (respuesta) {
            }, error: (jqXHR) => {
                if (jqXHR.status === 403) {
                    alert("Timeout fuera: " + location);
                    location.replace("/login");
                }
            },
            complete: function (xhr, status) {
                cerrarCuadro();
            }
        });
    }
}

//function eliminar_registro(id_ficha, id_secuencia, profesion, event) {
//    // Previene el comportamiento predeterminado del formulario o enlace
//    if (event) {
//        event.preventDefault();
//    }
//
//    var loc = window.location;
//    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 0);
//    var url = loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
//    var newurl = url + '/eliminarRegistro/';
//    newurl = newurl.replace("a//e", 'a/e');
//
//    if (confirm("¿Está seguro de eliminar este registro?") == true) {
//        $("#demuna_ficha_s4_p4_profesion").val(profesion);
//        $("#demuna_ficha_s4_p4_id_ficha").val(id_ficha);
//
//        $.ajax({
//            url: newurl,
//            type: "POST",
//            data: {
//                id_ficha: id_ficha,
//                id_secuencia: id_secuencia,
//                p4_profesion: profesion
//            },
//            success: function (respuesta) {
//                // Manejo de éxito
//                console.log("Registro eliminado con éxito.");
//            },
//            error: (jqXHR) => {
//                if (jqXHR.status === 403) {
//                    alert("Timeout fuera: " + location);
//                    location.replace("/login");
//                } else {
//                    console.error("Error al eliminar el registro:", jqXHR);
//                }
//            },
//            complete: function (xhr, status) {
//                cerrarCuadro();
//            }
//        });
//    }
//}

//// Asumiendo que el evento de eliminación es un clic en un botón o enlace
//document.querySelector("#eliminar_boton").addEventListener("click", function(event) {
//    var id_ficha = /* Obtén el id_ficha */;
//    var id_secuencia = /* Obtén el id_secuencia */;
//    var profesion = /* Obtén la profesion */;
//    eliminar_registro(id_ficha, id_secuencia, profesion, event);
//});
//



// fin Mantenimiento

//4.9 
function valida_p4_9x() {
    $("#p4_9_si, #p4_9_si_no").on("change", function ()
    {
        if (this.value === 'S')
        {
            $('#p4_9_lengua').prop("disabled", false);
            $('#p4_9_lengua').focus();
        } else {
            $('#p4_9_lengua').val(null);
            $('#p4_9_lengua').prop("disabled", true);
        }
    });
}
//4.18
//
//function valida_p4_18x() {
//     
//    $("#p4_18_si, #p4_18_no").on("change", function ()
//   
//    {
//        if (this.value === 'S')
//       
//        {
//             const no_registro20 = document.querySelector(".no_registro");
//            $('.check_p4_18_1').each(function ()
//            {
//                $('.check_p4_18_1').prop("disabled", false);
//                $('#p4_19').prop("disabled", false);
//                $('#p4_19_f').prop("disabled", false);
//                $('#p4_19_m').prop("disabled", false);
//            });
//            
//            no_registro20.style.display = "block";
//        } else {
//             const no_registro20 = document.querySelector(".no_registro");
//            $('.check_p4_18_1').each(function () {
//                $('.check_p4_18_1').prop("disabled", true);
//                $('.check_p4_18_1').prop("checked", false);
//                $('#p4_19').prop("disabled", true);
//                $('#p4_19').val(null);
//
//                $('#p4_19_f').prop("disabled", true);
//                $('#p4_19_f').val(null);
//
//                $('#p4_19_m').prop("disabled", true);
//                $('#p4_19_m').val(null);
//
//                $('#p4_18_1_otro_desc').prop("disabled", true);
//                $('#p4_18_1_otro_desc').val(null);
//
//            });
//            no_registro20.style.display = "none";
//        }
//    });
//}


function valida_p4_18_1() {
    $("#p4_18_1_otros").on("change", function ()
    {
        if (this.checked)
        {
            $('#p4_18_1_otro_desc').prop("disabled", false);
            $('#p4_18_1_otro_desc').focus();
        } else {
            $('#p4_18_1_otro_desc').val(null);
            $('#p4_18_1_otro_desc').prop("disabled", true);
        }
    });
}
//4.15.1
function valida_p4_15_1() {
    $("#p4_15_1").on("change", function ()
    {
        if (this.checked)
        {
            $('.check_p4_15_3').each(function () {
                $('.check_p4_15_3').prop("disabled", true);
                $('.check_p4_15_3').prop("checked", false);
            });
            $('#p4_15_3_otro_desc').val(null);
            $('#p4_15_3_otro_desc').prop("disabled", true);
            $("#p4_15_2_si").prop("disabled", true);
            $('#p4_15_2_si').prop("checked", false);
            $("#p4_15_2_no").prop("disabled", true);
            $('#p4_15_2_no').prop("checked", false);

            $("#p4_15_2_noaplica").prop("disabled", true);
            $('#p4_15_2_noaplica').prop("checked", false);
        } else {
            $('.check_p4_15_3').each(function ()
            {
                $('.check_p4_15_3').prop("disabled", true);
            });
            $("#p4_15_2_si").prop("disabled", false);
            $('#p4_15_2_si').prop("checked", false);
            $("#p4_15_2_no").prop("disabled", false);
            $('#p4_15_2_no').prop("checked", false);

            $("#p4_15_2_noaplica").prop("disabled", false);
            $('#p4_15_2_noaplica').prop("checked", false);
        }
    });
}



//4.15.2
function valida_p4_15_2() {
    $("#p4_15_2_si, #p4_15_2_no").on("change", function ()
    {
        if (this.value === 'S')
        {
            $('.check_p4_15_3').each(function ()
            {
                $('.check_p4_15_3').prop("disabled", false);
            });
            $('#p4_16_a').prop("disabled", true);
            $('#p4_16_a').prop("checked", false);
            $('#p4_16_b').prop("disabled", true);
            $('#p4_16_b').prop("checked", false);
            $('#p4_16_c').prop("disabled", true);
            $('#p4_16_c').prop("checked", false);
            $('#p4_16_d').prop("disabled", true);
            $('#p4_16_d').prop("checked", false);
            $('#p4_16_otro').prop("disabled", true);
            $('#p4_16_otro').prop("checked", false);
            $('#p4_16_otro_desc').prop("disabled", true);
            $('#p4_16_otro_desc').prop("value", "");

            $('#p4_16').prop("disabled", true);
            $('#p4_16').prop("checked", false);

        } else {
            $('.check_p4_15_3').each(function () {
                $('.check_p4_15_3').prop("disabled", true);
                $('.check_p4_15_3').prop("checked", false);
            });

            $('#p4_16').prop("disabled", false);
            $('#p4_15_3_otro_desc').prop("disabled", true);
            $('#p4_15_3_otro_desc').prop("value", "");


            $('#p4_16_a').prop("disabled", false);
            $('#p4_16_b').prop("disabled", false);
            $('#p4_16_c').prop("disabled", false);
            $('#p4_16_d').prop("disabled", false);
            $('#p4_16_otro').prop("disabled", false);



        }
    });
}

//4.16.OTRO

function valida_p4_16_otro() {
    $("#p4_16_otro").on("change", function ()
    {
        if (this.checked)
        {
            $('#p4_16_otro_desc').prop("disabled", false);
            $('#p4_16_otro_desc').focus();
        } else {
            $('#p4_16_otro_desc').val(null);
            $('#p4_16_otro_desc').prop("disabled", true);
        }
    });
}

//4.15.3
function valida_p4_15_3_otro() {
    $("#p4_15_3_otro").on("change", function ()
    {
        if (this.checked)
        {
            $('#p4_15_3_otro_desc').prop("disabled", false);
            $('#p4_15_3_otro_desc').focus();
        } else {
            $('#p4_15_3_otro_desc').val(null);
            $('#p4_15_3_otro_desc').prop("disabled", true);
        }
    });
}
//4.20    
function valida_p4_20_1_si() {
    $("#p4_20_1_si, #p4_20_1_no").on("change", function ()
    {
        if (this.value === 'S')
        {
            $('.check_p4_20_2').each(function ()
            {
                $('.check_p4_20_2').prop("disabled", false);
            });

            $('.check_p4_21x').each(function () {
                $('.check_p4_21x').prop("disabled", true);
                $('.check_p4_21x').prop("checked", false);

            });
            $('#p4_21_otro_desc').prop("disabled", true);
            $('#p4_21_otro_desc').val(null);

            $('#p4_21_noaplica').prop("disabled", true);
            $('#p4_21_noaplica').prop("checked", false);


        } else {
            $('.check_p4_20_2').each(function () {
                $('.check_p4_20_2').prop("disabled", true);
                $('.check_p4_20_2').prop("checked", false);
            });
            $('#p4_20_2_otro_desc').val(null);
            $('#p4_20_2_otro_desc').prop("disabled", true);

            $('.check_p4_21x').each(function () {
                $('.check_p4_21x').prop("disabled", false);

            });
            $('#p4_21_noaplica').prop("disabled", false);
        }
    });
}

function valida_p4_20_2_otro() {
    $("#p4_20_2_otro").on("change", function ()
    {
        if (this.checked)
        {
            $('#p4_20_2_otro_desc').prop("disabled", false);
            $('#p4_20_2_otro_desc').focus();
        } else {
            $('#p4_20_2_otro_desc').val(null);
            $('#p4_20_2_otro_desc').prop("disabled", true);
        }
    });
}

//4.21   
function valida_p4_21_noaplica() {
    $("#p4_21_noaplica").on("change", function ()
    {
        if (this.checked)
        {
            $('.check_p4_21x').each(function ()
            {
                $('.check_p4_21x').prop("disabled", true);
                $('.check_p4_21x').prop("checked", false);
            });
            $('#p4_21_otro_desc').val(null);
            $('#p4_21_otro_desc').prop("disabled", true);
        } else {
            $('.check_p4_21x').each(function ()
            {
                $('.check_p4_21x').prop("disabled", false);
            });
        }
    });
}

function valida_p4_21_otro() {
    $("#p4_21_otro").on("change", function ()
    {
        if (this.checked)
        {
            $('#p4_21_otro_desc').prop("disabled", false);
            $('#p4_21_otro_desc').focus();
        } else {
            $('#p4_21_otro_desc').val(null);
            $('#p4_21_otro_desc').prop("disabled", true);
        }
    });
}

//4.25    
function valida_p4_25_1() {
    $("#p4_25_1_si, #p4_25_1_no").on("change", function ()
    {
        if (this.value === 'S')
        {
            $('.check_p4_25_2').each(function ()
            {
                $('.check_p4_25_2').prop("disabled", false);
            });

            $('.check_p4_26').each(function () {
                $('.check_p4_26').prop("disabled", true);
                $('.check_p4_26').prop("checked", false);
            });
            $('#p4_26_otro_desc').prop("disabled", true);
            $('#p4_26_otro_desc').prop("value", "");

            $('#p4_26_noaplica').prop("disabled", true);
            $('#p4_26_noaplica').prop("checked", false);
        } else {
            $('.check_p4_25_2').each(function () {
                $('.check_p4_25_2').prop("disabled", true);
                $('.check_p4_25_2').prop("checked", false);
            });
            $('#p4_25_2_otro_desc').val(null);
            $('#p4_25_2_otro_desc').prop("disabled", true);

            $('.check_p4_26').each(function () {
                $('.check_p4_26').prop("disabled", false);

            });

            $('#p4_26_otro').prop("disabled", false);

            $('#p4_26_noaplica').prop("disabled", false);

        }
    });
}

function valida_p4_25_2_otro() {
    $("#p4_25_2_otro").on("change", function ()
    {
        if (this.checked)
        {
            $('#p4_25_2_otro_desc').prop("disabled", false);
            $('#p4_25_2_otro_desc').focus();
        } else {
            $('#p4_25_2_otro_desc').val(null);
            $('#p4_25_2_otro_desc').prop("disabled", true);
        }
    });
}




//4.26
function valida_p4_26_noaplica() {
    $("#p4_26_noaplica").on("change", function ()
    {
        if (this.checked)
        {
            $('.check_p4_26').each(function ()
            {
                $('.check_p4_26').prop("disabled", true);
                $('.check_p4_26').prop("checked", false);
            });
            $('#p4_26_otro_desc').val(null);
            $('#p4_26_otro_desc').prop("disabled", true);
        } else {
            $('.check_p4_26').each(function ()
            {
                $('.check_p4_26').prop("disabled", false);
            });
        }
    });
}

function valida_p4_26_otro() {
    $("#p4_26_otro").on("change", function ()
    {
        if (this.checked)
        {
            $('#p4_26_otro_desc').prop("disabled", false);
            $('#p4_26_otro_desc').focus();
        } else {
            $('#p4_26_otro_desc').val(null);
            $('#p4_26_otro_desc').prop("disabled", true);
        }
    });
}








//////////////////



//////////// FIN SECCION 4////////////////// 

//////////SECCION 5///////

function p5_2() {
    var radioSi = document.getElementById('p5_2_si');
    var accion1 = document.getElementById('p5_2_1_accion1');
    var accion2 = document.getElementById('p5_2_1_accion2');
    var accion3 = document.getElementById('p5_2_1_accion3');
    var accion4 = document.getElementById('p5_2_1_accion4');

    var entidad1 = document.getElementById('p5_2_2_entidad1');
    var entidad2 = document.getElementById('p5_2_2_entidad2');
    var entidad3 = document.getElementById('p5_2_2_entidad3');
    var entidad4 = document.getElementById('p5_2_2_entidad4');


    if (radioSi.checked) {
        accion1.disabled = false;

        accion2.disabled = false;

        accion3.disabled = false;

        accion4.disabled = false;

        accion1.required = true;
        accion2.required = true;
        accion3.required = true;
        accion4.required = true;

        entidad1.disabled = false;
        entidad1.required = true;
        entidad2.disabled = false;
        entidad2.required = true;
        entidad3.disabled = false;
        entidad3.required = true;
        entidad4.disabled = false;
        entidad4.required = true;
        var radios = document.getElementById('row_time1').querySelectorAll('input[type="radio"]');
        radios.forEach(function (radio) {
            radio.disabled = false;
            radio.required = true;
        });
        var radios = document.getElementById('row_time2').querySelectorAll('input[type="radio"]');
        radios.forEach(function (radio) {
            radio.disabled = false;
            radio.required = true;
        });
        var radios = document.getElementById('row_time3').querySelectorAll('input[type="radio"]');
        radios.forEach(function (radio) {
            radio.disabled = false;
            radio.required = true;
        });
        var radios = document.getElementById('row_time4').querySelectorAll('input[type="radio"]');
        radios.forEach(function (radio) {
            radio.disabled = false;
            radio.required = true;

        });
    } else {
        accion1.disabled = true;
        accion1.required = false;
        accion1.value = "";
        accion2.disabled = true;
        accion2.required = false;
        accion2.value = "";
        accion3.disabled = true;
        accion3.required = false;
        accion3.value = "";
        accion4.disabled = true;
        accion4.required = false;
        accion4.value = "";

        entidad1.disabled = true;
        entidad1.required = false;
        entidad1.value = "";
        entidad2.disabled = true;
        entidad2.required = false;
        entidad2.value = "";
        entidad3.disabled = true;
        entidad3.required = false;
        entidad3.value = "";
        entidad4.disabled = true;
        entidad4.required = false;
        entidad4.value = "";
        var radios = document.getElementById('row_time1').querySelectorAll('input[type="radio"]');
        radios.forEach(function (radio) {
            radio.disabled = true;
            radio.checked = false;
            radio.required = false;
        });

        var radios = document.getElementById('row_time2').querySelectorAll('input[type="radio"]');
        radios.forEach(function (radio) {
            radio.disabled = true;
            radio.checked = false;
            radio.required = false;
        });

        var radios = document.getElementById('row_time3').querySelectorAll('input[type="radio"]');
        radios.forEach(function (radio) {
            radio.disabled = true;
            radio.checked = false;
            radio.required = false;
        });

        var radios = document.getElementById('row_time4').querySelectorAll('input[type="radio"]');
        radios.forEach(function (radio) {
            radio.disabled = true;
            radio.checked = false;
            radio.required = false;
        });
    }
}

////////////////////FIN SECCION 5////////////////////
//////////INICIO SECCION 6//////////////////

/////////FIN SECCION 6 /////////////////////


/////////////////INICIO SECCION 6 //////////////////
function valida_p6_8_g_x() {
    var checkbox = document.getElementById("p6_8_g_x");
    var p6_8_a_x = document.getElementById("p6_8_a_x");
    var p6_8_b_x = document.getElementById("p6_8_b_x");
    var p6_8_c_x = document.getElementById("p6_8_c_x");
    var p6_8_d_x = document.getElementById("p6_8_d_x");
    var p6_8_e_x = document.getElementById("p6_8_e_x");
    var p6_8_f_x = document.getElementById("p6_8_f_x");
    var p6_8_detallar_x = document.getElementById("p6_8_detallar_x");

    var input_a = document.getElementById("p6_8_a_cantidad_x");
    var input_b = document.getElementById("p6_8_b_cantidad_x");
    var input_c = document.getElementById("p6_8_c_cantidad_x");
    var input_d = document.getElementById("p6_8_d_cantidad_x");
    var input_e = document.getElementById("p6_8_e_cantidad_x");
    var input_f = document.getElementById("p6_8_f_cantidad_x");


    if (checkbox.checked) {
        input_a.disabled = true;
        input_a.value = "";
        p6_8_a_x.disabled = true;
        p6_8_a_x.checked = false;

        input_b.disabled = true;
        input_b.value = "";
        p6_8_b_x.disabled = true;
        p6_8_b_x.checked = false;

        input_c.disabled = true;
        input_c.value = "";
        p6_8_c_x.disabled = true;
        p6_8_c_x.checked = false;

        input_d.disabled = true;
        input_d.value = "";
        p6_8_d_x.disabled = true;
        p6_8_d_x.checked = false;

        input_e.disabled = true;
        input_e.value = "";
        p6_8_e_x.disabled = true;
        p6_8_e_x.checked = false;

        input_f.disabled = true;
        input_f.value = "";
        p6_8_f_x.disabled = true;
        p6_8_f_x.checked = false;


        p6_8_detallar_x.disabled = true;
        p6_8_detallar_x.value = "";

    } else {
        p6_8_a_x.disabled = false;
        p6_8_b_x.disabled = false;
        p6_8_c_x.disabled = false;
        p6_8_d_x.disabled = false;
        p6_8_e_x.disabled = false;
        p6_8_f_x.disabled = false;



    }
}



function valida_p6_5_otros_x() {

    var p6_5_otros_x = document.getElementById("p6_5_otros_x");
    var p6_5_otros_descrip_x = document.getElementById("p6_5_otros_descrip_x");

    if (p6_5_otros_x.checked) {
        p6_5_otros_descrip_x.disabled = false;

    } else {
        p6_5_otros_descrip_x.disabled = true;
        p6_5_otros_descrip_x.value = '';
    }

}

function valida_p6_8_a_x() {
    var checkbox = document.getElementById("p6_8_a_x");
    var input = document.getElementById("p6_8_a_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}

function valida_p6_8_b_x() {
    var checkbox = document.getElementById("p6_8_b_x");
    var input = document.getElementById("p6_8_b_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}

function valida_p6_8_c_x() {
    var checkbox = document.getElementById("p6_8_c_x");
    var input = document.getElementById("p6_8_c_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}

function valida_p6_8_d_x() {
    var checkbox = document.getElementById("p6_8_d_x");
    var input = document.getElementById("p6_8_d_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}

function valida_p6_8_e_x() {
    var checkbox = document.getElementById("p6_8_e_x");
    var input = document.getElementById("p6_8_e_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}


function valida_p6_8_f_x() {
    var checkbox = document.getElementById("p6_8_f_x");
    var input = document.getElementById("p6_8_f_cantidad_x");
    var p6_8_detallar_x = document.getElementById("p6_8_detallar_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
        p6_8_detallar_x.disabled = false;
    } else {
        input.disabled = true;
        input.value = "0";
        p6_8_detallar_x.disabled = true;
        p6_8_detallar_x.value = "";
    }
}




function suma_p4_23_f() {
    var totalTrabajadores = parseInt(document.getElementById("p4_22_1").value);
    var mujeres = parseInt(document.getElementById("p4_23_f").value);
    var hombres = parseInt(document.getElementById("p4_23_m").value);

    //  actualiza el campo de hombres
    if (!isNaN(mujeres)) {
        hombres = totalTrabajadores - mujeres;
        if (hombres >= 0) {
            document.getElementById("p4_23_m").value = hombres;
        }
    }

    //  actualiza el campo de mujeres
    if (!isNaN(hombres)) {
        mujeres = totalTrabajadores - hombres;
        if (mujeres >= 0) {
            document.getElementById("p4_23_f").value = mujeres;
        }
    }
}

//// Asocio la función a los eventos 'input' de los campos
//document.getElementById("p4_23_f").addEventListener("input", suma_p4_23_f);
//document.getElementById("p4_23_m").addEventListener("input", suma_p4_23_f);

function sumar_peruanosx() {

    var varonesRiesgo = parseInt(document.getElementById("p6_1_2_varones_riesgo_x").value) || 0;
    var mujeresRiesgo = parseInt(document.getElementById("p6_1_2_mujeres_riesgo_x").value) || 0;
    var lgtbiRiesgo = parseInt(document.getElementById("p6_1_2_lgtbi_riesgo_x").value) || 0;

    var varonesDespro = parseInt(document.getElementById("p6_1_2_varones_despro_x").value) || 0;
    var mujeresDespro = parseInt(document.getElementById("p6_1_2_mujeres_despro_x").value) || 0;
    var lgtbiDespro = parseInt(document.getElementById("p6_1_2_lgtbi_despro_x").value) || 0;

    var totalDespro = varonesDespro + mujeresDespro + lgtbiDespro;

    var total = varonesRiesgo + mujeresRiesgo + lgtbiRiesgo;

    totalperuanosx = totalDespro + total;

    document.getElementById("p6_1_1_peruanos_x").value = totalperuanosx;
}


function sumar_p6_1x_riesgo() {

    var varonesRiesgo = parseInt(document.getElementById("p6_1_2_varones_riesgo_x").value) || 0;
    var mujeresRiesgo = parseInt(document.getElementById("p6_1_2_mujeres_riesgo_x").value) || 0;
    var lgtbiRiesgo = parseInt(document.getElementById("p6_1_2_lgtbi_riesgo_x").value) || 0;


    var total = varonesRiesgo + mujeresRiesgo + lgtbiRiesgo;

    document.getElementById("p6_1_2_peruanos_riesgo_x").value = total;
}

function sumar_p6_1x_despro() {

    var varonesDespro = parseInt(document.getElementById("p6_1_2_varones_despro_x").value) || 0;
    var mujeresDespro = parseInt(document.getElementById("p6_1_2_mujeres_despro_x").value) || 0;
    var lgtbiDespro = parseInt(document.getElementById("p6_1_2_lgtbi_despro_x").value) || 0;

    // Calcular la suma total de los valores de despro
    var totalDespro = varonesDespro + mujeresDespro + lgtbiDespro;

    // Actualizar el valor del input total de despro
    document.getElementById("p6_1_2_peruanos_despro_x").value = totalDespro;
}


function sumar_extranjerosx() {

    var varonesRiesgo = parseInt(document.getElementById("p6_1_2_varones_riesgo_env_x").value) || 0;
    var mujeresRiesgo = parseInt(document.getElementById("p6_1_2_mujeres_riesgo_env_x").value) || 0;
    var lgtbiRiesgo = parseInt(document.getElementById("p6_1_2_lgtbi_riesgo_env_x").value) || 0;

    var varonesDespro = parseInt(document.getElementById("p6_1_2_varones_despro_env_x").value) || 0;
    var mujeresDespro = parseInt(document.getElementById("p6_1_2_mujeres_despro_env_x").value) || 0;
    var lgtbiDespro = parseInt(document.getElementById("p6_1_2_lgtbi_despro_env_x").value) || 0;

    var totalDespro = varonesDespro + mujeresDespro + lgtbiDespro;

    var total = varonesRiesgo + mujeresRiesgo + lgtbiRiesgo;

    totalperuanosx = totalDespro + total;

    document.getElementById("p6_1_1_extranjeros_x").value = totalperuanosx;
}

function sumar_p6_1x_env_riesgo() {

    var varonesRiesgo = parseInt(document.getElementById("p6_1_2_varones_riesgo_env_x").value) || 0;
    var mujeresRiesgo = parseInt(document.getElementById("p6_1_2_mujeres_riesgo_env_x").value) || 0;
    var lgtbiRiesgo = parseInt(document.getElementById("p6_1_2_lgtbi_riesgo_env_x").value) || 0;


    var total = varonesRiesgo + mujeresRiesgo + lgtbiRiesgo;

    document.getElementById("p6_1_2_env_riesgo_x").value = total;
}


function sumar_p6_1x_env_despro() {

    var varonesDespro = parseInt(document.getElementById("p6_1_2_varones_despro_env_x").value) || 0;
    var mujeresDespro = parseInt(document.getElementById("p6_1_2_mujeres_despro_env_x").value) || 0;
    var lgtbiDespro = parseInt(document.getElementById("p6_1_2_lgtbi_despro_env_x").value) || 0;


    var totalDespro = varonesDespro + mujeresDespro + lgtbiDespro;

    document.getElementById("p6_1_2_env_despro_x").value = totalDespro;
}



function sumar_venex() {

    var varonesRiesgo = parseInt(document.getElementById("p6_1_2_varones_riesgo_vene_x").value) || 0;
    var mujeresRiesgo = parseInt(document.getElementById("p6_1_2_mujeres_riesgo_vene_x").value) || 0;
    var lgtbiRiesgo = parseInt(document.getElementById("p6_1_2_lgtbi_riesgo_vene_x").value) || 0;

    var varonesDespro = parseInt(document.getElementById("p6_1_2_varones_despro_vene_x").value) || 0;
    var mujeresDespro = parseInt(document.getElementById("p6_1_2_mujeres_despro_vene_x").value) || 0;
    var lgtbiDespro = parseInt(document.getElementById("p6_1_2_lgtbi_despro_vene_x").value) || 0;

    var totalDespro = varonesDespro + mujeresDespro + lgtbiDespro;

    var total = varonesRiesgo + mujeresRiesgo + lgtbiRiesgo;

    totalperuanosx = totalDespro + total;

    document.getElementById("p6_1_1_venezolanos_x").value = totalperuanosx;
}

function sumar_p6_1x_vene_riesgo() {

    var varonesRiesgo = parseInt(document.getElementById("p6_1_2_varones_riesgo_vene_x").value) || 0;
    var mujeresRiesgo = parseInt(document.getElementById("p6_1_2_mujeres_riesgo_vene_x").value) || 0;
    var lgtbiRiesgo = parseInt(document.getElementById("p6_1_2_lgtbi_riesgo_vene_x").value) || 0;


    var total = varonesRiesgo + mujeresRiesgo + lgtbiRiesgo;

    document.getElementById("p6_1_2_vene_riesgo_x").value = total;
}

function sumar_p6_1x_vene_despro() {

    var varonesDespro = parseInt(document.getElementById("p6_1_2_varones_despro_vene_x").value) || 0;
    var mujeresDespro = parseInt(document.getElementById("p6_1_2_mujeres_despro_vene_x").value) || 0;
    var lgtbiDespro = parseInt(document.getElementById("p6_1_2_lgtbi_despro_vene_x").value) || 0;


    var totalDespro = varonesDespro + mujeresDespro + lgtbiDespro;

    document.getElementById("p6_1_2_vene_despro_x").value = totalDespro;
}



function sumar_total_r() {

    var varonesRiesgo = parseInt(document.getElementById("p6_1_2_varones_riesgo_x").value) || 0;
    var mujeresRiesgo = parseInt(document.getElementById("p6_1_2_mujeres_riesgo_x").value) || 0;
    var lgtbiRiesgo = parseInt(document.getElementById("p6_1_2_lgtbi_riesgo_x").value) || 0;

    var varonesRiesgo_env = parseInt(document.getElementById("p6_1_2_varones_riesgo_env_x").value) || 0;
    var mujeresRiesgo_env = parseInt(document.getElementById("p6_1_2_mujeres_riesgo_env_x").value) || 0;
    var lgtbiRiesgo_env = parseInt(document.getElementById("p6_1_2_lgtbi_riesgo_env_x").value) || 0;

    var varonesRiesgo_vene = parseInt(document.getElementById("p6_1_2_varones_riesgo_vene_x").value) || 0;
    var mujeresRiesgo_vene = parseInt(document.getElementById("p6_1_2_mujeres_riesgo_vene_x").value) || 0;
    var lgtbiRiesgo_vene = parseInt(document.getElementById("p6_1_2_lgtbi_riesgo_vene_x").value) || 0;

    var totalr = varonesRiesgo + mujeresRiesgo + lgtbiRiesgo + varonesRiesgo_env + mujeresRiesgo_env + lgtbiRiesgo_env + varonesRiesgo_vene + mujeresRiesgo_vene + lgtbiRiesgo_vene;

    document.getElementById("p6_1_2_total_riesgo").value = totalr;
}

function sumar_total_d() {

    var varonesDespro = parseInt(document.getElementById("p6_1_2_varones_despro_x").value) || 0;
    var mujeresDespro = parseInt(document.getElementById("p6_1_2_mujeres_despro_x").value) || 0;
    var lgtbiDespro = parseInt(document.getElementById("p6_1_2_lgtbi_despro_x").value) || 0;

    var varonesDespro_env = parseInt(document.getElementById("p6_1_2_varones_despro_env_x").value) || 0;
    var mujeresDespro_env = parseInt(document.getElementById("p6_1_2_mujeres_despro_env_x").value) || 0;
    var lgtbiDespro_env = parseInt(document.getElementById("p6_1_2_lgtbi_despro_env_x").value) || 0;

    var varonesDespro_vene = parseInt(document.getElementById("p6_1_2_varones_despro_vene_x").value) || 0;
    var mujeresDespro_vene = parseInt(document.getElementById("p6_1_2_mujeres_despro_vene_x").value) || 0;
    var lgtbiDespro_vene = parseInt(document.getElementById("p6_1_2_lgtbi_despro_vene_x").value) || 0;

    var totald = varonesDespro + mujeresDespro + lgtbiDespro + varonesDespro_env + mujeresDespro_env + lgtbiDespro_env + varonesDespro_vene + mujeresDespro_vene + lgtbiDespro_vene;

    document.getElementById("p6_1_2_total_despro").value = totald;
}

function totalx() {
    var varonesRiesgo = parseInt(document.getElementById("p6_1_2_varones_riesgo_x").value) || 0;
    var mujeresRiesgo = parseInt(document.getElementById("p6_1_2_mujeres_riesgo_x").value) || 0;
    var lgtbiRiesgo = parseInt(document.getElementById("p6_1_2_lgtbi_riesgo_x").value) || 0;

    var varonesRiesgo_env = parseInt(document.getElementById("p6_1_2_varones_riesgo_env_x").value) || 0;
    var mujeresRiesgo_env = parseInt(document.getElementById("p6_1_2_mujeres_riesgo_env_x").value) || 0;
    var lgtbiRiesgo_env = parseInt(document.getElementById("p6_1_2_lgtbi_riesgo_env_x").value) || 0;

    var varonesRiesgo_vene = parseInt(document.getElementById("p6_1_2_varones_riesgo_vene_x").value) || 0;
    var mujeresRiesgo_vene = parseInt(document.getElementById("p6_1_2_mujeres_riesgo_vene_x").value) || 0;
    var lgtbiRiesgo_vene = parseInt(document.getElementById("p6_1_2_lgtbi_riesgo_vene_x").value) || 0;

    var varonesDespro = parseInt(document.getElementById("p6_1_2_varones_despro_x").value) || 0;
    var mujeresDespro = parseInt(document.getElementById("p6_1_2_mujeres_despro_x").value) || 0;
    var lgtbiDespro = parseInt(document.getElementById("p6_1_2_lgtbi_despro_x").value) || 0;

    var varonesDespro_env = parseInt(document.getElementById("p6_1_2_varones_despro_env_x").value) || 0;
    var mujeresDespro_env = parseInt(document.getElementById("p6_1_2_mujeres_despro_env_x").value) || 0;
    var lgtbiDespro_env = parseInt(document.getElementById("p6_1_2_lgtbi_despro_env_x").value) || 0;

    var varonesDespro_vene = parseInt(document.getElementById("p6_1_2_varones_despro_vene_x").value) || 0;
    var mujeresDespro_vene = parseInt(document.getElementById("p6_1_2_mujeres_despro_vene_x").value) || 0;
    var lgtbiDespro_vene = parseInt(document.getElementById("p6_1_2_lgtbi_despro_vene_x").value) || 0;

    var totald = varonesDespro + mujeresDespro + lgtbiDespro + varonesDespro_env + mujeresDespro_env + lgtbiDespro_env + varonesDespro_vene + mujeresDespro_vene + lgtbiDespro_vene;

    var totalr = varonesRiesgo + mujeresRiesgo + lgtbiRiesgo + varonesRiesgo_env + mujeresRiesgo_env + lgtbiRiesgo_env + varonesRiesgo_vene + mujeresRiesgo_vene + lgtbiRiesgo_vene;

    total = totald + totalr;
    document.getElementById("p6_1_1_total_x").value = total;
}

function valida_p6_2x() {
    var radioSi = document.getElementById("p6_2_six");
    var textarea = document.getElementById("p6_2_1_x");
    var row_p6_2_1x = document.getElementById("row_p6_2_1x");

    if (radioSi.checked) {
        row_p6_2_1x.style.display = "block";
        textarea.disabled = false;
    } else {
        row_p6_2_1x.style.display = "none";
        textarea.value = "";
        textarea.disabled = true;
    }
}
//window.onload = function() {
//    valida_p6_2x();
//};

function valida_p10_1_4x() {
    var id_ficha = $("#id_ficha").val();
    if (id_ficha !== "") {
        var radioSi = document.getElementById("p10_1_3x_si");
        var row10_1_4x = document.getElementById("row_10_1_4x");

        if (radioSi.checked) {
            row10_1_4x.style.display = "block";
        } else {
            row10_1_4x.style.display = "none";


            var inputs = document.querySelectorAll("#row_10_1_4x input[type='number']");
            inputs.forEach(function (input) {
                input.value = "0";
            });


            var radios = document.querySelectorAll("#row_10_1_4x input[type='radio']");
            radios.forEach(function (radio) {
                radio.checked = false;
            });


            var textarea = document.getElementById("p10_1_4_edad_otro_desc_x");
            textarea.value = "";

            var textarea = document.getElementById("p10_1_4_edad_otro_vene_desc_x");
            textarea.value = "";
        }
    }
}

//window.onload = function() {
//    valida_p10_1_4x();
//};


function valida_otrox() {
    var radioValue = document.getElementById('p10_1_4_edad_otro');

    var textArea = document.getElementById('p10_1_4_edad_otro_desc_x');


    if (radioValue.checked) {
        textArea.disabled = false;
    } else {
        textArea.disabled = true;
        textArea.value = '';
    }
}

function valida_otroxy() {
    var radioValue = document.getElementById('p10_1_4_edad_vene_otro');

    var textArea = document.getElementById('p10_1_4_edad_otro_vene_desc_x');


    if (radioValue.checked) {
        textArea.disabled = false;
    } else {
        textArea.disabled = true;
        textArea.value = '';
    }
}

function valida_p6_1x() {
    var radioSi = document.getElementById('p6_1_six');
    // Variables para la sección 6.1.1.X
    var p6_1_1_peruanos_x = document.getElementById("p6_1_1_peruanos_x");
    var p6_1_1_extranjeros_x = document.getElementById("p6_1_1_extranjeros_x");
    var p6_1_1_venezolanos_x = document.getElementById("p6_1_1_venezolanos_x");
    var p6_1_1_total_x = document.getElementById("p6_1_1_total_x");
    var p6_1_2_total_riesgo = document.getElementById("p6_1_2_total_riesgo");
    var p6_1_2_total_despro = document.getElementById("p6_1_2_total_despro");

    var p6_1_3_otros_desc = document.getElementById('p6_1_3_otros_desc');
    var p6_1_4_otros_desc = document.getElementById('p6_1_4_otros_desc');
    var p6_1_5_otros_desc = document.getElementById('p6_1_5_otros_desc');
// Variables para la sección 6.1.2.X
    var p6_1_2_peruanos_riesgo_x = document.getElementById("p6_1_2_peruanos_riesgo_x");
    var p6_1_2_varones_riesgo_x = document.getElementById("p6_1_2_varones_riesgo_x");
    var p6_1_2_mujeres_riesgo_x = document.getElementById("p6_1_2_mujeres_riesgo_x");
    var p6_1_2_lgtbi_riesgo_x = document.getElementById("p6_1_2_lgtbi_riesgo_x");
    var p6_1_2_peruanos_despro_x = document.getElementById("p6_1_2_peruanos_despro_x");
    var p6_1_2_varones_despro_x = document.getElementById("p6_1_2_varones_despro_x");
    var p6_1_2_mujeres_despro_x = document.getElementById("p6_1_2_mujeres_despro_x");
    var p6_1_2_lgtbi_despro_x = document.getElementById("p6_1_2_lgtbi_despro_x");
    var p6_1_2_env_riesgo_x = document.getElementById("p6_1_2_env_riesgo_x");
    var p6_1_2_varones_riesgo_env_x = document.getElementById("p6_1_2_varones_riesgo_env_x");
    var p6_1_2_mujeres_riesgo_env_x = document.getElementById("p6_1_2_mujeres_riesgo_env_x");
    var p6_1_2_lgtbi_riesgo_env_x = document.getElementById("p6_1_2_lgtbi_riesgo_env_x");
    var p6_1_2_env_despro_x = document.getElementById("p6_1_2_env_despro_x");
    var p6_1_2_varones_despro_env_x = document.getElementById("p6_1_2_varones_despro_env_x");
    var p6_1_2_mujeres_despro_env_x = document.getElementById("p6_1_2_mujeres_despro_env_x");
    var p6_1_2_lgtbi_despro_env_x = document.getElementById("p6_1_2_lgtbi_despro_env_x");
    var p6_1_2_vene_riesgo_x = document.getElementById("p6_1_2_vene_riesgo_x");
    var p6_1_2_varones_riesgo_vene_x = document.getElementById("p6_1_2_varones_riesgo_vene_x");
    var p6_1_2_mujeres_riesgo_vene_x = document.getElementById("p6_1_2_mujeres_riesgo_vene_x");
    var p6_1_2_lgtbi_riesgo_vene_x = document.getElementById("p6_1_2_lgtbi_riesgo_vene_x");
    var p6_1_2_vene_despro_x = document.getElementById("p6_1_2_vene_despro_x");
    var p6_1_2_varones_despro_vene_x = document.getElementById("p6_1_2_varones_despro_vene_x");
    var p6_1_2_mujeres_despro_vene_x = document.getElementById("p6_1_2_mujeres_despro_vene_x");
    var p6_1_2_lgtbi_despro_vene_x = document.getElementById("p6_1_2_lgtbi_despro_vene_x");


// Variables para la sección 6.1.3.X
    var p6_1_3_a = document.getElementById("p6_1_3_a");
    var p6_1_3_b = document.getElementById("p6_1_3_b");
    var p6_1_3_c = document.getElementById("p6_1_3_c");
    var p6_1_3_d = document.getElementById("p6_1_3_d");
    var p6_1_3_e = document.getElementById("p6_1_3_e");
    var p6_1_3_f = document.getElementById("p6_1_3_f");
    var p6_1_3_g = document.getElementById("p6_1_3_g");
    var p6_1_3_otros = document.getElementById("p6_1_3_otros");


// Variables para la sección 6.1.4.X
    var p6_1_4_a = document.getElementById("p6_1_4_a");
    var p6_1_4_b = document.getElementById("p6_1_4_b");
    var p6_1_4_c = document.getElementById("p6_1_4_c");
    var p6_1_4_d = document.getElementById("p6_1_4_d");
    var p6_1_4_e = document.getElementById("p6_1_4_e");
    var p6_1_4_f = document.getElementById("p6_1_4_f");
    var p6_1_4_g = document.getElementById("p6_1_4_g");
    var p6_1_4_otros = document.getElementById("p6_1_4_otros");


// Variables para la sección 6.1.5.X
    var p6_1_5_a = document.getElementById("p6_1_5_a");
    var p6_1_5_b = document.getElementById("p6_1_5_b");
    var p6_1_5_c = document.getElementById("p6_1_5_c");
    var p6_1_5_d = document.getElementById("p6_1_5_d");
    var p6_1_5_e = document.getElementById("p6_1_5_e");
    var p6_1_5_f = document.getElementById("p6_1_5_f");
    var p6_1_5_g = document.getElementById("p6_1_5_g");
    var p6_1_5_otros = document.getElementById("p6_1_5_otros");

    var p6_1_4_noaplica = document.getElementById("p6_1_4_noaplica");
    var p6_1_3_noaplica = document.getElementById("p6_1_3_noaplica");
    var p6_1_5_noaplica = document.getElementById("p6_1_5_noaplica");



    if (radioSi.checked) {

        p6_1_1_peruanos_x.disabled = false;
        p6_1_1_extranjeros_x.disabled = false;
        p6_1_1_venezolanos_x.disabled = false;
        p6_1_1_total_x.disabled = false;


        p6_1_2_total_riesgo.disabled = false;
        p6_1_2_total_despro.disabled = false;

        p6_1_2_peruanos_riesgo_x.disabled = false;
        p6_1_2_varones_riesgo_x.disabled = false;
        p6_1_2_mujeres_riesgo_x.disabled = false;
        p6_1_2_lgtbi_riesgo_x.disabled = false;
        p6_1_2_peruanos_despro_x.disabled = false;
        p6_1_2_varones_despro_x.disabled = false;
        p6_1_2_mujeres_despro_x.disabled = false;
        p6_1_2_lgtbi_despro_x.disabled = false;
        p6_1_2_env_riesgo_x.disabled = false;
        p6_1_2_varones_riesgo_env_x.disabled = false;
        p6_1_2_mujeres_riesgo_env_x.disabled = false;
        p6_1_2_lgtbi_riesgo_env_x.disabled = false;
        p6_1_2_env_despro_x.disabled = false;
        p6_1_2_varones_despro_env_x.disabled = false;
        p6_1_2_mujeres_despro_env_x.disabled = false;
        p6_1_2_lgtbi_despro_env_x.disabled = false;
        p6_1_2_vene_riesgo_x.disabled = false;
        p6_1_2_varones_riesgo_vene_x.disabled = false;
        p6_1_2_mujeres_riesgo_vene_x.disabled = false;
        p6_1_2_lgtbi_riesgo_vene_x.disabled = false;
        p6_1_2_vene_despro_x.disabled = false;
        p6_1_2_varones_despro_vene_x.disabled = false;
        p6_1_2_mujeres_despro_vene_x.disabled = false;
        p6_1_2_lgtbi_despro_vene_x.disabled = false;
        // Hacerlos requeridos
        p6_1_2_peruanos_riesgo_x.required = true;
        p6_1_2_varones_riesgo_x.required = true;
        p6_1_2_mujeres_riesgo_x.required = true;
        p6_1_2_lgtbi_riesgo_x.required = true;
        p6_1_2_peruanos_despro_x.required = true;
        p6_1_2_varones_despro_x.required = true;
        p6_1_2_mujeres_despro_x.required = true;
        p6_1_2_lgtbi_despro_x.required = true;
        p6_1_2_env_riesgo_x.required = true;
        p6_1_2_varones_riesgo_env_x.required = true;
        p6_1_2_mujeres_riesgo_env_x.required = true;
        p6_1_2_lgtbi_riesgo_env_x.required = true;
        p6_1_2_env_despro_x.required = true;
        p6_1_2_varones_despro_env_x.required = true;
        p6_1_2_mujeres_despro_env_x.required = true;
        p6_1_2_lgtbi_despro_env_x.required = true;
        p6_1_2_vene_riesgo_x.required = true;
        p6_1_2_varones_riesgo_vene_x.required = true;
        p6_1_2_mujeres_riesgo_vene_x.required = true;
        p6_1_2_lgtbi_riesgo_vene_x.required = true;
        p6_1_2_vene_despro_x.required = true;
        p6_1_2_varones_despro_vene_x.required = true;
        p6_1_2_mujeres_despro_vene_x.required = true;
        p6_1_2_lgtbi_despro_vene_x.required = true;

// Habilitar los radios
        p6_1_3_a.disabled = false;
        p6_1_3_b.disabled = false;
        p6_1_3_c.disabled = false;
        p6_1_3_d.disabled = false;
        p6_1_3_e.disabled = false;
        p6_1_3_f.disabled = false;
        p6_1_3_g.disabled = false;
        p6_1_3_otros.disabled = false;



// Habilitar los radios
        p6_1_4_a.disabled = false;
        p6_1_4_b.disabled = false;
        p6_1_4_c.disabled = false;
        p6_1_4_d.disabled = false;
        p6_1_4_e.disabled = false;
        p6_1_4_f.disabled = false;
        p6_1_4_g.disabled = false;
        p6_1_4_otros.disabled = false;



// Habilitar los radios
        p6_1_5_a.disabled = false;
        p6_1_5_b.disabled = false;
        p6_1_5_c.disabled = false;
        p6_1_5_d.disabled = false;
        p6_1_5_e.disabled = false;
        p6_1_5_f.disabled = false;
        p6_1_5_g.disabled = false;
        p6_1_5_otros.disabled = false;


        p6_1_3_noaplica.disabled = false;
        p6_1_4_noaplica.disabled = false;
        p6_1_5_noaplica.disabled = false;
//p6_1_3_otros_desc.disabled = false;
//
//
//p6_1_4_otros_desc.disabled = false;
//
//
//p6_1_5_otros_desc.disabled = false;


    } else {

        p6_1_1_peruanos_x.disabled = true;
        p6_1_1_extranjeros_x.disabled = true;
        p6_1_1_venezolanos_x.disabled = true;
        p6_1_1_total_x.disabled = true;

        p6_1_2_total_riesgo.disabled = true;
        p6_1_2_total_despro.disabled = true;
        p6_1_2_total_riesgo.value = "";
        p6_1_2_total_despro.value = "";

        p6_1_2_peruanos_riesgo_x.disabled = true;
        p6_1_2_varones_riesgo_x.disabled = true;
        p6_1_2_mujeres_riesgo_x.disabled = true;
        p6_1_2_lgtbi_riesgo_x.disabled = true;
        p6_1_2_peruanos_despro_x.disabled = true;
        p6_1_2_varones_despro_x.disabled = true;
        p6_1_2_mujeres_despro_x.disabled = true;
        p6_1_2_lgtbi_despro_x.disabled = true;
        p6_1_2_env_riesgo_x.disabled = true;
        p6_1_2_varones_riesgo_env_x.disabled = true;
        p6_1_2_mujeres_riesgo_env_x.disabled = true;
        p6_1_2_lgtbi_riesgo_env_x.disabled = true;
        p6_1_2_env_despro_x.disabled = true;
        p6_1_2_varones_despro_env_x.disabled = true;
        p6_1_2_mujeres_despro_env_x.disabled = true;
        p6_1_2_lgtbi_despro_env_x.disabled = true;
        p6_1_2_vene_riesgo_x.disabled = true;
        p6_1_2_varones_riesgo_vene_x.disabled = true;
        p6_1_2_mujeres_riesgo_vene_x.disabled = true;
        p6_1_2_lgtbi_riesgo_vene_x.disabled = true;
        p6_1_2_vene_despro_x.disabled = true;
        p6_1_2_varones_despro_vene_x.disabled = true;
        p6_1_2_mujeres_despro_vene_x.disabled = true;
        p6_1_2_lgtbi_despro_vene_x.disabled = true;


        p6_1_1_peruanos_x.value = "";
        p6_1_1_extranjeros_x.value = "";
        p6_1_1_venezolanos_x.value = "";
        p6_1_1_total_x.value = "";

        p6_1_2_peruanos_riesgo_x.value = "";
        p6_1_2_varones_riesgo_x.value = "";
        p6_1_2_mujeres_riesgo_x.value = "";
        p6_1_2_lgtbi_riesgo_x.value = "";
        p6_1_2_peruanos_despro_x.value = "";
        p6_1_2_varones_despro_x.value = "";
        p6_1_2_mujeres_despro_x.value = "";
        p6_1_2_lgtbi_despro_x.value = "";
        p6_1_2_env_riesgo_x.value = "";
        p6_1_2_varones_riesgo_env_x.value = "";
        p6_1_2_mujeres_riesgo_env_x.value = "";
        p6_1_2_lgtbi_riesgo_env_x.value = "";
        p6_1_2_env_despro_x.value = "";
        p6_1_2_varones_despro_env_x.value = "";
        p6_1_2_mujeres_despro_env_x.value = "";
        p6_1_2_lgtbi_despro_env_x.value = "";
        p6_1_2_vene_riesgo_x.value = "";
        p6_1_2_varones_riesgo_vene_x.value = "";
        p6_1_2_mujeres_riesgo_vene_x.value = "";
        p6_1_2_lgtbi_riesgo_vene_x.value = "";
        p6_1_2_vene_despro_x.value = "";
        p6_1_2_varones_despro_vene_x.value = "";
        p6_1_2_mujeres_despro_vene_x.value = "";
        p6_1_2_lgtbi_despro_vene_x.value = "";

        p6_1_1_peruanos_x.required = false;
        p6_1_1_extranjeros_x.required = false;
        p6_1_1_venezolanos_x.required = false;
        p6_1_1_total_x.required = false;

        p6_1_2_peruanos_riesgo_x.required = false;
        p6_1_2_varones_riesgo_x.required = false;
        p6_1_2_mujeres_riesgo_x.required = false;
        p6_1_2_lgtbi_riesgo_x.required = false;
        p6_1_2_peruanos_despro_x.required = false;
        p6_1_2_varones_despro_x.required = false;
        p6_1_2_mujeres_despro_x.required = false;
        p6_1_2_lgtbi_despro_x.required = false;
        p6_1_2_env_riesgo_x.required = false;
        p6_1_2_varones_riesgo_env_x.required = false;
        p6_1_2_mujeres_riesgo_env_x.required = false;
        p6_1_2_lgtbi_riesgo_env_x.required = false;
        p6_1_2_env_despro_x.required = false;
        p6_1_2_varones_despro_env_x.required = false;
        p6_1_2_mujeres_despro_env_x.required = false;
        p6_1_2_lgtbi_despro_env_x.required = false;
        p6_1_2_vene_riesgo_x.required = false;
        p6_1_2_varones_riesgo_vene_x.required = false;
        p6_1_2_mujeres_riesgo_vene_x.required = false;
        p6_1_2_lgtbi_riesgo_vene_x.required = false;
        p6_1_2_vene_despro_x.required = false;
        p6_1_2_varones_despro_vene_x.required = false;
        p6_1_2_mujeres_despro_vene_x.required = false;
        p6_1_2_lgtbi_despro_vene_x.required = false;


// Quitar la marca de selección de los radios
        p6_1_3_a.checked = false;
        p6_1_3_b.checked = false;
        p6_1_3_c.checked = false;
        p6_1_3_d.checked = false;
        p6_1_3_e.checked = false;
        p6_1_3_f.checked = false;
        p6_1_3_g.checked = false;
        p6_1_3_otros.checked = false;

// Deshabilitar los radios
        p6_1_3_a.disabled = true;
        p6_1_3_b.disabled = true;
        p6_1_3_c.disabled = true;
        p6_1_3_d.disabled = true;
        p6_1_3_e.disabled = true;
        p6_1_3_f.disabled = true;
        p6_1_3_g.disabled = true;
        p6_1_3_otros.disabled = true;



// Quitar la marca de selección de los radios
        p6_1_4_a.checked = false;
        p6_1_4_b.checked = false;
        p6_1_4_c.checked = false;
        p6_1_4_d.checked = false;
        p6_1_4_e.checked = false;
        p6_1_4_f.checked = false;
        p6_1_4_g.checked = false;
        p6_1_4_otros.checked = false;

// Deshabilitar los radios
        p6_1_4_a.disabled = true;
        p6_1_4_b.disabled = true;
        p6_1_4_c.disabled = true;
        p6_1_4_d.disabled = true;
        p6_1_4_e.disabled = true;
        p6_1_4_f.disabled = true;
        p6_1_4_g.disabled = true;
        p6_1_4_otros.disabled = true;

// Quitar la marca de selección de los radios
        p6_1_5_a.checked = false;
        p6_1_5_b.checked = false;
        p6_1_5_c.checked = false;
        p6_1_5_d.checked = false;
        p6_1_5_e.checked = false;
        p6_1_5_f.checked = false;
        p6_1_5_g.checked = false;
        p6_1_5_otros.checked = false;

// Deshabilitar los radios
        p6_1_5_a.disabled = true;
        p6_1_5_b.disabled = true;
        p6_1_5_c.disabled = true;
        p6_1_5_d.disabled = true;
        p6_1_5_e.disabled = true;
        p6_1_5_f.disabled = true;
        p6_1_5_g.disabled = true;
        p6_1_5_otros.disabled = true;

        p6_1_3_noaplica.disabled = true;
        p6_1_4_noaplica.disabled = true;
        p6_1_5_noaplica.disabled = true;
        p6_1_3_noaplica.checked = false;
        p6_1_4_noaplica.checked = false;
        p6_1_5_noaplica.checked = false;

        p6_1_3_otros_desc.disabled = true;
        p6_1_3_otros_desc.value = "";

        p6_1_4_otros_desc.disabled = true;
        p6_1_4_otros_desc.value = "";

        p6_1_5_otros_desc.disabled = true;
        p6_1_5_otros_desc.value = "";
    }
}


function valida_p6_1_3_noaplica() {
    var id_ficha = $("#id_ficha").val();
    if (id_ficha !== "") {
        var radiocheckd = document.getElementById('p6_1_3_noaplica');
        var p6_1_3_otros_desc = document.getElementById('p6_1_3_otros_desc');
        var p6_1_3_otros = document.getElementById('p6_1_3_otros');

        if (radiocheckd.checked) {
            console.log("noaplica a");
            p6_1_3_otros_desc.disabled = true;
            p6_1_3_otros_desc.value = "";
        } else if (!p6_1_3_otros.checked) {
            console.log("noaplica b");
            p6_1_3_otros_desc.disabled = true;
            p6_1_3_otros_desc.value = "";
        } else if (p6_1_3_otros.checked) {
            console.log("otros_aplica");
            p6_1_3_otros_desc.disabled = false;
        } else {
            console.log("sino deshabilita ");
            p6_1_3_otros_desc.disabled = true;
            p6_1_3_otros_desc.value = "";
        }
    }
}



function valida_p6313() {
    var siRadio = document.getElementById('p6_1_2_3_si');
    const noAdjuntarDiv = document.querySelector(".no_adjuntar6313");
    const inputFile = document.getElementById("s6313_arch");

    var p6_1_2_3 = siRadio ? siRadio.checked : null;

    if (p6_1_2_3 === true) {


        if (noAdjuntarDiv) {
            noAdjuntarDiv.style.display = "block";
        } else {
            console.log("El elemento con la clase 'no_adjuntar_6123' no existe.");
        }
    } else {


        if (noAdjuntarDiv) {
            noAdjuntarDiv.style.display = "none";
        }
    }
}

function valida_p6_1_4_noaplica() {
    var id_ficha = $("#id_ficha").val();
    if (id_ficha !== "") {
        var radiocheckd = document.getElementById('p6_1_4_noaplica');
        var p6_1_4_otros_desc = document.getElementById('p6_1_4_otros_desc');
        var p6_1_4_otros = document.getElementById('p6_1_4_otros');

        if (radiocheckd.checked) {
            console.log("noaplica a");
            p6_1_4_otros_desc.disabled = true;
            p6_1_4_otros_desc.value = "";
        } else if (!p6_1_4_otros.checked) {
            console.log("noaplica b");
            p6_1_4_otros_desc.disabled = true;
            p6_1_4_otros_desc.value = "";
        } else if (p6_1_4_otros.checked) {
            console.log("otros_aplica");
            p6_1_4_otros_desc.disabled = false;
        } else {
            console.log("sino deshabilita ");
            p6_1_4_otros_desc.disabled = true;
            p6_1_4_otros_desc.value = "";
        }
    }
}

function valida_p6_1_5_noaplica() {
    var id_ficha = $("#id_ficha").val();
    if (id_ficha !== "") {
        let radiocheckd = document.getElementById('p6_1_5_noaplica');
        let p6_1_5_otros_desc = document.getElementById('p6_1_5_otros_desc');

        if (radiocheckd.checked) {

            p6_1_5_otros_desc.disabled = true;
            p6_1_5_otros_desc.value = "";
        } else {

            p6_1_5_otros_desc.disabled = false;
        }
    }
}
function valida_p6_1_5_noaplica() {
    var id_ficha = $("#id_ficha").val();
    if (id_ficha !== "") {
        var radiocheckd = document.getElementById('p6_1_5_noaplica');
        var p6_1_5_otros_desc = document.getElementById('p6_1_5_otros_desc');
        var p6_1_5_otros = document.getElementById('p6_1_5_otros');

        if (radiocheckd.checked) {
            console.log("noaplica a");
            p6_1_5_otros_desc.disabled = true;
            p6_1_5_otros_desc.value = "";
        } else if (!p6_1_5_otros.checked) {
            console.log("noaplica b");
            p6_1_5_otros_desc.disabled = true;
            p6_1_5_otros_desc.value = "";
        } else if (p6_1_5_otros.checked) {
            console.log("otros_aplica");
            p6_1_5_otros_desc.disabled = false;
        } else {
            console.log("sino deshabilita ");
            p6_1_5_otros_desc.disabled = true;
            p6_1_5_otros_desc.value = "";
        }
    }
}


function valida_p6_1_2() {
    const noAdjuntarDiv = document.querySelector(".no_adjuntar6312");
    const noAdjuntarDiv6313 = document.querySelector(".no_adjuntar6313");
    var radioSi = document.getElementById('p6_1_2_si');
    var p6_1_2_1_otros_desc = document.getElementById('p6_1_2_1_otros_desc');
    var p6_1_2_3_si = document.getElementById('p6_1_2_3_si');
    var p6_1_2_3_no = document.getElementById('p6_1_2_3_no');

    if (radioSi.checked) {
        p6_1_2_3_si.disabled = false;
        p6_1_2_3_no.disabled = false;

        var checkboxes = document.getElementById('row_p6_1_2_1').querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(function (checkbox) {
            checkbox.disabled = false;

        });

        var radios = document.getElementById('row_p6_1_2_2').querySelectorAll('input[type="radio"]');
        radios.forEach(function (radio) {
            radio.disabled = false;
            radio.required = true;
        });
    } else {
        noAdjuntarDiv.style.display = "none";
        noAdjuntarDiv6313.style.display = "none";
        p6_1_2_3_si.disabled = true;
        p6_1_2_3_si.checked = false;
        p6_1_2_3_no.disabled = true;
        p6_1_2_3_no.checked = false;

        p6_1_2_1_otros_desc.disabled = true;
        p6_1_2_1_otros_desc.required = false;
        p6_1_2_1_otros_desc.value = "";

        var checkboxes = document.getElementById('row_p6_1_2_1').querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(function (checkbox) {
            checkbox.disabled = true;
            checkbox.checked = false;
            checkbox.required = false;
        });

        var radios = document.getElementById('row_p6_1_2_2').querySelectorAll('input[type="radio"]');
        radios.forEach(function (radio) {
            radio.disabled = true;
            radio.checked = false;
            radio.required = false;
        });
    }
}

function valida_p6312() {
    var siRadio = document.getElementById('p6_1_2_2_si');
    const noAdjuntarDiv = document.querySelector(".no_adjuntar6312");
    const inputFile = document.getElementById("s6312_arch");

    var p6_1_2_2 = siRadio ? siRadio.checked : null;

    if (p6_1_2_2 === true) {


        if (noAdjuntarDiv) {
            noAdjuntarDiv.style.display = "block";
        } else {
            console.log("El elemento con la clase 'no_adjuntar_6122' no existe.");
        }
    } else {


        if (noAdjuntarDiv) {
            noAdjuntarDiv.style.display = "none";
        }
    }
}




function valida_p6_1_2() {
    const noAdjuntarDiv = document.querySelector(".no_adjuntar6312");
    const noAdjuntarDiv6313 = document.querySelector(".no_adjuntar6313");
    var radioSi = document.getElementById('p6_1_2_si');
    var p6_1_2_1_otros_desc = document.getElementById('p6_1_2_1_otros_desc');
    var p6_1_2_3_si = document.getElementById('p6_1_2_3_si');
    var p6_1_2_3_no = document.getElementById('p6_1_2_3_no');

    if (radioSi.checked) {
        p6_1_2_3_si.disabled = false;
        p6_1_2_3_no.disabled = false;

        var checkboxes = document.getElementById('row_p6_1_2_1').querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(function (checkbox) {
            checkbox.disabled = false;

        });

        var radios = document.getElementById('row_p6_1_2_2').querySelectorAll('input[type="radio"]');
        radios.forEach(function (radio) {
            radio.disabled = false;
            radio.required = true;
        });
    } else {
        noAdjuntarDiv.style.display = "none";
        noAdjuntarDiv6313.style.display = "none";

        p6_1_2_3_si.disabled = true;
        p6_1_2_3_si.checked = false;
        p6_1_2_3_no.disabled = true;
        p6_1_2_3_no.checked = false;

        p6_1_2_1_otros_desc.disabled = true;
        p6_1_2_1_otros_desc.required = false;
        p6_1_2_1_otros_desc.value = "";

        var checkboxes = document.getElementById('row_p6_1_2_1').querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(function (checkbox) {
            checkbox.disabled = true;
            checkbox.checked = false;
            checkbox.required = false;
        });

        var radios = document.getElementById('row_p6_1_2_2').querySelectorAll('input[type="radio"]');
        radios.forEach(function (radio) {
            radio.disabled = true;
            radio.checked = false;
            radio.required = false;
        });
    }
}

function valida_p6_1() {
    const noAdjuntarDiv = document.querySelector(".no_adjuntar6312");
    const noAdjuntarDiv6313 = document.querySelector(".no_adjuntar6313");
    var radioSi = document.getElementById('p6_1_si');
    var p6_1_2_1_otros_desc = document.getElementById('p6_1_2_1_otros_desc');
    var p6_2 = document.getElementById('p6_2');

    var p6_1_2_si = document.getElementById('p6_1_2_si');
    var p6_1_2_no = document.getElementById('p6_1_2_no');
    var p6_4_3_x = document.getElementById('p6_4_3_x');

    var p6_2_2_circunstancia1 = document.getElementById('p6_2_2_circunstancia1');
    var p6_2_2_circunstancia2 = document.getElementById('p6_2_2_circunstancia2');
    var p6_2_2_circunstancia3 = document.getElementById('p6_2_2_circunstancia3');
    var p6_2_2_ciscunstancia4 = document.getElementById('p6_2_2_circunstancia4');
    var p6_2_2_ciscunstancia5 = document.getElementById('p6_2_2_circunstancia5');
    var p6_2_2_circunstancia6 = document.getElementById('p6_2_2_circunstancia6');
    var p6_2_2_circunstancia7 = document.getElementById('p6_2_2_circunstancia7');
    var p6_2_2_circunstancia8 = document.getElementById('p6_2_2_circunstancia8');
    var p6_2_2_otros = document.getElementById('p6_2_2_otros');
    var p6_2_2_otros_desc = document.getElementById('p6_2_2_otros_desc');

    var p6_4_5_a_cantidad_x = document.getElementById('p6_4_5_a_cantidad_x');
    var p6_4_5_b_cantidad_x = document.getElementById('p6_4_5_b_cantidad_x');
    var p6_4_5_c_cantidad_x = document.getElementById('p6_4_5_c_cantidad_x');
    var p6_4_5_d_cantidad_x = document.getElementById('p6_4_5_d_cantidad_x');
    var p6_4_5_e_cantidad_x = document.getElementById('p6_4_5_e_cantidad_x');
    var p6_4_5_f_cantidad_x = document.getElementById('p6_4_5_f_cantidad_x');
    var p6_4_5_g_cantidad_x = document.getElementById('p6_4_5_g_cantidad_x');
    var p6_4_5_h_cantidad_x = document.getElementById('p6_4_5_h_cantidad_x');
    var p6_4_5_otros_cantidad_x = document.getElementById('p6_4_5_otros_cantidad_x');
    var p6_4_5_otros_descrip_x = document.getElementById('p6_4_5_otros_descrip_x');

    var p6_4_1_x = document.getElementById('p6_4_1_x');
    var p6_5_otros_x = document.getElementById('p6_5_otros_x');
    var otrosDescTextarea = document.getElementById("p6_5_otros_descrip_x");
    var otrosDescTextareap6_4 = document.getElementById("p6_4_otros_desc");
    var otrosDescTextareap6_5 = document.getElementById("p6_5_otros_desc");
    var otrosDescTextareap6_5_e = document.getElementById("p6_5_e_desc");

    var venezolanaCantidadInput = document.getElementById('p6_4_2_venezolana_cantidad_x');
    var bolivianaCantidadInput = document.getElementById('p6_4_2_boliviana_cantidad_x');
    var ecuatorianaCantidadInput = document.getElementById('p6_4_2_ecuatoriana_cantidad_x');
    var haitianaCantidadInput = document.getElementById('p6_4_2_hatiana_cantidad_x');
    var p6_4_2_otros_cantidad_x = document.getElementById('p6_4_2_otros_cantidad_x');


    var aCantidadInput = document.getElementById('p6_4_5_a_cantidad_x');
    var bCantidadInput = document.getElementById('p6_4_5_b_cantidad_x');
    var cCantidadInput = document.getElementById('p6_4_5_c_cantidad_x');
    var dCantidadInput = document.getElementById('p6_4_5_d_cantidad_x');
    var eCantidadInput = document.getElementById('p6_4_5_e_cantidad_x');
    var fCantidadInput = document.getElementById('p6_4_5_f_cantidad_x');
    var gCantidadInput = document.getElementById('p6_4_5_g_cantidad_x');
    var hCantidadInput = document.getElementById('p6_4_5_h_cantidad_x');
    var otrosCantidadInput = document.getElementById('p6_4_5_otros_cantidad_x');
    //var p6_4_5_total_x = document.getElementById('p6_4_5_total_x');
    var p6_4_5_otros_descrip_x = document.getElementById('p6_4_5_otros_descrip_x');

    var otrosDescripcionTextarea = document.getElementById('p6_4_2_otros_descrip_x');

    // var fields = document.querySelectorAll('input[type="radio"], input[type="checkbox"]'); 
    var campos = document.querySelectorAll('.row_sino input[type="radio"], .row_p6_1_2_1 input[type="checkbox"], .row_p6_1_2_2 input[type="radio"], .check_p6_3 input[type="checkbox"]');

    if (radioSi.checked) {
        p6_4_3_x.disabled = false;
        p6_4_3_x.required = true;


        var checkboxes642 = document.querySelectorAll('.p6_4_2_otros_x');
        checkboxes642.forEach(function (checkbox) {
            checkbox.disabled = true;
            checkbox.checked = false;
            checkbox.required = false;
        });

        p6_5_otros_x.disabled = false;

        p6_4_1_x.disabled = false;
        p6_4_1_x.required = true;

        p6_2.disabled = false;
        p6_2.required = true;

        p6_1_2_si.disabled = false;
        p6_1_2_no.disabled = false;

        p6_2_2_circunstancia1.disabled = false;
        p6_2_2_circunstancia1.required = true;

        p6_2_2_circunstancia2.disabled = false;
        p6_2_2_circunstancia2.required = true;

        p6_2_2_circunstancia3.disabled = false;
        p6_2_2_circunstancia3.required = true;

        p6_2_2_ciscunstancia4.disabled = false;
        p6_2_2_ciscunstancia4.required = true;

        p6_2_2_ciscunstancia5.disabled = false;
        p6_2_2_ciscunstancia5.required = true;

        p6_2_2_circunstancia6.disabled = false;
        p6_2_2_circunstancia6.required = true;

        p6_2_2_circunstancia7.disabled = false;
        p6_2_2_circunstancia7.required = true;

        p6_2_2_circunstancia8.disabled = false;
        p6_2_2_circunstancia8.required = true;

        venezolanaCantidadInput.disabled = false;
        venezolanaCantidadInput.required = true;

        bolivianaCantidadInput.disabled = false;
        bolivianaCantidadInput.required = true;

        ecuatorianaCantidadInput.disabled = false;
        ecuatorianaCantidadInput.required = true;

        haitianaCantidadInput.disabled = false;
        haitianaCantidadInput.required = true;

        otrosCantidadInput.disabled = false;
        otrosCantidadInput.required = true;

        p6_4_2_otros_cantidad_x.disabled = false;
        p6_4_2_otros_cantidad_x.value = '';

        p6_2_2_otros.disabled = false;
        p6_2_2_otros.required = true;
        p6_2_2_circunstancia1.value = 0;
        p6_2_2_circunstancia2.value = 0;
        p6_2_2_circunstancia3.value = 0;
        p6_2_2_ciscunstancia4.value = 0;
        p6_2_2_ciscunstancia5.value = 0;
        p6_2_2_circunstancia6.value = 0;
        p6_2_2_circunstancia7.value = 0;
        p6_2_2_circunstancia8.value = 0;
        p6_2_2_otros.value = 0;

        p6_2_2_otros_desc.disabled = false;
/////////////////////////////////////////////////////////////////////////////
        p6_4_5_a_cantidad_x.disabled = false;
        p6_4_5_a_cantidad_x.required = true;

        p6_4_5_b_cantidad_x.disabled = false;
        p6_4_5_b_cantidad_x.required = true;

        p6_4_5_c_cantidad_x.disabled = false;
        p6_4_5_c_cantidad_x.required = true;

        p6_4_5_d_cantidad_x.disabled = false;
        p6_4_5_d_cantidad_x.required = true;

        p6_4_5_e_cantidad_x.disabled = false;
        p6_4_5_e_cantidad_x.required = true;

        p6_4_5_f_cantidad_x.disabled = false;
        p6_4_5_f_cantidad_x.required = true;

        p6_4_5_g_cantidad_x.disabled = false;
        p6_4_5_g_cantidad_x.required = true;

        p6_4_5_h_cantidad_x.disabled = false;
        p6_4_5_h_cantidad_x.required = true;

        p6_4_5_otros_cantidad_x.disabled = false;
        p6_4_5_otros_cantidad_x.required = true;
        p6_4_5_a_cantidad_x.value = 0;
        p6_4_5_b_cantidad_x.value = 0;
        p6_4_5_c_cantidad_x.value = 0;
        p6_4_5_d_cantidad_x.value = 0;
        p6_4_5_e_cantidad_x.value = 0;
        p6_4_5_f_cantidad_x.value = 0;
        p6_4_5_g_cantidad_x.value = 0;
        p6_4_5_h_cantidad_x.value = 0;
        p6_4_5_otros_cantidad_x.value = 0;
        // p6_2_2_otros.value = 0;

        p6_4_5_otros_descrip_x.disabled = false;


///////////////////////////////////////////////////////////////////////////////
        var checkboxes65 = document.querySelectorAll(".check_p6_5");
        checkboxes65.forEach(function (checkbox) {
            checkbox.disabled = false;
            checkbox.required = true;
        });

        var checkboxes67 = document.querySelectorAll(".check_p6_7");
        checkboxes67.forEach(function (checkbox) {
            checkbox.disabled = false;

        });


        // otrosDescTextarea.disabled = false;

        var radios = document.getElementById('row_sino').querySelectorAll('input[type="radio"]');
        radios.forEach(function (radio) {
            radio.disabled = false;
            radio.required = true;
        });

        var checkboxes64 = document.querySelectorAll('.check_p6_4');
        checkboxes64.forEach(function (checkbox) {
            checkbox.disabled = true;
            checkbox.checked = false;

        });

        otrosDescTextareap6_4.style.display = "none";
        otrosDescTextareap6_5.style.display = "none";
        otrosDescTextareap6_5_e.style.display = "none";

    } else {
        noAdjuntarDiv.style.display = "none";
        noAdjuntarDiv6313.style.display = "none";
        var checkboxes6431 = document.querySelectorAll(".check_p6_4_3_1");
        checkboxes6431.forEach(function (checkbox) {
            checkbox.disabled = true;
            checkbox.checked = false;
            checkbox.required = false;
        });

        var checkboxes65 = document.querySelectorAll(".check_p6_5");
        checkboxes65.forEach(function (checkbox) {
            checkbox.disabled = true;
            checkbox.checked = false;
            checkbox.required = false;
        });

        var checkboxes67 = document.querySelectorAll(".check_p6_7");
        checkboxes67.forEach(function (checkbox) {
            checkbox.disabled = true;
            checkbox.checked = false;

        });

        var checkboxes642 = document.querySelectorAll('.p6_4_2_otros_x');
        checkboxes642.forEach(function (checkbox) {
            checkbox.disabled = true;
            checkbox.checked = false;
            checkbox.required = false;
        });

        p6_4_3_x.disabled = true;
        p6_4_3_x.required = false;
        p6_4_3_x.value = "";
        // p6_4_5_total_x.value = "";
        aCantidadInput.disabled = true;
        aCantidadInput.value = '';
        bCantidadInput.disabled = true;
        bCantidadInput.value = '';
        cCantidadInput.disabled = true;
        cCantidadInput.value = '';
        dCantidadInput.disabled = true;
        dCantidadInput.value = '';
        eCantidadInput.disabled = true;
        eCantidadInput.value = '';
        fCantidadInput.disabled = true;
        fCantidadInput.value = '';
        gCantidadInput.disabled = true;
        gCantidadInput.value = '';
        hCantidadInput.disabled = true;
        hCantidadInput.value = '';
        otrosCantidadInput.disabled = true;
        otrosCantidadInput.value = '';
//
//        otrosCheckbox.disabled = true;
//        otrosCheckbox.checked = false;
        p6_5_otros_x.disabled = true;
        p6_5_otros_x.checked = false;

//        otrosCheckbox.disabled = true;
//        otrosCheckbox.checked = false;

        venezolanaCantidadInput.disabled = true;
        venezolanaCantidadInput.value = '';


        bolivianaCantidadInput.disabled = true;
        bolivianaCantidadInput.value = '';
        bolivianaCantidadInput.required = false;
        ecuatorianaCantidadInput.disabled = true;
        ecuatorianaCantidadInput.value = '';
        ecuatorianaCantidadInput.required = false;
        haitianaCantidadInput.disabled = true;
        haitianaCantidadInput.value = '';
        haitianaCantidadInput.required = false;
        otrosCantidadInput.disabled = true;
        otrosCantidadInput.value = '';
        otrosCantidadInput.required = false;

        p6_4_2_otros_cantidad_x.disabled = true;
        p6_4_2_otros_cantidad_x.value = '';

        otrosDescripcionTextarea.disabled = true;
        otrosDescripcionTextarea.value = '';
        // otrosDescTextarea.style.display = "none";
        p6_4_5_otros_descrip_x.disabled = true;
        p6_4_5_otros_descrip_x.value = '';

        var checkboxes63 = document.querySelectorAll('.check_p6_3');
        checkboxes63.forEach(function (checkbox) {
            checkbox.disabled = true;
            checkbox.checked = false;

        });

        var checkboxesz = document.querySelectorAll('.check_p6_1_2_1');
        checkboxesz.forEach(function (checkbox) {
            checkbox.disabled = true;
            checkbox.checked = false;

        });

        var radios = document.getElementById('row_p6_1_2_3').querySelectorAll('input[type="radio"]');
        radios.forEach(function (radio) {
            radio.disabled = true;
            radio.checked = false;
            radio.required = false;
        });

        var checkboxes64 = document.querySelectorAll('.check_p6_4');
        checkboxes64.forEach(function (checkbox) {
            checkbox.disabled = false;
            //checkbox.required = true;
        });

        var radios = document.getElementById('row_sino').querySelectorAll('input[type="radio"]');
        radios.forEach(function (radio) {
            radio.disabled = true;
            radio.checked = false;
            radio.required = false;
        });

        p6_2.disabled = true;
        p6_2.required = false;
        p6_2.value = "";

        p6_4_1_x.disabled = true;
        p6_4_1_x.required = false;
        p6_4_1_x.value = "";

        console.log("deshabilito ");

        p6_1_2_1_otros_desc.disabled = true;
        p6_1_2_1_otros_desc.required = false;
        p6_1_2_1_otros_desc.value = "";

        p6_2_2_circunstancia1.disabled = true;
        p6_2_2_circunstancia1.required = false;
        p6_2_2_circunstancia1.value = "";

        p6_2_2_circunstancia2.disabled = true;
        p6_2_2_circunstancia2.required = false;
        p6_2_2_circunstancia2.value = "";

        p6_2_2_circunstancia3.disabled = true;
        p6_2_2_circunstancia3.required = false;
        p6_2_2_circunstancia3.value = "";

        p6_2_2_ciscunstancia4.disabled = true;
        p6_2_2_ciscunstancia4.required = false;
        p6_2_2_ciscunstancia4.value = "";

        p6_2_2_ciscunstancia5.disabled = true;
        p6_2_2_ciscunstancia5.required = false;
        p6_2_2_ciscunstancia5.value = "";

        p6_2_2_circunstancia6.disabled = true;
        p6_2_2_circunstancia6.required = false;
        p6_2_2_circunstancia6.value = "";

        p6_2_2_circunstancia7.disabled = true;
        p6_2_2_circunstancia7.required = false;
        p6_2_2_circunstancia7.value = "";

        p6_2_2_circunstancia8.disabled = true;
        p6_2_2_circunstancia8.required = false;
        p6_2_2_circunstancia8.value = "";

        p6_2_2_otros.disabled = true;
        p6_2_2_otros.required = false;
        p6_2_2_otros.value = "";

        p6_2_2_otros_desc.disabled = true;
        p6_2_2_otros_desc.required = false;
        p6_2_2_otros_desc.value = "";
//////////////////////////////////////////////////////////////
        p6_4_5_a_cantidad_x.disabled = true;
        p6_4_5_a_cantidad_x.required = false;
        p6_4_5_a_cantidad_x.value = "";

        p6_4_5_b_cantidad_x.disabled = true;
        p6_4_5_b_cantidad_x.required = false;
        p6_4_5_b_cantidad_x.value = "";

        p6_4_5_c_cantidad_x.disabled = true;
        p6_4_5_c_cantidad_x.required = false;
        p6_4_5_c_cantidad_x.value = "";

        p6_4_5_d_cantidad_x.disabled = true;
        p6_4_5_d_cantidad_x.required = false;
        p6_4_5_d_cantidad_x.value = "";

        p6_4_5_e_cantidad_x.disabled = true;
        p6_4_5_e_cantidad_x.required = false;
        p6_4_5_e_cantidad_x.value = "";

        p6_4_5_f_cantidad_x.disabled = true;
        p6_4_5_f_cantidad_x.required = false;
        p6_4_5_f_cantidad_x.value = "";

        p6_4_5_g_cantidad_x.disabled = true;
        p6_4_5_g_cantidad_x.required = false;
        p6_4_5_g_cantidad_x.value = "";

        p6_4_5_h_cantidad_x.disabled = true;
        p6_4_5_h_cantidad_x.required = false;
        p6_4_5_h_cantidad_x.value = "";

        p6_2_2_otros.disabled = true;
        p6_2_2_otros.required = false;
        p6_2_2_otros.value = "";

        p6_4_5_otros_cantidad_x.disabled = true;
        p6_4_5_otros_cantidad_x.required = false;
        p6_4_5_otros_cantidad_x.value = "";

        p6_4_5_otros_descrip_x.disabled = true;
        p6_4_5_otros_descrip_x.required = false;
        p6_4_5_otros_descrip_x.value = "";
/////////////////////////////////////////////////////////


        p6_5_otros_x.disabled = true;
        p6_5_otros_x.required = false;
        p6_5_otros_x.checked = false;

        otrosDescTextarea.disabled = true;
        otrosDescTextarea.required = false;
        otrosDescTextarea.value = "";

        campos.forEach(function (campo) {
            if (campo.type === 'radio' || campo.type === 'checkbox') {
                campo.checked = false;
            }
        });
        campos.forEach(function (campo) {
            if (campo.type === 'radio' || campo.type === 'checkbox') {
                campo.checked = false;
            }
        });

        var checkboxes = document.getElementById('row_p6_1_2_1').querySelectorAll('input[type="checkbox"]');
        radios.forEach(function (checkbox) {
            checkbox.disabled = true;
            checkbox.checked = false;
            checkbox.required = false;
        });


        var radios = document.getElementById('row_p6_1_2_2').querySelectorAll('input[type="radio"]');
        radios.forEach(function (radio) {
            radio.disabled = true;
            radio.checked = false;
            radio.required = false;
        });

        p6_1_2_1_otros_desc.disabled = true;
        p6_1_2_1_otros_desc.required = false;
        p6_1_2_1_otros_desc.value = "";

        p6_1_2_si.disabled = true;
        p6_1_2_no.disabled = true;

        p6_1_2_si.checked = false;
        p6_1_2_no.checked = false;
    }
    checkCheckboxes67();
    checkCheckboxes65();
    checkCheckboxes64();

}

function checkCheckboxes67() {
    var checkboxes67 = document.querySelectorAll(".check_p6_7");
    var anyChecked67 = Array.from(checkboxes67).some(function (checkbox) {
        return checkbox.checked;
    });

    checkboxes67.forEach(function (checkbox) {
        if (anyChecked67) {
            checkbox.required = false;
        } else {
            checkbox.required = true;
        }
    });
}


document.querySelectorAll(".check_p6_7").forEach(function (checkbox) {
    checkbox.addEventListener('change', checkCheckboxes67);
});

function checkCheckboxes65() {
    var checkboxes65 = document.querySelectorAll(".check_p6_5");
    var anyChecked65 = Array.from(checkboxes65).some(function (checkbox) {
        return checkbox.checked;
    });

    checkboxes65.forEach(function (checkbox) {
        if (anyChecked65) {
            checkbox.required = false;
        } else {
            checkbox.required = true;
        }
    });
}


document.querySelectorAll(".check_p6_5").forEach(function (checkbox) {
    checkbox.addEventListener('change', checkCheckboxes65);
});



function checkCheckboxes64() {
    var checkboxes64 = document.querySelectorAll(".check_p6_4");
    var anyChecked64 = Array.from(checkboxes64).some(function (checkbox) {
        return checkbox.checked;
    });

    checkboxes64.forEach(function (checkbox) {
        if (anyChecked64) {
            checkbox.required = false;
        } else {
            checkbox.required = true;
        }
    });
}
document.querySelectorAll(".check_p6_4").forEach(function (checkbox) {
    checkbox.addEventListener('change', checkCheckboxes64);
});



function change6121() {

    var siRadio = document.getElementById('p6_1_2_1_otros');
    var p6_1_2_1_otros_desc = document.getElementById('p6_1_2_1_otros_desc');

    if (siRadio.checked) {
        p6_1_2_1_otros_desc.disabled = false;
        p6_1_2_1_otros_desc.required = true;
    } else {
        p6_1_2_1_otros_desc.disabled = true;
        p6_1_2_1_otros_desc.required = false;
        p6_1_2_1_otros_desc.value = "";

    }

}
//
//function calcularTotalCasos() {
//    var a = parseFloat(document.getElementById('p6_2_2_circunstancia1').value) || 0;
//    var b = parseFloat(document.getElementById('p6_2_2_circunstancia2').value) || 0;
//    var c = parseFloat(document.getElementById('p6_2_2_circunstancia3').value) || 0;
//    var d = parseFloat(document.getElementById('p6_2_2_circunstancia4').value) || 0;
//    var e = parseFloat(document.getElementById('p6_2_2_circunstancia5').value) || 0;
//    var f = parseFloat(document.getElementById('p6_2_2_circunstancia6').value) || 0;
//    var g = parseFloat(document.getElementById('p6_2_2_circunstancia7').value) || 0;
//    var h = parseFloat(document.getElementById('p6_2_2_circunstancia8').value) || 0;
//    var i = parseFloat(document.getElementById('p6_2_2_otros').value) || 0;
//    var totalzx = a + b + c + d + e + f + g + h + i;
//    document.getElementById('p6_2_2_total').value = totalzx;
//}
//
//function valida_p6_4_2_venezolana_x() {
//    var checkbox = document.getElementById("p6_4_2_venezolana_x"); // Corregido el ID del checkbox
//    var input = document.getElementById("p6_4_2_venezolana_cantidad_x");
//
//    if (checkbox.checked) {
//        input.disabled = false;
//        input.value = "";
//    } else {
//        // Si no está marcado, deshabilita el campo de entrada y borra su valor
//        input.disabled = true;
//        input.value = "0";
//    }
//}
//
//function valida_p6_4_2_boliviana_x() {
//    var checkbox = document.getElementById("p6_4_2_boliviana_x"); // Corregido el ID del checkbox
//    var input = document.getElementById("p6_4_2_boliviana_cantidad_x");
//
//    if (checkbox.checked) {
//        input.disabled = false;
//        input.value = "";
//    } else {
//        // Si no está marcado, deshabilita el campo de entrada y borra su valor
//        input.disabled = true;
//        input.value = "0";
//    }
//}
//
//function valida_p6_4_2_ecuatoriana_x() {
//    var checkbox = document.getElementById("p6_4_2_ecuatoriana_x"); // Corregido el ID del checkbox
//    var input = document.getElementById("p6_4_2_ecuatoriana_cantidad_x");
//
//    if (checkbox.checked) {
//        input.disabled = false;
//        input.value = "";
//    } else {
//        // Si no está marcado, deshabilita el campo de entrada y borra su valor
//        input.disabled = true;
//        input.value = "0";
//    }
//}
//function valida_p6_4_2_haitiana_x() {
//    var checkbox = document.getElementById("p6_4_2_haitiana_x"); // Corregido el ID del checkbox
//    var input = document.getElementById("p6_4_2_hatiana_cantidad_x");
//
//    if (checkbox.checked) {
//        input.disabled = false;
//        input.value = "";
//    } else {
//        // Si no está marcado, deshabilita el campo de entrada y borra su valor
//        input.disabled = true;
//        input.value = "0";
//    }
//}

function valida_p6_4_2_otros_x() {
    var checkbox = document.getElementById("p6_4_2_otros_x");
    var input = document.getElementById("p6_4_2_otros_cantidad_x");
    var p6_4_2_otros_descrip_x = document.getElementById("p6_4_2_otros_descrip_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
        p6_4_2_otros_descrip_x.disabled = false;
    } else {
        input.disabled = true;
        input.value = "0";
        p6_4_2_otros_descrip_x.disabled = true;
        p6_4_2_otros_descrip_x.value = ""; // Esto limpia el contenido del campo de descripción
    }
}

//function valida_p6_3_otros() {
//
//    var otrosCheckbox = document.getElementById("p6_3_otros");
//    var otrosDescTextarea = document.getElementById("p6_3_otros_desc");
//
//
//    if (!otrosCheckbox.checked) {
//        otrosDescTextarea.style.display = "none";
//        otrosDescTextarea.value = "";
//    }
//
//
//    otrosCheckbox.addEventListener("change", function () {
//
//        if (this.checked) {
//            otrosDescTextarea.style.display = "block";
//            otrosDescTextarea.disabled = false;
//        } else {
//            otrosDescTextarea.style.display = "none";
//            otrosDescTextarea.value = "";
//        }
//    });
//}



//document.addEventListener("DOMContentLoaded", function () {
//    valida_p6_3_otros();
//});



//
//function valida_p6_4_otros() {
//    var id_ficha = $("#id_ficha").val();
//    
//    if (id_ficha !== "") {
//        var otrosCheckboxp6_4 = document.getElementById("p6_4_otros");
//        var otrosDescTextareap6_4 = document.getElementById("p6_4_otros_desc");
//        var p6_4_3_1_detalle =  document.getElementById("p6_4_3_1_detalle");
//
//        if (!otrosCheckboxp6_4.checked) {
//            otrosDescTextareap6_4.style.display = "none";
//            otrosDescTextareap6_4.value = "";
//            otrosDescTextareap6_4.disabled = false;
//        }
//        otrosCheckboxp6_4.addEventListener("change", function () {
//            if (this.checked) {
//                otrosDescTextareap6_4.style.display = "block";
//                otrosDescTextareap6_4.disabled = false;
//                p6_4_3_1_detalle.disabled = false;
//            } else {
//                otrosDescTextareap6_4.style.display = "none";
//                otrosDescTextareap6_4.value = "";
//                otrosDescTextareap6_4.disabled = false;
//            }
//        });
//    }
//}


function valida_p6_5_otros() {
    var id_ficha = $("#id_ficha").val();
    if (id_ficha !== "") {
        var otrosCheckboxp6_5 = document.getElementById("p6_5_otros");
        var otrosDescTextareap6_5 = document.getElementById("p6_5_otros_desc");

        if (!otrosCheckboxp6_5.checked) {
            otrosDescTextareap6_5.style.display = "none";
            otrosDescTextareap6_5.value = "";

        }
        otrosCheckboxp6_5.addEventListener("change", function () {
            if (this.checked) {
                otrosDescTextareap6_5.style.display = "block";
                otrosDescTextareap6_5.disabled = false;
            } else {
                otrosDescTextareap6_5.style.display = "none";
                otrosDescTextareap6_5.value = "";
            }
        });
    }
}

function valida_p6_4_otros() {
    var p6_4_3_1_otro = document.getElementById("p6_4_3_1_otro");
    var p6_4_3_1_detalle = document.getElementById("p6_4_3_1_detalle");
    var checkboxes = document.querySelectorAll(".check_p6_4_3_1");

    if (p6_4_3_1_otro.checked) {
        p6_4_3_1_detalle.disabled = false;
        p6_4_3_1_detalle.required = true;
    } else {
        p6_4_3_1_detalle.value = "";
        p6_4_3_1_detalle.disabled = true;
        p6_4_3_1_detalle.required = false;
    }

    var isAnyChecked = Array.from(checkboxes).some(function (checkbox) {
        return checkbox.checked;
    });

    checkboxes.forEach(function (checkbox) {
        checkbox.required = !isAnyChecked;
    });
}

//document.addEventListener("DOMContentLoaded", function () {
//    valida_p6_4_otros();
//});



function valida_p6_6_otros() {
    var p6_4_otros = document.getElementById("p6_4_otros");
    var p6_4_otros_desc = document.getElementById("p6_4_otros_desc");
    //  var checkboxes = document.querySelectorAll(".check_p6_4_3_1");

    if (p6_4_otros.checked) {
        console.log("SI valida_p6_6_otros");
        p6_4_otros_desc.disabled = false;
        p6_4_otros_desc.required = true;
    } else {
        console.log("SINO valida_p6_6_otros");
        p6_4_otros_desc.value = "";
        p6_4_otros_desc.disabled = true;
        p6_4_otros_desc.required = false;
    }


}




function valida_p6_5_e() {
    var id_ficha = $("#id_ficha").val();
    if (id_ficha !== "") {
        var otrosCheckboxp6_5_e = document.getElementById("p6_5_e");
        var otrosDescTextareap6_5_e = document.getElementById("p6_5_e_desc");

        if (!otrosCheckboxp6_5_e.checked) {
            otrosDescTextareap6_5_e.style.display = "none";
            otrosDescTextareap6_5_e.value = "";

        }
        otrosCheckboxp6_5_e.addEventListener("change", function () {
            if (this.checked) {
                otrosDescTextareap6_5_e.style.display = "block";
                otrosDescTextareap6_5_e.disabled = false;
            } else {
                otrosDescTextareap6_5_e.style.display = "none";
                otrosDescTextareap6_5_e.value = "";
            }
        });
    }
}
//document.addEventListener("DOMContentLoaded", function () {
//    valida_p6_5_e();
//});



function valida_p6_5_f() {

    var textareaE = document.getElementById('p6_5_e_desc');
    var textareaH = document.getElementById('p6_5_otros_desc');
    var p6_5_f = document.getElementById('p6_5_f');
    var p6_5_a = document.getElementById('p6_5_a');
    var p6_5_b = document.getElementById('p6_5_b');
    var p6_5_c = document.getElementById('p6_5_c');
    var p6_5_d = document.getElementById('p6_5_d');
    var p6_5_e = document.getElementById('p6_5_e');
    var p6_5_otros = document.getElementById('p6_5_otros');

    if (p6_5_f.checked) {

        p6_5_a.disabled = true;
        p6_5_a.checked = false;
        p6_5_b.disabled = true;
        p6_5_b.checked = false;
        p6_5_c.disabled = true;
        p6_5_c.checked = false;
        p6_5_d.disabled = true;
        p6_5_d.checked = false;
        p6_5_e.disabled = true;
        p6_5_e.checked = false;
        p6_5_otros.disabled = true;
        p6_5_otros.checked = false;

        textareaE.style.display = 'none';
        textareaE.value = '';
        textareaH.style.display = 'none';
        textareaH.value = '';
    } else {
        p6_5_a.disabled = false;
        p6_5_b.disabled = false;
        p6_5_c.disabled = false;
        p6_5_d.disabled = false;
        p6_5_e.disabled = false;
        p6_5_otros.disabled = false;
    }
}

//
//function calcularTotalActasy() {
//    var aChecked = document.getElementById('p6_4_5_a_x').checked;
//    var bChecked = document.getElementById('p6_4_5_b_x').checked;
//    var cChecked = document.getElementById('p6_4_5_c_x').checked;
//    var dChecked = document.getElementById('p6_4_5_d_x').checked;
//    var eChecked = document.getElementById('p6_4_5_e_x').checked;
//    var fChecked = document.getElementById('p6_4_5_f_x').checked;
//    var gChecked = document.getElementById('p6_4_5_g_x').checked;
//    var hChecked = document.getElementById('p6_4_5_h_x').checked;
//    var iChecked = document.getElementById('p6_4_5_otros_x').checked;
//
//    var a = aChecked ? parseFloat(document.getElementById('p6_4_5_a_cantidad_x').value) || 0 : 0;
//    var b = bChecked ? parseFloat(document.getElementById('p6_4_5_b_cantidad_x').value) || 0 : 0;
//    var c = cChecked ? parseFloat(document.getElementById('p6_4_5_c_cantidad_x').value) || 0 : 0;
//    var d = dChecked ? parseFloat(document.getElementById('p6_4_5_d_cantidad_x').value) || 0 : 0;
//    var e = eChecked ? parseFloat(document.getElementById('p6_4_5_e_cantidad_x').value) || 0 : 0;
//    var f = fChecked ? parseFloat(document.getElementById('p6_4_5_f_cantidad_x').value) || 0 : 0;
//    var g = gChecked ? parseFloat(document.getElementById('p6_4_5_g_cantidad_x').value) || 0 : 0;
//    var h = hChecked ? parseFloat(document.getElementById('p6_4_5_h_cantidad_x').value) || 0 : 0;
//    var i = iChecked ? parseFloat(document.getElementById('p6_4_5_otros_cantidad_x').value) || 0 : 0;
//
//    var totalActasy = a + b + c + d + e + f + g + h + i;
//    document.getElementById('p6_4_5_total_x').value = totalActasy;
//}



///////////////////SECCION 7////////////////////////

function valida_p7_1_a() {
    var checkbox = document.getElementById("p7_1_a");
    var input = document.getElementById("p7_1_a_cantidad");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        // Si no está marcado, deshabilita el campo de entrada y borra su valor
        input.disabled = true;
        input.value = "0";
    }
}


function valida_p7_1_b() {
    var checkbox = document.getElementById("p7_1_b");
    var input = document.getElementById("p7_1_b_cantidad");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = "0";
    }
}

function valida_p7_1_c() {
    var checkbox = document.getElementById("p7_1_c");
    var input = document.getElementById("p7_1_c_cantidad");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = "0";
    }
}


function valida_p7_1_d() {
    var checkbox = document.getElementById("p7_1_d");
    var input = document.getElementById("p7_1_d_cantidad");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = "0";
    }
}


function valida_p7_1_e() {
    var checkbox = document.getElementById("p7_1_e");
    var input = document.getElementById("p7_1_e_cantidad");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = "0";
    }
}


function valida_p7_1_f() {
    var checkbox = document.getElementById("p7_1_f");
    var input = document.getElementById("p7_1_f_cantidad");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = "0";
    }
}



function valida_p7_1_g() {
    var checkbox = document.getElementById("p7_1_g");
    var input = document.getElementById("p7_1_g_cantidad");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = "0";
    }
}


function valida_p7_1_h() {
    var checkbox = document.getElementById("p7_1_h");
    var input = document.getElementById("p7_1_h_cantidad");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = "0";
    }
}



function valida_p7_1_i() {
    var checkbox = document.getElementById("p7_1_i");
    var input = document.getElementById("p7_1_i_cantidad");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = "0";
    }
}

function valida_p7_1_j() {
    var checkbox = document.getElementById("p7_1_j");
    var input = document.getElementById("p7_1_j_cantidad");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = "0";
    }
}

function valida_p7_1_otros() {
    var checkbox = document.getElementById("p7_1_otros");
    var input = document.getElementById("p7_1_otros_cantidad");
    var p7_1_otros_descrip = document.getElementById("p7_1_otros_descrip");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
        p7_1_otros_descrip.disabled = false;
    } else {
        input.disabled = true;
        input.value = "0";
        p7_1_otros_descrip.disabled = true;
        p7_1_otros_descrip.value = ""; // Esto limpia el contenido del campo de descripción
    }
}
/////////

//
//function calcularTotalActasy() {
//    var id_ficha = $("#id_ficha").val();
//    if (id_ficha !== "") {
//        var checkboxes = ['p6_4_5_a_x', 'p6_4_5_b_x', 'p6_4_5_c_x',
//            'p6_4_5_d_x', 'p6_4_5_e_x', 'p6_4_5_f_x', 'p6_4_5_g_x',
//            'p6_4_5_h_x', 'p6_4_5_otros_x'];
//        var total = 0;
//        console.log("entro calcularTotalActasy");
//        checkboxes.forEach(function (checkboxId) {
//            console.log("entro recorrido");
//            var checkbox = document.getElementById(checkboxId);
//            var cantidadInput = document.getElementById(checkboxId.replace('_x', '_cantidad_x'));
//            var cantidad = parseFloat(cantidadInput.value) || 0;
//            if (checkbox.checked) {
//                console.log("entro al IF");
//                total += cantidad;
//            } else {
//                total -= cantidad;
//            }
//        });
//
////document.getElementById('p6_4_5_total_x').textContent = total;
//        document.getElementById('p6_4_5_total_x').value = total;
//        console.log("TOTAL " + total);
//    }
//}

// Agregar eventos change a los checkboxes para llamar a la función calcularTotalActasx() cada vez que cambien
//['p6_4_5_a_x', 'p6_4_5_b_x', 'p6_4_5_c_x', 'p6_4_5_d_x', 'p6_4_5_e_x',
//    'p6_4_5_f_x', 'p6_4_5_g_x', 'p6_4_5_h_x', 'p6_4_5_otros_x'].forEach(function (checkboxId) {
//    var id_ficha = $("#id_ficha").val();
//    if (id_ficha !== "") {
//        document.getElementById(checkboxId).addEventListener('change', calcularTotalActasy);
//    }
//});
function valida_p6_4_5_a_x() {
    var checkbox = document.getElementById("p6_4_5_a_x");
    var input = document.getElementById("p6_4_5_a_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}
function valida_p6_4_5_b_x() {
    var checkbox = document.getElementById("p6_4_5_b_x");
    var input = document.getElementById("p6_4_5_b_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}

function valida_p6_4_5_c_x() {
    var checkbox = document.getElementById("p6_4_5_c_x");
    var input = document.getElementById("p6_4_5_c_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}

function valida_p6_4_5_d_x() {
    var checkbox = document.getElementById("p6_4_5_d_x");
    var input = document.getElementById("p6_4_5_d_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}

function valida_p6_4_5_e_x() {
    var checkbox = document.getElementById("p6_4_5_e_x");
    var input = document.getElementById("p6_4_5_e_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}

function valida_p6_4_5_f_x() {
    var checkbox = document.getElementById("p6_4_5_f_x");
    var input = document.getElementById("p6_4_5_f_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}
function valida_p6_4_5_g_x() {
    var checkbox = document.getElementById("p6_4_5_g_x");
    var input = document.getElementById("p6_4_5_g_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}
function valida_p6_4_5_h_x() {
    var checkbox = document.getElementById("p6_4_5_h_x");
    var input = document.getElementById("p6_4_5_h_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}

function valida_p6_4_5_otros_x() {
    var checkbox = document.getElementById("p6_4_5_otros_x");
    var input = document.getElementById("p6_4_5_otros_cantidad_x");
    var p6_4_5_otros_descrip_x = document.getElementById("p6_4_5_otros_descrip_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
        p6_4_5_otros_descrip_x.disabled = false;
    } else {
        input.disabled = true;
        input.value = "0";
        p6_4_5_otros_descrip_x.disabled = true;
        p6_4_5_otros_descrip_x.value = ""; // Esto limpia el contenido del campo de descripción
    }
}

//
//
//function calcularTotalActas() {
//    var id_ficha = $("#id_ficha").val();
//    if (id_ficha !== "") {
//        var checkboxes = ['p7_2_alimentos', 'p7_2_tenencia', 'p7_2_visitas', 'p7_2_otros'];
//        var total = 0;
//
//        checkboxes.forEach(function (checkboxId) {
//            var checkbox = document.getElementById(checkboxId);
//            var cantidadInput = document.getElementById(checkboxId + '_cantidad');
//            var cantidad = parseFloat(cantidadInput.value) || 0;
//            if (checkbox.checked) {
//                total += cantidad;
//            } else {
//                total -= cantidad; // Restar el valor si el checkbox está desmarcado
//            }
//        });
//
//        document.getElementById('p7_2_total').textContent = total;
//    }
//}

// Agregar eventos change a los checkboxes para llamar a la función calcularTotalActas() cada vez que cambien
//['p7_2_alimentos', 'p7_2_tenencia', 'p7_2_visitas', 'p7_2_otros'].forEach(function (checkboxId) {
//    var id_ficha = $("#id_ficha").val();
//    if (id_ficha !== "") {
//        document.getElementById(checkboxId).addEventListener('change', calcularTotalActas);
//    }
//});


function valida_p7_2_alimentos() {
    var checkbox = document.getElementById("p7_2_alimentos");
    var input = document.getElementById("p7_2_alimentos_cantidad");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}

function valida_p7_2_tenencia() {
    var checkbox = document.getElementById("p7_2_tenencia");
    var input = document.getElementById("p7_2_tenencia_cantidad");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}


function valida_p7_2_visitas() {
    var checkbox = document.getElementById("p7_2_visitas");
    var input = document.getElementById("p7_2_visitas_cantidad");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}


function valida_p7_2_otros() {
    var checkbox = document.getElementById("p7_2_otros");
    var input = document.getElementById("p7_2_otros_cantidad");
    var p7_2_otros_descrip = document.getElementById("p7_2_otros_descrip");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
        p7_2_otros_descrip.disabled = false;
    } else {
        input.disabled = true;
        input.value = 0;
        p7_2_otros_descrip.disabled = true;
        p7_2_otros_descrip.value = ""; // Esto limpia el contenido del campo de descripción
    }
}



//
//
//function calcularTotalActasx() {
//     var id_ficha = $("#id_ficha").val();
//    if (id_ficha !== "") {
//    var checkboxes = ['p7_4_alimentos_x', 'p7_4_tenencia_x', 'p7_4_visitas_x', 'p7_4_otros_x'];
//    var total = 0;
//
//    checkboxes.forEach(function(checkboxId) {
//        var checkbox = document.getElementById(checkboxId);
//        var cantidadInput = document.getElementById(checkboxId.replace('_x', '_cantidad_x'));
//        var cantidad = parseFloat(cantidadInput.value) || 0;
//        if (checkbox.checked) {
//            total += cantidad;
//        } else {
//            total -= cantidad; // Restar el valor si el checkbox está desmarcado
//        }
//    });
//
//document.getElementById('p7_4_total_x').textContent = total;
//    }
//}
//
//// Agregar eventos change a los checkboxes para llamar a la función calcularTotalActasx() cada vez que cambien
//
//['p7_4_alimentos_x', 'p7_4_tenencia_x', 'p7_4_visitas_x', 'p7_4_otros_x'].forEach(function(checkboxId) {
//     var id_ficha = $("#id_ficha").val();
//    if (id_ficha !== "") {
//    document.getElementById(checkboxId).addEventListener('change', calcularTotalActasx);
//    }
//});


function valida_p7_4_alimentos_x() {
    var checkbox = document.getElementById("p7_4_alimentos_x");
    var input = document.getElementById("p7_4_alimentos_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}


function valida_p7_4_tenencia_x() {
    var checkbox = document.getElementById("p7_4_tenencia_x");
    var input = document.getElementById("p7_4_tenencia_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}


function valida_p7_4_visitas_x() {
    var checkbox = document.getElementById("p7_4_visitas_x");
    var input = document.getElementById("p7_4_visitas_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}

function valida_p7_4_otros_x() {
    var checkbox = document.getElementById("p7_4_otros_x");
    var input = document.getElementById("p7_4_otros_cantidad_x");
    var p7_4_otros_descrip_x = document.getElementById("p7_4_otros_descrip_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
        p7_4_otros_descrip_x.disabled = false;
    } else {
        input.disabled = true;
        input.value = "0";
        p7_4_otros_descrip_x.disabled = true;
        p7_4_otros_descrip_x.value = ""; // Esto limpia el contenido del campo de descripción
    }
}












//
//
//function calcularTotalActasyy() {
//    var aChecked = document.getElementById('p7_2_alimentos');
//    var bChecked = document.getElementById('p7_2_tenencia');
//    var cChecked = document.getElementById('p7_2_visitas');
//    var dChecked = document.getElementById('p7_2_otros');
//
//    var aCantidadInput = document.getElementById('p7_2_alimentos_cantidad');
//    var bCantidadInput = document.getElementById('p7_2_tenencia_cantidad');
//    var cCantidadInput = document.getElementById('p7_2_visitas_cantidad');
//    var dCantidadInput = document.getElementById('p7_2_otros_cantidad');
//    var p7_2_otros_descrip = document.getElementById('p7_2_otros_descrip');
//
//    var aCantidad = parseFloat(aCantidadInput.value.trim()) || 0;
//    var bCantidad = parseFloat(bCantidadInput.value.trim()) || 0;
//    var cCantidad = parseFloat(cCantidadInput.value.trim()) || 0;
//    var dCantidad = parseFloat(dCantidadInput.value.trim()) || 0;
//
//    var totalActasy = aCantidad + bCantidad + cCantidad + dCantidad;
//
//    document.getElementById('p7_2_total').value = totalActasy;
//
//    if (aCantidad > 0) {
//        aChecked.checked = true;
//    } else {
//        aChecked.checked = false;
//        aCantidadInput.value = '0';
//    }
//
//    if (bCantidad > 0) {
//        bChecked.checked = true;
//    } else {
//        bChecked.checked = false;
//        bCantidadInput.value = '0';
//    }
//
//    if (cCantidad > 0) {
//        cChecked.checked = true;
//    } else {
//        cChecked.checked = false;
//        cCantidadInput.value = '0';
//    }
//
//    if (dCantidad > 0) {
//        dChecked.checked = true;
//        p7_2_otros_descrip.disabled = false;
//    } else {
//        dChecked.checked = false;
//        dCantidadInput.value = '0';
//
//        p7_2_otros_descrip.disabled = true;
//        p7_2_otros_descrip.value = "";
//    }
//}


//function calcularTotalActas() {
//    var total = 0;
//    // Obtener todos los elementos input de tipo número dentro de la tabla
//    var inputs = document.querySelectorAll('.totalActas input[type="number"]');
//    
//    // Iterar sobre cada input
//    inputs.forEach(function(input) {
//        // Verificar si el input no está deshabilitado y su valor es numérico
//        if (!input.disabled && !isNaN(parseInt(input.value))) {
//            // Sumar el valor al total
//            total += parseInt(input.value);
//        }
//    });
//    
//    // Restar los valores de los inputs deshabilitados que tienen valor 0 o null
//    var inputsDeshabilitados = document.querySelectorAll('.table-bordered input[type="number"]:disabled');
//    inputsDeshabilitados.forEach(function(input) {
//        if (input.value === '0' || input.value === null) {
//            total -= parseInt(input.value);
//        }
//    });
//
//    // Colocar el total en el input correspondiente
//    document.getElementById('p7_2_total').value = total;
//}




function valida_p7_2_a_x() {
    var checkbox = document.getElementById("p7_2_a_x");
    var input = document.getElementById("p7_2_a_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}

function valida_p7_2_b_x() {
    var checkbox = document.getElementById("p7_2_b_x");
    var input = document.getElementById("p7_2_b_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}

function valida_p7_2_c_x() {
    var checkbox = document.getElementById("p7_2_c_x");
    var input = document.getElementById("p7_2_c_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}

function valida_p7_2_d_x() {
    var checkbox = document.getElementById("p7_2_d_x");
    var input = document.getElementById("p7_2_d_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}

function valida_p7_2_e_x() {
    var checkbox = document.getElementById("p7_2_e_x");
    var input = document.getElementById("p7_2_e_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}

function valida_p7_2_f_x() {
    var checkbox = document.getElementById("p7_2_f_x");
    var input = document.getElementById("p7_2_f_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}

function valida_p7_2_g_x() {
    var checkbox = document.getElementById("p7_2_g_x");
    var input = document.getElementById("p7_2_g_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}

function valida_p7_2_h_x() {
    var checkbox = document.getElementById("p7_2_h_x");
    var input = document.getElementById("p7_2_h_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}

function valida_p7_2_i_x() {
    var checkbox = document.getElementById("p7_2_i_x");
    var input = document.getElementById("p7_2_i_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}

function valida_p7_2_j_x() {
    var checkbox = document.getElementById("p7_2_j_x");
    var input = document.getElementById("p7_2_j_cantidad_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
    } else {
        input.disabled = true;
        input.value = 0;
    }
}

function valida_p7_2_otros_x() {
    var checkbox = document.getElementById("p7_2_otros_x");
    var input = document.getElementById("p7_2_otros_cantidad_x");
    var p7_2_otros_descrip_x = document.getElementById("p7_2_otros_descrip_x");

    if (checkbox.checked) {
        input.disabled = false;
        input.value = "";
        p7_2_otros_descrip_x.disabled = false;
    } else {
        input.disabled = true;
        input.value = "0";
        p7_2_otros_descrip_x.disabled = true;
        p7_2_otros_descrip_x.value = "";
    }
}

function p7_4() {
    var radioSi = document.getElementById('p7_4_si');

    if (radioSi.checked) {

        var radios = document.getElementById('row_p7_4_1').querySelectorAll('input[type="radio"]');
        radios.forEach(function (radio) {
            radio.disabled = false;
            radio.required = true;
        });

    } else {

        var radios = document.getElementById('row_p7_4_1').querySelectorAll('input[type="radio"]');
        radios.forEach(function (radio) {
            radio.disabled = true;
            radio.checked = false;
            radio.required = false;
        });


    }
}

function p8_1() {
    var radioSi = document.getElementById('p8_1_si');
    var p8_1_1_p2024 = document.getElementById('p8_1_1_p2024');
    var p8_1_1_p2024_no = document.getElementById('p8_1_1_p2024_no');
    var p8_1_1_p2023_no = document.getElementById('p8_1_1_p2023_no');
    var p8_1_1_p2023 = document.getElementById('p8_1_1_p2023');

    if (radioSi.checked) {
        p8_1_1_p2024_no.disabled = false;
        p8_1_1_p2023_no.disabled = false;
        p8_1_1_p2024.disabled = false;
        p8_1_1_p2023.disabled = false;
        p8_1_1_p2024.required = true;
        p8_1_1_p2023.required = true;
        var radios = document.getElementById('row_p8_1').querySelectorAll('input[type="radio"]');
        radios.forEach(function (radio) {
            radio.disabled = false;
            radio.required = true;
        });

    } else {
        p8_1_1_p2024.disabled = true;
        p8_1_1_p2024.required = false;
        p8_1_1_p2024.value = '';

        p8_1_1_p2023.disabled = true;
        p8_1_1_p2023.required = false;
        p8_1_1_p2023.value = '';

        p8_1_1_p2024_no.disabled = true;
        p8_1_1_p2024_no.checked = false;
        p8_1_1_p2024_no.required = false;

        p8_1_1_p2023_no.disabled = true;
        p8_1_1_p2023_no.checked = false;
        p8_1_1_p2023_no.required = false;

        var radios = document.getElementById('row_p8_1').querySelectorAll('input[type="radio"]');
        radios.forEach(function (radio) {
            radio.disabled = true;
            radio.checked = false;
            radio.required = false;
        });


    }
}



function valida_p8_1_1_p2024_no() {
    var p8_1_1_p2024_no = document.getElementById('p8_1_1_p2024_no');
    var p8_1_1_p2024 = document.getElementById('p8_1_1_p2024');

    if (p8_1_1_p2024_no.checked) {
        p8_1_1_p2024.disabled = true;
        p8_1_1_p2024.value = "";
    } else {
        p8_1_1_p2024.disabled = false;

    }
}


function valida_p8_1_1_p2023_no() {
    var p8_1_1_p2023_no = document.getElementById('p8_1_1_p2023_no');
    var p8_1_1_p2023 = document.getElementById('p8_1_1_p2023');

    if (p8_1_1_p2023_no.checked) {
        p8_1_1_p2023.disabled = true;
        p8_1_1_p2023.value = "";
    } else {
        p8_1_1_p2023.disabled = false;

    }

}




function p9_2() {
    var radioSi = document.getElementById('p9_2_si');


    var m1 = document.getElementById('p9_2_1_1');
    var m2 = document.getElementById('p9_2_1_2');
    var m3 = document.getElementById('p9_2_1_3');
    var m4 = document.getElementById('p9_2_1_4');


    if (radioSi.checked) {


        m1.disabled = false;
        m1.required = true;
        m2.disabled = false;
        m2.required = true;
        m3.disabled = false;
        m3.required = true;
        m4.disabled = false;
        m4.required = true;

    } else {


        m1.disabled = true;
        m1.required = false;
        m1.value = "";
        m2.disabled = true;
        m2.required = false;
        m2.value = "";
        m3.disabled = true;
        m3.required = false;
        m3.value = "";
        m4.disabled = true;
        m4.required = false;
        m4.value = "";

    }
}


function valida_p9_3_1() {

    var p9_3_1_otros = document.getElementById('p9_3_1_otros');
    var p9_3_1_otros_descrip = document.getElementById('p9_3_1_otros_descrip');

    if (p9_3_1_otros.checked) {
        p9_3_1_otros_descrip.disabled = false;
        p9_3_1_otros_descrip.required = true;
    } else {
        p9_3_1_otros_descrip.disabled = true;
        p9_3_1_otros_descrip.required = false;
        p9_3_1_otros_descrip.value = "";

    }

}




function valida_p9_3() {
    var radioSi = document.getElementById('p9_3_si');
    var p9_3_1_otros_descrip = document.getElementById('p9_3_1_otros_descrip');

    var p9_3_1_a = document.getElementById('p9_3_1_a');
    var p9_3_1_b = document.getElementById('p9_3_1_b');
    var p9_3_1_otros = document.getElementById('p9_3_1_otros');

    if (radioSi.checked) {


        p9_3_1_a.disabled = false;
        p9_3_1_a.required = false;

        p9_3_1_b.disabled = false;
        p9_3_1_b.required = false;

        p9_3_1_otros.disabled = false;
        p9_3_1_otros.required = false;


    } else {
        p9_3_1_otros_descrip.disabled = true;
        p9_3_1_otros_descrip.required = false;
        p9_3_1_otros_descrip.value = "";



        p9_3_1_a.disabled = true;
        p9_3_1_a.checked = false;
        p9_3_1_a.required = false;

        p9_3_1_b.disabled = true;
        p9_3_1_b.checked = false;
        p9_3_1_b.required = false;

        p9_3_1_otros.disabled = true;
        p9_3_1_otros.checked = false;
        p9_3_1_otros.required = false;

    }
}



function valida_p9_4() {
    var radioProvincial = document.getElementById("p9_4_si");
    var p9_4_1_si = document.getElementById("p9_4_1_si");
    var p9_4_1_no = document.getElementById("p9_4_1_no");
    var p9_4_2_si = document.getElementById("p9_4_2_si");
    var p9_4_2_no = document.getElementById("p9_4_2_no");
    var p9_4_3_si = document.getElementById("p9_4_3_si");
    var p9_4_3_no = document.getElementById("p9_4_3_no");

    console.log("entro aqui");
    if (radioProvincial.checked) {
        console.log("marco si");

        p9_4_1_si.disabled = false;
        p9_4_1_no.disabled = false;
        p9_4_2_si.disabled = false;
        p9_4_2_no.disabled = false;
        p9_4_3_si.disabled = false;
        p9_4_3_no.disabled = false;

    } else {
        p9_4_1_si.disabled = true;
        p9_4_1_no.disabled = true;
        p9_4_2_si.disabled = true;
        p9_4_2_no.disabled = true;
        p9_4_3_si.disabled = true;
        p9_4_3_no.disabled = true;

        p9_4_1_si.checked = false;
        p9_4_1_no.checked = false;
        p9_4_2_si.checked = false;
        p9_4_2_no.checked = false;
        p9_4_3_si.checked = false;
        p9_4_3_no.checked = false;

    }
}


function valida_p9_5_1_otros() {

    var p9_5_1_otros = document.getElementById("p9_5_1_otros");
    var p9_5_1_otros_descrip = document.getElementById("p9_5_1_otros_descrip");

    if (p9_5_1_otros.checked) {
        p9_5_1_otros_descrip.disabled = false;

    } else {
        p9_5_1_otros_descrip.disabled = true;
        p9_5_1_otros_descrip.value = '';
    }

}


function valida_p9_5_si() {
    var radioSi = document.getElementById("p9_5_si");
    var checkboxes = document.querySelectorAll(".check_p9_5");

    if (radioSi.checked) {
        checkboxes.forEach(function (checkbox) {
            checkbox.disabled = false;
        });
    } else {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
            checkbox.disabled = true;

        });
        p9_5_1_otros_descrip.disabled = true;
        p9_5_1_otros_descrip.value = '';
    }
}


function valida_p9_6_1() {
    var radioSi = document.getElementById("p9_6_1_si");

    var p9_6_2_orde_resolucion = document.getElementById("p9_6_2_orde_resolucion");
    var p9_6_2_fecha = document.getElementById("d_p9_6_2_fecha");

    const noAdjuntarDiv = document.querySelector(".no_adjuntar_962");
    const inputFile = document.getElementById("s962_arch");
    var p9_6_1 = radioSi ? radioSi.checked : null;

    if (p9_6_1 === true) {
        noAdjuntarDiv.style.display = "block";
        p9_6_2_fecha.disabled = false;
        p9_6_2_orde_resolucion.disabled = false;
    } else {
        noAdjuntarDiv.style.display = "none";
        p9_6_2_fecha.disabled = true;
        p9_6_2_orde_resolucion.disabled = true;
        p9_6_2_orde_resolucion.value = '';
        p9_6_2_fecha.value = '';

    }
}

function valida_p9_6() {
    var radioSi = document.getElementById("p9_6_si");
    var p9_6_1_si = document.getElementById("p9_6_1_si");
    var p9_6_1_no = document.getElementById("p9_6_1_no");
    const noAdjuntarDiv = document.querySelector(".no_adjuntar_962");
    var p9_6_2_orde_resolucion = document.getElementById("p9_6_2_orde_resolucion");
    var p9_6_2_fecha = document.getElementById("d_p9_6_2_fecha");

    var p9_7_si = document.getElementById("p9_7_si");
    var p9_7_no = document.getElementById("p9_7_no");
    var p9_7_1 = document.getElementById("p9_7_1");

    if (radioSi.checked) {
 
        p9_6_1_si.disabled = false;

        p9_6_1_no.disabled = false;

        p9_7_si.disabled = false;

        p9_7_no.disabled = false;

        p9_7_1.disabled = true;

    } else {
        noAdjuntarDiv.style.display = "none";
        p9_6_1_si.disabled = true;
        p9_6_1_si.checked = false;

        p9_6_1_no.disabled = true;
        p9_6_1_no.checked = false;

        p9_6_2_fecha.disabled = true;
        p9_6_2_orde_resolucion.disabled = true;
        p9_6_2_orde_resolucion.value = '';
        p9_6_2_fecha.value = '';

        p9_7_si.disabled = true;
        p9_7_si.checked = false;

        p9_7_no.disabled = true;
        p9_7_no.checked = false;

        p9_7_1.disabled = true;
        p9_7_1.value = '';
    }

}

function valida_p9_7() {
    var radioSi = document.getElementById("p9_7_si");
    var text_p9_7_1 = document.getElementById("p9_7_1");


    if (radioSi.checked) {

        text_p9_7_1.disabled = false;
        text_p9_7_1.required = true;


    } else {

        text_p9_7_1.disabled = true;
        text_p9_7_1.required = false;
        text_p9_7_1.value = '';


    }

}




function valida_p2_1() {
    var siRadio = document.getElementById("p2_1_si");
    var p2_1_2_ordenanza = document.getElementById("p2_1_2_ordenanza");
    var p2_1_2_fecha_emi = document.getElementById("d_p2_1_2_fecha_emi");
    var p2_1_2_fecha_public = document.getElementById("d_p2_1_2_fecha_public");
    const noAdjuntarDiv = document.querySelector(".no_adjuntar_212");
    const inputFile = document.getElementById("s212_arch");

    var p2_1 = siRadio ? siRadio.checked : null;
    if (p2_1 === true) {
        noAdjuntarDiv.style.display = "block";
        p2_1_2_ordenanza.disabled = false;
        p2_1_2_fecha_emi.disabled = false;
        p2_1_2_fecha_public.disabled = false;
        p2_1_2_ordenanza.required = true;
        p2_1_2_fecha_emi.required = true;
    } else {
        noAdjuntarDiv.style.display = "none";
        p2_1_2_ordenanza.disabled = true;
        p2_1_2_ordenanza.value = '';

        p2_1_2_fecha_emi.required = false;
        p2_1_2_fecha_emi.disabled = true;
        p2_1_2_fecha_public.value = '';

        p2_1_2_fecha_public.disabled = true;
        p2_1_2_fecha_emi.value = '';

        p2_1_2_ordenanza.required = false;
    }

}


function valida_p9_8() {
    var radioSi = document.getElementById("p9_8_si");

    var textarea9_8 = document.getElementById("p9_8_1");


    if (radioSi.checked) {

        textarea9_8.disabled = false;
        textarea9_8.required = true;
    } else {

        textarea9_8.disabled = true;
        textarea9_8.required = false;
        textarea9_8.value = '';


    }
}




function p9_9() {
    var radioSi = document.getElementById('p9_9_si');


    var m1 = document.getElementById('p9_9_1_1');
    var m2 = document.getElementById('p9_9_1_2');
    var m3 = document.getElementById('p9_9_1_3');
    var m4 = document.getElementById('p9_9_1_4');


    if (radioSi.checked) {


        m1.disabled = false;
        m1.required = true;
        m2.disabled = false;
        m2.required = true;
        m3.disabled = false;
        m3.required = true;
        m4.disabled = false;
        m4.required = true;

    } else {


        m1.disabled = true;
        m1.required = false;
        m1.value = "";
        m2.disabled = true;
        m2.required = false;
        m2.value = "";
        m3.disabled = true;
        m3.required = false;
        m3.value = "";
        m4.disabled = true;
        m4.required = false;
        m4.value = "";

    }
}

function p10_1() {
    var p10_1_si = document.getElementById("p10_1_si");
    var p10_1_1_si = document.getElementById("p10_1_1_si");
    var p10_1_no = document.getElementById("p10_1_no");
    var p10_1_1_no = document.getElementById("p10_1_1_no");
    var tbodyElements = document.querySelectorAll('#row_10_1_2 tbody input, #row_10_1_2 tbody textarea, #row_10_1_2 tbody select');
    var textareaElement = document.querySelector('#row_10_1_2 tbody textarea');
    var textareaElement = document.querySelector('#row_10_1_2 tbody textarea');
    var p10_1_2_h = document.getElementById('p10_1_2_h');
    var p10_1_2_m = document.getElementById('p10_1_2_m');
    var p10_1_2_nna = document.getElementById('p10_1_2_nna');
    var p10_1_2_edad_otro = document.getElementById('p10_1_2_edad_otro');
    var p10_2_ordenanza_x = document.getElementById('p10_2_ordenanza_x');
    //var p10_2_ordenanza_x_no = document.getElementById('p10_2_ordenanza_x_no');
    var p10_2_resolucion_x = document.getElementById('p10_2_resolucion_x');
    //var p10_2_resolucion_x_no = document.getElementById('p10_2_resolucion_x_no');
    if (p10_1_si.checked) {
        p10_1_1_si.disabled = false;
        p10_1_1_no.disabled = false;

        p10_2_ordenanza_x.disabled = false;
       // p10_2_ordenanza_x_no.disabled = false;
        p10_2_resolucion_x.disabled = false;
       // p10_2_resolucion_x_no.disabled = false;

    } else if (p10_1_no.checked) {
        p10_1_1_si.disabled = true;
        p10_1_1_no.disabled = true;
        p10_1_1_si.checked = false;
        p10_1_1_no.checked = false;

        p10_1_2_edad_otro.checked = false;

        p10_2_ordenanza_x.disabled = true;
      //  p10_2_ordenanza_x_no.disabled = true;
        p10_2_resolucion_x.disabled = true;
      //  p10_2_resolucion_x_no.disabled = true;

        p10_2_ordenanza_x.checked = false;
      //  p10_2_ordenanza_x_no.checked = false;
        p10_2_resolucion_x.checked = false;
      //  p10_2_resolucion_x_no.checked = false;

        tbodyElements.forEach(function (element) {
            element.disabled = true;
            p10_1_2_h.value = '';
            p10_1_2_m.value = '';
            textareaElement.value = '';
            p10_1_2_nna.value = '';
        });
    }
}


function p10_1_3() {
    var p10_1_3_si = document.getElementById("p10_1_3_si");
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var p6_1_2_1_otros_desc = document.getElementById('p6_1_2_1_otros_desc');
    //var p10_2_si = document.getElementById('p10_2_si');
    var p10_2_no = document.getElementById('p10_2_no');
    var p10_1_3_2 = document.getElementById('p10_1_3_2');
    var p10_1_3_1_a_cantidad = document.getElementById('p10_1_3_1_a_cantidad');
    var p10_1_3_1_b_cantidad = document.getElementById('p10_1_3_1_b_cantidad');
    var p10_1_3_1_c_cantidad = document.getElementById('p10_1_3_1_c_cantidad');
    var p10_1_3_1_d_cantidad = document.getElementById('p10_1_3_1_d_cantidad');
    var p10_1_3_1_e_cantidad = document.getElementById('p10_1_3_1_e_cantidad');

    var p10_1_3_1_a = document.getElementById('p10_1_3_1_a');
    var p10_1_3_1_b = document.getElementById('p10_1_3_1_b');
    var p10_1_3_1_c = document.getElementById('p10_1_3_1_c');
    var p10_1_3_1_d = document.getElementById('p10_1_3_1_d');
    var p10_1_3_1_e = document.getElementById('p10_1_3_1_e');

    if (p10_1_3_si.checked) {

        p10_1_3_2.disabled = false;
        //  p10_2_si.disabled = false;
        // p10_2_no.disabled = false;
        p6_1_2_1_otros_desc.disabled = false;

        checkboxes.forEach(function (checkbox) {
            checkbox.disabled = false;
        });
//        
//        numberInputs.forEach(function(input) {
//            input.disabled = true;
//            input.value = "0"; // Reinicia todos los inputs type number a 0
//        });

        p10_1_3_1_a.disabled = false;
        p10_1_3_1_b.disabled = false;
        p10_1_3_1_c.disabled = false;
        p10_1_3_1_d.disabled = false;
        p10_1_3_1_e.disabled = false;
    } else {

        p10_1_3_1_a.disabled = true;
        p10_1_3_1_b.disabled = true;
        p10_1_3_1_c.disabled = true;
        p10_1_3_1_d.disabled = true;
        p10_1_3_1_e.disabled = true;

        p10_1_3_1_a.checked = false;
        p10_1_3_1_b.checked = false;
        p10_1_3_1_c.checked = false;
        p10_1_3_1_d.checked = false;
        p10_1_3_1_e.checked = false;

        p10_1_3_1_a_cantidad.disabled = true;
        p10_1_3_1_b_cantidad.disabled = true;
        p10_1_3_1_c_cantidad.disabled = true;
        p10_1_3_1_d_cantidad.disabled = true;
        p10_1_3_1_e_cantidad.disabled = true;

        p10_1_3_1_a_cantidad.value = '';
        p10_1_3_1_b_cantidad.value = '';
        p10_1_3_1_c_cantidad.value = '';
        p10_1_3_1_d_cantidad.value = '';
        p10_1_3_1_e_cantidad.value = '';

        p10_1_3_2.disabled = true;
        p10_1_3_2.value = '';

        p6_1_2_1_otros_desc.disabled = true;
        p6_1_2_1_otros_desc.value = '';

        //  p10_2_si.disabled = true;
        //  p10_2_no.disabled = true;

        //   p10_2_si.checked = false;
        //  p10_2_no.checked = false;
        checkboxes.forEach(function (checkbox) {
            checkbox.disabled = true;
            checkbox.checked = false; // Deselecciona todos los checkboxes
        });
//        
//        numberInputs.forEach(function(input) {
//            input.disabled = true;
//            input.value = "0"; // Reinicia todos los inputs type number a 0
//        });
    }
}




function valida_p10_1_3_1_a() {
    var p10_1_3_1_a = document.getElementById("p10_1_3_1_a");
    var p10_1_3_1_a_cantidad = document.getElementById("p10_1_3_1_a_cantidad");

    if (p10_1_3_1_a.checked) {
        console.log("marcó");
        p10_1_3_1_a_cantidad.disabled = false;
        p10_1_3_1_a_cantidad.required = true;
    } else {

        p10_1_3_1_a_cantidad.disabled = true;
        p10_1_3_1_a_cantidad.value = '';
        p10_1_3_1_a_cantidad.required = false;
    }
}


function valida_p10_1_3_1_b() {
    var p10_1_3_1_b = document.getElementById("p10_1_3_1_b");
    var p10_1_3_1_b_cantidad = document.getElementById("p10_1_3_1_b_cantidad");

    if (p10_1_3_1_b.checked) {

        p10_1_3_1_b_cantidad.disabled = false;
        p10_1_3_1_b_cantidad.required = true;
    } else {

        p10_1_3_1_b_cantidad.disabled = true;
        p10_1_3_1_b_cantidad.value = '';
        p10_1_3_1_b_cantidad.required = false;
    }
}

function valida_p10_1_3_1_c() {
    var p10_1_3_1_c = document.getElementById("p10_1_3_1_c");
    var p10_1_3_1_c_cantidad = document.getElementById("p10_1_3_1_c_cantidad");

    if (p10_1_3_1_c.checked) {

        p10_1_3_1_c_cantidad.disabled = false;
        p10_1_3_1_c_cantidad.required = true;
    } else {

        p10_1_3_1_c_cantidad.disabled = true;
        p10_1_3_1_c_cantidad.value = '';
        p10_1_3_1_c_cantidad.required = false;
    }
}

function valida_p10_1_3_1_d() {
    var p10_1_3_1_d = document.getElementById("p10_1_3_1_d");
    var p10_1_3_1_d_cantidad = document.getElementById("p10_1_3_1_d_cantidad");

    if (p10_1_3_1_d.checked) {

        p10_1_3_1_d_cantidad.disabled = false;
        p10_1_3_1_d_cantidad.required = true;
    } else {

        p10_1_3_1_d_cantidad.disabled = true;
        p10_1_3_1_d_cantidad.value = '';
        p10_1_3_1_d_cantidad.required = false;
    }
}

function valida_p10_1_3_1_e() {
    var p10_1_3_1_e = document.getElementById("p10_1_3_1_e");
    var p10_1_3_1_e_cantidad = document.getElementById("p10_1_3_1_e_cantidad");

    if (p10_1_3_1_e.checked) {

        p10_1_3_1_e_cantidad.disabled = false;
        p10_1_3_1_e_cantidad.required = true;
    } else {

        p10_1_3_1_e_cantidad.disabled = true;
        p10_1_3_1_e_cantidad.value = '';
        p10_1_3_1_e_cantidad.required = false;
    }
}





function valida_p10_1_1() {
    var radioSi = document.getElementById('p10_1_1_si');
    var tbodyElements = document.querySelectorAll('#row_10_1_2 tbody input, #row_10_1_2 tbody textarea, #row_10_1_2 tbody select');
    var textareaElement = document.getElementById('p10_1_2_edad_otro_desc');
    var p10_1_2_h = document.getElementById('p10_1_2_h');
    var p10_1_2_m = document.getElementById('p10_1_2_m');
    var p10_1_2_lgtbi = document.getElementById('p10_1_2_lgtbi');
    var p10_1_2_nna = document.getElementById('p10_1_2_nna');
    var p10_1_2_edad_otro = document.getElementById('p10_1_2_edad_otro');

    if (radioSi.checked) {


        tbodyElements.forEach(function (element) {
            element.disabled = false;
            textareaElement.disabled = true;
        });

        var radios = document.getElementById('row_p10_2').querySelectorAll('input[type="radio"]');
        radios.forEach(function (radio) {
            radio.disabled = false;
            radio.required = true;
        });


    } else {

        p10_1_2_edad_otro.checked = false;
        p10_1_2_nna.value = '';
        tbodyElements.forEach(function (element) {
            element.disabled = true;
            p10_1_2_h.value = '';
            p10_1_2_m.value = '';
            textareaElement.value = '';
        });
        p10_1_2_lgtbi.value = "";
        var radios = document.getElementById('row_p10_2').querySelectorAll('input[type="radio"]');
        radios.forEach(function (radio) {
            radio.disabled = true;
            radio.required = false;
            radio.checked = false;
        });
    }
}


function sumarNNA() {


    var mujeres = parseFloat(document.getElementById('p10_1_2_m').value) || 0;
    var hombres = parseFloat(document.getElementById('p10_1_2_h').value) || 0;
    var p10_1_2_lgtbi = parseFloat(document.getElementById('p10_1_2_lgtbi').value) || 0;
    console.log("suma");
    var total = mujeres + hombres + p10_1_2_lgtbi;

    document.getElementById('p10_1_2_nna').value = total;
}


function sumar_env_NNA() {


    var mujeres = parseFloat(document.getElementById('p10_1_4_env_mujeres').value) || 0;
    var hombres = parseFloat(document.getElementById('p10_1_4_env_hombres').value) || 0;
    var lg = parseFloat(document.getElementById('p10_1_4_env_lgtbi').value) || 0;

    console.log("suma");
    var total = mujeres + hombres + lg;

    document.getElementById('p10_1_4_env_nna').value = total;
}


function sumar_vene_NNA() {


    var mujeres = parseFloat(document.getElementById('p10_1_4_vene_mujeres').value) || 0;
    var hombres = parseFloat(document.getElementById('p10_1_4_vene_hombres').value) || 0;
    var lg = parseFloat(document.getElementById('p10_1_4_vene_lgtbi').value) || 0;
    console.log("suma");
    var total = mujeres + hombres + lg;

    document.getElementById('p10_1_4_vene_nna').value = total;
}




function valida_otro() {
    var radioValue = document.getElementById('p10_1_2_edad_otro');

    var textArea = document.getElementById('p10_1_2_edad_otro_desc');


    if (radioValue.checked) {
        textArea.disabled = false;
    } else {
        textArea.disabled = true;
        textArea.value = '';
    }
}

//
//function valida_p6_1_3_otros() {
//    var radioValue = document.getElementById('p6_1_3_otros');
//
//    var textArea = document.getElementById('p6_1_3_otros_desc');
//
//
//    if (radioValue.checked) {
//        textArea.disabled = false;
//    } else {
//        textArea.disabled = true;
//        textArea.value = '';
//    }
//}
//
//function valida_p6_1_4_otros() {
//    var radioValue = document.getElementById('p6_1_4_otros');
//
//    var textArea = document.getElementById('p6_1_4_otros_desc');
//
//
//    if (radioValue.checked) {
//        textArea.disabled = false;
//    } else {
//        textArea.disabled = true;
//        textArea.value = '';
//    }
//}
//function valida_p6_1_5_otros() {
//    var radioValue = document.getElementById('p6_1_5_otros');
//
//    var textArea = document.getElementById('p6_1_5_otros_desc');
//
//
//    if (radioValue.checked) {
//        textArea.disabled = false;
//    } else {
//        textArea.disabled = true;
//        textArea.value = '';
//    }
//}

//////////////SECCION 11/////////
function valida_p11_2_otro() {
    $("#p11_2_otro").on("change", function ()
    {
        if (document.getElementById("p11_2_otro").checked)
        {
            document.getElementById("p11_2_otro_desc").required = true;
            $('#p11_2_otro_desc').prop("disabled", false);
            $('#p11_2_otro_desc').focus();
        } else {
            document.getElementById("p11_2_otro_desc").required = false;
            document.getElementById("p11_2_otro_desc").value = null;
            $('#p11_2_otro_desc').prop("disabled", true);
        }
    });
}


function valida_p11_1() {
    var p11_1_si = document.getElementById("p11_1_si");
    var p11_1_1_1 = document.getElementById("p11_1_1_1");
    var p11_1_1_2 = document.getElementById("p11_1_1_2");
    var p11_1_1_3 = document.getElementById("p11_1_1_3");

    if (p11_1_si.checked) {
        p11_1_1_1.disabled = false;
        p11_1_1_2.disabled = false;
        p11_1_1_3.disabled = false;
    } else {
        p11_1_1_1.disabled = true;
        p11_1_1_1.value = '';

        p11_1_1_2.disabled = true;
        p11_1_1_2.value = '';

        p11_1_1_3.disabled = true;
        p11_1_1_3.value = '';
    }

}

function valida_p11_2() {
    var p11_2_si = document.getElementById("p11_2_si");
    var p11_2_1_mimp = document.getElementById("p11_2_1_mimp");
    var p11_2_1_indeci = document.getElementById("p11_2_1_indeci");
    var p11_2_1_go_regional = document.getElementById("p11_2_1_go_regional");
    var p11_2_1_muni_provincial = document.getElementById("p11_2_1_muni_provincial");
    var p11_2_otro = document.getElementById("p11_2_otro");
    var p11_2_otro_desc = document.getElementById("p11_2_otro_desc");
    if (p11_2_si.checked) {
        p11_2_1_mimp.disabled = false;
        p11_2_1_indeci.disabled = false;
        p11_2_1_go_regional.disabled = false;
        p11_2_1_muni_provincial.disabled = false;
        p11_2_otro.disabled = false;
    } else {
        p11_2_1_mimp.disabled = true;
        p11_2_1_mimp.checked = false;

        p11_2_1_indeci.disabled = true;
        p11_2_1_indeci.checked = false;

        p11_2_1_go_regional.disabled = true;
        p11_2_1_go_regional.checked = false;

        p11_2_1_muni_provincial.disabled = true;
        p11_2_1_muni_provincial.checked = false;

        p11_2_otro.disabled = true;
        p11_2_otro.checked = false;

        p11_2_otro_desc.disabled = true;
        p11_2_otro_desc.value = '';
    }

}

function valida_p11_6() {
    var p11_6_si = document.getElementById("p11_6_si");
    var p11_7_1 = document.getElementById("p11_7_1");
    var p11_7_2 = document.getElementById("p11_7_2");
    var p11_7_3 = document.getElementById("p11_7_3");

    if (p11_6_si.checked) {
        p11_7_1.disabled = false;
        p11_7_2.disabled = false;
        p11_7_3.disabled = false;
    } else {
        p11_7_1.disabled = true;
        p11_7_1.value = '';

        p11_7_2.disabled = true;
        p11_7_2.value = '';

        p11_7_3.disabled = true;
        p11_7_3.value = '';
    }


}

///////////////SUBIR ARCHIVOS//////////////////////////////////////////////////////////
function habilitar_btn_adjuntar_archivo(id) {
    $("#btn_file_" + id).prop("disabled", false);
    $("#btn_file_" + id).text('');
    $("#btn_file_" + id).wrapInner('<i class="fa-solid fa-file-circle-plus" aria-hidden="true"></i> Adjuntar archivo');
}


function adjuntar_archivo(elem) {
    var id_ficha = $("#id_ficha").val();
    console.log("Entró a funcion adjuntar_archivo:" + id_ficha);
    if (id_ficha > 0) {
        var btn_adjuntar_archivo = elem.id;
        $("#" + btn_adjuntar_archivo.substring(9)).trigger('click');

        console.log("btn_adjuntar_archivo:" + btn_adjuntar_archivo);
    } else {
        alert("Por favor, Dar Guardado Parcial previamente antes de Adjuntar documento");
        //return; // Evita que continúe si no hay selección
    }


}


function guardar_archivo(elem) {

    var id_input_file = elem.id;
    var id_ficha = $("#id_ficha").val() || 0;
    var cod_unico = $("#cod_unico").val() || 0;
    console.log("Entró a funcion guardar_archivo : id_ficha" + id_ficha);
     console.log("Entró cod_unico" + cod_unico);
    var id_archivo = $("#" + id_input_file + "_id_archivo").val();
    
    $("#btn_file_" + id_input_file).prop("disabled", true);
    $("#btn_file_" + id_input_file).text('');
    $("#btn_file_" + id_input_file).wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    //Inicio validar si tiene archivo adjunto
    var formData = new FormData();
    var size_total = 0;

    if ($("#" + id_input_file).get(0).files.length > 0) {

        for (var i = 0; i < $("#" + id_input_file).get(0).files.length; ++i) {

            var file1 = $("#" + id_input_file).get(0).files[i].name;

            if (file1) {

                var file_size = $("#" + id_input_file).get(0).files[i].size;

                size_total = size_total + file_size;

                if (file_size < 31457280) {
//10485760
//                    if (size_total < 10485760) {

                    var ext = file1.split('.').pop().toLowerCase();

                    if ($.inArray(ext, ['png', 'jpg', 'csv', 'xls', 'xlsx', 'pdf']) === -1) {
                        alert("El archivo " + file1 + " no es valido. Solo los archivos('png','jpg','xls', 'xlsx', 'pdf') son permitidos.");
                        habilitar_btn_adjuntar_archivo(id_input_file);
                        return false;
                    }

//                    } else {
//                        alert("El total de archivos seleccionados(" + Math.round((size_total / 1048576) * 100) / 100 + " MB) superan los 10MB permitidos.");
//                        habilitar_btn_adjuntar_archivo(id_input_file);
//                        return false;
//                    }

                } else {
                    alert("El archivo " + file1 + "(" + Math.round((file_size / 1048576) * 100) / 100 + " MB) supera los 30MB permitidos.");
                    habilitar_btn_adjuntar_archivo(id_input_file);
                    return false;
                }

            } else {
                alert("Seleccionar archivos..");
                habilitar_btn_adjuntar_archivo(id_input_file);
                return false;
            }

            formData.append("archivo_adjunto", $("#" + id_input_file)[0].files[i]);
        }

    } else {
        habilitar_btn_adjuntar_archivo(id_input_file);
        return false;
    }

    //Fin validar si tiene archivo adjunto

    formData.append("id_input_file", id_input_file);
    formData.append("id_ficha", id_ficha);
    formData.append("id_archivo", id_archivo);
    formData.append("cod_unico", cod_unico);
    // formData.append("id_pregunta", $("#id_pregunta").val());
    console.log("id_input_file: " + id_input_file);
    console.log("id_ficha: " + id_ficha);
    console.log("id_archivo: " + id_archivo);
     console.log("cod_unico: " + cod_unico);
    $.ajax({
        url: urlx + "/ajaxGuardarArchivoAdjunto",
        data: formData,
        type: "POST",
        enctype: 'multipart/form-data',
        contentType: false,
        cache: false,
        processData: false,
        success: function (data, textStatus, jqXHR) {
            console.log("xxx: " + "#table_ficha_" + id_input_file);
            $("#table_ficha_" + id_input_file).html(data);
            //           $("#table_ficha_s2_archivo").html(data);

            $("#btn_file_" + id_input_file).prop("disabled", false);
            $("#btn_file_" + id_input_file).text('');
            $("#btn_file_" + id_input_file).wrapInner('<i class="fa-solid fa-file-circle-plus" aria-hidden="true"></i> Adjuntar archivo');
            $("#"+id_input_file).val("");
            console.log("id_input_file: " + id_input_file);

        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }
        }
    });


}

function eliminar_archivo_sec2(id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec2",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s2_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
        },
        error: function (jqXHR, textStatus, errorThrown) {


            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }
        }
    });
}


function eliminar_archivo_sec3_2(id_archivo, id_ficha, cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec3",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s3_2_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
        },
        error: function (jqXHR, textStatus, errorThrown) {


            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }
        }
    });
}


function eliminar_archivo_sec114(id_archivo, id_ficha, cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec114",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico : cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s114_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
        },
        error: function (jqXHR, textStatus, errorThrown) {


            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }
        }
    });
}

function eliminar_archivo_sec3_3(id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec3_3",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico : cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s3_3_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }
        }
    });
}


function eliminar_archivo_sec3_4(id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec3_4",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
             cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s3_4_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }
        }
    });
}

function eliminar_archivo_sec341(id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec341",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
             cod_unico: cod_unico
            
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s341_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }
        }
    });
}


function eliminar_archivo_sec471(id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec471",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
             cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s471_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }
        }
    });
}


function eliminar_archivo_sec212(id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec212",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
             cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s212_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }
        }
    });
}



function eliminar_archivo_sec251(id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec251",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
             cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s251_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }
        }
    });
}


function eliminar_archivo_sec1_7(id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec1_7",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s1_7_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
        },
        error: function (jqXHR, textStatus, errorThrown) {


            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }
        }
    });
}


function eliminar_archivo_sec6312(id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec6312",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s6312_arch").html(data);

        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }
        }
    });
}

function eliminar_archivo_sec962(id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec962",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s962_arch").html(data);

        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }
        }
    });
}

function eliminar_archivo_sec6313(id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec6313",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s6313_arch").html(data);

        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }
        }
    });
}

//function validar_parcial(elem) {
//
//    var name_btn = elem.id;
//
//
//    var sec_x = name_btn.substring(12, 18);
//
//    var id_ficha = $("#id_ficha").val();
//    var id_sec_x;
//
//    if (sec_x === "sec_1") {
//        id_sec_x = id_ficha;
//    } else {
//        id_sec_x = $("#id_" + sec_x).val();
//    }
//
//    console.log("id_ficha: " + id_ficha);
//    console.log("id_sec_x: " + id_sec_x);
//    console.log("sec_x: " + sec_x);
//
//    $.ajax({
//        url: urlx + "/validarParcial",
//        type: 'POST',
//        data: {
//            id_ficha: id_ficha,
//            id_sec_x: id_sec_x,
//            sec_x: sec_x
//        },
//        success: function (data, textStatus, jqXHR) {
//
//            validarFicha(id_ficha);
//            console.log("ffff: " + data.resultado);
//            console.log("#div_" + sec_x + "_alert_validado");
////$("#div_" + sec_x + "_alert_validado").show();
//            $("#div_" + sec_x + "_alert_validado").html(data);
//        },
//        error: function (jqXHR, textStatus, errorThrown) {
//
//
//            if (jqXHR.status == 401) {
//                alert("Su sesi\u00F3n ha finalizado");
//            } else {
//                alert('Error al validar parcialmente la entidad');
//            }
//        }
//    });
//
//}

function validar_parcial(elem) {
    var name_btn = elem.id;
    var sec_x = name_btn.substring(12, 18);
    var id_ficha = $("#id_ficha").val();
    var id_sec_x;

    if (!id_ficha) {
        
        Swal.fire({
                    text: 'Por favor, primero Guarde para Validar Ficha.'
                });
        return;
    }

    if (sec_x === "sec_1") {
        id_sec_x = id_ficha;
    } else {
        id_sec_x = $("#id_" + sec_x).val();
    }

    console.log("id_ficha: " + id_ficha);
    console.log("id_sec_x: " + id_sec_x);
    console.log("sec_x: " + sec_x);

    $.ajax({
        url: urlx + "/validarParcial",
        type: 'POST',
        data: {
            id_ficha: id_ficha,
            id_sec_x: id_sec_x,
            sec_x: sec_x
        },
        success: function (data, textStatus, jqXHR) {
            validarFicha(id_ficha);
            console.log("ffff: " + data.resultado);
            console.log("#div_" + sec_x + "_alert_validado");
            $("#div_" + sec_x + "_alert_validado").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert('Error al validar parcialmente la entidad');
            }
        }
    });
}

function validarFicha(id_ficha) {

    $.ajax({
        url: urlx + "/ajaxValidarFicha",
        type: 'POST',
        data: {
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {
            $("#div_validar_ficha_pca").html(data);

        }, error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }

        }
    });

}


function valida_419() {
    const total = parseInt(document.getElementById('p4_19').value) || 0;
    const mujeres = parseInt(document.getElementById('p4_19_f').value) || 0;
    const hombres = parseInt(document.getElementById('p4_19_m').value) || 0;

    if (total !== (mujeres + hombres)) {
        document.getElementById('p4_19').setCustomValidity('La suma de Mujeres y Hombres debe ser igual al total.');
    } else {
        document.getElementById('p4_19').setCustomValidity('');
    }
}



//     function valida_p4_5() {
//        var p4_5_no = document.getElementById('p4_5_no');
//        var oculta_4 = document.querySelector('.oculta_4');
//
//        if (p4_5_no.checked) {
//            var elements = oculta_4.querySelectorAll('input, textarea, select');
//
//            elements.forEach(function(element) {
//                element.disabled = true;
//                element.value = '';
//                element.removeAttribute('required');
//
//                if (element.type === 'radio' || element.type === 'checkbox') {
//                    element.checked = false;
//                }
//            });
//        } else {
//            var elements = oculta_4.querySelectorAll('input, textarea, select');
//
//            elements.forEach(function(element) {
//                element.disabled = false;
//
//                if (element.hasAttribute('data-required')) {
//                    element.setAttribute('required', true);
//                }
//            });
//        }
//    }

function valida_p4_5() {
    var p4_5_si = document.getElementById('p4_5_si');
    var oculta_4 = document.querySelector('.oculta_4');
    // var btn_file_s471_arch = document.getElementById('btn_file_s471_arch');

    if (p4_5_si.checked) {

        var radios = oculta_4.querySelectorAll('input[type="radio"]');

        radios.forEach(function (radio) {
            radio.disabled = false;
            radio.setAttribute('required', true);
        });

        // Deshabilitar y quitar requerido a los otros elementos dentro de oculta_4
        var elements = oculta_4.querySelectorAll('input[type="checkbox"], select, textarea');

        elements.forEach(function (element) {
            element.disabled = true;
            element.removeAttribute('required');

            if (element.type === 'checkbox' || element.tagName === 'SELECT') {
                element.selectedIndex = 0;
            } else {
                element.value = '';
            }
        });

        // btn_file_s471_arch.disabled = true;
    } else {
        // Deshabilitar y quitar requerido a todos los elementos dentro de oculta_4
        var elements = oculta_4.querySelectorAll('input, textarea, select, input[type="radio"]');

        elements.forEach(function (element) {
            element.disabled = true;
            element.removeAttribute('required');

            if (element.type === 'radio' || element.type === 'checkbox') {
                element.checked = false;
            } else if (element.tagName === 'SELECT') {
                element.selectedIndex = 0; // Reiniciar select a opción por defecto
            } else {
                element.value = ''; // Limpiar el valor de textarea
            }
        });

        // btn_file_s471_arch.disabled = false;
    }
}


function valida_p4_10_si() {
    var p4_10_si = document.getElementById('p4_10_si');
    var oculta_4_10_1 = document.querySelector('.oculta_4_10_1');
    var oculta_4_10_2 = document.querySelector('.oculta_4_10_2');

    if (p4_10_si.checked) {
        // Si selecciona "Sí" en 4.10, habilitar y requerir 4.10.1
        var checkboxes_4_10_1 = oculta_4_10_1.querySelectorAll('input[type="checkbox"]');
        checkboxes_4_10_1.forEach(function (checkbox) {
            checkbox.disabled = false;
            // checkbox.setAttribute('required', true);
        });

        // Deshabilitar y limpiar 4.10.2
        var checkboxes_4_10_2 = oculta_4_10_2.querySelectorAll('input[type="checkbox"]');
        checkboxes_4_10_2.forEach(function (checkbox) {
            checkbox.disabled = true;
            checkbox.checked = false;
            checkbox.removeAttribute('required');
        });

        // Limpiar texto del textarea de 4.10.2
        var textarea_4_10_2 = oculta_4_10_2.querySelector('textarea');
        textarea_4_10_2.value = '';
        textarea_4_10_2.disabled = true;
        textarea_4_10_2.removeAttribute('required');
    } else if (p4_10_no.checked) {
        // Si selecciona "No" en 4.10, habilitar y requerir 4.10.2
        var checkboxes_4_10_2 = oculta_4_10_2.querySelectorAll('input[type="checkbox"]');
        checkboxes_4_10_2.forEach(function (checkbox) {
            checkbox.disabled = false;
            //checkbox.setAttribute('required', true);
        });

        // Deshabilitar y limpiar 4.10.1
        var checkboxes_4_10_1 = oculta_4_10_1.querySelectorAll('input[type="checkbox"]');
        checkboxes_4_10_1.forEach(function (checkbox) {
            checkbox.disabled = true;
            checkbox.checked = false;
            checkbox.removeAttribute('required');
        });

        // Limpiar texto del textarea de 4.10.1
        var textarea_4_10_1 = oculta_4_10_1.querySelector('textarea');
        textarea_4_10_1.value = '';
        textarea_4_10_1.disabled = true;
        textarea_4_10_1.removeAttribute('required');
    } else {
        // Si no marca ninguna opción en 4.10, deshabilitar y limpiar ambos
        var checkboxes_4_10_1 = oculta_4_10_1.querySelectorAll('input[type="checkbox"]');
        checkboxes_4_10_1.forEach(function (checkbox) {
            checkbox.disabled = true;
            checkbox.checked = false;
            checkbox.removeAttribute('required');
        });

        var checkboxes_4_10_2 = oculta_4_10_2.querySelectorAll('input[type="checkbox"]');
        checkboxes_4_10_2.forEach(function (checkbox) {
            checkbox.disabled = true;
            checkbox.checked = false;
            checkbox.removeAttribute('required');
        });

        // Limpiar texto de ambos textarea
        var textarea_4_10_1 = oculta_4_10_1.querySelector('textarea');
        textarea_4_10_1.value = '';
        textarea_4_10_1.disabled = true;
        textarea_4_10_1.removeAttribute('required');

        var textarea_4_10_2 = oculta_4_10_2.querySelector('textarea');
        textarea_4_10_2.value = '';
        textarea_4_10_2.disabled = true;
        textarea_4_10_2.removeAttribute('required');
    }
}





function buscar_dni_funcionario() {

    var num_dni = $("#dni_funcionario").val();
    if (num_dni !== "" && num_dni.length == 8) {
        $("#btn_buscar_dni").prop("disabled", true);
        $("#btn_buscar_dni").text('');
        $("#btn_buscar_dni").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Buscando...');
        $.ajax({
            url: urlx + "/ajaxBuscarByDNI",
            type: 'POST',
            data: {num_dni: num_dni},
            success: function (data, textStatus, jqXHR) {


                $("#nom_funcionario").val(data.nom_funcionario);
                $("#btn_buscar_dni").prop("disabled", false);
                $("#btn_buscar_dni").text('');
                $("#btn_buscar_dni").wrapInner('<i class="fa-solid fa-magnifying-glass"></i> Buscar');
            }, error: function (jqXHR, textStatus, errorThrown) {

                $("#btn_buscar_dni").prop("disabled", false);
                $("#btn_buscar_dni").text('');
                $("#btn_buscar_dni").wrapInner('<i class="fa-solid fa-magnifying-glass"></i> Buscar');
                if (jqXHR.status == 401) {
                    alert("Su sesi\u00F3n ha finalizado");
                } else {
                    alert("Ocurrio un error al cargar");
                }

            }
        });
    } else {
        alert("Ingresar los 8 d\u00EDgitos del n\u00FAmero DNI");
    }
}


function buscar_dni_defensor() {

    var num_dni = $("#dni_defensor_demuna").val();
    if (num_dni !== "" && num_dni.length == 8) {
        $("#btn_buscar_dni").prop("disabled", true);
        $("#btn_buscar_dni").text('');
        $("#btn_buscar_dni").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Buscando...');
        $.ajax({
            url: urlx + "/ajaxBuscarByDNIdefensor",
            type: 'POST',
            data: {num_dni: num_dni},
            success: function (data, textStatus, jqXHR) {


                $("#nom_defensor").val(data.nom_defensor);
                $("#btn_buscar_dni").prop("disabled", false);
                $("#btn_buscar_dni").text('');
                $("#btn_buscar_dni").wrapInner('<i class="fa-solid fa-magnifying-glass"></i> Buscar');
            }, error: function (jqXHR, textStatus, errorThrown) {

                $("#btn_buscar_dni").prop("disabled", false);
                $("#btn_buscar_dni").text('');
                $("#btn_buscar_dni").wrapInner('<i class="fa-solid fa-magnifying-glass"></i> Buscar');
                if (jqXHR.status == 401) {
                    alert("Su sesi\u00F3n ha finalizado");
                } else {
                    alert("Ocurrio un error al cargar");
                }

            }
        });
    } else {
        alert("Ingresar los 8 d\u00EDgitos del n\u00FAmero DNI");
    }
}






//
//function valida_implementado() {
//    const siImplementado = document.getElementById('si_implementado').checked;
//    const detalles_noimplementado = document.getElementById('detalles_noimplementado');
//    const noImplementado = document.getElementById('no_implementado');
//
//    if (siImplementado) {
//        
//        const inputsDetalles = detalles_noimplementado.querySelectorAll('input, textarea');
//        inputsDetalles.forEach(input => {
//            input.value = '';
//            input.removeAttribute('required');
//            input.setAttribute('disabled', 'true');
//        });
//
//        
//        const inputsNoImplementado = noImplementado.querySelectorAll('input, textarea');
//        inputsNoImplementado.forEach(input => {
//            input.removeAttribute('disabled');
//            input.setAttribute('required', 'required');
//        });
//    } else {
//       
//        const inputsDetalles = detalles_noimplementado.querySelectorAll('input, textarea');
//        inputsDetalles.forEach(input => {
//            input.removeAttribute('disabled');
//            input.setAttribute('required', 'required');
//        });
//
//       
//        const inputsNoImplementado = noImplementado.querySelectorAll('input, textarea');
//        inputsNoImplementado.forEach(input => {
//            input.value = '';
//            input.removeAttribute('required');
//            input.setAttribute('disabled', 'true');
//        });
//    }
//}

//function valida_implementado() {
//    const siImplementado = document.getElementById('si_implementado').checked;
//    const detalles_noimplementado = document.getElementById('detalles_noimplementado');
//    const noImplementado = document.getElementById('no_implementado');
//
//    const camposSiempreHabilitados = ['departamento_demuna', 'provincia_demuna', 'distrito_demuna'];
//
//    if (siImplementado) {
//        // Deshabilitar y limpiar todos los campos dentro de detalles_noimplementado excepto los especificados
//        const inputsDetalles = detalles_noimplementado.querySelectorAll('input, textarea');
//        inputsDetalles.forEach(input => {
//            if (!camposSiempreHabilitados.includes(input.id)) {
//                input.value = '';
//                input.removeAttribute('required');
//                input.setAttribute('disabled', 'true');
//            }
//        });
//
//        // Habilitar y agregar required a los campos dentro de noImplementado
//        const inputsNoImplementado = noImplementado.querySelectorAll('input, textarea');
//        inputsNoImplementado.forEach(input => {
//            input.removeAttribute('disabled');
//            input.setAttribute('required', 'required');
//        });
//    } else {
//        // Habilitar y agregar required a los campos dentro de detalles_noimplementado excepto los especificados
//        const inputsDetalles = detalles_noimplementado.querySelectorAll('input, textarea');
//        inputsDetalles.forEach(input => {
//            if (!camposSiempreHabilitados.includes(input.id)) {
//                input.removeAttribute('disabled');
//                input.setAttribute('required', 'required');
//            }
//        });
//
//        // Deshabilitar y limpiar los campos dentro de noImplementado
//        const inputsNoImplementado = noImplementado.querySelectorAll('input, textarea');
//        inputsNoImplementado.forEach(input => {
//            input.value = '';
//            input.removeAttribute('required');
//            input.setAttribute('disabled', 'true');
//        });
//    }
//
//    // Asegurar que los campos siempre habilitados estén habilitados y no tengan required
//    camposSiempreHabilitados.forEach(id => {
//        const input = document.getElementById(id);
//        if (input) {
//            input.removeAttribute('disabled');
//            input.removeAttribute('required');
//        }
//    });
//}


//function valida_implementado() {
//    
//   
//    const siImplementado = document.getElementById('si_implementado');
//    const noImplementado = document.getElementById('no_implementado');
//
//      departamento_demuna = document.getElementById('departamento_demuna');
//      provincia_demuna = document.getElementById('provincia_demuna');
//      distrito_demuna = document.getElementById('distrito_demuna');
//      dni_funcionario = document.getElementById('dni_funcionario');
//    
//    const detallesNoImplementado = document.getElementById('detalles_noimplementado');
//    const inputsDetalles = detallesNoImplementado.querySelectorAll('input, textarea');
//      
//     const datos_demuna = document.getElementById('datos_demuna'); 
//     const inputsDetallex = datos_demuna.querySelectorAll('input, textarea');
//     
//     btn_buscar_dni = document.getElementById('btn_buscar_dni');
//     btn_buscar_dnix = document.getElementById('btn_buscar_dnix');
//     
//
//    if (siImplementado.checked) {
//        inputsDetalles.forEach(input => {
//            input.disabled = true;
//            input.required = false;
//            input.value="";
//        });
//        
//        $(".datos_demuna").show();
//        
//        inputsDetallex.forEach(input => {
//            input.disabled = false;
//            input.required = true;
//        });
//        
//        btn_buscar_dni.disabled = true;
//        btn_buscar_dnix.disabled = false;
//        
//    } else if (noImplementado.checked) {
//        console.log("detalle no implementado");
//         btn_buscar_dni.disabled = false;
//          btn_buscar_dnix.disabled = true;
//          
//       inputsDetalles.forEach(input => {
//        input.disabled = false;
//        input.required = true;
//        input.setAttribute("required", "true");
//        console.log(`Campo ${input.name} habilitado y requerido: ${input.required}`);
//        
//    });
//        //$(".no_aplicar_ficha").hide();
//              
//       // dni_funcionario.required = true;
//        console.log("detalle no implementado"+ inputsDetalles);
//        inputsDetallex.forEach(input => {
//            input.disabled = true;
//            input.required = false;
//            input.value = "";
//        });
//        
//          departamento_demuna.disabled = false;
//            provincia_demuna.disabled = false;
//            distrito_demuna.disabled = false;
//    } else {
//         btn_buscar_dni.disabled = true;
//        btn_buscar_dnix.disabled = true;
//        
//        inputsDetalles.forEach(input => {
//            input.disabled = true;
//            input.required = false;
//        });
//        
//        inputsDetallex.forEach(input => {
//            input.disabled = true;
//            input.required = false;
//            departamento_demuna.disabled = false;
//            provincia_demuna.disabled = false;
//            distrito_demuna.disabled = false;
//        });
//        
//      
//        
//    }
//    }

function valida_implementado() {
    const siImplementado = document.getElementById('si_implementado');
    const noImplementado = document.getElementById('no_implementado');

    const departamento_demuna = document.getElementById('departamento_demuna');
    const provincia_demuna = document.getElementById('provincia_demuna');
    const distrito_demuna = document.getElementById('distrito_demuna');
    const dni_funcionario = document.getElementById('dni_funcionario');

    const detallesNoImplementado = document.getElementById('detalles_noimplementado');
    const datos_demuna = document.getElementById('datos_demuna');

    // Verificar si los elementos existen antes de usarlos
    const inputsDetalles = detallesNoImplementado ? detallesNoImplementado.querySelectorAll('input, textarea') : [];
    const inputsDetallex = datos_demuna ? datos_demuna.querySelectorAll('input, textarea') : [];

    const btn_buscar_dni = document.getElementById('btn_buscar_dni');
    const btn_buscar_dnix = document.getElementById('btn_buscar_dnix');

    if (siImplementado && siImplementado.checked) {
        inputsDetalles.forEach(input => {
            input.disabled = true;
            input.required = false;
            input.value = "";
        });

        $(".datos_demuna").show();

        inputsDetallex.forEach(input => {
            input.disabled = false;
            input.required = true;
        });

        if (btn_buscar_dni)
            btn_buscar_dni.disabled = true;
        if (btn_buscar_dnix)
            btn_buscar_dnix.disabled = false;

    } else if (noImplementado && noImplementado.checked) {
        console.log("detalle no implementado");
        if (btn_buscar_dni)
            btn_buscar_dni.disabled = false;
        if (btn_buscar_dnix)
            btn_buscar_dnix.disabled = true;

        inputsDetalles.forEach(input => {
            input.disabled = false;
            input.required = true;
            input.setAttribute("required", "true");
            console.log(`Campo ${input.name} habilitado y requerido: ${input.required}`);
        });

        inputsDetallex.forEach(input => {
            input.disabled = true;
            input.required = false;
            input.value = "";
        });

        if (departamento_demuna)
            departamento_demuna.disabled = false;
        if (provincia_demuna)
            provincia_demuna.disabled = false;
        if (distrito_demuna)
            distrito_demuna.disabled = false;
    } else {
        if (btn_buscar_dni)
            btn_buscar_dni.disabled = true;
        if (btn_buscar_dnix)
            btn_buscar_dnix.disabled = true;

        inputsDetalles.forEach(input => {
            input.disabled = true;
            input.required = false;
        });

        inputsDetallex.forEach(input => {
            input.disabled = true;
            input.required = false;
        });

        if (departamento_demuna)
            departamento_demuna.disabled = false;
        if (provincia_demuna)
            provincia_demuna.disabled = false;
        if (distrito_demuna)
            distrito_demuna.disabled = false;
    }
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    valida_implementado();
});

//function valida_hora_inicio_p2_6() {
//    const input = document.getElementById('p2_6_lv_hora_inicio');
//    const value = input.value;
//
//    // Verificar el formato de la hora
//    const isValidFormat = /^(0[0-9]|1[0-1]):[0-5][0-9]$/.test(value);
//    if (!isValidFormat) {
//        alert('Hora no válida. Por favor ingrese una hora entre 00:00 y 11:59.');
//        input.value = '';
//        return;
//    }
//}

function validaHora_p2_6() {
    var horaInicio = document.getElementById("p2_6_lv_hora_inicio");
    var horaCierre = document.getElementById("p2_6_lv_hora_cierre");

    // Añadir evento de cambio para la hora de cierre
    horaCierre.addEventListener("change", function () {
        if (horaInicio.value && horaCierre.value) {
            var inicio = horaInicio.value.split(":");
            var cierre = horaCierre.value.split(":");

            var inicioDate = new Date();
            inicioDate.setHours(parseInt(inicio[0]));
            inicioDate.setMinutes(parseInt(inicio[1]));

            var cierreDate = new Date();
            cierreDate.setHours(parseInt(cierre[0]));
            cierreDate.setMinutes(parseInt(cierre[1]));

            if (cierreDate <= inicioDate) {
                Swal.fire({

                    text: 'La hora de cierre debe ser superior a la hora de inicio.'
                });
                horaCierre.value = "";
            }
        }
    });
}








function toggleInputText4_4(numberInput, textInputId) {
    // Verificar si numberInput está definido
    if (!numberInput) {
        console.error('numberInput is undefined');
        return;
    }
  
    const textInput = document.getElementById(textInputId);
  
    if (!textInput) {
        console.error(`No element found with ID ${textInputId}`);
        return;
    }


   if (numberInput.value > 0) {
        textInput.removeAttribute('disabled');
    } else if (numberInput.value === 0){
        textInput.setAttribute('disabled', 'disabled');
         textInput.value = ""; 
    }else if (numberInput.value === ""){
       textInput.setAttribute('disabled', 'disabled');
       textInput.value = ""; 
    }else {
        textInput.setAttribute('disabled', 'disabled');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const numberInput = document.getElementById('p4_4_otro_cantidad');
    if (numberInput) {
        numberInput.addEventListener('input', function () {
            toggleInputText4_4(this, 'p4_4_otro_desc');
        });
    }
});

function toggleOtroDesc() {
    const cantidadInput = document.getElementById('p4_4_otro_cantidad');
    const descTextarea = document.getElementById('p4_4_otro_desc');

    if (cantidadInput.value > 0) {
        descTextarea.removeAttribute('disabled');
    } else {
        descTextarea.setAttribute('disabled', 'disabled');
    }
}




//    
//function valida_p1_7() {
//    const si = document.getElementById("p1_7_si").checked;
// 
//     const noAdjuntarDiv = document.getElementById("no_adjuntar");
//    const inputFile = document.getElementById("s1_7_arch");
//    const hiddenInput = document.getElementById("s1_7_arch_id_archivo");
//
//    if (si) {
//        noAdjuntarDiv.style.display = 'block';
//    } else {
//        // Ocultar el div
//        noAdjuntarDiv.style.display = 'none';
//
//        // Limpiar el archivo adjunto
//        inputFile.value = "";
//        hiddenInput.value = "";
//
//        // Llamar a la función para eliminar el documento adjunto
//        const id_archivo = hiddenInput.value;
//        //const id_ficha = ""; 
//        const id_ficha = $("#id_ficha").val();
//        console.log("id_ficha"+id_ficha);
//        eliminar_archivo_sec1_7(id_archivo, id_ficha);
//    }
//}



function valida_p4_11_si() {
    var p4_11_si = document.getElementById('p4_11_si');
    var p4_12 = document.getElementById('p4_12');
    var p4_13_f = document.getElementById('p4_13_f');
    var p4_13_m = document.getElementById('p4_13_m');
    var insertar_A = document.getElementById('insertar_A');
    //var id_ficha = $("#id_ficha").val();
    const no_registro = document.querySelector(".no_registro");

    if (p4_11_si.checked) {
        p4_12.disabled = false;
        p4_13_f.disabled = false;
        p4_13_m.disabled = false;
        insertar_A.disabled = false;
        no_registro.style.display = "block";
        p4_12.required = true;
        //$("#demuna_ficha_s4_p4_profesion").val("A");
        p4_13_f.required = true;
        p4_13_m.required = true;
    } else {
        p4_12.disabled = true;
        p4_12.value = '';
        p4_13_f.disabled = true;
        p4_13_f.value = '';
        p4_13_m.disabled = true;
        p4_13_m.value = '';
        insertar_A.disabled = true;
        p4_12.required = false;
        p4_13_f.required = false;
        p4_13_m.required = false;
        no_registro.style.display = "none";


    }
}

//
//function valida_p1_7() {
//    const si = document.getElementById("p1_7_si").checked;
//    const noAdjuntarDiv = document.querySelector(".no_adjuntar");
//    const inputFile = document.getElementById("s1_7_arch");
//    var id_ficha = $("#id_ficha").val();
//    if (id_ficha === '') {
//        console.log("entro aqui vacio id_ficha");
//        Swal.fire({
//            text: 'Por favor, guarde parcialmente antes de continuar el llenado de la Ficha, Gracias'
//        });
//        // return;
//    } else {
//        if (si) {
//            if (noAdjuntarDiv) {
//                noAdjuntarDiv.style.display = "block";
//            } else {
//                console.log("El elemento con la clase 'no_adjuntar' no existe.");
//            }
//        } else {
//            if (noAdjuntarDiv) {
//                // Ocultar el div
//                noAdjuntarDiv.style.display = "none";
//
//                // Limpiar el archivo adjunto
//                inputFile.value = "";
//                //  hiddenInput.value = "";
//                console.log("ficha con id_ficha" + id_ficha);
//
//                const id_archivo = "";
//                if (!id_archivo) {
//                    console.log("id_archivo es una cadena vacía");
//                } else {
//                    console.log("id_archivo: " + id_archivo);
//                }
//                // Llamar a la función para eliminar el documento adjunto
//
//
//            } else {
//                console.log("El elemento con la clase 'no_adjuntar' no existe.");
//            }
//        }
//    }
//}


function valida_p1_7() {
    const si = document.getElementById("p1_7_si").checked;
    const noAdjuntarDiv = document.querySelector(".no_adjuntar");
    const inputFile = document.getElementById("s1_7_arch");
   
   
        if (si) {
            if (noAdjuntarDiv) {
                noAdjuntarDiv.style.display = "block";
            } else {
                console.log("El elemento con la clase 'no_adjuntar' no existe.");
            }
        } else {
            if (noAdjuntarDiv) {
                // Ocultar el div
                noAdjuntarDiv.style.display = "none";

                // Limpiar el archivo adjunto
                inputFile.value = "";
                //  hiddenInput.value = "";
            

                const id_archivo = "";
                if (!id_archivo) {
                    console.log("id_archivo es una cadena vacía");
                } else {
                    console.log("id_archivo: " + id_archivo);
                }
                // Llamar a la función para eliminar el documento adjunto


            } else {
                console.log("El elemento con la clase 'no_adjuntar' no existe.");
            }
        }
     document.getElementById("btn_guardar_sec_1").click();
}

function valida_p4_7() {
    var textarea = document.getElementById('p4_7_3_nresol');
    var siRadio = document.getElementById('p4_7_si');
    var noRadio = document.getElementById('p4_7_no');
    var fecha = document.getElementById('d_p4_7_3_fecha');
    const noAdjuntarDiv = document.querySelector(".no_adjuntar_471");
    const inputFile = document.getElementById("s471_arch");

    // Verifica si p4_7 es null
    var p4_7 = siRadio ? siRadio.checked : null;

    if (p4_7 === true) {
        textarea.disabled = false;
        textarea.required = true;
        fecha.disabled = false;

        if (noAdjuntarDiv) {
            noAdjuntarDiv.style.display = "block";
        } else {
            console.log("El elemento con la clase 'no_adjuntar_471' no existe.");
        }
    } else {
        textarea.disabled = true;
        textarea.value = '';
        textarea.required = false;
        fecha.disabled = true;
        fecha.value = '';

        if (noAdjuntarDiv) {
            noAdjuntarDiv.style.display = "none";
        }
    }
}



function valida_p1_6() {
    const si = document.getElementById("p1_6_si").checked;
    var id_ficha = $("#id_ficha").val();

    if (si || id_ficha === '') {
        console.log("entro aqui vacio id_ficha");
        Swal.fire({
            text: 'Por favor, guarde parcialmente antes de continuar el llenado de la Ficha, Gracias'
        });
        return;
    } else {
    }
}









//  
//function suma425() {
//        var p4_22_1 = document.getElementById('p4_22_1');
//        var p4_23_f = document.getElementById('p4_23_f');
//        var p4_23_m = document.getElementById('p4_23_m');
//
//        var total = parseInt(p4_22_1.value) || 0;
//        var women = parseInt(p4_23_f.value) || 0;
//        var men = parseInt(p4_23_m.value) || 0;
//
//     
//        
//        if (document.activeElement === p4_23_f || document.activeElement === p4_23_m) {
//            p4_22_1.value = women + men;
//        }
//
//       
//        if (document.activeElement === p4_22_1) {
//            if (women > total) {
//                p4_23_f.value = total;
//                p4_23_m.value = 0;
//            } else {
//                p4_23_m.value = total - women;
//            }
//        }
//
//        if (document.activeElement === p4_23_f && women > total) {
//            p4_23_f.value = total;
//        } else if (document.activeElement === p4_23_m && men > total) {
//            p4_23_m.value = total;
//        }
//
//
//        if (document.activeElement !== p4_22_1) {
//            p4_22_1.value = parseInt(p4_23_f.value) + parseInt(p4_23_m.value);
//        }
//    }



function suma419() {
    var p4_19 = document.getElementById('p4_19');
    var p4_19_f = document.getElementById('p4_19_f');
    var p4_19_m = document.getElementById('p4_19_m');

    function updateTotal() {
        var women = parseInt(p4_19_f.value) || 0;
        var men = parseInt(p4_19_m.value) || 0;
        var total = women + men;
        p4_19.value = total;
    }

    // Add event listeners to update total when values change
    p4_19_f.addEventListener('input', updateTotal);
    p4_19_m.addEventListener('input', updateTotal);
}


function suma430() {
    var p4_27_1 = document.getElementById('p4_27_1');
    var p4_28_f = document.getElementById('p4_28_f');
    var p4_28_m = document.getElementById('p4_28_m');

    function updateTotal() {
        var women = parseInt(p4_28_f.value) || 0;
        var men = parseInt(p4_28_m.value) || 0;
        var total = women + men;
        p4_27_1.value = total;
    }

    // Add event listeners to update total when values change
    p4_28_f.addEventListener('input', updateTotal);
    p4_28_m.addEventListener('input', updateTotal);
}

function suma425() {
    const p4_22_1 = document.getElementById('p4_22_1');
    const p4_23_f = document.getElementById('p4_23_f');
    const p4_23_m = document.getElementById('p4_23_m');


    function updateTotal() {
        var women = parseInt(p4_23_f.value) || 0;
        var men = parseInt(p4_23_m.value) || 0;
        var total = women + men;
        p4_22_1.value = total;
    }

    // Add event listeners to update total when values change
    p4_23_f.addEventListener('input', updateTotal);
    p4_23_m.addEventListener('input', updateTotal);
}




function suma_p4_1213() {
    var p4_12 = document.getElementById('p4_12');
    var p4_13_f = document.getElementById('p4_13_f');
    var p4_13_m = document.getElementById('p4_13_m');

   
    function updateTotal() {
        var women = parseInt(p4_13_f.value) || 0;
        var men = parseInt(p4_13_m.value) || 0;
        var total = women + men;
        p4_12.value = total;
    }

    // Add event listeners to update total when values change
    p4_13_f.addEventListener('input', updateTotal);
    p4_13_m.addEventListener('input', updateTotal);
}

function valida_p4_18x() {
    $("#p4_18_si, #p4_18_no").on("change", function () {
        const no_registro20 = document.querySelector(".no_registro20");
        if (this.value === 'S') {
            $('.check_p4_18_1').prop("disabled", false);
            $('#p4_19').prop("disabled", false);
            $('#p4_19_f').prop("disabled", false);
           // $("#demuna_ficha_s4_p4_profesion").val("B");
            $('#p4_19_m').prop("disabled", false);
            no_registro20.style.display = "block";
        } else {
            $('.check_p4_18_1').prop("disabled", true).prop("checked", false);
            $('#p4_19').prop("disabled", true).val(null);
            $('#p4_19_f').prop("disabled", true).val(null);
            $('#p4_19_m').prop("disabled", true).val(null);
            $('#p4_18_1_otro_desc').prop("disabled", true).val(null);
            no_registro20.style.display = "none";
        }
    });
}


function valida_p4_22() {
    var p4_22_1 = document.getElementById('p4_22_1');
    var siRadio = document.getElementById('p4_22_si');
    var p4_23_f = document.getElementById('p4_23_f');
    var p4_23_m = document.getElementById('p4_23_m');
    const no_registro24 = document.querySelector(".no_registro24");
    if (siRadio.checked) {
      //  $("#demuna_ficha_s4_p4_profesion").val("C");
        p4_22_1.disabled = false;
        p4_22_1.required = true;

        p4_23_f.disabled = false;
        p4_23_f.required = true;

        p4_23_m.disabled = false;
        p4_23_m.required = true;

        no_registro24.style.display = "block";
    } else {
        p4_22_1.disabled = true;
        p4_22_1.value = '';
        p4_22_1.required = false;

        p4_23_f.disabled = true;
        p4_23_f.value = '';
        p4_23_f.required = false;

        p4_23_m.disabled = true;
        p4_23_m.value = '';
        p4_23_m.required = false;
        no_registro24.style.display = "none";
    }
}






//4.29  
function valida_p4_27_si() {
    $("#p4_27_si, #p4_27_no").on("change", function ()
    {
        const no_registro29 = document.querySelector(".no_registro29");
        if (this.value === 'S')
        {
            $('#p4_27_1').prop("disabled", false);
          
            $('#p4_27_1').focus();

            $('#p4_28_f').prop("disabled", false);
         

            $('#p4_28_m').prop("disabled", false);
           

            no_registro29.style.display = "block";
        } else {
            $('#p4_27_1').val(null);
            $('#p4_27_1').prop("disabled", true);

            $('#p4_28_f').val(null);
            $('#p4_28_f').prop("disabled", true);

            $('#p4_28_m').val(null);
            $('#p4_28_m').prop("disabled", true);
            no_registro29.style.display = "none";
        }
    });
}


function valida_p4_33_2_si() {
    var p4_33_2_si = document.getElementById('p4_33_2_si');

    var p4_33_2_1_f = document.getElementById('p4_33_2_1_f');
    var p4_33_2_1_m = document.getElementById('p4_33_2_1_m');
  //  const no_registro37 = document.querySelector(".no_registro37");

    if (p4_33_2_si.checked) {

        p4_33_2_1_f.disabled = false;
        p4_33_2_1_m.disabled = false;

        p4_33_2_1_f.required = true;
        p4_33_2_1_m.required = true;
      //  no_registro37.style.display = "block";
      //  $("#demuna_ficha_s4_p4_profesion").val("D");
    } else {
        p4_33_2_1_f.required = false;
        p4_33_2_1_m.required = false;

        p4_33_2_1_f.disabled = true;
        p4_33_2_1_f.value = '';

        p4_33_2_1_m.disabled = true;
        p4_33_2_1_m.value = '';
       // no_registro37.style.display = "none";
    }

}





function valida_p4_33_si() {
    var p4_33_si = document.getElementById('p4_33_si');

    var p4_33_1_f = document.getElementById('p4_33_1_f');
    var p4_33_1_m = document.getElementById('p4_33_1_m');
    const no_registro37 = document.querySelector(".no_registro37");

    if (p4_33_si.checked) {

        p4_33_1_f.disabled = false;
        p4_33_1_m.disabled = false;

        p4_33_1_f.required = true;
        p4_33_1_m.required = true;

        no_registro37.style.display = "block";
    } else {

        p4_33_1_f.required = false;
        p4_33_1_m.required = false;

        p4_33_1_f.disabled = true;
        p4_33_1_f.value = '';

        p4_33_1_m.disabled = true;
        p4_33_1_m.value = '';
        no_registro37.style.display = "none";
    }

}



function valida_p4_32_si() {

    var p4_32_si = document.getElementById('p4_32_si');

    var p4_32_1_f = document.getElementById('p4_32_1_f');
    var p4_32_1_m = document.getElementById('p4_32_1_m');
    const no_registro37 = document.querySelector(".no_registro37");


    if (p4_32_si.checked) {

        p4_32_1_f.disabled = false;
        p4_32_1_m.disabled = false;

        p4_32_1_f.required = true;
        p4_32_1_m.required = true;

        no_registro37.style.display = "block";

    } else {

        p4_32_1_f.required = false;
        p4_32_1_m.required = false;

        p4_32_1_f.disabled = true;
        p4_32_1_f.value = '';

        p4_32_1_m.disabled = true;
        p4_32_1_m.value = '';
        no_registro37.style.display = "none";

    }
}


function valida_p3_4_oculta() {
    var siRadio = document.getElementById('p3_4_si');
    var noRadio = document.getElementById('p3_4_no');
    p3_4_noaplica_x = document.getElementById('p3_4_noaplica_x');
    const noAdjuntarDiv = document.querySelector(".no_aplica34");
    const inputFile = document.getElementById("s3_4_arch");

    var p3_4 = siRadio ? siRadio.checked : null;

    if (p3_4 === true || noRadio.checked) {


        if (noAdjuntarDiv) {
            noAdjuntarDiv.style.display = "block";
        } else {
            console.log("El elemento no existe.");
        }
    } else if (p3_4_noaplica_x.checked) {


        if (noAdjuntarDiv) {
            noAdjuntarDiv.style.display = "none";
        }
    } else {
        noAdjuntarDiv.style.display = "none";
    }
}


function valida_p3_4_1_oculta() {
    var siRadio = document.getElementById('p3_4_1_si');
    var noRadio = document.getElementById('p3_4_1_no');
    p3_4_1_noaplica_x = document.getElementById('p3_4_1_noaplica_x');
    const noAdjuntarDiv = document.querySelector(".no_aplica341");
    const inputFile = document.getElementById("s341_arch");

    var p3_4_1 = siRadio ? siRadio.checked : null;

    if (p3_4_1 === true || noRadio.checked) {


        if (noAdjuntarDiv) {
            noAdjuntarDiv.style.display = "block";
        } else {
            console.log("El elemento no existe.");
        }
    } else if (p3_4_1_noaplica_x.checked) {


        if (noAdjuntarDiv) {
            noAdjuntarDiv.style.display = "none";
        }
    } else {
        noAdjuntarDiv.style.display = "none";
    }
}






//
//
//function validarCantidadCasos6() {
//    // Obtener el valor del input p6_4_1_x
//    const p6_4_1_x = document.getElementById('p6_4_1_x').value;
//
//    const inputs = document.querySelectorAll('#row_6_4_2_x input[type="number"]');
//    
//    const textarea = document.getElementById('p6_4_2_otros_descrip_x');
//
//    if (p6_4_1_x === "" || p6_4_1_x === 0) {
//       inputs.forEach(input => {
//            input.disabled = true;
//            input.required = false;
//        });
//        textarea.disabled = true;
//        textarea.required = false;
//        
//    }
//    else {
//        inputs.forEach(input => {
//            input.disabled = false;
//            input.required = true;
//        });
//    }
//}



function validarCantidadCasos6() {
    // Obtener el valor del input p6_4_1_x
    var p6_4_1_x_value = document.getElementById('p6_4_1_x');
    var p6_4_2_venezolana_cantidad_x = document.getElementById('p6_4_2_venezolana_cantidad_x');
    var p6_4_2_boliviana_cantidad_x = document.getElementById('p6_4_2_boliviana_cantidad_x');
    var p6_4_2_ecuatoriana_cantidad_x = document.getElementById('p6_4_2_ecuatoriana_cantidad_x');
    var p6_4_2_hatiana_cantidad_x = document.getElementById('p6_4_2_hatiana_cantidad_x');
    // var p6_4_2_otros_x = document.getElementById('p6_4_2_otros_x');
    var p6_4_2_otros_cantidad_x = document.getElementById('p6_4_2_otros_cantidad_x');
    var value = parseInt(p6_4_1_x_value.value, 10);

    if (p6_4_1_x_value.disabled || p6_4_1_x_value.value === "") {
        console.log("p6_4_1_x_value igual a vacio");

        p6_4_2_venezolana_cantidad_x.disabled = false;
        p6_4_2_boliviana_cantidad_x.disabled = false;
        p6_4_2_ecuatoriana_cantidad_x.disabled = false;
        p6_4_2_hatiana_cantidad_x.disabled = false;
        //  p6_4_2_otros_x.disabled = true;

        var checkboxes = document.querySelectorAll('.p6_4_2_otros_x');
        checkboxes.forEach(function (checkbox) {
            checkbox.disabled = true;
            checkbox.required = false;
        });


        p6_4_2_venezolana_cantidad_x.required = false;
        p6_4_2_boliviana_cantidad_x.required = false;
        p6_4_2_ecuatoriana_cantidad_x.required = false;
        p6_4_2_hatiana_cantidad_x.required = false;

    } else if (value === 0) {
        console.log("p6_4_1_x_value igual a 0");
        p6_4_2_venezolana_cantidad_x.disabled = false;
        p6_4_2_boliviana_cantidad_x.disabled = false;
        p6_4_2_ecuatoriana_cantidad_x.disabled = false;
        p6_4_2_hatiana_cantidad_x.disabled = false;
        p6_4_2_otros_cantidad_x.disabled = false;

//        p6_4_2_venezolana_cantidad_x.value = "";
//        p6_4_2_boliviana_cantidad_x.value = "";
//        p6_4_2_ecuatoriana_cantidad_x.value = "";
//        p6_4_2_hatiana_cantidad_x.value = "";
//        p6_4_2_otros_cantidad_x.value = "";

        p6_4_2_venezolana_cantidad_x.required = false;
        p6_4_2_boliviana_cantidad_x.required = false;
        p6_4_2_ecuatoriana_cantidad_x.required = false;
        p6_4_2_hatiana_cantidad_x.required = false;
        p6_4_2_otros_cantidad_x.required = false;

        var checkboxes = document.querySelectorAll('.p6_4_2_otros_x');
        checkboxes.forEach(function (checkbox) {
            checkbox.disabled = true;
            checkbox.required = false;
        });

    } else {
        console.log("p6_4_1_x_value mayor a cero");
        p6_4_2_venezolana_cantidad_x.disabled = false;
        p6_4_2_boliviana_cantidad_x.disabled = false;
        p6_4_2_ecuatoriana_cantidad_x.disabled = false;
        p6_4_2_hatiana_cantidad_x.disabled = false;


        p6_4_2_venezolana_cantidad_x.required = true;
        p6_4_2_boliviana_cantidad_x.required = true;
        p6_4_2_ecuatoriana_cantidad_x.required = true;
        p6_4_2_hatiana_cantidad_x.required = true;

        var checkboxes = document.querySelectorAll('.p6_4_2_otros_x');
        checkboxes.forEach(function (checkbox) {
            checkbox.disabled = false;

        });
    }

}


function sumar_total_6_4_2() {

    var tVenezolanos = parseInt(document.getElementById("p6_4_2_venezolana_cantidad_x").value) || 0;
    var tBolivianos = parseInt(document.getElementById("p6_4_2_boliviana_cantidad_x").value) || 0;
    var tEcuaorianos = parseInt(document.getElementById("p6_4_2_ecuatoriana_cantidad_x").value) || 0;
    var tHaitianos = parseInt(document.getElementById("p6_4_2_hatiana_cantidad_x").value) || 0;
    var tOtros = parseInt(document.getElementById("p6_4_2_otros_cantidad_x").value) || 0;

    var total_6_4_2 = tVenezolanos + tBolivianos + tEcuaorianos + tHaitianos + tOtros;

    document.getElementById("p6_4_1_x").value = total_6_4_2;

}


function valida643() {
    var p6_4_3_x = document.getElementById("p6_4_3_x");
    var checkboxes = document.querySelectorAll(".check_p6_4_3_1");
    var value = parseInt(p6_4_3_x.value, 10);
    var p6_4_3_1_detalle = document.getElementById("p6_4_3_1_detalle");

    if (p6_4_3_x.disabled || p6_4_3_x.value === "") {
        console.log("igual a vacio");
        checkboxes.forEach(function (checkbox) {
            checkbox.disabled = true;
            checkbox.checked = false;
            checkbox.required = false;
        });
    } else if (value === 0) {
        console.log("igual a 0");
        checkboxes.forEach(function (checkbox) {
            checkbox.disabled = true;
            checkbox.checked = false;
            checkbox.required = false;
        });
        p6_4_3_1_detalle.disabled = true;
        p6_4_3_1_detalle.value = "";
    } else {
        console.log("mayor a cero");
        checkboxes.forEach(function (checkbox) {
            checkbox.disabled = false;
            checkbox.required = true;
        });
    }

    checkCheckboxes();
}

function checkCheckboxes() {
    var checkboxes = document.querySelectorAll(".check_p6_4_3_1");
    var anyChecked = Array.from(checkboxes).some(function (checkbox) {
        return checkbox.checked;
    });

    checkboxes.forEach(function (checkbox) {
        if (anyChecked) {
            checkbox.required = false;
        } else {
            checkbox.required = true;
        }
    });
}

document.querySelectorAll(".check_p6_4_3_1").forEach(function (checkbox) {
    checkbox.addEventListener('change', checkCheckboxes);
});



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function valida_p4_14() {
    //alert("ingresooo: ");
    var radioSiok = document.getElementById("p4_capa").value;

    if (radioSiok === 'S') {
        document.getElementById("p4_14_Bloque").style.display = "block";
        document.getElementById("p4_14_Bloque_No").style.display = "none";


        var arRadioBtn_a = document.getElementsByName("p4_14_1_a");

        for (var ii = 0; ii < arRadioBtn_a.length; ii++) {
            var radButton_a = arRadioBtn_a[ii];
            radButton_a.checked = false;
        }

        var arRadioBtn_b = document.getElementsByName("p4_14_1_b");

        for (var ii = 0; ii < arRadioBtn_b.length; ii++) {
            var radButton_b = arRadioBtn_b[ii];
            radButton_b.checked = false;
        }

        var arRadioBtn_c = document.getElementsByName("p4_14_1_c");

        for (var ii = 0; ii < arRadioBtn_c.length; ii++) {
            var radButton_c = arRadioBtn_c[ii];
            radButton_c.checked = false;
        }

        var arRadioBtn_d = document.getElementsByName("p4_14_1_d");

        for (var ii = 0; ii < arRadioBtn_d.length; ii++) {
            var radButton_d = arRadioBtn_d[ii];
            radButton_d.checked = false;
        }

        var arRadioBtn_e = document.getElementsByName("p4_14_1_e");

        for (var ii = 0; ii < arRadioBtn_e.length; ii++) {
            var radButton_e = arRadioBtn_e[ii];
            radButton_e.checked = false;
        }

        var arRadioBtn_f = document.getElementsByName("p4_14_1_f");

        for (var ii = 0; ii < arRadioBtn_f.length; ii++) {
            var radButton_f = arRadioBtn_f[ii];
            radButton_f.checked = false;
        }


    }

    if (radioSiok === 'N') {
        document.getElementById("p4_14_Bloque_No").style.display = "block";
        document.getElementById("p4_14_Bloque").style.display = "none";

        var arRadioBtn_a = document.getElementsByName("p4_14_2_a");

        for (var ii = 0; ii < arRadioBtn_a.length; ii++) {
            var radButton_a = arRadioBtn_a[ii];
            radButton_a.checked = false;
        }

        var arRadioBtn_b = document.getElementsByName("p4_14_2_b");

        for (var ii = 0; ii < arRadioBtn_b.length; ii++) {
            var radButton_b = arRadioBtn_b[ii];
            radButton_b.checked = false;
        }

        var arRadioBtn_c = document.getElementsByName("p4_14_2_c");

        for (var ii = 0; ii < arRadioBtn_c.length; ii++) {
            var radButton_c = arRadioBtn_c[ii];
            radButton_c.checked = false;
        }

        var arRadioBtn_d = document.getElementsByName("p4_14_2_d");

        for (var ii = 0; ii < arRadioBtn_d.length; ii++) {
            var radButton_d = arRadioBtn_d[ii];
            radButton_d.checked = false;
        }

        var arRadioBtn_e = document.getElementsByName("p4_14_2_e");

        for (var ii = 0; ii < arRadioBtn_e.length; ii++) {
            var radButton_e = arRadioBtn_e[ii];
            radButton_e.checked = false;
        }


    }

}


function toggleRow_p69() {
    var p6_9_a = document.getElementById('p6_9_a');
   
    var p6_9_a_recibidos23 = document.getElementById('p6_9_a_recibidos23');
    var p6_9_a_favorecidos23 = document.getElementById('p6_9_a_favorecidos23');
    var p6_9_a_recibidos24 = document.getElementById('p6_9_a_recibidos24');
    var p6_9_a_favorecidos24 = document.getElementById('p6_9_a_favorecidos24');
    var p6_9_detalles = document.getElementById('p6_9_detalles');
    var p6_9_b_recibidos23 = document.getElementById('p6_9_b_recibidos23');
    var p6_9_b_favorecidos23 = document.getElementById('p6_9_b_favorecidos23');
    var p6_9_b_recibidos24 = document.getElementById('p6_9_b_recibidos24');
    var p6_9_b_favorecidos24 = document.getElementById('p6_9_b_favorecidos24');


    var p6_9_b = document.getElementById('p6_9_b');
    var p6_9_c = document.getElementById('p6_9_c');
    var p6_9_d = document.getElementById('p6_9_d');


    if (p6_9_a.checked) {
        console.log("A SI ES CHECKED");
        p6_9_a_recibidos23.disabled = false;
        p6_9_a_favorecidos23.disabled = false;
        p6_9_a_recibidos24.disabled = false;
        p6_9_a_favorecidos24.disabled = false;
  
        p6_9_a_recibidos23.required = true;
        p6_9_a_favorecidos23.required = true;
        p6_9_a_recibidos24.required = true;
        p6_9_a_favorecidos24.required = true;
        p6_9_detalles.disabled = true;
        p6_9_detalles.value = "";
        
        p6_9_b_recibidos23.disabled = true;
        p6_9_b_favorecidos23.disabled = true;
        p6_9_b_recibidos24.disabled = true;
        p6_9_b_favorecidos24.disabled = true;
        
          p6_9_b_recibidos23.value = "";
        p6_9_b_favorecidos23.value = "";
        p6_9_b_recibidos24.value = "";
        p6_9_b_favorecidos24.value = "";
    } else if (p6_9_b.checked) {
        /////////////////
        p6_9_b_recibidos23.disabled = false;
        p6_9_b_favorecidos23.disabled = false;
        p6_9_b_recibidos24.disabled = false;
        p6_9_b_favorecidos24.disabled = false;

        p6_9_b_recibidos23.required = true;
        p6_9_b_favorecidos23.required = true;
        p6_9_b_recibidos24.required = true;
        p6_9_b_favorecidos24.required = true;
        //////////////////
        console.log("B ESTA CHECKED Y A NO ESTA CHECKED");
        p6_9_a_recibidos23.disabled = true;
        p6_9_a_favorecidos23.disabled = true;
        p6_9_a_recibidos24.disabled = true;
        p6_9_a_favorecidos24.disabled = true;

        p6_9_a_recibidos23.value = "";
        p6_9_a_favorecidos23.value = "";
        p6_9_a_recibidos24.value = "";
        p6_9_a_favorecidos24.value = "";

        p6_9_a_recibidos23.required = false;
        p6_9_a_favorecidos23.required = false;
        p6_9_a_recibidos24.required = false;
        p6_9_a_favorecidos24.required = false;
        p6_9_detalles.disabled = true;
        p6_9_detalles.value = "";
    } else if (p6_9_c.checked) {
        p6_9_detalles.disabled = true;
        p6_9_detalles.value = "";
        console.log("A NO ESTA CHECKED");
        p6_9_a_recibidos23.disabled = true;
        p6_9_a_favorecidos23.disabled = true;
        p6_9_a_recibidos24.disabled = true;
        p6_9_a_favorecidos24.disabled = true;

        p6_9_a_recibidos23.value = "";
        p6_9_a_favorecidos23.value = "";
        p6_9_a_recibidos24.value = "";
        p6_9_a_favorecidos24.value = "";

        p6_9_a_recibidos23.required = false;
        p6_9_a_favorecidos23.required = false;
        p6_9_a_recibidos24.required = false;
        p6_9_a_favorecidos24.required = false;
        ///////////////////////////////
        console.log("B NO ESTA CHECKED");
        p6_9_b_recibidos23.disabled = true;
        p6_9_b_favorecidos23.disabled = true;
        p6_9_b_recibidos24.disabled = true;
        p6_9_b_favorecidos24.disabled = true;

        p6_9_b_recibidos23.value = "";
        p6_9_b_favorecidos23.value = "";
        p6_9_b_recibidos24.value = "";
        p6_9_b_favorecidos24.value = "";

        p6_9_b_recibidos23.required = false;
        p6_9_b_favorecidos23.required = false;
        p6_9_b_recibidos24.required = false;
        p6_9_b_favorecidos24.required = false;
        /////////////////////
    } else if (p6_9_d.checked) {
        p6_9_detalles.disabled = false;
        console.log("B NO ESTA CHECKED");
        p6_9_b_recibidos23.disabled = true;
        p6_9_b_favorecidos23.disabled = true;
        p6_9_b_recibidos24.disabled = true;
        p6_9_b_favorecidos24.disabled = true;

        p6_9_b_recibidos23.value = "";
        p6_9_b_favorecidos23.value = "";
        p6_9_b_recibidos24.value = "";
        p6_9_b_favorecidos24.value = "";

        p6_9_b_recibidos23.required = false;
        p6_9_b_favorecidos23.required = false;
        p6_9_b_recibidos24.required = false;
        p6_9_b_favorecidos24.required = false;
        console.log("A NO ESTA CHECKED");
        p6_9_a_recibidos23.disabled = true;
        p6_9_a_favorecidos23.disabled = true;
        p6_9_a_recibidos24.disabled = true;
        p6_9_a_favorecidos24.disabled = true;

        p6_9_a_recibidos23.value = "";
        p6_9_a_favorecidos23.value = "";
        p6_9_a_recibidos24.value = "";
        p6_9_a_favorecidos24.value = "";

        p6_9_a_recibidos23.required = false;
        p6_9_a_favorecidos23.required = false;
        p6_9_a_recibidos24.required = false;
        p6_9_a_favorecidos24.required = false;

    }
}
//
// function toggleRow_p69() {
//            const row = document.getElementById('row_p6_9');
//            const inputs = row.querySelectorAll('input[type="number"]');
//            const isChecked = document.getElementById('p6_9_a').checked;
//
//            inputs.forEach(input => {
//                input.disabled = !isChecked;
//                input.required = isChecked;
//                if (!isChecked) {
//                    input.value = ''; 
//                }
//            });
//        } 
//      // Inicialmente deshabilitar los inputs dentro del row_p6_9
//        document.addEventListener('DOMContentLoaded', () => {
//            toggleRow();
//        });


function p9_9_2() {
    var radioSi = document.getElementById('p9_9_2_si');
    var p9_9_2_detalle = document.getElementById('p9_9_2_detalle');

    if (radioSi.checked) {
        p9_9_2_detalle.disabled = false;
        p9_9_2_detalle.required = true;

    } else {

        p9_9_2_detalle.disabled = true;
        p9_9_2_detalle.required = false;
        p9_9_2_detalle.value = "";

    }
}




function valida_114() {
    var siRadio = document.getElementById('p11_4_si');
    const noAdjuntarDiv = document.querySelector(".no_adjuntar114");
    const inputFile = document.getElementById("s114_arch");

    var p11_4 = siRadio ? siRadio.checked : null;

    if (p11_4 === true) {


        if (noAdjuntarDiv) {
            noAdjuntarDiv.style.display = "block";
        } else {
            console.log("El elemento con la clase 'no_adjuntar114' no existe.");
        }
    } else {


        if (noAdjuntarDiv) {
            noAdjuntarDiv.style.display = "none";
        }
    }
}




function valida_2_4() {
    var siRadio = document.getElementById('p2_4_si');
    const noAdjuntarDiv = document.querySelector(".no_adjuntar_24");
    const inputFile = document.getElementById("s2_arch");

    var p2_4 = siRadio ? siRadio.checked : null;

    if (p2_4 === true) {


        if (noAdjuntarDiv) {
            noAdjuntarDiv.style.display = "block";
        } else {
            console.log("El elemento con la clase 'no_adjuntar24' no existe.");
        }
    } else {


        if (noAdjuntarDiv) {
            noAdjuntarDiv.style.display = "none";
        }
    }
}



function p2_5() {
    var textarea = document.getElementById('p2_5_1_nrsol');
    var siRadio = document.getElementById('p2_5_si');
    var fecha = document.getElementById('d_p2_5_2_fecha_emi');
    const noAdjuntarDiv = document.querySelector(".no_adjuntar_25");

    var p2_5 = siRadio ? siRadio.checked : null;


    if (p2_5 === true) {
        noAdjuntarDiv.style.display = "block";
        textarea.disabled = false;
        textarea.required = true;
        fecha.disabled = false;
        fecha.required = true;
    } else {
        noAdjuntarDiv.style.display = "none";
        textarea.disabled = true;
        textarea.value = '';
        textarea.required = false;
        fecha.disabled = true;
        fecha.value = '';
        fecha.required = false;
    }
}





//function validateForm() {
//    var dniInput = document.getElementById('dni_defensor_demuna');
//    if (dniInput.value.length !== 8) {
//        alert("El DNI debe tener exactamente 8 dígitos.");
//        return false;
//    }
//    return true;
//}

//// Attach validateForm function to the form's onsubmit event
//document.addEventListener('DOMContentLoaded', function () {
//    var form = document.querySelector('form');
//    form.onsubmit = validateForm;
//});



//
//function cerrarCuadro2() {
//
//    var loc = window.location;
//    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 0);
//    var url = loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
//    var newurl = url + '/cargaCuadro/';
//    newurl = newurl.replace("a//c", 'a/c');
//
//    // $("#demuna_ficha_s4_p4_id_ficha").val(6);
//    // $("#demuna_ficha_s4_p4_profesion").val("A");
//
//    switch ($("#demuna_ficha_s4_p4_profesion").val()) {
//        case "A":
//            $("#table_4_14 tr>td").remove();
//            break;
//        case "B":
//            $("#table_4_20 tr>td").remove();
//            break;
//        case "C":
//            // alert("entrooo ok4: ");
//            $("#table_4_24 tr>td").remove();
//            break;
//        case "D":
//            $("#table_4_29 tr>td").remove();
//            break;
//        case "E":
//            $("#table_4_34 tr>td").remove();
//            break;
//    }
//alert($("#id_ficha").val());
//alert($("#demuna_ficha_s4_p4_profesion").val());
//    $.ajax({
//        url: newurl,
//        type: "POST",
//        data: {id_ficha: $("#id_ficha").val(), profesion: $("#demuna_ficha_s4_p4_profesion").val()},
//        success: function (respuesta) {
//            alert(respuesta);
//            switch ($("#demuna_ficha_s4_p4_profesion").val()) {
//                case "A":
//                    $("#table_4_14").html(respuesta);
//                    break;
//                case "B":
//                    $("#table_4_20").html(respuesta);
//                    break;
//                case "C":
//                    $("#table_4_24").html(respuesta);
//                    break;
//                case "D":
//                    $("#table_4_29").html(respuesta);
//                    break;
//                case "E":
//                    $("#table_4_34").html(respuesta);
//                    break;
//            }
//        }, error: (jqXHR) => {
//            if (jqXHR.status === 403) {
//                alert("Timeout fuera: " + location);
//                location.replace("/login");
//            }
//        }
//    });
//}




function cerrarCuadro2() {
    limpiarCuadro(); 

    var loc = window.location;
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 0);
    var url = loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
    var newurl = url + '/cargaCuadro/';
    newurl = newurl.replace("a//c", 'a/c');

    $.ajax({
        url: newurl,
        type: "POST",
        data: {id_ficha: $("#id_ficha").val(), profesion: $("#demuna_ficha_s4_p4_profesion").val()},
        success: function (respuesta) {
            //alert(respuesta);
            switch ($("#demuna_ficha_s4_p4_profesion").val()) {
                case "A":
                    $("#table_4_14").html(respuesta);
                    break;
                case "B":
                    $("#table_4_20").html(respuesta);
                    break;
                case "C":
                    $("#table_4_24").html(respuesta);
                    break;
                case "D":
                    $("#table_4_29").html(respuesta);
                    break;
                case "E":
                    $("#table_4_34").html(respuesta);
                    break;
            }
        }, error: (jqXHR) => {
            if (jqXHR.status === 403) {
                alert("Timeout fuera: " + location);
                location.replace("/login");
            }
        }
    });
}


function toggleGuardarButtonVisibility() {
    var radio = document.getElementById('no_implementado');
    var no_boton = document.getElementById('no_boton');

    if (radio.checked) {
        // Si el checkbox está marcado, ocultar el botón de guardar
        no_boton.style.display = 'none';
    } else {
        // Si el checkbox no está marcado, mostrar el botón de guardar
        no_boton.style.display = 'block';  // o 'inline-block' dependiendo del estilo necesario
    }
}

function toggleGuardarButtonVisibility2() {
    var radio = document.getElementById('no_funciona');
    var no_boton = document.getElementById('no_boton');

    if (radio.checked) {
        // Si el checkbox está marcado, ocultar el botón de guardar
        no_boton.style.display = 'none';
    } else {
        // Si el checkbox no está marcado, mostrar el botón de guardar
        no_boton.style.display = 'block';  // o 'inline-block' dependiendo del estilo necesario
    }
}
//
//function toggleGuardarButtonVisibility2() {
//    var radio = document.getElementById('no_funciona');
//    var no_boton = document.getElementById('no_boton');
//
//    if (radio.checked) {
//        // Si el checkbox está marcado, ocultar el botón de guardar
//        no_boton.style.display = 'none';
//    } else {
//        // Si el checkbox no está marcado, mostrar el botón de guardar
//        no_boton.style.display = 'block';  // o 'inline-block' dependiendo del estilo necesario
//    }
//}



function deshabilita2_2() {
    const radioSi = document.getElementById("p2_2_si");
    const radioNo = document.getElementById("no_funciona");
    const deshabilitaP2 = document.getElementById("deshabilitap2");
    const row_2_6 = document.getElementById("row_2_6");
    const row_271= document.getElementById("row_271");
    if (!radioSi || !radioNo || !deshabilitaP2) {
        console.error("No se encontraron todos los elementos requeridos.");
        return;
    }
    
    const radios = deshabilitaP2.querySelectorAll("input[type='radio']");
    const checkboxes = deshabilitaP2.querySelectorAll("input[type='checkbox']");
    const checkboxes26 = row_2_6.querySelectorAll("input[type='checkbox']");
    const inputs26 = row_2_6.querySelectorAll("input[type='text']");
    const checkboxes27 = document.querySelectorAll("#row2_7_dht input[type='checkbox']");
    const checkboxes271 = row_271.querySelectorAll("input[type='checkbox']");
    
    if (radioNo.checked || !radioSi.checked) {
        // Deshabilita y limpia todo dentro de deshabilitap2
        radios.forEach(radio => {
            radio.checked = false;
            radio.disabled = true;
            radio.required = false;
        });
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
            checkbox.disabled = true;
            checkbox.required = false;
        });
       // Deshabilita y limpia los checkboxes y inputs dentro de row_2_6
        checkboxes26.forEach(checkbox => {
            checkbox.checked = false;
            checkbox.disabled = true;
            checkbox.required = false;
        });
        inputs26.forEach(input => {
            input.value = '';
            input.disabled = true;
            input.required = false;
        });
    // Deshabilita y limpia los checkboxes en el div row2_7_dht
        checkboxes27.forEach(checkbox => {
            checkbox.checked = false;
            checkbox.disabled = true;
            checkbox.required = false;
        });
    } else if (radioSi.checked) {
        // Habilitar los radios y poner required
        radios.forEach(radio => {
            radio.disabled = false;
            radio.required = true;
        });
      
        // Deshabilita y limpia los checkboxes y inputs dentro de row_2_6
        checkboxes26.forEach(checkbox => {
             checkbox.disabled = false;
            checkbox.required = true;
        });
        inputs26.forEach(input => {
            input.disabled = false;
            input.required = true;
        });
        // Habilitar los checkboxes y poner required en el div row2_7_dht
        checkboxes27.forEach(checkbox => {
            checkbox.disabled = false;
            checkbox.required = true;
        });
        
        checkboxes271.forEach(checkbox => {
             checkbox.checked = false;
            checkbox.disabled = true;
            checkbox.required = false;
        });
        
    }

checkCheckboxes26();
checkCheckboxes27();
checkCheckboxes271();
}


// Función para actualizar el estado required de los checkboxes en el grupo row_2_6
function checkCheckboxes26() {
    const row_2_6 = document.getElementById("row_2_6");
    const checkboxes = row_2_6.querySelectorAll("input[type='checkbox']");
    const anyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

    checkboxes.forEach(checkbox => {
        checkbox.required = !anyChecked;
    });
}

// Función para actualizar el estado required de los checkboxes en el grupo row2_7_dht
function checkCheckboxes27() {
    const checkboxes = document.querySelectorAll("#row2_7_dht input[type='checkbox']");
    const anyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

    checkboxes.forEach(checkbox => {
        checkbox.required = !anyChecked;
    });
}

// Función para actualizar el estado required de los checkboxes en el grupo row_271
function checkCheckboxes271() {
    const row_271 = document.getElementById("row_271");
    const checkboxes = row_271.querySelectorAll("input[type='checkbox']");
    const anyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

    checkboxes.forEach(checkbox => {
        checkbox.required = !anyChecked;
    });
}

// Evento para inicializar la función deshabilita2_2() al cargar la página y en cambios de los radios
document.addEventListener("DOMContentLoaded", function() {
    deshabilita2_2();
    document.getElementById("p2_2_si").addEventListener("change", deshabilita2_2);
    document.getElementById("no_funciona").addEventListener("change", deshabilita2_2);

    // Agregar eventos de cambio para los checkboxes de cada grupo
    document.querySelectorAll("#row_2_6 input[type='checkbox']").forEach(checkbox => {
        checkbox.addEventListener("change", checkCheckboxes26);
    });

    document.querySelectorAll("#row2_7_dht input[type='checkbox']").forEach(checkbox => {
        checkbox.addEventListener("change", checkCheckboxes27);
    });

    document.querySelectorAll("#row_271 input[type='checkbox']").forEach(checkbox => {
        checkbox.addEventListener("change", checkCheckboxes271);
    });
});