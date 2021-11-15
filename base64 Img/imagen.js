window.addEventListener("load",function(){
    const form = document.getElementById("form1");
    const img = document.getElementById("tonta");
    const fichero = form["archivo"];
    const boton = form["enviar_imagen"];

    boton.onclick=function(ev){
        ev.preventDefault();
        console.log(fichero.files[0]);
        var reader = new FileReader();
        reader.onload=function(ev){
            img.setAttribute("src",ev.target.result);
            console.log(ev.target.result);
        }
        reader.readAsDataURL(fichero.files[0]);
    }
})