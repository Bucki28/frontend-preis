import '../styles/card.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Card = ({ titulo, descripcion, precio }) => {


    return (
        <div className="card mb-3 tarjeta" style={{ maxWidth: '540px;' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    {/* <img src="..." className="img-fluid rounded-start" alt="..."> */}
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{titulo}</h5>
                        <p className="card-text">{descripcion}</p>
                        <p className="card-text"><small className="text-muted">{precio}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}