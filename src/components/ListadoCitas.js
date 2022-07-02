import React from 'react'
import Cita from './Cita'

export default function ListadoCitas({ listadoCitas }) {
    return (
        listadoCitas.map(cita => {
            return (
                <Cita cita={cita} />
            )
        })
    )
}

