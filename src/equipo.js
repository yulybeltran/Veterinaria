import imagen from './img2.jpeg';
import './equipo.css';
import Nav from './nav';
import {Link,NavLink} from 'react-router-dom'

function Equipo() {
 
  return (
    <div>
    <Nav/>
    <div className="intro">
       
        <div class='agenda'>
      <h2>AGENDA UNA CITA AHORA PARA RECLAMAR TU PRIMER BAÑO GRATIS</h2><br></br>
          	<p>Queremos que conoscas nuestra propuesta de baño para mascotas donde tenemos espacios dedicados para evitar la contaminacion cruzada que puede llegar a existir en una veterinaria. aplica de lunes a viernes para mascotas que visitan la clinica por primara vez.</p><br></br>
          	<p>RECUERDA QUE NUESTRO EQUIPO MEDICO TE CONFIRMARA LA CITA</p><br></br><br></br>
          	
            <NavLink to='/servicios'>
            <button class='btn-morado'><i class="far fa-calendar-check"></i> Agendar</button>
            </NavLink>
         </div>
    <div class='promo'>
        <h1>GRATIS PRIMER BAÑO</h1>
          	<img src={imagen}></img>
    </div>
    </div>
    </div>
    
  );
}

export default Equipo;
