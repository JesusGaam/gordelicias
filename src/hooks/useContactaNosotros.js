import { useState } from "react";
import { isEmail } from "@/utils/Utilities";

const useContactaNosotros = () => {
  const [formStatus, setFormStatus] = useState(0);

  const [name, setName] = useState({
    error: false,
    required: true,
    label: "Tu nombre",
    value: "",
    defaultValue: "",
    placeholder: "",
    helper: "",
    defaultHelper: "",
  });

  const [lastName, setLastName] = useState({
    error: false,
    required: false,
    label: "Tu apellido",
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

  const [subject, setSubject] = useState({
    error: false,
    required: true,
    label: "Asunto",
    value: "",
    defaultValue: "",
    placeholder: "",
    helper: "",
    defaultHelper: "",
  });

  const [message, setMessage] = useState({
    error: false,
    required: true,
    label: "Mensaje",
    value: "",
    defaultValue: "",
    defaultHelper: "",
  });

  const [personalDataNotice, setPersonalDataNotice] = useState({
    error: true,
    label: "",
    required: false,
    value: [],
    optionList: [
      {
        label:
          "Autorizo el uso de mis datos para el envío de comunicaciones comerciales relacionadas con el responsable  a través de e-mail y/o sms.",
        id: 1,
      },
    ],
  });

  const [privacyNotice, setPrivacyNotice] = useState({
    error: true,
    label: "",
    required: true,
    value: [],
    optionList: [
      {
        label: "He leído y acepto la política de privacidad.",
        id: 1,
      },
    ],
  });

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

  const handleLastName = (value) => {
    setLastName({
      ...lastName,
      value
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

    return error;
  };

  const handleSubject = (value) => {
    var error = subject.required && value.length == 0;
    const helper = error ? "Este campo es obligatorio" : subject.defaultHelper;

    setSubject({
      ...subject,
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

  const handlePersonalDataNotice = (value) => {
    setPersonalDataNotice({
      ...personalDataNotice,
      value,
    });
  };

  const handlePrivacyNotice = (value) => {
    var error = privacyNotice.required && value.length == 0;
    const helper = error
      ? "Este campo es obligatorio"
      : privacyNotice.defaultHelper;

    setPrivacyNotice({
      ...privacyNotice,
      value,
      error,
      helper,
    });

    return error;
  };

  const handleSubmit = async () => {
    const subjectError = handleSubject(subject.value);
    const nameError = handleName(name.value);
    const emailError = handleEmail(email.value);
    const messageError = handleMessage(message.value);
    const privacyNoticeError = handlePrivacyNotice(privacyNotice.value);

    if (
      !subjectError &&
      !nameError &&
      !emailError &&
      !messageError &&
      !privacyNoticeError
    ) {
      const response = await submitHubspotForm({
        name: name.value,
        lastname: lastName.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
        personalDataNotice: personalDataNotice.value.length > 0,
        privacyNotice: privacyNotice.value.length > 0,
      });

      setFormStatus(response?.ok ? 1 : 2);
    }
  };

  const submitHubspotForm = async ({
    name,
    lastname,
    email,
    subject,
    message,
    personalDataNotice,
    privacyNotice,
  }) => {
    let response;
    const body = {
      fields: [
        {
          name: "firstname",
          value: name,
        },
        {
          name: "lastname",
          value: lastname,
        },
        {
          name: "email",
          value: email,
        },
        {
          name: "asunto",
          value: subject,
        },
        {
          name: "tema",
          value: message,
        },
        {
          name: "autorizacion_datos_personales",
          value: personalDataNotice,
        },
        {
          name: "autorizacion_aviso_privacidad",
          value: privacyNotice,
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
    name,
    lastName,
    email,
    subject,
    message,
    personalDataNotice,
    privacyNotice,
    formStatus,
    handleName,
    handleLastName,
    handleSubject,
    handleEmail,
    handleMessage,
    handlePersonalDataNotice,
    handlePrivacyNotice,
    handleSubmit,
  };
};

export default useContactaNosotros;
