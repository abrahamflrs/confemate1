import React from 'react';
import conferencias from "./conferencias.jpg";
import "./estilos.css";

function Inicio (){
    return (
        <div id='ini'>
            <h1 style={{textAlign: "center"}}>CONFERENCIAS DE MATEMATICAS <br></br> PARA TODOS</h1>
            <center><img src={conferencias}/></center>
             <button >Iniciar</button>
        </div>


    );
}

export default Inicio;

