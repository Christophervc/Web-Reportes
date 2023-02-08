import React, { useState, useEffect } from 'react'
import styles from '../css_modules/CardReportList.module.css';
import CardReport from './CardReport';

function CardReportList() {

  const [reports, setReports] = useState([]);

  useEffect(() => {
    setReports([
      {
        id: "1",
        name: "Reporte 1"
      },
      {
        id: "2",
        name: "Reporte 2"
      },
      {
        id: "3",
        name: "Reporte 3"
      },
      {
        id: "4",
        name: "Reporte 4"
      },
      {
        id: "5",
        name: "Reporte 5"
      },
      {
        id: "6",
        name: "Reporte 6"
      },
      {
        id: "7",
        name: "Reporte 7"
      },
      {
        id: "8",
        name: "Reporte 8"
      },
      {
        id: "9",
        name: "Reporte 9"
      },
      {
        id: "10",
        name: "Reporte 10"
      },

    ]);
  }, [])


  return (
    <div className={styles.containerCardReportList}>
      {
        reports.map((report) => {
          return <CardReport key={report.id} name={report.name} />
        })
      }
    </div>
  )
}

export default CardReportList