window.addEventListener("load",function(){
    const btn = getElementById("Enviar");
    const respuesta = this.document.getElementById("respuesta");
    btn.onclick=function(ev){

       ev.preventDefault();
        var nombre = form["nombre"].value;
        var apellido = form["apellido"].value;
        const ajax = new XMLHttpRequest();
        ajax.onload=function(){

            respuesta.innerHTML=this.responseText;
        }
        ajax.open("GET", "code.php?nombre="+nombre+"&"+"apellido="+apellido);
    }
})