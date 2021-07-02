import logo from './img4.jpeg';
import './header.css';
import Modallogin from './Modallogin';

function Header() {
  return (
    <header>
    <div className="logo">
    <img src={logo}/>
    </div>
   <div>
   <button type="button" class="btn-azul" data-bs-toggle="modal" data-bs-target="#Mlogin"><i class="fas fa-power-off"></i>
 Ingresar
</button>
     <button className='btn-morado'><i class="fas fa-user-plus"></i>  Registrarse</button>
   </div>
     <Modallogin/>
   </header>
  );
}

export default Header;