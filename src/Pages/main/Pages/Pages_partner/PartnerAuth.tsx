import { useForm } from "react-hook-form";
import FormField from "../../../../components/UI/formField/FormField";
import { FormData, UsersAuth } from "../../../../interfaces/validationform";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from 'react-router-dom'

const PartnerAuth = () => {
  // constants
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(UsersAuth),
  });

  // functions
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <>
      <h1 className="m-20 text-2xl font-extrabold text-center">Вход для зарегистрированных партнеров</h1>
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

        <h1 className="mt-2 text-xl text-center">Если вы не являетесь партнером нашей компании </h1>
        <Link to='/'>
          <h1 className="mt-2 text-xl text-center text-blue-600 underline cursor-pointer">Покиньте страницу </h1>
        </Link>
      </div>

    </>
  )
}

export default PartnerAuth