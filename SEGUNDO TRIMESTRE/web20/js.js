$(function(){

    //#################################################################################################################################### EJERCICIO 1

    var todosLosEnlacesDetalle=$("a[id^='detalle']");//todos los enlaces que empiezan por detalle
    //console.log(todosLosEnlacesDetalle);

    todosLosEnlacesDetalle.click(function(ev){

        ev.preventDefault();
        var numeroProducto=$(this).attr("id").split("_")[1];//separamos el detalle del producto por la barra baja y cogemos la posicion 1 (el numero)
        //alert("Has pulsado sobre el detalle: "+numeroProducto);
        guardarProductos(divEnMemoria)
        detalleProducto(numeroProducto);
         
    });

    //################################################################################################################################# FIN APARTADO A


    var todosLosEnlacesComprar=$("a[id^='comprar']");//todos los enlaces que empiezan por detalle
    //console.log(todosLosEnlacesComprar);

    todosLosEnlacesComprar.click(function(ev){

        ev.preventDefault();
        var numeroProducto=$(this).attr("id").split("_")[1];//separamos el detalle del producto por la barra baja y cogemos la posicion 1 (el numero)
        alert("Has pulsado sobre el producto: "+numeroProducto);
        //comprarProducto(id);
         
    });

    //################################################################################################################################# FIN APARTADO B

    var enlaceCarrito=$("#ver_carrito");//todos los enlaces que empiezan por detalle
    //console.log(enlaceCarrito);

    enlaceCarrito.click(function(ev){

        ev.preventDefault();
        //mostrarCarrito();
         
    });

    //################################################################################################################################# FIN APARTADO C






    //#################################################################################################################################### EJERCICIO 2

    var todasLasImagenes=$("img[id^='imagen']");
    //console.log(todasLasImagenes);

    todasLasImagenes.draggable({ opacity: 0.7, helper: "clone", revert: true, stop:function(){

        //comprarProducto(id);

    }});

    //#################################################################################################################################### EJERCICIO 3

    var divEnMemoria=$("<div>").attr("id","divMemoria");
    //console.log(divEnMemoria);

    //################################################################################################################################# FIN APARTADO A

    function guardarProductos(divEnMemoria){

        $(".titulo_zona").empty();
        $(".cuerpo").children().appendTo(divEnMemoria);
    }

    //################################################################################################################################# FIN APARTADO B

    function restauraProductos(divEnMemoria,cajaContenedora){

        cajaContenedora.append(divEnMemoria);
    }

    //################################################################################################################################# FIN APARTADO C


    function detalleProducto(id){

        var plantilla=$("<div>").appendTo($(".cuerpo")).load("plantillas/detalle.html",function(){


            $.getJSON("http://localhost/CLIENTE/SEGUNDO%20TRIMESTRE/web20/ajax.php?accion=detalle&id="+id,function(data){

            $(".titulo_zona").text(data.nombre);//nombre del producto

            plantilla.find(".precio").text(data.precio+" €"); //precio

            plantilla.find(".info p").text(data.descripcion);

            //imagen
            (id.length<2)? imgName="0"+id+"coc.jpg":imgName=id+"coc.jpg";

            plantilla.find("img").attr("src","index_files/"+imgName);
            });

        });

        
        
        


        
    }
})