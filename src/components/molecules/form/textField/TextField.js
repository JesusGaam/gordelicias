import React, { useEffect } from "react";
import { getRandomNumber } from "../../../../utils/Utilities";
import Label from "../label/Label";
import HelperText from "../helperText/HelperText";
import "./TextField.scss";

const TextInput = ({ options, handleValue = (_value, _error) => {} }) => {
  const {
    id = getRandomNumber(10000, 1000000),
    error = false,
    required = false,
    disabled = false,
    label = "",
    value = "",
    placeholder = "",
    helper,
    defaultHelper,
  } = options;

  useEffect(() => {
    if (value.length > 0) {
      handleValue(value);
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
    <div className={`form-element text ${disabled ? "disabled" : ""}`}>
      <Label
        options={{
          id,
          required,
          label,
        }}
      />
      <div className="input">
        <input
          id={id}
          type="text"
          value={value}
          placeholder={placeholder}
          onInput={(e) =>
            handleValue(e.target.value, validationEvent(e.target.value))
          }
          autoComplete="off"
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

export default TextInput;
