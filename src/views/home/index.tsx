import React, { useEffect, useState } from "react";

import { Heading, ContactsOrFavorites } from "../../components";
import { getCookie, IContacts, searchFavorite } from "../../auth";
import { Contacts } from "../../modules";

import { Box } from "./styles";

export const Home = () => {
  const { username, id } = getCookie();

  const [favotites, setFavorites] = useState<IContacts[]>();

  useEffect(() => {
    if (id) {
      searchFavorite().then((list) => {
        setFavorites(list);
      });
    } else {
      window.location.href = "/";
    }
  }, [id]);

  return (
    <>
      <Heading
        title={`Seja bem vindo ${username}`}
        subtitle="aqui você pode ver e editar todos os seus contatos e favoritos"
      />

      <Contacts title="Contatos" />

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
