import React, { useReducer } from "react";
import S from "./Form.module.css";
import { formReducer, initialState } from "./hooks/formReducer";
import type { FormState } from "./types";
import { Counter } from "../../../../components/Counter/Counter";

export const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleInputChange =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: "SET_FIELD",
        field,
        value: event.target.value,
      });
    };

  const handleReset = () => {
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <div className={S.formContainer}>
      <form className={S.form}>
        <label>Имя</label>
        <input
          onChange={handleInputChange("name")}
          className={S.nameInput}
          type="text"
          value={state.name}
        />
        <label>Обзор</label>
        <input
          onChange={handleInputChange("review")}
          className={S.reviewInput}
          type="text"
          value={state.review}
        />
      </form>
      <button className={S.button} onClick={handleReset}>
        Очистить
      </button>
      <Counter className={S.counter} />
    </div>
  );
};
