import React, { useState } from "react";
import { colors, Group, Modal } from "library-caiol.sousa";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { GiPencil } from "react-icons/gi";

import {
  IContacts,
  removeContact,
  removeFavorite,
  saveFavorite,
  saveContact,
} from "../../auth";

import { IModalState } from "../../modules/myProfile/interface";

import { defaultIMG } from "./content";
import { Photo, Img, Title, SubTitle, Personal, Icon, Box } from "./styles";

interface ContactsOrFavoritesProps {
  list: IContacts;
  favorites?: boolean;
}

export const ContactsOrFavorites = ({
  list,
  favorites,
}: ContactsOrFavoritesProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [modal, setModal] = useState<IModalState>({
    title: "Error",
    description:
      "Serviço temporariamente indisponivel, por favor tente novamente mais tarde!",
  });

  const favorite = async () => {
    try {
      if (!favorites) {
        await saveFavorite({
          ...list,
          privado: true,
        });
        await saveContact({ ...list, privado: true });
        setModal({
          title: "Sucess",
          description: "Contato salvo nos favoritos com sucesso.",
        });
      } else {
        await removeFavorite(list.id);
        await saveContact({ ...list, privado: false });
        setModal({
          title: "Sucess",
          description: "Contato removido dos favoritos com sucesso.",
        });
      }
    } catch {
      setModal({
        title: "Error",
        description:
          "Serviço temporariamente indisponivel, por favor tente novamente mais tarde!",
      });
    } finally {
      setIsVisible(true);
    }
  };

  const remove = async () => {
    try {
      await removeContact(list.id);

      setModal({
        title: "Sucess",
        description: "Contato excluido com sucesso.",
      });
    } catch {
      setModal({
        title: "Error",
        description:
          "Serviço temporariamente indisponivel, por favor tente novamente mais tarde!",
      });
    } finally {
      setIsVisible(true);
    }
  };

  const onCancel = () => {
    setIsVisible(false);
    window.location.href = "/";
  };

  return (
    <>
      <Modal
        isVisible={isVisible}
        onClose={() => onCancel()}
        title={modal.title}
        description={modal.description}
      />

      <Group
        gap={[35, 30]}
        pad={[20, 30, 20, 30]}
        direction="column"
        maxW={430}
      >
        <Group gap={[30, 30]} pad={[0, 0, 0, 30]} align="center">
          <Photo>
            <Img src={defaultIMG} alt="imagem-perfil" width={30} height={30} />
          </Photo>
          <Group direction="column" maxW="max-content">
            <Title>{list.pessoa.nome}</Title>
            <SubTitle>Contato</SubTitle>
            <Personal>{list.email || list.telefone}</Personal>
          </Group>
        </Group>
        <Group justify="space-evenly">
          <Icon>
            <GiPencil size={20} className="icon" />
            <Box className="text">Editar</Box>
          </Icon>

          {!favorites ? (
            <>
              <Icon onClick={() => favorite()}>
                <AiOutlineStar
                  size={20}
                  className="icon"
                  color={colors.warning}
                />
                <Box className="text">Favoritar</Box>
              </Icon>

              <Icon onClick={() => remove()}>
                <MdDeleteForever
                  size={20}
                  className="icon"
                  color={colors.error}
                />
                <Box className="text">Excluir</Box>
              </Icon>
            </>
          ) : (
            <Icon onClick={() => favorite()}>
              <AiFillStar size={20} className="icon" color={colors.warning} />
              <Box className="text">Desfavoritar</Box>
            </Icon>
          )}
        </Group>

        <hr />
      </Group>
    </>
  );
};
