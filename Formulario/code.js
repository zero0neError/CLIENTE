function createTable(){
    /*Asi debe quedar todo:
    <table>
        <thead id="THEAD">
            <td id="THEAD_DNI">DNI</td>
            <td id="THEAD_NOMBRE">NOMBRE</td>
            <td id="THEAD_EDAD">EDAD</td>
        </thead>
        <tbody id="TBODY">
            <tr> o tambien llamado fila
                <td>11111111H</td>
                <td>Guillermo</td>
                <td>19</td>
                <td>"Editar""Borrar"</td>
            </tr>
        </tbody>
    </table>*/
    var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");  
    var tbody = document.createElement("tbody");

    tbody.setAttribute("id","TBODY")

    var thead = document.createElement("thead");
    thead.setAttribute("id","THEAD");

    var tDni = document.createElement("td");
    tDni.innerHTML="DNI";
    tDni.setAttribute("id","THEAD_DNI");

    var tNombre = document.createElement("td");
    tNombre.innerHTML="NOMBRE";
    tNombre.setAttribute("id","THEAD_NOMBRE");

    var tEdad = document.createElement("td");
    tEdad.innerHTML="EDAD";
    tEdad.setAttribute("id","THEAD_EDAD");

    var tOp= document.createElement("td");
    tOp.innerHTML="OPCIONES";
    tEdad.setAttribute("id","THEAD_OP");

    thead.appendChild(tDni);
    thead.appendChild(tNombre);
    thead.appendChild(tEdad);
    thead.appendChild(tOp);
    tabla.appendChild(thead);
    tabla.appendChild(tbody);
    body.appendChild(tabla);
}

function añadeFila(){
    //CUANDO PULSAMOS EL BOTON AÑADIMOS UNA FILA DONDE CADA ELEMENTO ES LO RECOGIDO DE LOS INPUTS
    var tbody=document.getElementById("TBODY");
    var Dni=document.getElementById("txtDni").value;
    var Nombre=document.getElementById("txtNombre").value;
    var Edad=document.getElementById("txtEdad").value;
    var fila = document.createElement("tr");
    var celdaDni=document.createElement("td");
    celdaDni.innerHTML=Dni;
    var celdaNombre=document.createElement("td");
    celdaNombre.innerHTML=Nombre;
    var celdaEdad=document.createElement("td");
    celdaEdad.innerHTML=Edad;

    var celdaOpciones= document.createElement("td");

    var btnBorrar = document.createElement("span");
    btnBorrar.className="btnImg borrar";
    btnBorrar.setAttribute("id","btnBorrar");
    celdaOpciones.appendChild(btnBorrar);//Aqui ponemos una funcion que se encarge de poner la imagen a traves de un string que sera "borrar", "editar"
    btnBorrar.onclick=borraFila();
    
    var btnEditar = document.createElement("span");
    btnEditar.className="btnImg editar";
    btnBorrar.setAttribute("id","btnEditar");
    celdaOpciones.appendChild(btnEditar);

    fila.appendChild(celdaDni);
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaEdad);
    fila.appendChild(celdaOpciones);

    tbody.appendChild(fila);
}

function ordenaColumna(columna){
    var tbody=document.getElementById("TBODY");
    return function(){

        var fila = tbody.children;
        var lista=[];
        var elementosPorColumna = [];
        for(let i=0;i<fila.length;i++){

            lista.push(fila[i]);
        }
        
        lista.sort(function(a,b){return a.children[columna].innerText.localeCompare(b.children[columna].innerText) });

        for(let i=0;i<tbody.rows.length;i++){

            tbody.appendChild(lista[i])
        }
    }
}

function validaDni(dni){

    letraDni = dni.substr(8);
    indexLetra = (dni.substr(0,8))%23;
    letrasValidas="TRWAGMYFPDXBNJZSQVHLCKE";
    return letrasValidas[indexLetra]==letraDni;

}

function borraFila(){
    return function(){

        var tbody = document.getElementById("TBODY");
        fila=this.parentElement.parentElement;
        tbody.removeChild(fila);
    }
    
}

function editaFila(){

    return function(){

        createTable();
    }
}

window.addEventListener("load", function(){
    createTable();
    /*for(let i=0;i<document.getElementById("THEAD").children.length;i++){

        document.getElementById("THEAD").children[i].onclick=ordenaColumna(i);
    }*/
    document.getElementById("btn").onclick = function(ev){
        ev.preventDefault();
        if (validaDni(document.getElementById("txtDni").value)){
            document.getElementById("txtDni").style.borderColor="blue";  
            añadeFila();
        }else{
            document.getElementById("txtDni").style.borderColor="red";
        }
        
    }

    var cabeceraDni = document.querySelectorAll("table thead td")[0]
    var cabeceraNombre = document.querySelectorAll("table thead td")[1]
    var cabeceraEdad = document.querySelectorAll("table thead td")[2]

    cabeceraDni.onclick=ordenaColumna(0);
    cabeceraNombre.onclick=ordenaColumna(1);
    cabeceraEdad.onclick=ordenaColumna(2);

    var editar = document.getElementById("btnEditar");
    var borrar = document.getElementById("btnBorrar");
    borrar.onclick=borraFila();
    editar.onclick=editaFila();
});

