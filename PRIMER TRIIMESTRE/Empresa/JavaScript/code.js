function validaDNI (dni) {
    
    var numero=dni.substr(0,dni.length-1);
    return "TRWAGMYFPDXBNJZSQVHLCKET"[numero%23]==dni.substr(-1).toUpperCase();
}