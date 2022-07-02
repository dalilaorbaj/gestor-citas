import React from 'react'

const Cita = ({ cita }) => {
    console.log(cita);
    if (cita === -1) {
        return <h2>Administra tus citas</h2>
    } else {
        return (
            <div className="cita">
                <div className="row">
                <p>Mascota: <span>{cita.nombre}</span></p>
                <p>Dueño: <span>{cita.dueno}</span></p>
                </div>
                
                <p>Fecha: <span>{cita.fecha}</span></p>
                <p>Hora: <span>{cita.hora}</span></p>
                <p>Sintomas: <span>{cita.sintomas}</span></p>
                <button className="button elimnar u-full-width deleteButton">Eliminar ×</button>
            </div>
        )
    }

}
export default Cita;
