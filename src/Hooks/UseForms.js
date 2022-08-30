import { useState } from "react";

export const useForms = (initialForm = {}) => {
  const [data, setData] = useState(initialForm);

  //captura los valores del input por medio del evento
  const onInputChange = ({ target }) => {

    const { name, value } = target;
    setData({
      ...data,
      [name]: value
    });
  }


  const onResetForm = () => {
    setData(initialForm);
  };

  return {
    ...data, //para poder destructurar el obj
    data,
    onResetForm,
    onInputChange
  };
};