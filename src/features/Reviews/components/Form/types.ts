export type FormState = {
  name: string;
  review: string;
};

export type FormAction =
  | { type: "SET_FIELD"; field: keyof FormState; value: string }
  | { type: "RESET_FORM" };
