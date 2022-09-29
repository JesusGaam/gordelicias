import { useState } from "react";

const usePlaticaNosotros = () => {
  const [subject, setSubject] = useState({
    error: false,
    label: "Selecciona un tema de interés",
    value: "",
    required: true,
    optionList: [
      { label: "Información general", id: "INFO", selected: true },
      { label: "Tengo una queja", id: "QUEJA" },
    ],
  });
  const handleSubject = (value, statusError) => {
    setSubject({
      ...subject,
      value,
      error: statusError.error,
      helper: statusError.error ? statusError.message : subject.defaultHelper,
    });

    setCategory({ ...category, show: value === "QUEJA" });
  };

  const [name, setName] = useState({
    error: false,
    required: true,
    label: "Nombre completo",
    value: "",
    defaultValue: "",
    placeholder: "",
    helper: "",
    defaultHelper: "",
  });

  const handleName = (value, statusError) => {
    setName({
      ...name,
      value,
      error: statusError.error,
      helper: statusError.error ? statusError.message : name.defaultHelper,
    });
  };

  const [email, setEmail] = useState({
    error: false,
    required: true,
    label: "Correo electrónico",
    value: "",
    defaultValue: "",
    placeholder: "",
    helper: "",
    defaultHelper: "",
  });

  const handleEmail = (value, statusError) => {
    setEmail({
      ...email,
      value,
      error: statusError.error,
      helper: statusError.error ? statusError.message : email.defaultHelper,
    });
  };

  const [phone, setPhone] = useState({
    error: false,
    required: false,
    label: "Número de teléfono",
    value: "",
  });
  const handlePhone = (value, statusError) => {
    setPhone({
      ...phone,
      value,
      error: statusError.error,
      helper: statusError.error ? statusError.message : phone.defaultHelper,
    });
  };

  const [category, setCategory] = useState({
    error: true,
    label: "Selecciona una categoría",
    value: "",
    required: true,
    show: false,
    optionList: [
      { label: "Selecciona una categoría", id: 0, selected: true },
      { label: "Calidad", id: "CALIDAD" },
      { label: "Servicio", id: "SERVICIO" },
      { label: "Limpieza", id: "LIMPIEZA" },
      { label: "Ordenes", id: "ORDENES" },
      { label: "Delivery", id: "DELIVERY" },
      { label: "Bebida", id: "BEBIDA" },
      { label: "Otros", id: "OTROS" },
      { label: "Licencias", id: "LICENCIAS" },
      { label: "Facturación", id: "FACTURACION" },
      { label: "Patrocinio", id: "PATROCINIO" },
      { label: "Compras", id: "COMPRAS" },
      { label: "Otro", id: "OTRO" },
    ],
  });

  const handleCategory = (value, statusError) => {
    console.log({ ...category });
    setCategory({
      ...category,
      value,
      error: statusError.error,
      helper: statusError.error ? statusError.message : category.defaultHelper,
    });
  };

  const [message, setMessage] = useState({
    error: false,
    required: true,
    label: "Mensaje",
    value: "",
    defaultValue: "",
    defaultHelper: "",
  });

  const handleMessage = (value, statusError) => {
    setMessage({
      ...message,
      value,
      error: statusError.error,
      helper: statusError.error ? statusError.message : message.defaultHelper,
    });
  };

  const handleSubmit = () => {};

  return {
    subject,
    name,
    email,
    phone,
    category,
    message,
    handleSubject,
    handleName,
    handleEmail,
    handlePhone,
    handleCategory,
    handleMessage,
    handleSubmit,
  };
};

export default usePlaticaNosotros;
