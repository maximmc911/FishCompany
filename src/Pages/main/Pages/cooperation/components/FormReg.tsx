import { useForm } from "react-hook-form";
import FormField from "../../../../../components/UI/formField/FormField";
import { FormData, RegistrationEntrepreneur } from "../../../../../interfaces/validationform";
import { zodResolver } from "@hookform/resolvers/zod";


const FormReg = () => {
  // constants

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(RegistrationEntrepreneur),
  });

  // functions

  const onSubmit = (data: FormData) => {
    console.log(data);



  };
  return (
    <div className='flex-col items-center justify-center text-center'>
      <h1 className="text-2xl">Форма для сотрудничества</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-center w-96">

          <FormField
            type="text"
            placeholder="Ваше Ф.И.О"
            name="nameUser"
            register={register}
            error={errors.nameUser}
          />
          <FormField
            type="text"
            placeholder="Ваш номер телефона без кода"
            name="tel"
            register={register}
            error={errors.tel}
          />
          <FormField
            type="email"
            placeholder="Email"
            name="email"
            register={register}
            error={errors.email}
          />
          <FormField
            type="text"
            placeholder="Название организации"
            name="NameOrganization"
            register={register}
            error={errors.NameOrganization}
          />
          <FormField
            type="text"
            placeholder="ОГРН"
            name="OGRN"
            register={register}
            error={errors.OGRN}
          />
          <FormField
            type="text"
            placeholder="ИНН"
            name="INN"
            register={register}
            error={errors.INN}
          />
          <FormField
            type="text"
            placeholder="Фактический адрес организации"
            name="ActualLocation"
            register={register}
            error={errors.ActualLocation}
          />
          <FormField
            type="text"
            placeholder="Юридический адрес организации"
            name="LegalAddress"
            register={register}
            error={errors.LegalAddress}
          />
          <button type="submit" className="p-2 text-xl text-white rounded-md bg-slate-500 w-72" >
            Отправить Заявку
          </button>

        </div>
      </form>

















    </div>
  )
}

export default FormReg