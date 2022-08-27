import React from 'react'
import '../styles/Cards.css'
const Cards = () => {
    return (
        <div className='card backglass my-4'>
            <div className="card-body">
                <h3 className="card-title d-flex justify-content-center">Calculadora de calorias</h3>
                <form>
                    <div className="mb-3 content">
                        <label htmlFor="edad">Edad</label>
                        <input type="number" id='edad' placeholder='digíte su edad' />
                    </div>
                    <div className="mb-3 content">
                        <label htmlFor="peso">Peso</label>
                        <input type="number" id='peso' placeholder='digíte su peso en kílogramos' />
                    </div>
                    <div className="mb-3 content">
                        <label htmlFor="altura">Altura</label>
                        <input type="number" id='altura' placeholder='digíte su altura en centímetros' />
                    </div>
                    <div className="mb-3 content">
                        <label htmlFor="actividad">Actividad física</label>
                        <select className='form-select' name="actividad" id="actividad">
                            <option value="0"></option>
                            <option value="1">Poco o ningún ejercicio</option>
                            <option value="2">Ejercicio ligero(1-3 días a la semana)</option>
                            <option value="3">Ejercicio moderado(3-5 días a la semana)</option>
                            <option value="4">Ejercicio fuerte(6-7 días a la semana)</option>
                            <option value="5">Ejercicio muy fuerte(dos veces al día, entrenamientos muy duros)</option>
                        </select>
                    </div>
                    <div className="mb-3 content sex">
                        <label htmlFor="actividad">Sexo</label>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" className="form-check-input" name='checkMasculino' id='checkMasculino' />
                            <label htmlFor="checkMasculino" className="form-check-label">Masculino</label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input type="radio" className="form-check-input" name='checkFemenino' id='checkFemenino' />
                            <label htmlFor="checkFemenino" className="form-check-label">Femenino</label>
                        </div>
                    </div>

                    <button type="button" class="btn btn-outline-light btn-lg">Calcular</button>
                </form>
            </div>
        </div>
    )
}

export default Cards