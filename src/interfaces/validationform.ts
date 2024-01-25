import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

// Определение типов данных для форм входа/отправки заказа/обратной связи

  export interface FormData  {
    nameUser?: string;
    tel?: string;
    email?: string;
    adress?: string;
    questions? : string;
    password?: string;
  };

// Валидация для отправки заказов

  export const SubmitOrder: ZodType<FormData> = z
  .object({
    nameUser: z
    .string()
    .min(5, { message: "Минимум 5 символов" }),
    tel: z
      .string()
      .min(10, { message: "Введите номер телефона без кода" }) 
      .max(10, { message: "Введите номер телефона без кода" }), 
    email: z
    .string()
    .email( { message: "введите корректный e-mail" }),
    adress : z
    .string()
    .min(5, { message: "Минимум 5 символов" }),

  });
// Валидация для формы обратной связи
  
  export const SubmitQuestion: ZodType<FormData> = z
  .object({
    nameUser: z
    .string()
    .min(5, { message: "Минимум 5 символов" }),
    tel: z
      .string()
      .min(10, { message: "Введите номер телефона без кода" }) 
      .max(10, { message: "Введите номер телефона без кода" }), 
    email: z
    .string()
    .email( { message: "введите корректный e-mail" }),
    questions: z
    .string()
    .min(5, { message: "Минимум 5 символов" }),

  });

// Передача данных в компонент FormField

  export interface FormFieldProps  {
    type: string;
    placeholder: string;
    name: SEND_ORDER | SEND_FEEDBACK;
    register: UseFormRegister<FormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
  };
  
  // Данные для отправки формы обратной связи
  
  export type SEND_FEEDBACK =
  | "email"
  | "nameUser"
  | "tel"
  | "questions"

 
  // Данные для отправки заказа
  export type SEND_ORDER =
  | "email"
  | "nameUser"
  | "tel"
  | "adress";
 

  //! Черновик удалить
 
 /*  |"githubUrl"
  | "yearsOfExperience"
  | "password"
  | "confirmPassword"; */

  /*       question : z
      .string()
      .min(5, { message: "Минимум 5 символов" }), */
   
   
   
   
   
   
   
 /*    githubUrl: z
      .string()
      .url()
      .includes("github.com", { message: "Invalid GitHub URL" }),
    yearsOfExperience: z
      .number({
        required_error: "required field",
        invalid_type_error: "Years of Experience is required",
      })
      .min(1)
      .max(10),
    password: z
      .string()
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // path of error */
      /*       required_error: "Некорректно введен",
        invalid_type_error: "Некорректно введен", */