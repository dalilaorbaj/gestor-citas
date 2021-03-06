import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Formulario from "./components/Formulario"
import React, { useState, useEffect} from 'react';
import ListadoCitas from "./components/ListadoCitas"

/*FALTA: 
- que funcione el boton de eliminar
- que no mande nada si estan los datos vacios
*/

<link
   rel="stylesheet"
   href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
   integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
   crossorigin="anonymous"
/>

const App = () => {
   const [cita, setCita] = useState(-1);
   const [listadoCitas, setListadoCitas] = useState([]);

   useEffect(() => {
      setListadoCitas([...listadoCitas, cita]);
   }, [cita])

   return (
      <>
      <div id="title" class="slide header">
      <h1>GESTOR DE CITAS</h1>      
      </div>         
      <div className="garden">
               <div className="primera">
                  <Formulario setCita={setCita} listadoCitas={listadoCitas} cita={cita}/>
               </div>
               <div className="segunda">
                  {/* <h2>Administra tus citas</h2> */}
                  <ListadoCitas listadoCitas={listadoCitas} setListadoCitas={setListadoCitas}/>
               </div>
         </div>
      </>
   );
}
export default App;
