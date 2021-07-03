import img1 from './img9.jpeg';
import img2 from './img10.jpeg';
import img3 from './img7.jpeg';
import './servicios.css';
import Nav from './nav';

function Servicios() {
  return (
      <div>
          
    <div id="titulo">
    <h1>Servicios</h1>
  </div>
      <div class="card-group">
           
 

<div class="card">
  
  <div class="card-body">
       <img src={img3} class="card-img-top" alt="..."/>
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    
  </div>
</div>
<div class="card">
  
  <div class="card-body">
      <img src={img2} class="card-img-top" alt="..."/>
    <h5 class="card-title">Servicio Médico</h5>
    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    
  </div>
</div>
<div class="card">
  
  <div class="card-body">
      <img src={img1}class="card-img-top" alt="..."/>
    <h5 class="card-title">Vacunación</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
    
  </div>
</div>
</div>
</div>
  
  );
}


export default Servicios;
