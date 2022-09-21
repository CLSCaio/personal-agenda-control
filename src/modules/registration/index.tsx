import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Container, Form, Modal } from "library-caiol.sousa";

import { useStoreContact } from "../../database";
import { getCookie, saveContact } from "../../auth";
import { Heading } from "../../components";

import validationSchema from "./validations";
import { IModalState } from "./interface";
import { design, inputs } from "./form";

export const Registration = () => {
  const { storeContact } = useStoreContact();
  const cookie = getCookie();
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
      if (storeContact) {
        await saveContact({
          ...storeContact,
          email: form.values.email,
          telefone: form.values.phone,
          pessoa: {
            ...storeContact?.pessoa,
            nome: form.values.name,
          },
        });
      }

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
      name: storeContact?.pessoa.nome || "",
      email: storeContact?.email || "",
      phone: storeContact?.telefone || "",
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit,
  });

  useEffect(() => {
    if (!cookie?.id) window.location.href = "/";
  }, [cookie?.id]);

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
