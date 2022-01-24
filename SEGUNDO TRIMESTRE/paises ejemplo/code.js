$(document).ready(function(){

    $("#boton").click(function(){ 
        var nombrePais=$("#inputPais").val();
        $.getJSON("https://restcountries.com/v3.1/name/"+nombrePais,function(data){
            console.log(data)
            $.each(data,function(ind,valor){

                console.log(valor.translations.spa.official);
                console.log(valor.flags.png);
                $("<option></option>").text(valor.translations.spa.official).appendTo($("#areaPais")).click(function(valor){

                    cargarPais($("#areaPais"));
                    // return function(){

                    //     $("#bandera").empty().attr("src",valor.flags.png);
                    // }

                }(valor));
                
            }); 
            
        });
    });

    function cargarPais(pais){

        var valores=[pais.capital,
                    pais.population,
                    pais.currencies[Object.getOwnPropertyNames(pais.currencies)[0].name],
                    pais.currencies[Object.getOwnPropertyNames(pais.currencies)[0].symbol]
                    ];

        var detallePais=$("<div>").load("plantillas/informacionPais.html",function(data,estado){

            $(this).find("img").attr("src",pais.flags.png);
            $(this).find("span.valor").each(function(ind,val){

                val.text(valores[ind]);
            });

            $(this).find("iframe").attr("src",pais.maps.openStreetMaps);
            
        }).appendTo($("body"));
        
        
    }
});