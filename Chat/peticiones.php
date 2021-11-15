<?php

if(isset($_POST["peticion"])){
    if($_POST['peticion']=="pedirMensajes"){
        include_once "BD.php";
           
        if(BD::conectar()){

            if (isset($_POST['ultimo'])){
                $siguiente=$_POST["ultimo"] +1;
            }
            else{
                $siguiente=1;
            }
            $ultimo=0;
            $sql="SELECT * FROM mensaje where Id>=${siguiente} order by Id asc";
            
            $consulta = BD::getConexion()->query($sql);
            $object=new stdClass();
            $object->mensajes=[];
            $ultimo=$siguiente-1;
            while($registro = $consulta->fetch()){
    
                $objMensaje =  new stdClass();
                $objMensaje->id=$registro['Id'];
                $objMensaje->usuario=$registro['Usuario'];
                $objMensaje->mensaje=$registro['Mensaje'];
                $objMensaje->fecha=$registro['Hora'];
            
                $object->mensajes[]=$objMensaje;
                $ultimo=$registro['Id'];
            }
            $object->ultimo=$ultimo;
            echo json_encode($object);
        }
        
    }

    if($_POST['peticion']=="escribirMensajes"){
        
        if(isset($_POST['enviar'])){
            
            include_once "BD.php";
            if(BD::conectar()){
                
                if(BD::insertaFilaMensaje($_POST["txtUsuario"],$_POST["areaMensaje"])){
                    echo "OK!";
                }else{
                    echo "ERROR!";
                }
                
            }
        }
    }
  
}else{

    echo "Algo a ido mal";
}
