import React, { useEffect, useState } from "react";

import { Form } from "library-caiol.sousa";
import { useFormik } from "formik";
import { Heading, ContactsOrFavorites } from "../../components";
import {
  getCookie,
  IContacts,
  listContacts,
  searchContact,
  searchFavorite,
} from "../../auth";

import { Box } from "./styles";

export const Home = () => {
  const { username, id } = getCookie();

  const [contacts, setContacts] = useState<IContacts[]>([]);
  const [favotites, setFavorites] = useState<IContacts[]>();

  const onSubmit = (): void => console.log(form.values);

  const form = useFormik({
    initialValues: {
      search: "",
    },

    onSubmit,
  });

  useEffect(() => {
    if (id) {
      listContacts(id).then((list) => {
        setContacts(list);
      });

      searchFavorite().then((list) => {
        setFavorites(list);
      });
    } else {
      window.location.href = "/";
    }
  }, []);

  const filterRepo: IContacts[] =
    form.values.search.length > 0
      ? contacts.filter(({ pessoa, telefone, email }) => {
          const formSeach = form.values.search.toLocaleLowerCase();

          const search =
            pessoa?.nome?.toLocaleLowerCase().includes(formSeach) ||
            telefone?.includes(formSeach) ||
            email?.includes(formSeach);

          return search;
        })
      : contacts;

  return (
    <>
      <Heading
        title={`Seja bem vindo ${username}`}
        subtitle="aqui você pode ver e editar todos os seus contatos e favoritos"
      />

      <Form
        form={form}
        inputs={[
          {
            name: "search",
            label: { name: "Procurar Contato" },
            placeholder: "Pesquise por nome, telefone, e-mail",
          },
        ]}
        button={{ label: "Pesquisar" }}
      />

      <Box>
        <Heading title="Contatos" />
        {filterRepo &&
          filterRepo.map(
            (list) =>
              !list.privado && <ContactsOrFavorites list={list} key={list.id} />
          )}
      </Box>

      <Box>
        <Heading title="Favoritos" />
        {favotites &&
          favotites.map((list) => (
            <ContactsOrFavorites list={list} favorites key={list.id} />
          ))}
      </Box>
    </>
  );
};
