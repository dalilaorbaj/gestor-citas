import React, { useState } from 'react';
import '../App.css';

const Formulario = ({ setCita, listadoCitas, cita }) => {
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
        /*
        let camposCompletos = cita.nombre && cita.dueno && cita.fecha && cita.hora && cita.sintomas;

        if (!camposCompletos) {
            alert('Complete todos los campos!');
        } else {*/
        const cita = {
            nombre: nombre,
            dueno: dueno,
            fecha: fecha,
            hora: hora,
            sintomas: sintomas
        };
        setCita(cita);
   /* }*/
    }

    const reset = () =>{
        setNombre(() => "");
        setDueno(() => "");
        setFecha(() => "");
        setHora(() => "");
        setSintomas(() => "");
        }

    return (
        <>
            <h2>Crear mi cita</h2>
            <div className="centrado">
                <label>Nombre Mascota</label><br/>
                <input id="nombre" type="text" name="mascota" className="u-full-width mb-3" placeholder="Nombre mascota" onChange={NombreHandler} value={nombre} /><br/>
                <label>Nombre Dueño</label><br/>
                <input id="dueno" type="text" name="propietario" className="u-full-width mb-3" placeholder="Nombre del dueño" onChange={DuenoHandler} value={dueno} /><br/>
                <label>Fecha</label><br/>
                <input id="fecha" type="date" name="fecha" className="u-full-width mb-3" onChange={FechaHandler} value={fecha}></input><br/>
                <label>hora</label><br/>
                <input id="hora" type="time" name="hora" className="u-full-width mb-3" onChange={HoraHandler} value={hora} /><br/>
                <label>Sintomas</label><br/>
                <textarea id="sintomas" name="sintomas" className="u-full-width mb-3" onChange={SintomasHandler} value={sintomas}/> <br/>
                <button className="buttonForm" id="btn-sbmt" onClick={() => {guardarCita(); reset()}}>Enviar</button>
            </div>
        </>
    );
}
export default Formulario;