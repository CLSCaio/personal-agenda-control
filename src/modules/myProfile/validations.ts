import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().min(2, "Insira um nome válido.").nullable().notRequired(),
  username: yup
    .string()
    .min(2, "Insira um usuario válido.")
    .nullable()
    .notRequired(),
  email: yup
    .string()
    .email("Insira um e-mail válido.")
    .min(3, "Insira um e-mail válido.")
    .nullable()
    .notRequired(),
  cpf: yup.string().min(14, "Insira um cpf válido.").nullable().notRequired(),
  phone: yup
    .string()
    .min(14, "Insira um telefone válido.")
    .nullable()
    .notRequired(),
  password: yup
    .string()
    .min(8, "Insira uma senha válida.")
    .nullable()
    .notRequired(),
});
