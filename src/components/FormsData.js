import React, { useEffect, useState } from "react";
import { useForms } from "../Hooks/UseForms";
import "../styles/FormsData.css";
import Cards from "./Cards";


function FormsData({ nombre, documento, idDocumento }) {

  /*
  calculo de calorias
  Hombre: (9.99 * peso kg) + (6.25 * estatura en cm) – (4.92 * edad) + 5
  Mujer: (9.99 * peso) + (6.25 * estatura en cm) – (4.92 * edad) – 161
  */

  const [resultado, setResultado] = useState(0);
  const [IMC, setIMC] = useState(0);
  const [show, setShow] = useState(false);

  const { data, onInputChange } = useForms({
    edad: null,
    altura: null,
    peso: null,
    actividad: null,
    sexo: null
  });

  //esconde el resultado si hay cambio en los valores de data 
  useEffect(() => {
    setShow(false);
  }, [data])

  const multiplicadorTMB = {
    peso: 10,
    altura: 6.25,
    edad: 5
  }

  const calculo = data.actividad * ((multiplicadorTMB.peso * data.peso) +
    (multiplicadorTMB.altura * data.altura) -
    (multiplicadorTMB.edad * data.edad)
  );
  const alturaIMC = Math.pow(data.altura, 2) / 10000;

  const submit = (e) => {
    e.preventDefault();
    data.sexo === 'M' ? setResultado(calculo + 5) : setResultado(calculo - 161);
    setIMC(data.peso / alturaIMC);

    if (data.edad && data.sexo && data.altura && data.peso && data.actividad) {
      setShow(true);
    }
  }
  // const objt = { "background-color": "#f8d7da" };
  return (
    <section className="d-flex flex-direction-row justify-content-around w-100">
      <div className="card backglass my-4">
        <div className="card-body">
          <h3 className="card-title d-flex justify-content-center">
            Calculadora de calorias
          </h3>
          <form className="needs-validation " onSubmit={submit} noValidate>
            <div className="mb-3 content">
              <label htmlFor="edad">Edad</label>
              <input
                type="number"
                id="edad"
                placeholder="digíte su edad"
                name="edad"

                onChange={onInputChange}
                required
              />
              <div className="invalid-feedback">
                Por favor, ingresa tu edad.
              </div>
            </div>
            <div className="mb-3 content">
              <label htmlFor="peso">Peso</label>
              <input
                type="number"
                id="peso"
                placeholder="digíte su peso en kílogramos"
                name="peso"
                onChange={onInputChange}
                required
              />
            </div>
            <div className="mb-3 content">
              <label htmlFor="altura">Altura</label>
              <input
                type="number"
                id="altura"
                placeholder="digíte su altura en centímetros"
                name="altura"
                onChange={onInputChange}
                required
              />
            </div>
            <div className="mb-3 content">
              <label htmlFor="actividad">Actividad física</label>
              <select className="form-select" id="actividad" name="actividad" onChange={onInputChange} >
                <option name="actividad" ></option>
                <option name="actividad" onChange={onInputChange} value={1.2}>Poco o ningún ejercicio</option>
                <option name="actividad" onChange={onInputChange} value={1.375}>Ejercicio ligero(1-3 días a la semana)</option>
                <option name="actividad" onChange={onInputChange} value={1.55}>Ejercicio moderado(3-5 días a la semana)</option>
                <option name="actividad" onChange={onInputChange} value={1.725}>Ejercicio fuerte(6-7 días a la semana)</option>
                <option name="actividad" onChange={onInputChange} value={1.9}>Ejercicio muy fuerte(dos veces al día, entrenamientos muy duros)</option>
              </select>
            </div>
            <div className="mb-3 content sex">
              <label htmlFor="actividad">Sexo</label>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio"
                  className="form-check-input checkInput"
                  name="sexo"
                  id="masculino"
                  value='M'
                  onChange={onInputChange}
                />
                <label htmlFor="checkMasculino" className="form-check-label">
                  Masculino
                </label>
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio"
                  className="form-check-input"
                  name="sexo"
                  id="femenino"
                  value='F'
                  onChange={onInputChange}
                />
                <label htmlFor="checkFemenino" className="form-check-label">
                  Femenino
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-outline-light btn-lg">
              Calcular
            </button>

          </form>
        </div>
      </div>

      <Cards resultado={resultado.toFixed(1)} IMC={IMC.toFixed(1)} nombre={nombre} documento={documento} edad={data.edad} idDocumento={idDocumento} show={show} />
    </section>
  );
}

export default FormsData;
