import React from "react";
import "./ContactaNosotros.scss";
import TextInput from "@/components/molecules/form/textField/TextField";
import EmailField from "@/components/molecules/form/emailField/EmailField";
import PhoneField from "@/components/molecules/form/phoneField/PhoneField";
import TextArea from "@/components/molecules/form/textArea/TextArea";
import Select from "@/components/molecules/form/select/Select";
import Button from "@/components/molecules/form/button/Button";
import useContactaNosotros from "@/hooks/useContactaNosotros";

const ContactaNosotros = () => {
  const {
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
  } = useContactaNosotros();
  return (
    <section className="container talk-with-us">
      <div>
        <div className="title">CONTACTA CON NOSOTROS</div>
        {[0, 2].indexOf(formStatus) >= 0 && (
          <div className="form">
            <div className="text-form">
              <p>En Gordelicias queremos saber de ti.</p>
              <p>Favor de llenar el formulario siguiente.</p>
            </div>
            <Select options={subject} handleValue={handleSubject} />
            <TextInput options={name} handleValue={handleName} />
            <EmailField options={email} handleValue={handleEmail} />
            <PhoneField options={phone} handleValue={handlePhone} />

            {category.show && (
              <Select options={category} handleValue={handleCategory} />
            )}
            <TextArea options={message} handleValue={handleMessage} />
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
