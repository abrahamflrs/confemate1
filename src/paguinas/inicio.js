import React from 'react';
import { Link } from 'react-router-dom';
import conferencias from ".././ing/conferencias.jpg";
import ".././paguinas/estilos.css";

function Inicio (){
    return (
        <div id='ini'>
            <h1 style={{textAlign: "center"}}>CONFERENCIAS DE MATEMATICAS <br></br> PARA TODOS</h1>
            <center><ing src={conferencias}/></center>
            <Link to="/Idiomas"> <button >Iniciar</button></Link>
        </div>


    );
}

export default Inicio;
