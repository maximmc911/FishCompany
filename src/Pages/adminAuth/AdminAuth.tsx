import { useForm } from "react-hook-form";
import FormField from "../../components/UI/formField/FormField";
import { FormData, UsersAuth } from "../../interfaces/validationform";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from 'react-router-dom'
import { useState } from "react";
import BasicModal from "../../components/UI/modal/Modal";
import ModalContent from "./ModalContent";
import { useDispatch } from "react-redux";
import { actions } from "../../routes";
import {CallCenterRoutes} from '../CallCenter/routes/index'
const AdminAuth = () => {
  const [Name, setName] = useState<string>(``)
  const [Status, setStatus] = useState<string>(``)
  //! Пример ввода данных и б.д. сотрудников
  const Example = [
    {
      id:1,
      status: `call-center`,
      email: `callCenter@mail.ru`,
      password: `12345612`
    }
  ]

  
  // constants
  const [Open, setOpen] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(UsersAuth),
  });
  const dispach = useDispatch()
  // functions
  const onSubmit = (data: FormData) => {
    console.log(data); // Вывод введенных данных в инпуте
    if (data.email == Example[0].email) {   //!Добавить получение данных и проверки
    console.log(`проверка прошла`);
    dispach(actions.toggleRoutes(...CallCenterRoutes))
    setName(`Снежана`)
    setStatus(`Менеджер Call Center`)
    setOpen(true)
    }

  };
  return (
    <>
    <pre>
    id:1,
      status: `call-center`,
      mail: `callCenter@mail.ru`,
      password: `12345612`
    </pre>
     <BasicModal open ={Open} >
      <ModalContent name={Name} status={Status}/>
    </BasicModal>
      <h1 className="m-16 text-2xl font-extrabold text-center">Вход для сотрудников</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="relative flex items-center justify-center top-1/2">
        <div className="flex flex-col w-80">
          <FormField
            type="email"
            placeholder="Email"
            name="email"
            register={register}
            error={errors.email}
          />
          <FormField
            type="password"
            placeholder="Введите пароль"
            name="password"
            register={register}
            error={errors.password}
          />

          <button type="submit" className="p-2 text-xl text-white rounded-md bg-slate-500" >
            Войти
          </button>

        </div>
      </form>


      <div className="flex justify-center gap-2 mt-5">

        <h1 className="mt-2 text-xl text-center">Если вы не являетесь сотрудником нашей компании </h1>
        <Link to='/'>
          <h1 className="mt-2 text-xl text-center text-blue-600 underline cursor-pointer">Покиньте страницу </h1>
        </Link>
      </div>


    </>
  )
}

export default AdminAuth