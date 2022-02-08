import InputComponent from "../../AtomicComponents/InputComponent";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import { Input } from "../../Interfaces/interfaces";

/**
 * Render a search bar component
 *
 * @prop {Function} search - The search function event
 * @prop {string} id - The id to identify the search bar
 *
 * @returns {JSX.Element}
 */
const SearchComponent = ({ search, id }: Input) => {
  const onKeyUp = (event: React.FormEvent<HTMLInputElement>) => {
    search(event.currentTarget.value);
  };
  return (
    <InputComponent
      id={id}
      placeholder={"Search"}
      onKeyUpFunction={(event: React.FormEvent<HTMLInputElement>) =>
        onKeyUp(event)
      }
      prefix={<SearchOutlined />}
    />
  );
};

export default SearchComponent;
