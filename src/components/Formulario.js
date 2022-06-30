import React, { useState } from 'react';
import { Cita } from '../App';
import '../App.css';

const Formulario = ({ setCita }) => {
    const [nombre, setNombre] = useState('');
    const [dueno, setDueno] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');
    


    const NombreHandler = (e) =>{
        setNombre(e.target.value);
    } 
    const DuenoHandler = (e) =>{
        setDueno(e.target.value);
    }
    const FechaHandler = (e) =>{
        setFecha(e.target.value);
    }
    const HoraHandler = (e) =>{
        setHora(e.target.value);
    }
    const SintomasHandler = (e) =>{
        setSintomas(e.target.value);
    }
    const guardarCita = () =>{
        const cita = {
            nombre: nombre,
            dueno: dueno,
            fecha: fecha,
            hora: hora,
            sintomas: sintomas
        };
        setCita(cita);
    }

    const eliminarCita = () =>{
        const cita = {
            nombre: nombre,
            dueno: dueno,
            fecha: fecha,
            hora: hora,
            sintomas: sintomas
        };
        setCita(cita);
    }
    
    return (
        <>
            <h2>Crear mi Cita</h2>
            <div className="centrado">
                <label>Nombre Mascota</label><br/>
                <input type="text" name="mascota" className="u-full-width mb-3" placeholder="Nombre Mascota" onChange={NombreHandler} value={nombre} /><br/>
                <label>Nombre Dueño</label><br/>
                <input type="text" name="propietario" className="u-full-width mb-3" placeholder="Nombre dueño de la mascota" onChange={DuenoHandler} value={dueno} /><br/>
                <label>Fecha</label><br/>
                <input type="date" name="fecha" className="u-full-width mb-3" onChange={FechaHandler} value={fecha}></input><br/>
                <label>hora</label><br/>
                <input type="time" name="hora" className="u-full-width mb-3" onChange={HoraHandler} value={hora} /><br/>
                <label>Sintomas</label><br/>
                <textarea name="sintomas" className="u-full-width mb-3" onChange={SintomasHandler} value={sintomas}/> <br/>
                <button id="btn-sbmt" onClick={guardarCita}>ENVIAR</button>
            </div>
        </>
    );
}
export default Formulario;