import React from 'react'
import Cita from './Cita'

export default function ListadoCitas({ listadoCitas }) {

    // return null;
    return (
        listadoCitas.map(cita => {
            return (
                <Cita cita={cita} />
            )
            // console.log(cita)
        })
    )
    // {

    //     listadoCitas.map((cita) => (
    //         <Cita cita={cita} />
    //     )
    // )}
}

