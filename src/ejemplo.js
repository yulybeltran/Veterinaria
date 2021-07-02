import './nav';
import {Link, NavLink} from 'react-router-dom'
function Ejemplo() {
  return (
      
    <nav>
        
        <ul class='menu'>
            <li class='item'><NavLink to='/equipo'>Equipo</NavLink></li>
            <li class='item'><Link to='/servicios' ActiveClassName="active">Servicios</Link></li>
        </ul>
    </nav>
  
  );
}

export default Ejemplo;