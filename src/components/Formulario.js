import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const Formulario = ({citas, setCitas}) => {
  const [cita, setCita] = useState({
    mascota: '',
    nombre: '',
    fecha: '',
    hora: '',
    sintomas: ''
  })
  const { mascota, nombre, fecha, hora, sintomas } = cita

  const setState = event => {
    setCita({
      ...cita,
      [event.target.name]: event.target.value
    })
  }

  const [ error, setError ] = useState(false);

  function guardarCita(e){
    e.preventDefault()
    
    if ( mascota.trim() === '' || nombre.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ) {
      setError(true);
      return;
    }
    
    setError(false);
    
    cita['id'] = uuid();
    
    setCitas(citas => [...citas, cita])

    setCita({
      mascota: '',
      nombre: '',
      fecha: '',
      hora: '',
      sintomas: ''
    })
  }

  return (
    <>
      <h2>Crear cita</h2>
      {
        error
        ? <p className='alerta-error'>Todos los campos son obligatorios</p>
        : null
      }
      <form>
        <label>Nombre Mascota</label>
        <input type='text' name='mascota' className='u-full-width' placeholder='Nombre Mascota' value={mascota} onChange={setState} required/>
        <label>Nombre Dueño</label>
        <input type='text' name='nombre' className='u-full-width' placeholder='Nombre del dueño de la mascota' value={nombre} onChange={setState} required/>
        <label>Fecha</label>
        <input type='date' name='fecha' className='u-full-width'  value={fecha} onChange={setState} required/>
        <label>Hora</label>
        <input type='time' name='hora' className='u-full-width' value={hora} onChange={setState} required/>
        <label>Síntomas</label>
        <textarea className='u-full-width' name='sintomas' value={sintomas} onChange={setState} required></textarea>

        <button type='submit' className='u-full-width button-primary' onClick={guardarCita}>Agregar Cita</button>
      </form>
    </>
  )
}

export default Formulario;

/*import React, { useState } from 'react';
import '../App.css';
import { v4 as uuid } from 'uuid';

const Formulario = ({citas, setCita }) => {
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
    const cita = {
        nombre: nombre,
        dueno: dueno,
        fecha: fecha,
        hora: hora,
        sintomas: sintomas
    };
    setCita(cita);
    function guardarCita(e){


        e.preventDefault()
        
        if ( nombre.trim() === '' || dueno.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ) {
          setError(true);
          return;
        }
        
        setError(false);
        
        cita['id'] = uuid();
        
        setCita(citas => [...citas, cita])
    
      }


    const setState = event => {
        setCita({
          ...cita,
          [event.target.name]: event.target.value
        })
      }

      const [ error, setError ] = useState(false);

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
            {
            error
            ? <p className='error'>Complete todo los inputs!!</p>
            : null
            }
            <div className="centrado">
                <label>Nombre Mascota</label><br/>
                <input type="text" name="mascota" onChange={setState} className="u-full-width mb-3" placeholder="Nombre mascota" /*onChange={NombreHandler} value={nombre} /><br/>
                <label>Nombre Dueño</label><br/>
                <input type="text" name="propietario" onChange={setState} className="u-full-width mb-3" placeholder="Nombre del dueño" /*onChange={DuenoHandler} value={dueno} /><br/>
                <label>Fecha</label><br/>
                <input type="date" name="fecha" onChange={setState} className="u-full-width mb-3" /*onChange={FechaHandler} value={fecha}></input><br/>
                <label>hora</label><br/>
                <input type="time" name="hora" onChange={setState} className="u-full-width mb-3" /*onChange={HoraHandler} value={hora} /><br/>
                <label>Sintomas</label><br/>
                <textarea name="sintomas" onChange={setState} className="u-full-width mb-3" /*onChange={SintomasHandler} value={sintomas}/> <br/>
                <button type='submit' className="buttonForm" id="btn-sbmt" onClick={()=>{guardarCita(); reset()}}>Enviar</button>

            </div>
        </>
    );
}
export default Formulario;

*/