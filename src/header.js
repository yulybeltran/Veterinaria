import logo from './img4.jpeg';
import './header.css';

function Header() {
  return (
    <header>
    <div className="logo">
    <img src={logo}/>
    </div>
   <div>
     <button className='btn-azul'><i class="fas fa-power-off"></i>  Ingresar</button>
     <button className='btn-morado'><i class="fas fa-user-plus"></i>  Registrarse</button>
   </div>
     
   </header>
  );
}

export default Header;