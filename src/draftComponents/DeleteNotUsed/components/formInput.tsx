//! Example or bad code
/* import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Controller } from "react-hook-form";
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string,
  tel: string,
  email: string,
  message: string,
  nameRequired: string,
  telRequired: string,
  emailRequired: string,
  messageRequired: string,
  nameRequired: string,
  example: string
exampleRequired: string,
} */
/*! example

      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
/*       <form onSubmit={handleSubmit(onSubmit)}> */
 /*      {/* register your input into the hook by invoking the "register" function }*/
   /*    <input defaultValue="test" {...register("example")} /> */

     /*  {/* include validation with required or other standard HTML validation rules }*/
/*       <input {...register("exampleRequired", { required: true })} /> */
      /*{ errors will return when field validation fails  }*/ 
/*       {errors.exampleRequired && <span>This field is required</span>} 

    </form>
*/
     
/* const FormInput = ({children}) => {
  const [data, setData] = useState("");
 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
 
  const onSubmit = (data) => { 
    setData(data)
    data.name = null;

   
    
 
   
 }

 console.log(data); */
 
  /* console.log(watch("example")) */ // watch input value by passing the name of it

/* 
  return (
    <>
       <div className="flex flex-col items-center gap-2">
       
    <TextField
    className="w-5/6 bg-green-300"
    {...register("name", { required: true })}
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Ваше имя"
          multiline
          
          />
          {errors.nameRequired && <span>This field is required</span>}

    <TextField
    className="w-5/6 bg-green-300"
    {...register("email", { required: true })}
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Почта, прим. example@mail.ru"
          multiline
          
          />
          {errors.emailRequired && <span>This field is required</span>}

    <TextField
    className="w-5/6 bg-green-300"
    {...register("tel", { required: true })}
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Тел. +7999999999"
          type='number'
          multiline
          
          />
          {errors.telRequired && <span>This field is required</span>} */
      {/*     <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    > */}

    /*       <TextField
             className="w-5/6 bg-green-300"
             {...register("message", { required: true })}
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={5}
          size='medium'
          placeholder='Введите ваш вопрос или опишите предложение'
          defaultValue="Default Value"
        /> */
      {/*       </Box> */}
 /*          {errors.messageRequired && <span>This field is required</span>}
          <form onSubmit={handleSubmit(onSubmit)}>     
      
          {children}
</form>
      </div>
    </>
  )
} */

/* export default FormInput */