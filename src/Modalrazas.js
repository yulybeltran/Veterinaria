
function Modalrazas(props) {
  return (
    <div className="modal" id={props.pm1} tabIndex={-1}>
    <div className="modal-dialog modal-lg">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title">{props.pm2}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body row">
            <div className="col-4">
                <img src={`../imagenes/${props.pm4}`} className="img-fluid"/>
            </div>

            <div className="col-8">
                <h5 className="modal-title">Acerca de</h5>
                <p>{props.pm3}</p>
            </div>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
        </div>
        </div>
    </div>
</div>
  
  );
}


export default Modalrazas;
