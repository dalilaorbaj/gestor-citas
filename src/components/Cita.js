import React from 'react'

const Cita = ({ cita }) => {
    console.log(cita);
    if (cita === -1) {
        return <h1>ADMINISTRA TUS CITAS</h1>
    } else {
        return (
            <div className="cita">
                <p>Mascota: <span>{cita.nombre}</span></p>
                <p>Dueño: <span>{cita.dueno}</span></p>
                <p>Fecha: <span>{cita.fecha}</span></p>
                <p>Hora: <span>{cita.hora}</span></p>
                <p>Sintomas: <span>{cita.sintomas}</span></p>
                <button className="button elimnar u-full-width">Eliminar ×</button>
            </div>
        )
    }

}
export default Cita;
