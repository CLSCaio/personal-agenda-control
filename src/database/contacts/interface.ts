import { ReactNode } from "react";
import { IContacts } from "../../auth";

export type { IContacts };

export interface storeProps {
  storeContact?: IContacts;
  saveContact: (payload: IContacts) => void;
  resetContact: () => void;
}

export interface ActionsProps {
  children: ReactNode;
}
