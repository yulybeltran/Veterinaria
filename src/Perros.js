import {perros} from './perros.json';
import Razas from './Razas';

function Perros() {
  return (
      <div className='container-fluid'>
<div className='row'>
<h1>Pagina perros</h1>
{
    perros.map(perro=>(
        <div className='col-12 col-md-4' key={perro.id}>
<Razas p1={perro.id} p2={perro.thumbnail}  p3={perro.raza} p4={perro.descripcion} p5={perro.acercade} p6={perro.imagen}/>

     </div>
    ))
}
</div>
      </div>
  
  );
}

export default Perros;
