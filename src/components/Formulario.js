import React, { useState } from 'react';
import { Cita } from '../App';


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
            <div>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" onChange={NombreHandler} value={nombre} />
                <label>Nombre Dueño</label>
                <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" onChange={DuenoHandler} value={dueno} />
                <label>Fecha</label><input type="date" name="fecha" className="u-full-width" onChange={FechaHandler} value={fecha}></input>
                <label>hora</label>
                <input type="time" name="hora" className="u-full-width" onChange={HoraHandler} value={hora} />
                <label>Sintomas</label>
                <textarea name="sintomas" className="u-full-width" onChange={SintomasHandler} value={sintomas}/>
                <button id="btn-sbmt" onClick={guardarCita}>ENVIAR</button>
                {/* <button type="submit" className="u-full-width button-primary">Agregar Cita</button> */}
            </div>
        </>
    );
}
export default Formulario;