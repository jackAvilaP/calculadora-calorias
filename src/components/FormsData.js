import React from "react";
import "../styles/FormsData.css";
import { useForms } from '../Hooks/useForms';

function FormsData() {
  /*
  calculo de calorias
  Hombre: (9.99 * peso kg) + (6.25 * estatura en cm) – (4.92 * edad) + 5
  Mujer: (9.99 * peso) + (6.25 * estatura en cm) – (4.92 * edad) – 161*/

  const {formstate, onInputChange, edad,altura,peso,actvidad} = useForms({
    edad: 0,
    altura:0,
    peso:0,
    actvidad:0
  });

  const submit =()=>{
    console.log(formstate)
  }
  
  return (
    <div className="card backglass my-4">
      <div className="card-body">
        <h3 className="card-title d-flex justify-content-center">
          Calculadora de calorias
        </h3>
        <form>
          <div className="mb-3 content">
            <label htmlFor="edad">Edad</label>
            <input type="number" id="edad" placeholder="digíte su edad" name="edad" value={edad} onChange={onInputChange} />
          </div>
          <div className="mb-3 content">
            <label htmlFor="peso">Peso</label>
            <input
              type="number"
              id="peso"
              placeholder="digíte su peso en kílogramos"
              name="peso"
              value={peso}
              onChange={onInputChange} 
            />
          </div>
          <div className="mb-3 content">
            <label htmlFor="altura">Altura</label>
            <input
              type="number"
              id="altura"
              placeholder="digíte su altura en centímetros"
              name="altura"
              value={altura}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3 content">
            <label htmlFor="actividad">Actividad física</label>
            <select className="form-select" name="actividad" id="actividad" >
              <option value="0"></option>
              <option value="1">Poco o ningún ejercicio</option>
              <option value="2">Ejercicio ligero(1-3 días a la semana)</option>
              <option value="3">
                Ejercicio moderado(3-5 días a la semana)
              </option>
              <option value="4">Ejercicio fuerte(6-7 días a la semana)</option>
              <option value="5">
                Ejercicio muy fuerte(dos veces al día, entrenamientos muy duros)
              </option>
            </select>
          </div>
          <div className="mb-3 content sex">
            <label htmlFor="actividad">Sexo</label>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio"
                className="form-check-input"
                name="checkMasculino"
                id="checkMasculino"
              />
              <label htmlFor="checkMasculino" className="form-check-label">
                Masculino
              </label>
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                type="radio"
                className="form-check-input"
                name="checkFemenino"
                id="checkFemenino"
              />
              <label htmlFor="checkFemenino" className="form-check-label">
                Femenino
              </label>
            </div>
          </div>

          <button type="button" className="btn btn-outline-light btn-lg" onClick={submit}>
            Calcular
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormsData;
