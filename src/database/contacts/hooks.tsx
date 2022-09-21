import { useCallback, useMemo, useState } from "react";

import Store from "./store";
import { ActionsProps, IContacts } from "./interface";

export const StoreContactProvider = ({ children }: ActionsProps) => {
  const [storeContact, setStoreContact] = useState<IContacts | undefined>(
    undefined
  );

  const resetContact = useCallback(() => setStoreContact(undefined), []);
  const saveContact = useCallback(
    (payload: IContacts) => setStoreContact(payload),
    []
  );
  const value = useMemo(
    () => ({ storeContact, saveContact, resetContact }),
    [storeContact, saveContact, resetContact]
  );

  return <Store.Provider value={value}>{children}</Store.Provider>;
};
