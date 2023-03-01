import React from 'react'
import { Link } from 'react-router-dom'


function CardReport({ name, id, description }) {

  return (

    <div className="col-3 m-2 bg-light border rounded-3">
      <div className="card bg-light border-0" style={{ height: "250px" }}>
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          <div style={{ height: "120px" }} className="d-flex align-items-center">
            <p className="card-text text-center">
              {description}
            </p>
          </div>
          <div className='d-flex justify-content-center align-items-center mt-2'>
            <Link className="btn btn-primary " to={`/report/${id}`}>
              Ir al Reporte
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardReport