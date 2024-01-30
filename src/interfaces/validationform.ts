import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

// Определение типов данных для форм входа/отправки заказа/обратной связи

export interface FormData {
  nameUser?: string;
  tel?: string;
  email?: string;
  adress?: string;
  questions?: string;
  password?: string;
  INN?: string;
  NameOrganization?: string;
  OGRN?: string;
  ActualLocation?: string;
  LegalAddress?: string;
}

// Валидация для отправки заказов

export const SubmitOrder: ZodType<FormData> = z.object({
  nameUser: z.string().min(5, { message: "Минимум 5 символов" }),
  tel: z
    .string()
    .min(10, { message: "Введите номер телефона без кода" })
    .max(10, { message: "Введите номер телефона без кода" }),
  email: z.string().email({ message: "введите корректный e-mail" }),
  adress: z.string().min(5, { message: "Минимум 5 символов" }),
});
// Валидация для формы обратной связи

export const SubmitQuestion: ZodType<FormData> = z.object({
  nameUser: z.string().min(5, { message: "Минимум 5 символов" }),
  tel: z
    .string()
    .min(10, { message: "Введите номер телефона без кода" })
    .max(10, { message: "Введите номер телефона без кода" }),
  email: z.string().email({ message: "введите корректный e-mail" }),
  questions: z.string().min(5, { message: "Минимум 5 символов" }),
});

// Валидация для заявки на регистрацию предпринимателя

export const RegistrationEntrepreneur: ZodType<FormData> = z.object({
  nameUser: z.string().min(5, { message: "Минимум 5 символов" }),
  tel: z
    .string()
    .min(10, { message: "Введите номер телефона без кода" })
    .max(10, { message: "Введите номер телефона без кода" }),
  email: z.string().email({ message: "введите корректный e-mail" }),
  INN: z.string().min(5, { message: "Минимум 5 символов" }),
  NameOrganization: z.string().min(5, { message: "Минимум 5 символов" }),
  OGRN: z.string().min(5, { message: "Минимум 5 символов" }),
  ActualLocation: z.string().min(5, { message: "Минимум 5 символов" }),
  LegalAddress: z.string().min(5, { message: "Минимум 5 символов" }),
});

// Валидация для входа сотрудников и партнеров

export const UsersAuth: ZodType<FormData> = z.object({
  email: z.string().email({ message: "введите корректный e-mail" }),
  password: z
    .string()
    .min(8, { message: "Пароль некорректный" })
    .max(25, { message: "Пароль некорректный" }),
});

// Передача данных в компонент FormField

export interface FormFieldProps {
  type: string;
  placeholder: string;
  name: SEND_ORDER | SEND_FEEDBACK | REGISTRATION_ENTREPRENEUR | PUT_USER;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
}

// Получение данных для отправки формы обратной связи

export type SEND_FEEDBACK = "email" | "nameUser" | "tel" | "questions";

// Получение данных для отправки заказа
export type SEND_ORDER = "email" | "nameUser" | "tel" | "adress";

// Получение данных для входа пользователей
export type PUT_USER = "email" | "password";

// Получение данных для регистрации предпринимателя

export type REGISTRATION_ENTREPRENEUR =
  | "nameUser"
  | "tel"
  | "email"
  | "INN"
  | "NameOrganization"
  | "OGRN"
  | "ActualLocation"
  | "LegalAddress";

