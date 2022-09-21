import { IContacts } from "../../auth";

export interface RegistrationProps {
  list?: IContacts;
}

export interface IModalState {
  description: string;
  title: string;
}
