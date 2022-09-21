import React, { useState } from "react";
import { useFormik } from "formik";
import { Form, Modal } from "library-caiol.sousa";

import { authLogin, setCookie } from "../../auth";
import { modal } from "./content";
import { Heading } from "../../components";

import { design, inputs } from "./form";
import validationSchema from "./validations";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async () => {
    try {
      setLoading(true);
      const payload = {
        ...form.values,
      };

      const login = await authLogin(payload);
      setCookie(login);
      window.location.href = "/";
    } catch (error) {
      setIsVisible(true);
    } finally {
      setLoading(false);
    }
  };

  const form = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit,
  });

  return (
    <>
      <Heading title="Entre com a sua conta para acessar o site." />

      <Modal
        isVisible={isVisible}
        onClose={setIsVisible}
        title={modal.title}
        description={modal.description}
      />

      <Form
        form={form}
        inputs={inputs}
        design={design}
        button={{
          label: "Enviar",
          isLoading: loading,
          disabled: !form.values.password || !form.values.username,
        }}
      />
    </>
  );
};
