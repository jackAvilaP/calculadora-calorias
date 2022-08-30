import React from 'react'
import '../styles/Cards.css'
const Cards = ({ resultado, IMC, nombre, documento, edad}) => {
    return (
        <div className='card backglass my-4'>       
            <div className="card-body d-flex justify-content-center align-items-center flex-column">

                <div className='content-pro d-flex justify-content-end align-items-center flex-column'>
                    <div className="progress pro-1 d-flex justify-content-end align-items-center flex-column">
                        <div className="circle circle-1 d-flex justify-content-end align-items-center flex-column ">
                        </div>
                    </div>
                        <h4>{IMC}</h4>
                    <h1 className='my-2'>{resultado} kcal</h1>
                </div>
                <p>
                   El paciente {nombre} identificado con (tipo de documento) No.{documento}, 
                   requiere un total de {resultado} kcal para el sostenimiento de su TBM.
                </p>
            </div>
        </div>
    )
}

export default Cards