import { number, object, string } from 'yup';

export const MAX_BIO_LENGTH = 100;

export const schema = object().shape({
  name: string()
    .max(32, 'Имя должно быть короче 32 символов')
    .matches(
      /^[а-яА-Яa-zA-Z]*$/,
      'Имя не должно содержать спец. символы и цифры'
    )
    .required('Введите Ваше имя'),
  age: number()
    .typeError('Введите Ваш возраст')
    .min(10, 'Возраст должен быть больше 10')
    .max(120, 'Возраст должен быть меньше 120')
    .required('Введите Ваш возраст'),
  bio: string().max(MAX_BIO_LENGTH),
});
