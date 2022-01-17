/*

    datos=[{dni:"77382414H",nombre:"Guillermo"},
            {dni:"77382413V",nombre:"Jesus"}];

*/

//CREMAOS LA TABLA

function createTable(data){

    var countRows = data.length;
    $("#data").append("<th><td>Dni</td><td>Nombre</td></th>","<tbody>");

    console.log();
    
    for (var row = 0; row<countRows; row++) {
        
        $("#data tbody").append("<tr></tr>");
        for (var column = 0; column<2; column++) {
        
            console.log($("#data tbody tr").eq(row).children()[column].append("hola"));
        }
    }

}

$(document).ready(function(){

    data = [{dni:"77382414H",name:"Guillermo"},
            {dni:"11111111J",name:"Pablo"},
            {dni:"73338674M",name:"Laura"},]

    createTable(data);
});