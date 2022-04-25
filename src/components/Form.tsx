import React from "react";
import useNewSubForm from "../hooks/useNewSubForm";
import { Sub } from "../types";

interface FromProps {
  onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FromProps) => {
  /*  const [inputValues, setInputValue] =
    useState<FormState["inputValues"]>(INITIAL_STATE); */

  // const [inputValues, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const [inputValues, dispatch] = useNewSubForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(inputValues);
    handleClear();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    /*  setInputValue({
      ...inputValues,
      [e.target.name]: e.target.value,
    }); */
    dispatch({
      type: "change_value",
      payload: {
        inputName: e.target.name,
        inputValue: e.target.value,
      },
    });
  };

  const handleClear = () => {
    // setInputValue(INITIAL_STATE);
    dispatch({ type: "clear_form" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValues.nick}
          onChange={handleChange}
          type="text"
          name="nick"
          placeholder="nick"
        />
        <input
          value={inputValues.subMonths}
          onChange={handleChange}
          type="number"
          name="subMonths"
          placeholder="subMonths"
        />
        <input
          value={inputValues.avatar}
          onChange={handleChange}
          type="text"
          name="avatar"
          placeholder="avatar"
        />
        <textarea
          value={inputValues.description}
          onChange={handleChange}
          name="description"
          placeholder="description"
        />
        <button type="button" onClick={handleClear}>
          Clear the form
        </button>
        <button type="submit">Save a new sub</button>
      </form>
    </div>
  );
};

export default Form;
