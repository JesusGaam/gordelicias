import { useState } from "react";
import { isEmail } from "@/utils/Utilities";

const usePlaticaNosotros = () => {
  const [subject, setSubject] = useState({
    error: false,
    label: "Selecciona un tema de interés",
    value: 0,
    required: true,
    optionList: [
      { label: "Información general", id: "INFO", selected: true },
      { label: "Tengo una queja", id: "QUEJA" },
    ],
  });

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

  const [phone, setPhone] = useState({
    error: false,
    required: false,
    label: "Número de teléfono",
    value: "",
  });

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

  const [message, setMessage] = useState({
    error: false,
    required: true,
    label: "Mensaje",
    value: "",
    defaultValue: "",
    defaultHelper: "",
  });

  const handleSubject = (value, initHandle) => {
    let error = false;
    let helper = subject.defaultHelper;

    if (!initHandle) {
      error = category.required && value == 0;
      if (error) {
        helper = "Este campo es obligatorio";
      }
    }

    setSubject({
      ...subject,
      value,
      error,
      helper,
    });

    setCategory({ ...category, show: value === "QUEJA" });
  };

  /**
   *
   * @param {*} value
   */
  const handleName = (value) => {
    var error = name.required && value.length == 0;
    const helper = error ? "Este campo es obligatorio" : name.defaultHelper;

    setName({
      ...name,
      value,
      error,
      helper,
    });
  };

  const handleEmail = (value) => {
    let error = true;
    let helper = "";

    if (email.required && value.length == 0) {
      helper = "Este campo es obligatorio";
    } else if (!isEmail(value)) {
      helper = "El correo electrónico es incorrecto";
    } else {
      error = false;
    }

    setEmail({
      ...email,
      value,
      error,
      helper,
    });
  };

  const handlePhone = (value) => {
    var error = false;
    var helper = "";

    if (phone.required && value.length == 0) {
      error = true;
      helper = "Este campo es obligatorio";
    } else if (value.length > 0 && value.length !== 10) {
      error = true;
      helper = "Introduce diez dígitos";
    }

    setPhone({
      ...phone,
      value,
      error,
      helper,
    });
  };

  const handleCategory = (value) => {
    const error = name.required && subject.value === "QUEJA" && value == 0;
    const helper = error ? "Este campo es obligatorio" : name.defaultHelper;

    setCategory({
      ...category,
      value,
      error,
      helper,
    });
  };

  const handleMessage = (value) => {
    var error = message.required && value.length == 0;
    const helper = error ? "Este campo es obligatorio" : message.defaultHelper;

    setMessage({
      ...message,
      value,
      error,
      helper,
    });
  };

  const handleSubmit = () => {
    handleSubject(subject.value);
    handleName(name.value);
    handleEmail(email.value);
    handleCategory(category.value);
    handleMessage(message.value);

    if (
      !subject.error &&
      !name.error &&
      !email.error &&
      !category.error &&
      !message.error
    ) {
      console.log("submit :D");
      console.log({
        subject: subject.value,
        name: name.value,
        email: email.value,
        category: category.value,
        message: message.value,
      });
    }
  };

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
