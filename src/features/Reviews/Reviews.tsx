import React from "react";
import S from "./Reviews.module.css";
import { Form } from "./components/Form/Form";

export const Reviews = () => {
  return (
    <div className={S.reviewsContainer}>
      <Form />
    </div>
  );
};
