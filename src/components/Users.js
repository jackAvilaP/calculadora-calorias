import React, { useState } from "react";

//components
import FormsData from "./FormsData";

//Hooks
import { useForms } from "../Hooks/UseForms";

//style
import "../styles/Users.css";

const Users = () => {
  const [togle, setTogle] = useState(false);
  const { data, onInputChange } = useForms({
    nombre: null,
    documento: null,
    idDocumento: null
  });
  const submit = () => {
   data.nombre && data.documento && setTogle(!togle);
  };
  return (
    <div className="d-flex flex-direction-row justify-content-center content-home">
      {togle ? (
        <FormsData nombre={data.nombre} documento={data.documento} idDocumento={data.idDocumento}/>
      ) : (
        <div className="card backglass my-4">
          <div className="card-boby d-flex justify-content-center flex-column">
            <h3 className="card-title my-4 d-flex justify-content-center">
              Datos del paciente
            </h3>
            <form>
              <div className="mb-4 content">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  placeholder="digíte el nombre"
                  name="nombre"
                  onChange={onInputChange}
                  required
                />
              </div>
              <div className="mb-4 content">
                <label htmlFor="documento">Documento</label>
                <select className="form-select my-2" id="idDocumento" name="idDocumento" onChange={onInputChange} >
                <option name="idDocumento" ></option>
                <option name="idDocumento" onChange={onInputChange} value={"CC"}>Cedula de identidad</option>
                <option name="idDocumento" onChange={onInputChange} value={"TI"}>Tarjeta de identidad</option>
                </select>
                <input
                  type="number"
                  id="documento"
                  placeholder="digíte el documento"
                  name="documento"
                  onChange={onInputChange}
                  required
                />
              </div>
              <button
                type="button"
                className="btn btn-outline-light btn-lg my-4"
                onClick={submit}
              >
                Registrar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
