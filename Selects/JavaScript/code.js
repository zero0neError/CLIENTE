window.addEventListener("load", function(){
    
    const btnRightAll= document.getElementById("btnRightAll");
    const btnRight = document.getElementById("btnRight");
    const btnLeft = document.getElementById("btnLeft");
    const selectRight = document.getElementById("seleccionados");
    const selectLeft = document.getElementById("alumnos");

    const cabeceraCampo1 = this.document.querySelectorAll("table tr td")[0]
    const cabeceraCampo2 = this.document.querySelectorAll("table tr td")[2]

    btnRightAll.onclick=function(){
        
        selectRight.añadirTodos(selectLeft);
    };

    btnLeftAll.onclick=function(){
        
        selectLeft.añadirTodos(selectRight);
    };

    btnRight.onclick=function(){
        selectRight.añadir(selectLeft);
        selectRight.ordena()
        selectRight.value = "";
    }

    btnLeft.onclick=function(){
        selectLeft.añadir(selectRight);
        selectLeft.ordena();
        selectLeft.value = "";
    }

    selectLeft.onclick=function(){
        elements = selectLeft.children;
        if(elements.length>0){//Si hay elementos dentro del select (options) genera el JSON
            var vector = [];
            for(let i=0;i<elements.length;i++){
               
                vector.push("{value: "+elements[i].value+", text: "+elements[i].innerHTML+"}");
            }
            var jsonText = JSON.stringify(vector);
            console.log(jsonText);

        }
    }

    selectRight.onclick=function(){

        
    }
})