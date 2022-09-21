import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Container, Form, Modal } from "library-caiol.sousa";

import { getCookie, saveUser } from "../../auth";
import { Heading } from "../../components";

import validationSchema from "./validations";
import { IModalState } from "./interface";
import { design, inputs } from "./form";

export const Users = () => {
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modal, setModal] = useState<IModalState>({
    title: "Error",
    description:
      "Occoreu um erro na solicitação, por favor tente novamente mais tarde!",
  });

  const onCancel = () => {
    setIsVisible(false);
    window.location.href = "/";
  };

  const onSubmit = async () => {
    try {
      setLoading(true);

      saveUser({
        tipos: ["user"],
        usuario: {
          cpf: form.values.cpf,
          dataNascimento: form.values.brithday,
          email: form.values.email,
          id: 0,
          nome: form.values.name,
          password: form.values.password,
          telefone: form.values.phone,
          username: form.values.username,
        },
      });

      setModal({
        title: "Sucesso",
        description: "Dados de usuario salvos com sucesso",
      });
    } catch (error: any) {
      setModal({
        title: "Error",
        description:
          "Occoreu um erro na solicitação, por favor tente novamente mais tarde!",
      });
      return error;
    } finally {
      setIsVisible(true);
      setLoading(false);
    }
  };

  const form = useFormik({
    initialValues: {
      cpf: "",
      brithday: "",
      email: "",
      name: "",
      password: "",
      phone: "",
      username: "",
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit,
  });

  useEffect(() => {
    const cookie = getCookie();
    if (!cookie?.id) window.location.href = "/";
  }, []);

  return (
    <Container gap={[100, 30]} direction="column">
      <Heading title="Selecione um usuario da lista ou crie um novo." />

      <Modal
        isVisible={isVisible}
        onClose={() => onCancel()}
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
        }}
      />
    </Container>
  );
};
