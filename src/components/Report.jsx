import React from 'react'
import { useParams } from 'react-router-dom'
import { dataReports } from '../data/dataReports';

function Report() {
  const { id } = useParams();
  const report = dataReports.find(report => report.id == id);

  return (
    <div className='container mt-4'>
      <h2 className='text-center'>Reporte {report.id}</h2>
      <p className='text-center'>
        {report.description}
      </p>
      <div className='d-flex justify-content-center'>
        {report.url}
      </div>
    </div>
  )
}

export default Report