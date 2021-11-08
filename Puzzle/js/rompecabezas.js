var desplazamiento=[]

var celda;

function creatabla(dimension){
    return function()
    {
        var x=0;
        var y=0;
        var img = document.getElementsByTagName("img")[0];
        var width = img.clientWidth;
        const tamañoCelda=width/dimension;
        celda=tamañoCelda;
        
        for(var fila=0;fila<dimension;fila++)
        {
            var tr=document.createElement("tr");
            for(var columna=0;columna<dimension;columna++)
            {
                
                var td=document.createElement("td");
                td.className="imagen";
                td.style.width=tamañoCelda+"px";
                td.style.height=tamañoCelda+"px";
                td.style.backgroundPositionX="-"+x+"px";
                td.style.backgroundPositionY="-"+y+"px";

                desplazamiento.push("-"+x+"px"+" "+"-"+y+"px");//["-100px -200px","-300px -400px","-500px -600px"]

                td.style.borderLeft="5px";
                td.style.borderStyle="solid";
                td.style.borderColor="white";
                
                tr.appendChild(td);
                x=x+tamañoCelda;
                
            }
            var tabla = document.getElementById("tabla");
            tabla.appendChild(tr);

            x=0;
            y=y+tamañoCelda;
        }
        return desplazamiento;
    }
}

function desordenaTabla(dimension){
    return function()
    {
        var x=0;
        var y=0;
        var img = document.getElementsByTagName("img")[0];
        var width = img.clientWidth;
        const tamañoCelda=width/dimension;
        var tabla=document.createElement("table");
        tabla.setAttribute("id","ready");
        var contador=0;
        var desplazamientoDesordenado=desplazamiento.concat([]);
        desplazamientoDesordenado = desplazamientoDesordenado.sort(function(){ return Math.random() -0.5});

        for(var fila=0;fila<dimension;fila++)
        {
            var tr=document.createElement("tr");
            for(var columna=0;columna<dimension;columna++)
            {
                
                var td=document.createElement("td");
                td.className="imagen";
                td.style.width=tamañoCelda+"px";
                td.style.height=tamañoCelda+"px";
                
                td.style.backgroundPosition=""+desplazamientoDesordenado[contador];
                td.style.borderLeft="5px";
                td.style.borderStyle="solid";
                td.style.borderColor="white";
                td.className="imagen zoom";
                if(contador==(dimension*dimension)-1){
                    td.className="vacio";
                    td.style.backgroundColor="white";
                    td.style.display="inline-block";
                    td.style.position="relative";
                }
                tr.appendChild(td);
                x=x+tamañoCelda;
                contador++;
            }
            
            tabla.appendChild(tr);
            tabla.style.border="4px";
            tabla.style.borderStyle="solid";
            tabla.style.borderColor="black";
            tabla.style.padding="5px";
            document.getElementsByTagName("body")[0].appendChild(tabla);

            x=0;
            y=y+tamañoCelda;
        }
        
    }
}

function moverTd(tdPulsado, dimension, i){//tdPulsado,aux,casillaBlanca
    
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var tabla = document.getElementById("ready");
    var tdBlanco = document.getElementsByClassName("vacio")[0];
    var filaBlanco = tdBlanco.parentElement;
    var filaPulsado = tdPulsado.parentElement;
    td1 = tdPulsado;
    td2 = tdBlanco;

    tdPulsado.parentElement.removeChild(tdPulsado);
    tdBlanco.parentElement.removeChild(tdBlanco);

    filaBlanco.appendChild(td2);
    filaPulsado.appendChild(td1);
}

function calculaMovimiento(tdPulsado, dimension){
    
    var xPulsada, xVacia;
    var yPulsada, yVacia;
    var casillaBlanca = document.getElementsByClassName("vacio")[0];

    //CONVERTIMOS XVACIA E YVACIA A NUMEROS

    xVacia = casillaBlanca.style.backgroundPositionX;
    xVacia=xVacia.substring(0,xVacia.length-2);
    xVacia = parseInt(xVacia, 10);

    yVacia = casillaBlanca.style.backgroundPositionY;
    yVacia=yVacia.substring(0,yVacia.length-2);
    yVacia = parseInt(yVacia, 10);

    //CONVERTIMOS XPULSADA E YPULSADA A NUMEROS

    xPulsada = tdPulsado.style.backgroundPositionX;
    xPulsada=xPulsada.substring(0,xPulsada.length-2);
    xPulsada = parseInt(xPulsada, 10);

    yPulsada = tdPulsado.style.backgroundPositionY;
    yPulsada=yPulsada.substring(0,yPulsada.length-2);
    yPulsada = parseInt(yPulsada, 10);

    //console.log("Posicion X - Vacia: "+xVacia+"\nPosicion Y - Vacia: "+yVacia+"\nPosicion X - Pulsada: "+xPulsada+"\nPosicion Y - Pulsada: "+yPulsada)
    debugger
    if (((xPulsada==xVacia-celda) || (xPulsada==xVacia+celda)) || ((yPulsada==yVacia-celda) || (yPulsada==yVacia+celda))){

        return true;
    }else{

        return false;
    }
}

function startgame(dimension){
    return function(){
        creatabla(dimension)();
        desordenaTabla(dimension)();
        document.getElementById("primeraImagen").style.display="none";
        document.getElementsByTagName("table")[0].style.display="none";
        var tds = document.querySelectorAll("table#ready tr td");
        for(let i=0;i<(dimension*dimension)-1;i++){

            tds[i].onclick=function(){
                
                if(calculaMovimiento(tds[i], dimension)){

                    moverTd(tds[i],dimension,i);
                }
            }

                
        }
        
    }
}
window.addEventListener("load",function(){
    dimension=5;
    document.getElementById("primeraImagen").onclick=startgame(dimension);
    
    
})

/*

if (((xPulsada==xVacia-1 || xPulsada=xVacia+1) || (yPulsada=yVacia-1 || yPulsada=yVacia+1))




*/