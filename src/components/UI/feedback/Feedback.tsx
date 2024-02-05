import { RiFeedbackLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import s from './index.module.css'
import { useState } from "react";
import { Button } from "../Button/Button";
import RandomGenerator from "../../randomGenerator/RandomGenerator";

import FormField from "../../../components/UI/formField/FormField";
import { FormData, SubmitQuestion } from "../../../interfaces/validationform";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Icons from "../icons/Icons";

const Feedback = () => {
  // constants
  const [Open, setOpen] = useState<boolean>(false)
  const [OpenChapcha, setOpenChapcha] = useState<boolean>(false)

  const [Questions, setQuestions] = useState<FormData>({
    nameUser: ``,
    tel: ``,
    email: ``,
    questions: ``,
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(SubmitQuestion),
  });




  // functions
  const HandleCheck = (): void => {
    setOpen(!Open)
  }



  const onSubmit = (data: FormData) => {
    Questions.nameUser = data.nameUser,
      Questions.tel = data.tel,
      Questions.email = data.email,
      Questions.questions = data.questions,
      setOpenChapcha(true);
  };

  const HandleCheckCapcha = (): void => {
    console.log(Questions);
    setOpenChapcha(false);
    setOpen(!Open);

  }

  return (
    <>

      <div className={Open ? s.label_close : s.label} onClick={HandleCheck}>
        <Icons props={`диалог`}/>
      </div>
      <div >

        <div className="fixed z-10 top-12 left-1/2 ">
          <div className={!Open ? s.window_close : s.window}>
            <div className="flex justify-between pb-2 ">
              <h3 className="text-xl font-semibold ">Обратная связь</h3>
              <div className="cursor-pointer" onClick={HandleCheck} >
                <Icons props={`закрыть`}/>
              </div>
            </div>
            {!OpenChapcha ? <div className="">

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid col-auto">
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
                    placeholder="Напишите ваш вопрос"
                    name="questions"
                    register={register}
                    error={errors.questions}
                  />
                  <button type="submit" className="p-2 text-xl text-white rounded-md bg-slate-500 "  >
                    Отправить
                  </button>

                </div>

              </form>

            </div>
              :
              <div className="flex justify-center m-5">

                <RandomGenerator>
                  <div className="" onClick={() => HandleCheckCapcha()}>
                    <Button nameBTN={`Отправить`} />
                  </div>
                </RandomGenerator>
              </div>
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default Feedback