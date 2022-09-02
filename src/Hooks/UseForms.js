import { useState } from "react";

export const useForms = (initialForm = {}) => {
  const [data, setData] = useState(initialForm);
  const [validation, setValidation] = useState([]);
  //captura los valores del input por medio del evento
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setData(initialForm);
  };

  //encuentra los campos vacios de los inputs y lo retorna en un arreglo
  const onValidation = () => {
    for (const element in data) {
      if (data[element] == "") {
        const position = validation.push(element);
      }
    }
    //verifica que los elementos no se repitan
    const unit = validation.filter((value, index)=>{
      return validation.indexOf(value) === index;
    })
    return unit;
  };

  return {
    ...data, //para poder destructurar el obj
    data,
    onResetForm,
    onValidation,
    onInputChange,
  };
};
