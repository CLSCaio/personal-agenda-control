import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Container, Form, Modal } from "library-caiol.sousa";

import { getCookie, findUser, updateUser, IUser } from "../../auth";
import { Heading } from "../../components";

import validationSchema from "./validations";
import { design, inputs } from "./form";
import { IModalState } from "./interface";

const MyProfile = () => {
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

  const onSubmit = (): void => {
    try {
      setLoading(true);
      updateUser({
        cpf: form.values.cpf,
        dataNascimento: form.values.brithday,
        email: form.values.email,
        password: form.values.password,
        nome: form.values.name,
        telefone: form.values.phone,
        username: form.values.username,
        id: form.values.id,
      });
      setModal({
        title: "Sucesso",
        description: "Dados atualizados com sucesso",
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
      id: 0,
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

    if (cookie?.id) {
      findUser(cookie.id).then((data) => {
        form.setValues({
          id: cookie.id,
          cpf: data.object.usuario.cpf,
          brithday: data.object.usuario.dataNascimento,
          email: data.object.usuario.email,
          name: data.object.usuario.nome,
          phone: data.object.usuario.telefone,
          username: data.object.usuario.username,
          password: "12345678",
        });
      });
    } else {
      window.location.href = "/";
    }
  }, []);

  return (
    <Container gap={[100, 30]} direction="column">
      <Heading title="Meu cadastro" />

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

export default MyProfile;
