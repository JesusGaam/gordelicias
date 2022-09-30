import React from "react";
import "./PlaticaNosotros.scss";
import TextInput from "@/components/molecules/form/textField/TextField";
import EmailField from "@/components/molecules/form/emailField/EmailField";
import PhoneField from "@/components/molecules/form/phoneField/PhoneField";
import TextArea from "@/components/molecules/form/textArea/TextArea";
import Select from "@/components/molecules/form/select/Select";
import Button from "@/components/molecules/form/button/Button";
import usePlaticaNosotros from "@/hooks/usePlaticaNosotros";

const PlaticaNosotros = () => {
  const {
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
  } = usePlaticaNosotros();
  return (
    <section className="container talk-with-us">
      <div>
        <div className="scritp-text shadow-mint">Platica con nosotros</div>
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
            onClick={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
};
export default PlaticaNosotros;
