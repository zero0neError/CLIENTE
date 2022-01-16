/*
1. Todos los "li" que estan dentro del "ul" de color rojo - check
2. Borrar el primer li de cada ul o ol - check
3. los li en posicion par fondo amarillo - check
4. el ultimo li lo situamos el primero - check
5. los li en posicion impar los escribimos en mayuscula - check
6. añadimos en la tercera posicion un li con el texto "atun" - check
7. al pulsar sobre un li con "click" lo situamos delante del inmediato superior - check
8. al pulsar sobre un li con "dblclick" lo situamos detras del inmediato inferior - check
9. al posicionarme sobre un li se aumenta el tamaño de la letra a 30px despues de 2 segundos - check
10. Añadir una ventana,pantalla completa,fondo semitransparente y dentro un mensaje con cruz para poder cerrarlo.- noCompleted
*/



$(document).ready(function(){
   
    /*EJERCICIO 1*/
    $("#1").click(function(){

        $("ul li").css({"color":"red"});
    });
   

    /*EJERCICIO 2*/
    $("#2").click(function(){

        $("ul,ol li:first").hide();
    });
    

    /*EJERCICIO 3*/
    $("#3").click(function(){

        $("li:odd").css({"background-color":"yellow"});
    });
   

    /*EJERCICIO 4*/
    $("#4").click(function(){

        $("ul li:last").insertBefore($("ul li:first"));
    });

    /*EJERCICIO 5*/
    $("#5").click(function(){

        $("li:even").css({"text-transform":"capitalize"});
    });
   

    /*EJERCICIO 6*/
    $("#6").click(function(){

        $("<li>atún</li>").insertBefore($("ul li").eq(2));
    });
   

    /*EJERCICIO 7*/
    $("li").on("click",function(){

        $(this).insertBefore("ul li:first-child");
    });

    /*EJERCICIO 8*/
    $("li").on("dblclick",function(){

        $(this).insertAfter("ul li:first-child");
    });

    /*EJERCICIO 9*/
    $("ul li").hover(function(){

        $(this).delay(2000).animate({fontSize: "30px"});;
    });

    /*EJERCICIO 10*/
    $("#10").click(function(){

        myWindow=window.open("","New Window", "fullscreen=yes");//no va la pantalla completa
        //no he logrado encontrar como hacerla transparente
        //y no se acceder a la ventana abierta con jquery, he intentado $(myWindow), y tambien myWindow.$(document.body) este ultimo no tiene mucho sentido pero por probar...
    });

});
