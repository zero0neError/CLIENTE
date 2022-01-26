$(function(){

    var arrayPaises=[];
    $("select:first-child option").on("click",function(){
        $("#select").empty();
        arrayPaises=[];
        var nombreContinente = $("#continente").val();
        $.getJSON("https://restcountries.com/v3.1/region/"+nombreContinente,function(data){
            console.log(data);
            
            $.each(data,function(ind,valor){
            
                nombres=valor.translations.spa.official;
                arrayPaises.push(nombres);
            });
        
            arrayPaises.sort(function(a,b){return a.localeCompare(b)});

            for(let i=0;i<arrayPaises.length;i++){

                $("<option></option>").text(arrayPaises[i]).appendTo($("#select"));
            }

            //hacer el click
            $("#select:last-child option").on("click", function(){

                //abrirModal();
                $("<div>").attr("id","pais").text(function(){
                    var nombreCompletoPais = $("#select").val();
                    
                    $.getJSON("https://restcountries.com/v3.1/name/"+nombreCompletoPais+"?fullText=true",function(data){

                        $.each(data,function(ind,valor){
            
                            bandera=valor.translations.spa.official;
                            arrayPaises.push(nombres);
                        });
                    })
                }).appendTo($("body"));
                
            });
        });
        
        
    });
});