import React, { useState, useEffect } from "react";
import { FormikProvider, useFormik } from "formik";
import { Container, Input, Link } from "library-caiol.sousa";

import { getCookie, IContacts, listContacts } from "../../auth";
import { ContactsOrFavorites, Heading } from "../../components";
import { useStoreContact } from "../../database";

import { defaultPayload } from "./content";
import { Box, Form } from "./styles";

export const Contacts = ({ title = "Lista de Contatos" }) => {
  const { saveContact } = useStoreContact();

  const [contacts, setContacts] = useState<IContacts[]>([]);

  const form = useFormik({
    initialValues: {
      search: "",
    },

    onSubmit: () => console.log(""),
  });

  useEffect(() => {
    const { id } = getCookie();
    listContacts(id).then((list) => {
      setContacts(list);
    });
  }, []);

  const filterRepo: IContacts[] =
    form.values.search.length > 0
      ? contacts.filter(({ pessoa, telefone, email }) => {
          const formSeach = form.values.search.toLocaleLowerCase();

          const search: boolean =
            pessoa?.nome?.toLocaleLowerCase().includes(formSeach) ||
            telefone?.includes(formSeach) ||
            email?.includes(formSeach);

          return search;
        })
      : contacts;

  return (
    <Container gap={[30, 30]} direction="column">
      <Heading title={title} />

      <FormikProvider value={form}>
        <Form>
          <Input
            name="search"
            label={{ name: "Procurar contato" }}
            placeholder="Pesquisar por nome, telefone ou e-mail"
          />
        </Form>
      </FormikProvider>

      <Box>
        {filterRepo &&
          filterRepo.map(
            (list) =>
              !list.privado && <ContactsOrFavorites list={list} key={list.id} />
          )}
      </Box>
      <Link
        type="next"
        href={{ defautlLink: "/registration" }}
        label="Criar um novo contato"
        variant="underline"
        onClick={() =>
          saveContact({
            ...defaultPayload,
            usuario: contacts[0].usuario,
          })
        }
      />
    </Container>
  );
};
