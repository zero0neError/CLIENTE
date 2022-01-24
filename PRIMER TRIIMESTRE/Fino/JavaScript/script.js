window.addEventListener("load",function(){

    var txtDni = document.getElementById("textDni");
    var count;
    txtDni.onkeydown=function(ev){
        if(ev.key){


        }
        ++count;
        if (txtDni.value.length==8){

            count=0;
            var txtValue = this.value;
            if(validaDNI(txtValue)){

            }
        }
    })
})

function validaDNI(dni) {
    
    var numero=dni.substr(0,dni.length-1);
    return "TRWAGMYFPDXBNJZSQVHLCKET"[numero%23]==dni.substr(-1).toUpperCase();
}