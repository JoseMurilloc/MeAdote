import * as Yup from 'yup';

export interface FormValues {
  email: string;
}

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup
    .string()
    .email('Formato inválido para email')
    .required('Campo obrigatório'),
});

