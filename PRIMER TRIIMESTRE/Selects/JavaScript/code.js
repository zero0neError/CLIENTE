window.addEventListener("load", function(event){
    
    const btnRightAll= document.getElementById("btnRightAll");
    const btnRight = document.getElementById("btnRight");
    const btnLeft = document.getElementById("btnLeft");
    const selectRight = document.getElementById("seleccionados");
    const selectLeft = document.getElementById("alumnos");
    const btnSave = document.getElementById("btnSave");
    const btnInsert = document.getElementById("btnInsert");

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

    btnSave.onclick=function(){

        var jsonText = selectRight.creaJson();
        console.log(jsonText);
    }

    btnInsert.onclick=function(){
        
        const textInsert = document.getElementById("textInsert").value;
        var option = document.createElement("option");
        var numberOptions = selectLeft.children.length+1;
        option.value = "al"+numberOptions;
        option.innerHTML = textInsert;
        option.setAttribute("ondragstart","dragStart(event)");
        option.draggable="true";
        option.id=option.value;
          
        selectLeft.appendChild(option);
    } 

    var alumnos = JSON.parse(localStorage.getItem("alumnos"));
    for(let i=0;i<alumnos.length;i++){

        var option = document.createElement("option");
        option.value = alumnos[i].value;
        option.text= alumnos[i].text;
        option.setAttribute("ondragstart","dragStart(event)");
        option.draggable="true";
        option.id=option.value;  
        selectLeft.appendChild(option);
    }
})

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}
  
function allowDrop(event) {
    event.preventDefault();
}
  
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
}
