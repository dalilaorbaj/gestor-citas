import React from 'react'
import Cita from './Cita'

const ListadoCitas = ({ listadoCitas, setListadoCitas }) => {

    const deleteCita = (fecha, hora) => {
        console.log("entro a la funciooonn");
        setListadoCitas(listadoCitas.filter(cita => cita.fecha !== fecha || cita.hora !== hora));
    };

    return (
        <div className='flex flex-col items-center w-full md:pr-40'>
            {listadoCitas.map((cita, index) => (
                <Cita key={index} cita={cita} deleteCita={deleteCita}/>
            ))}
        </div>
    );
}

export default ListadoCitas;

