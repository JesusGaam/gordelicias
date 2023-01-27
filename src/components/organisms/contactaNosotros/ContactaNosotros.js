import React from "react";
import "./ContactaNosotros.scss";
import TextInput from "@/components/molecules/form/textField/TextField";
import EmailField from "@/components/molecules/form/emailField/EmailField";
import TextArea from "@/components/molecules/form/textArea/TextArea";
import Button from "@/components/molecules/form/button/Button";
import useContactaNosotros from "@/hooks/useContactaNosotros";
import Checkbox from "@/components/molecules/form/checkbox/Checkbox";

const ContactaNosotros = () => {
  const {
    name,
    lastName,
    email,
    subject,
    message,
    personalDataNotice,
    privacyNotice,
    formStatus,
    handleSubject,
    handleName,
    handleLastName,
    handleEmail,
    handleMessage,
    handlePersonalDataNotice,
    handlePrivacyNotice,
    handleSubmit,
  } = useContactaNosotros();
  return (
    <section className="container talk-with-us">
      <div>
        <div className="title">CONTACTA CON NOSOTROS</div>
        {[0, 2].indexOf(formStatus) >= 0 && (
          <div className="form">
            <div className="text-form">
              <p>En <font className="gordelicias-font">Gordelicias</font> queremos saber de ti.</p>
              <p>Favor de llenar el formulario siguiente.</p>
            </div>
            <TextInput options={name} handleValue={handleName} />
            <TextInput options={lastName} handleValue={handleLastName} />
            <EmailField options={email} handleValue={handleEmail} />
            <TextInput options={subject} handleValue={handleSubject} />
            <TextArea options={message} handleValue={handleMessage} />
            <Checkbox options={personalDataNotice} handleValue={handlePersonalDataNotice} />
            <Checkbox options={privacyNotice} handleValue={handlePrivacyNotice} />

            <Button
              className="submit"
              options={{
                mode: "secundary",
                value: "Enviar",
              }}
              onClick={async () => await handleSubmit()}
            />
            {formStatus === 2 && (
              <p className="generic-error-form">
                Ha ocurrido un error intenta de nuevo
              </p>
            )}
          </div>
        )}
        {formStatus === 1 && (
          <div className="form">
            <div className="success-title">Gracias por tu mensaje</div>
            <p className="success-text">
              Pronto tendrás noticias sobre nosotros.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
export default ContactaNosotros;
