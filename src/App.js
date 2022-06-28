import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Formulario from "./components/Formulario"
import Cita from "./components/Cita"

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

function App() {
  return (
<>
   <h1>GESTOR DE CITAS</h1>
   <div className="container">
      <div className="row">
         <div className="one-half column">
            <Formulario />
         </div>
         <div className="one-half column">
            <h2>Administra tus citas</h2>
            <Cita />
         </div>
      </div>
   </div>
</>
  );
}

export default App;
