import { useForm } from "react-hook-form";
import FormField from "../../../../components/UI/formField/FormField";
import { FormData, SubmitOrder } from "../../../../interfaces/validationform";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from 'react-router-dom'
import { Button } from '../../../../components/UI/Button/Button'


const Shopping = () => {
  // constants
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(SubmitOrder),
  });

  // functions
  const onSubmit = (data: FormData) => {
    console.log(data);
    HandleSentCheck()
  };


  const HandleSentCheck = (): void => {
    window.open(`${window.location.origin}/printCheck`)
  }

  return (
    <>
      <div className="flex justify-center">

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid col-auto">
            <h1 className="mb-4 text-3xl font-bold">Оформление заказа</h1>
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
            <p className="font-medium text-center">*При самовывозе, укажите "самовывоз"</p>
            <FormField
              type="text"
              placeholder="Введите полный ваш адрес"
              name="adress"
              register={register}
              error={errors.adress}
            />
            <p className="p-2 font-medium text-center">
              * Стоимость доставки рассчитывается <br /> индвидуально. После 18:00 заявки будут<br />обработаны в ближайший рабочий день
            </p>
            <button type="submit" className="p-2 text-xl text-white rounded-md bg-slate-500" >
              Отправить заказ
            </button>

          </div>
        </form>
      </div>
      <div className="flex justify-end gap-5">
        <Link to='/basket'>
          <Button nameBTN={`Назад`} />
        </Link>
      </div>
    </>
  )
}
export default Shopping