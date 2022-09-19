import React from "react";
import { useFormik } from "formik";
import { Form } from "library-caiol.sousa";

import { design, inputs } from "./form";

export const Home = () => {
  const onSubmit = (): void => {
    console.log(form.values);
  };

  const form = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    onSubmit,
  });

  return (
    <Form
      form={form}
      inputs={inputs}
      design={design}
      button={{ label: "Enviar" }}
    />
  );
};
