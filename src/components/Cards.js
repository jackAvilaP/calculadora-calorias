// Entre 15 y 29 años: Joven.
// Entre 30 y 59 años: adultos.
// Entre 60 años en adelante: adultos mayores.

import React, { useEffect, useState } from 'react'
import '../styles/Cards.css'
const Cards = ({ resultado, IMC, nombre, documento, edad, idDocumento, show }) => {

    const [grupo, setGrupo] = useState("");

    useEffect(() => {

        if (edad >= 15 && edad <= 29) {
            setGrupo("joven");
        }
        if (edad >= 30 && edad <= 59) {
            setGrupo("adulto");
        }
        if (edad >= 60) {
            setGrupo("adulto mayor");
        }

    }, [show])



    return (
        <div className={'cards d-flex justify-content-center backglass my-4 ' + (show && "viewsOn")}>
            <div className="card-body d-flex justify-content-center align-items-center flex-column">

                {/* <div className='content-pro d-flex justify-content-end align-items-center flex-column'>
                    <div className="progress pro-1 d-flex justify-content-end align-items-center flex-column">
                        <div className="circle circle-1 d-flex justify-content-end align-items-center flex-column ">
                        </div>
                    </div>
                        <h4>{IMC}</h4>
                    <h1 className='my-2'>{resultado} kcal</h1>
                </div> */}
                <p>
                    El paciente <strong> {grupo} </strong> <strong>{nombre}</strong>  identificado con <strong>{idDocumento} </strong> No.<strong>{documento}</strong> ,
                    requiere un total de <strong>{resultado}</strong> kcal para el sostenimiento de su TBM.
                </p>
            </div>
        </div>
    )
}

export default Cards