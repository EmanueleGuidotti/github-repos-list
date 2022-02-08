import { Input } from "antd";
import React from "react";
import { GenericInput } from "../../Interfaces/interfaces";

/**
 * Render an input text component
 *
 * @prop {string} id - The id to identify the input
 * @prop {string} placeholder - The placeholder text
 * @prop {Function} onKeyUpFunction - The function event to trigger on keyup
 * @prop {JSX.Element} prefix - The icon to show before the text
 *
 * @returns {JSX.Element}
 */
const InputComponent = ({
  id,
  placeholder,
  onKeyUpFunction,
  prefix,
}: GenericInput) => {
  return (
    <Input
      id={id}
      placeholder={placeholder}
      onKeyUp={(event: React.FormEvent<HTMLInputElement>) =>
        onKeyUpFunction(event)
      }
      prefix={prefix}
    />
  );
};

export default InputComponent;
