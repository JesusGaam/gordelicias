import { useState } from "react";
import { isEmail } from "@/utils/Utilities";

const useContactaNosotros = () => {
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

    return error;
  };

  const handleName = (value) => {
    var error = name.required && value.length == 0;
    const helper = error ? "Este campo es obligatorio" : name.defaultHelper;

    setName({
      ...name,
      value,
      error,
      helper,
    });

    return error;
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

    return error;
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

    return error;
  };

  const handleCategory = (value) => {
    const error = subject.value === "QUEJA" && value == 0;
    const helper = error ? "Este campo es obligatorio" : subject.defaultHelper;
    setCategory({
      ...category,
      value,
      error,
      helper,
    });

    return error;
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

    return error;
  };

  const [formStatus, setFormStatus] = useState(0);

  const handleSubmit = async () => {
    const subjectError = handleSubject(subject.value);
    const nameError = handleName(name.value);
    const emailError = handleEmail(email.value);
    const phoneError = handlePhone(phone.value);
    const categoryError = handleCategory(category.value);
    const messageError = handleMessage(message.value);

    if (
      !subjectError &&
      !nameError &&
      !emailError &&
      !phoneError &&
      !categoryError &&
      !messageError
    ) {
      const data = {
        subject: subject.value,
        name: name.value,
        email: email.value,
        phone: phone.value,
        category: category.value,
        message: message.value,
      };
      const response = await submitHubspotForm(data);

      setFormStatus(response?.ok ? 1 : 2);
    }
  };

  const submitHubspotForm = async ({
    subject,
    name,
    email,
    phone,
    category,
    message,
  }) => {
    let response;
    const body = {
      fields: [
        {
          name: "email",
          value: email,
        },
        {
          name: "firstname",
          value: name,
        },
        {
          name: "mobilephone",
          value: phone,
        },
        {
          name: "tema_interes",
          value: subject,
        },
        {
          name: "tema_interes_categoria",
          value: category,
        },
        {
          name: "tema_interes_mensaje",
          value: message,
        },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    };

    try {
      response = await fetch(
        `${process.env.HBS_FORM_ENDPOINT}/${process.env.HBS_PORTAL_ID}/${process.env.HBS_CONTACT_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(body),
        }
      );
    } catch (error) {
      console.log("Error de petición:", error);
    }
    return response;
  };

  return {
    subject,
    name,
    email,
    phone,
    category,
    message,
    formStatus,
    handleSubject,
    handleName,
    handleEmail,
    handlePhone,
    handleCategory,
    handleMessage,
    handleSubmit,
  };
};

export default useContactaNosotros;
