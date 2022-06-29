import React, { useState } from 'react';
import { Cita } from '../App';


const Formulario = ({ cita, setCita, citas, addCita }) => {
    const createCita = () => {
        const existeCita = citas.find(c => c.fecha === cita.fecha && c.hora === cita.hora);
        const todosCamposLlenos = cita.nombre && cita.dueno && cita.fecha && cita.hora && cita.sintomas;

        if (!todosCamposLlenos) {
            alert('Todos los campos son obligatorios');
        } else if (existeCita) {
            alert('Ya existe una cita en esa fecha y hora');
        } else {
            addCita([...citas, cita]);
            setCita({
                nombre: '',
                dueno: '',
                fecha: '',
                hora: '',
                sintomas: ''
            });
        }
    };
    return (    
        <>
        <h2>Crear mi Cita</h2>
            <form onSubmit = {guardarCita}>
                   <label>Nombre Mascota</label>
                   <Campo />
                   <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value="" />
                   <label>Nombre Dueño</label>
                   <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" value="" />
                   <label>Fecha</label><input type="date" name="fecha" className="u-full-width" value=""></input>
                   <label>hora</label>
                   <input type="time" name="hora" className="u-full-width" value="" />
                   <label>Sintomas</label>
                   <textarea name="sintomas" className="u-full-width" />
                   <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
                </form>
                </>
/*
<div className='flex flex-col items-center w-full md:pl-40'>
<Titulo title='Crear mi cita'/>
<Campo label='Nombre mascota *' placeholder='Nombre Mascota' type="text" value={cita.nombre} onChange={(e) => setCita({ ...cita, nombre: e.currentTarget.value })}/>
<Campo label='Nombre dueño  *' placeholder='Nombre del dueño de la mascota' type="text" value={cita.dueno} onChange={(e) => setCita({ ...cita, dueno: e.currentTarget.value })}/>
<Campo label='Fecha *' min={new Date().toLocaleDateString('en-ca')} type="date" value={cita.fecha} onChange={(e) => setCita({ ...cita, fecha: e.currentTarget.value })}/>
<Campo label='Hora *' type="time" value={cita.hora} onChange={(e) => setCita({ ...cita, hora: e.currentTarget.value })}/>
<Campo label='Sintomas *' type="textarea" value={cita.sintomas} onChangeTextArea={(e) => setCita({ ...cita, sintomas: e.currentTarget.value })}/>
<CrearCita name='Agregar cita' onClick={() => createCita()}/>
</div>
*/
    );
}
export default Formulario;