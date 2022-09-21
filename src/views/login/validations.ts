import * as yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .min(2, "Insira seu usuario corretamente.")
    .nullable()
    .notRequired(),
  password: yup
    .string()
    .min(8, "Insira sua senha corretamente.")
    .nullable()
    .notRequired(),
});
