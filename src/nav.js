
import './nav.css';
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <nav>
        <ul class='menu'>
            <li class='item'><Link to='/'>Home</Link></li>
            <li class='item'><Link to='/equipo'>Equipo</Link></li>
            <li class='item'><Link to='/servicios'>Servicios</Link></li>
            <li class='item'><Link to='/'>Agenda tu cita</Link></li>
            <li class='item'><Link to='/'>Contáctanos</Link></li>
            <li class='item'><Link to='/perros'>Razas</Link></li>
        </ul>
    </nav>
  
  );
}

export default Nav;
