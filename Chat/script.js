window.addEventListener("load",function(){

    const enviar=document.getElementById("Enviar");
    const form = document.getElementById("form1");
    const contenedor = document.getElementById("contenedor");
    var ultimo=0;
    var usuario = form["txtUsuario"];
    var mensaje = form["areaMensaje"];
    usuario.value=localStorage.getItem("nombreUsuario");

    mensaje.onkeydown=function(ev){

        if(ev.key=="Enter"){

            enviar.click();
            mensaje.value="";
        }
    }

    enviar.onclick=function(ev){
        ev.preventDefault();
        if(usuario.value!="" && mensaje.value!=""){

            localStorage.setItem("nombreUsuario",usuario.value);

            const ajax = new XMLHttpRequest();//CREAMOS EL OBJETO AJAX
            ajax.onreadystatechange=function(){
                if(ajax.readyState==4 && ajax.status==200){//SI EL SERVIDOR RESPONDE BIEN...
                    var respuesta = ajax.responseText;//CAPTURAMOS LA RESPUESTA QUE ES CAPTURADA POR EL AJAX
                }
            }
            ajax.open("POST","peticiones.php");
            ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//ESPECIFICAMOS QUE ENVIAMOS DESDE UN FORMULARIOLL
            ajax.send("peticion=escribirMensajes&enviar=&txtUsuario=" + usuario.value + "&" + "areaMensaje=" + mensaje.value);
        }
    }

    setInterval(pedirMensajes, 2000);
    setInterval(function(){

        
    },100000);

    function pedirMensajes(){
        
        const ajax = new XMLHttpRequest();
        ajax.onreadystatechange=function(){
            
            if(ajax.readyState==4 && ajax.status==200){
                var respuesta = JSON.parse(ajax.responseText);
                if(respuesta.mensajes.length>0){
    
                    for(let i=0;i<respuesta.mensajes.length;i++){
    
                        var div=crearContenido(respuesta.mensajes[i],usuario.value);
                        contenedor.appendChild(div);
                        document.getElementById("contenedor").scrollTop=document.getElementById("contenedor").scrollHeight
                    }
                }
                ultimo=respuesta.ultimo;
            }
    
        }
    
        ajax.open("POST","peticiones.php");//pondiramos la ruta del archivo que se encarga de hacer algoque no me he enterao
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        console.log(ultimo);
        ajax.send("peticion=pedirMensajes&ultimo="+ultimo);
    
    }
    
    function crearContenido(mensaje,usuario){
    
        var claseUsuario = (mensaje.usuario==usuario)?"propio":"otros";
        const div1 = document.createElement("div");
        div1.className=claseUsuario;
        const div2 = document.createElement("div");
        div2.className="usuario";
        div2.innerHTML=mensaje.usuario;
        const div3 = document.createElement("div");
        div3.className="hora";
        div3.innerHTML=mensaje.fecha;
        const div4 = document.createElement("div");
        div4.className="mensaje";
        div4.innerHTML=mensaje.mensaje;
        div1.appendChild(div2);
        div1.appendChild(div3);
        div1.appendChild(div4);
        return div1;
    
    }
});



