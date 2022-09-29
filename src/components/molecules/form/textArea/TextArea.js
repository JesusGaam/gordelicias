import React, { useEffect } from "react";
import { getRandomNumber } from "../../../../utils/Utilities";
import Label from "../label/Label";
import HelperText from "../helperText/HelperText";
import "./TextArea.scss";

const TextArea = ({ options, handleValue = (_value, _error) => {} }) => {
  const {
    id = getRandomNumber(10000, 1000000),
    error = false,
    required = false,
    disabled = false,
    label = "",
    defaultValue = "",
    placeholder = "",
    helper,
    defaultHelper,
  } = options;

  useEffect(() => {
    if (defaultValue.length > 0) {
      handleValue(defaultValue);
    }
  }, []);

  const validationEvent = (value) => {
    var error = required && value.length == 0;

    return {
      error,
      message: error ? "Este campo es obligatorio" : "",
    };
  };

  return (
    <div className={`form-element text-area ${disabled ? "disabled" : ""}`}>
      <Label
        options={{
          id,
          required,
          label,
        }}
      />
      <div className="input">
        <textarea
          id={id}
          placeholder={placeholder}
          onInput={(e) =>
            handleValue(e.target.value, validationEvent(e.target.value))
          }
          autoComplete="off"
          defaultValue={defaultValue}
        />
      </div>
      <HelperText
        options={{
          error,
          helperText: helper || defaultHelper,
        }}
      />
    </div>
  );
};

export default TextArea;
