import { useContext } from "react";
import Store from "./store";

export const useStoreContact = () => {
  const context = useContext(Store);
  if (!context)
    throw new Error("useMenuContext must be used within a MenuProvider");
  const { storeContact, saveContact, resetContact } = context;
  return {
    storeContact,
    saveContact,
    resetContact,
  };
};
